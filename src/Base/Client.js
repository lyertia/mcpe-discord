const { Client, Collection } = require("discord.js"),
    { readdirSync } = require('fs'),
    Path = require('path'),
    Commands = new Collection(),
    Pogger = require('pogger');
	
class CustomClient extends Client {
    constructor(options) {
        super({ fetchAllMembers: true });
        this.Config = (global.Config = require('../../config.json'));
        this.Commands = (global.Command = new Collection());
    }

    login(token) {
        super.login(token);
        return this;
    }

    loadCommands() {
        readdirSync(Path.join(__dirname, '..', 'Commands'), { encoding: 'utf-8' }).sort().forEach((dir) => {
            readdirSync(Path.join(__dirname, '..', 'Commands', dir), { encoding: 'utf-8' }).sort().forEach((file) => {
            let command = new(require(`../Commands/${dir}/${file}`))(this);
            if (!command || !command.Commands || (command.Commands && !command.Commands.length) || !command.Execute || typeof(command.Execute) !== "function") return Pogger.error(`[KOMUT-IŞLEYICI] ${file} komutu yüklenirken bir hata oluştu.`);
            command.Commands.forEach(name => this.Commands.set(name, command));
            Pogger.info(`[KOMUT-IŞLEYICI] ${command.Commands[0].charAt(0).toUpperCase() + command.Commands[0].slice(1)} komutu başarıyla yüklendi.`);  
            });
        });
        return this;
    }

    loadEvents() {
        readdirSync(Path.join(__dirname, '..', 'Events'), { encoding: 'utf-8' }).sort().filter(file => file.endsWith('js')).forEach((file) => {
            let event = new(require(`../Events/${file}`))(this);
            if (!event || !event.Name || !event.Execute || typeof(event.Execute) !== "function") return Pogger.error(`[EVENT-IŞLEYICI] ${file} eventi yüklenirken bir hata oluştu.`);
            super.on(event.Name, event.Execute)
            Pogger.info(`[EVENT-IŞLEYICI] ${event.Name.charAt(0).toUpperCase() + event.Name.slice(1)} eventi başarıyla yüklendi.`);  
        });
        return this; 
    }
}


module.exports = CustomClient;