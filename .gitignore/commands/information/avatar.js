const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
        if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
	

        const user = message.mentions.users.first() || message.author; 
        const avatar = new RichEmbed()
        .setAuthor(user.tag, user.displayAvatarURL)
        .setTitle("Avatar")
        .setDescription(`[PNG](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512) | [JPG](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg?size=512) | [GIF](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=512)`)
        .setImage(user.displayAvatarURL)
	    .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(avatar);
}

exports.help = {
    name: "avatar"
  }
