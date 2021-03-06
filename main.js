const Client = require("./src/Base/Client.js"),
      client = global.Client = new Client();

      client.login(client.Config.Bot.Token);
      client.loadCommands();
      client.loadEvents();

      /* 
      * Eventlerinizi buraya yazmak yerine src/Events Klasörüne bakabilirsiniz
      * Örnek komut ve event dosyaları Example-Event.js ve Example-Command.js dosyalarına bulunuyor oradan örnek alabilirsiniz.
      */