const Discord = require("discord.js");
const Base = require("../../Base/Command");
const config = require('../../../config.json');
const db = require("quick.db")

 class KomutAdı extends Base {
  constructor(client) {
    super(client, {
      Commands: ["ban"],
      Description: "Oyuncuların yasaklamasını bota geçir.",
      Usage: ".ban oyuncu sebep",
      Enabled: true,
      DevOnly: false,
      GuildOnly: true,
      Category: "Mcpe" 
    });
  }
  
  async Execute(client, message, args, config) {

    let member = args[0]
    let reason = args.slice(1).join(" ")

    if (!message.member.roles.cache.has(`${config.Bot.moderator}`)) return message.channel.send("Bu komutu kullanmak için gerekli yetkiye sahip değilsin.")

   if (!member) return message.channel.send("Oyuncu belirtmedin, doğru kullanım : .ban oyuncu sebep")
   if (!reason) return message.channel.send("Sebep belirtmedin, doğru kullanım : .ban oyuncu sebep")

    const msg = new Discord.MessageEmbed()
    .setAuthor("Banlandı !", client.user.avatarURL())
    .setDescription(`Kullanıcının banı başarıyla kaydedildi.\n\nBanlanan : ${member}\nSebebi : ${reason}`)
      
    await db.push(`bans.${member}`, reason)
    await db.push(`banmod.${member}`, message.author.id)
    return message.channel.send(msg);
}
}
module.exports = KomutAdı;
