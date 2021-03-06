const Discord = require("discord.js");
const Base = require("../../Base/Command");
const mcpeping = require("mcpeping")
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

    
    mcpeping(config.Server.ip, config.Server.port, function(err, res) {
      if (err) {
          message.channel.send("Sunucudan bilgi alınamadı.");
          console.log(err);
      } else {
          message.channel.send(`Oyuncu Sayısı : ${res.currentPlayers}/${res.maxPlayers}`);
      }
  });
}
}
module.exports = KomutAdı;