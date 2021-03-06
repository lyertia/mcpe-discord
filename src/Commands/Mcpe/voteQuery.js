const Discord = require("discord.js");
const Base = require("../../Base/Command");
const config = require('../../../config.json');
const fetch = require("node-fetch")

 class KomutAdı extends Base {
  constructor(client) {
    super(client, {
      Commands: ["oysorgu", "oy?"],
      Description: "Oyuncunun oy verip vermediğini söyler.",
      Usage: "..oysorgu <OyuncuAdı>",
      Enabled: true,
      DevOnly: false,
      GuildOnly: true,
      Category: "Mcpe" 
    });
  }
  
  async Execute(client, message, args, config) {

    //BU SİSTEMİ HENÜZ DENEYEMEDİM BİR SORUNLA KARŞILAŞIR İSENİZ ULAŞIN BANA ( LYERTİA )

    if(!args[0]) return message.channel.send("Sorgulamak istediğin kişinin minecraftdaki ismini yazmalısın örnek .oysorgu Ly3rtia")
    fetch(`https://minecraftpocket-servers.com/api/?object=votes&element=claim&key=${config.Server.apikey}&username=${args[0]}`).then(res => res.text()).then(body => {
     let oy = ""
      if(1 < body) { oy = `${args[0]} kişisi sunucumuza oy vermiş.` } else { oy = `${args[0]} kişisi sunucumuza oy vermemiş.`};
      if(body === 1) oy = `${args[0]} kişisi sunucumuza oy vermemiş.`
      
       const oyembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${config.Server.name}`)
    .addField(`OySorgu`,`${oy}`)
    .setTimestamp()
    
     message.channel.send(oyembed)

});
}
}
module.exports = KomutAdı;