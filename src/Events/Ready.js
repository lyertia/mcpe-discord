const Base = require("../Base/Event")
const mcpeping = require("mcpeping")
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
        mcpeping(config.Server.ip, config.Server.port, function(err, res) {
            if (err) {
                console.log("Sunucudan bilgi alınamadı.");
                console.log(err);
            } else {
          Client.user.setPresence({ activity: { name: `${res.currentPlayers} kişi ${config.Server.name}` }, status: 'dnd' });
                    }
        });
    }
}

module.exports = Ready;