const { RichEmbed } = require("discord.js");
const gif = require('../../assets/gif.json');

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

    const reponse = (gif[Math.floor(Math.random() * gif.length)])
    const user = message.author;
    const embed = new RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setTitle("Gif aléatoire !")
    .setImage(reponse)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
}

exports.help = {   
    name: "gif"
  }
