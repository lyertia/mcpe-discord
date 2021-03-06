const Base = require("../../Base/Event"),
    { Client } = global;

class Event_Adi extends Base {
    constructor(client) {
        super({ 
            Name: "Event Adı" // Örnek; "guildMemberAdd".
        });
    }
    async Execute() {
        // Event İçeriği
    }
}

module.exports = Event_Adi;