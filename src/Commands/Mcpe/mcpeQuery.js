const Discord = require("discord.js");
const Base = require("../../Base/Command");
const Gamedig = require('gamedig');
const config = require('../../../config.json');

 class KomutAdı extends Base {
  constructor(client) {
    super(client, {
      Commands: ["sunucu", "sunucubilgi"],
      Description: "Sunucu bilgisini verir.",
      Usage: ".sunucu",
      Enabled: true,
      DevOnly: false,
      GuildOnly: true,
      Category: "Mcpe" 
    });
  }
  
  async Execute(client, message, args, config) {

    
    Gamedig.query({
      type: 'minecraftpe',
      host: config.Server.ip,
      port: config.Server.port,
  }).then((res) => {
          message.channel.send(`Oyuncu Sayısı : ${res.players.length}/${res.maxplayers}`);
        }).catch((error) => {
          console.log("Sunucudan bilgi alınamadı.");
          console.log(error)
      });
      
}
}
module.exports = KomutAdı;