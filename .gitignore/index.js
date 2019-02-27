const { Client, Collection } = require("discord.js");
const fs = require('fs');
const YTDL = require("ytdl-core");

const bot = new Client({disableEveryone: true});
bot.commands = new Collection();

const queue = require('./assets/queue.json');
const config = require('./assets/config.json');
const VIP = require('./assets/vip.json');

const PREFIX = config.PREFIX;


process.on('unhandledRejection', (reason, promise) => {
  console.log('[CRITIQUE !!!] Unhandled Rejection à: Promise ', promise, ' raison: ', reason.message);
});

////////////////////////
//Lecture des dossiers//
////////////////////////

//Lecture des commandes d'administration//
fs.readdir("./commands/administration/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/administration/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

  });

//Lecture des commandes d'administration du bot//
fs.readdir("./commands/administrationbot/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/administrationbot/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des commandes bot//
fs.readdir("./commands/bot/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/bot/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des commandes de divertissement//
fs.readdir("./commands/divertissement/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/divertissement/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des commandes d'image//
fs.readdir("./commands/image/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/image/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des commandes d'information//
fs.readdir("./commands/information/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/information/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des commandes de modération//
fs.readdir("./commands/moderation/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/moderation/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des commandes utilitaire//
fs.readdir("./commands/utilitaire/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }

    jsfile.forEach((f) =>{
      let props = require(`./commands/utilitaire/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });

});

//Lecture des events//
fs.readdir('./events/', (err, files) => {

    if(err) console.log(err)

    files = files.filter(f => f.endsWith('.js'));
    files.forEach(f => {
        const event = require(`./events/${f}`);
        console.log(`${f} events chargé !`);
        bot.on(f.split('.')[0], event.bind(null, bot));
        delete require.cache[require.resolve(`./events/${f}`)];
    });
});



////////////////////////
//Commandes de musique//
////////////////////////

function play(connection, message) {
    try {

        let server = servers[message.guild.id];

     server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
     server.queue.shift();
     server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else { connection.disconnect();
            server.dispatcher = null;
        }

    });

} catch (err) {
    message.channel.send("Une erreur est survenu ! Merci de réessayer ultérieurement")
    connection.disconnect();
}}

let servers = {};

bot.on('message', message => {

    if(message.channel.type === "dm") return;

    if (message.content === `<@${bot.user.id}>`) return message.channel.send("Salut ! Mon préfixe est `h!`")

    if(message.content.startsWith(PREFIX + 'meme')) {
	    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
	    if (!message.guild.member(bot.user).hasPermission('CONNECT')) return message.channel.send("Je ne peux pas me connecter au salon !");
	    if (!message.guild.member(bot.user).hasPermission('SPEAK')) return message.channel.send("Je ne peux pas parler !");
	    if(message.author.bot) return;

        try {
        if(VIP.some(perm => message.author.id.includes(perm))) {

        if(!message.member.voiceChannel){
            return message.channel.send("Tu dois être dans un salon vocal !")
        }

	    if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: queue
        };

                         if(message.guild.voiceConnection) {
                            message.guild.voiceConnection.disconnect();
                        }
                         if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                            play(connection, message)
                        });
                    } else {
                        message.channel.send("Il faut être VIP pour utiliser le système de musique !")
                    }} catch (err) {
                        message.channel.send("Une erreur est survenu, veuillez reessayer plus tard !")
                    }
                  }


         if(message.content.startsWith(PREFIX + 'stop')) {
		 if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
		 if(message.author.bot) return;
            if(!VIP.some(perm => message.author.id.includes(perm))) return message.channel.send("Il faut être VIP pour utiliser le système de musique !")
            if(!message.member.voiceChannel) {
                return message.channel.send("Tu dois être dans le salon vocal du bot !")
            }
             if(message.guild.voiceConnection) {
                message.guild.voiceConnection.disconnect();
                }else{
                    message.channel.send("Je ne peux pas quitter le salon...")
                 }}

        if(message.content.startsWith(PREFIX + 'skip')) {
            try {
		 if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
		 if(message.author.bot) return;
            if(!VIP.some(perm => message.author.id.includes(perm))) return message.channel.send("Il faut être VIP pour utiliser le système de musique !")
            if(!message.member.voiceChannel) {
                return message.channel.send("Tu dois être dans le salon vocal du bot !")
            }
            let server = servers[message.guild.id];
            if(server.dispatcher) {
                server.dispatcher.end();
            }
        }catch (err) {
            message.channel.send("Tu ne peux pas utiliser h!skip quand je ne joue aucun meme !")
        }
      }
})


/////////
//Token//
/////////
bot.login(process.env.TOKEN)
