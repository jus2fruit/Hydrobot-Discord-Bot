const { RichEmbed } = require("discord.js");

const config = require('../../assets/config.json')
const serveur = config.serveur;
const suggest = config.suggest

exports.run = (bot, message, args) => {

    if(!args.join(" ")) return message.channel.send("Tu dois m'indiquer une suggestion !");

    const user = message.author

    const embed = new RichEmbed()
    .setAuthor(`${user.tag} (${user.id})`, user.avatarURL)
    .setTitle("Suggestion")
    .setDescription(args.join(" "))
    .setColor('RANDOM')
    .setTimestamp()

    bot.guilds.get(serveur).channels.get(suggest).send(embed)

    .then(function (message) {
        message.react(bot.emojis.get("516698198761537548"))
        message.react(bot.emojis.get("516698199113859075"))
    }).catch(function() {
    });
}

exports.help = {
    name: "suggest"
}
