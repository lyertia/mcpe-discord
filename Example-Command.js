const Base = require("../../Base/Command");

 class Komut_Adi extends Base {
  constructor(client) {
    super(client, {
      Commands: ["Komut Adı"],
      Description: "Komut Açıklaması",
      Usage: "Komut kullanımı",
      Enabled: true, // Komut aktif olsun istiyorsanız "true" istemiyorsanız "false".
      DevOnly: false, // Komut sadece geliştiricilere özel olsun istiyorsanız "true" istemiyorsanız "false".
      GuildOnly: true, // Komut sadece sunucularda aktif olsun istiyorsanız "true" istemiyorsanız "false".
      Category: "Komut Kategorisi" 
    });
  }
  
  async Execute(client, message, params, config) {
    /*
    * NOT: Params args ile aynı mantıkta hiç bir farkı yok sadece adı değişik isterseniz yukarıdan tanımlamasını değiştirebilirsiniz size kalmış.
    * Komut içeriğini bu kısma girebilirsiniz.
    */
}
}

module.exports = Komut_Adi;
