class Command {
    constructor(client, options) {
        this.client = client;
        this.Commands = options.Commands || null,
        this.Description = options.Description || "Bu komutun açıklaması yok.",
        this.Usage = options.Usage || "",
        this.Enabled = options.Enabled || true,
        this.DevOnly = options.DevOnly || false,
        this.GuildOnly = options.GuildOnly || true,
        this.Category = options.Category || "Genel"
    }
    async Execute(){}
}

module.exports = Command;
