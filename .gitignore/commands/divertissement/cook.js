const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    let replys = [
        ":hamburger:",
        ":cooking:",
        ":hotdog:",
        ":pizza:",
        ":sushi:",
        ":cookie:",
        ":paella:",
        ":salad:",
        ":pancakes:",
        ":stuffed_pita:",
        ":cake:",
        ":rice:"
    ];

const reponse = (replys[Math.floor(Math.random() * replys.length)])
const user = message.author;
const embed_cook = new RichEmbed()
.setAuthor(`${user.username}`, user.displayAvatarURL)
.addField(":fork_and_knife: | Je t'ai cuisiné...", reponse)
.setColor('RANDOM')
.setFooter("Mini-jeu", bot.user.avatarURL)
.setTimestamp()
message.channel.send(embed_cook)
}

exports.help = {
    name: "cook"
  }
