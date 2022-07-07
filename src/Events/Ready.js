const Base = require("../Base/Event")
const Gamedig = require('gamedig');
const config = require('../../config.json'),


    { Client } = global;

class Ready extends Base {
    constructor(client) {
        super({ 
            Name: "ready"
        });
    }
    async Execute() {
        console.log(`${Client.user.tag} başarıyla giriş yaptı!`);
        setInterval(() => {
            Gamedig.query({
                type: 'minecraftpe',
                host: config.Server.ip,
                port: config.Server.port,
            }).then((res) => {
              Client.user.setPresence({ activity: { name: `${res.players.length} kişi ${config.Server.name}` }, status: 'dnd' });
            },config.Bot.statusDelay*1000)
    },config.Bot.statusDelay*1000)
    }
}

module.exports = Ready;