const Discord = require("discord.js");
const Base = require("../../Base/Command");
const db = require("quick.db")

 class KomutAdı extends Base {
  constructor(client) {
    super(client, {
      Commands: ["bansorgu", "ban?"],
      Description: "Oyuncuların yasaklamasını sorgula",
      Usage: ".ban? oyuncu adı",
      Enabled: true,
      DevOnly: false,
      GuildOnly: true,
      Category: "Mcpe" 
    });
  }
  
  async Execute(client, message, args, config) {

    let member = args[0]
    let reason = args.slice(1).join(" ")
    let banreason = await db.get(`bans.${member}`)
    let banmod = await db.get(`banmod.${member}`)

    try {
      const mapped = banreason.map((value, index) => `${value}\n`)  

      if (!member) return message.channel.send("Oyuncu belirtmedin, doğru kullanım : .ban oyuncu sebep")
      
      const msg = new Discord.MessageEmbed()
      .setAuthor("Sorgulandı !", client.user.avatarURL())
      .setDescription(`Banlanan : ${member}\nSebebi : ${mapped}\n`)

      return message.channel.send(msg);

  } catch(e) {
      message.channel.send("İsmini yazmış olduğun oyuncunun ban kayıdı yok.");

  }
}
 }
module.exports = KomutAdı;