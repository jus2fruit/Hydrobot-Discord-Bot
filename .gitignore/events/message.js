const { RichEmbed } = require("discord.js");
const config = require('../assets/config.json')
const blacklist = require('../assets/blacklist.json')
const PREFIX = config.PREFIX;

module.exports = (bot, message) => {


    const user = message.author

    const blackembed = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Commande impossible à effectuer!")
    .setDescription("**Vous ne pouvez pas m'utiliser car vous êtes banni du bot !**")
    .setThumbnail("http://www.parisenligne.com/wp-content/imgs/image-liste-noire-70.jpg")
    .setTimestamp()

    if (blacklist.includes(message.author.id)) return message.channel.send(blackembed)

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    const messageArray = message.content.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    const commandfile = bot.commands.get(cmd.split(PREFIX)[1]);

    if(!cmd.startsWith(PREFIX)) return;

    if(commandfile) commandfile.run(bot,message,args);

}
