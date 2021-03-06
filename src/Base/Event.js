class Event {
    constructor(options) {
        this.Name = options.Name || null;
    }
    async Execute(){}
}

module.exports = Event;
