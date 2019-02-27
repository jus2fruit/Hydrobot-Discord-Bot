const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const replys = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "Cassé !"
    ];

const reponse = (replys[Math.floor(Math.random() * replys.length)])
const user = message.author;
const embed = new RichEmbed()
.setAuthor(user.username, user.avatarURL)
.addField(":game_die: | Vous êtes tombé sur le...", reponse)
.setColor('RANDOM')
.setFooter("Mini-jeu", bot.user.avatarURL)
.setTimestamp()
message.channel.send(embed)
}

exports.help = {
    name: "roll"
  }
