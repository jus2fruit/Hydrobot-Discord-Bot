const { RichEmbed } = require("discord.js");
const boutade = require('../../assets/boutade.json');

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

    
    const reponseboutade = (boutade[Math.floor(Math.random() * boutade.length)])
    const user = message.author;
    const embed = new RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setTitle("Blague !")
    .setDescription(reponseboutade)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
}

exports.help = {
    name: "boutade"
  }
