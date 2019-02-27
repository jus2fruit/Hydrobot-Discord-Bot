const { RichEmbed } = require("discord.js");
const config = require('../../assets/config.json')
const version = config.Version

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
	

        const user = message.author;
        const version_embed = new RichEmbed()
            .setAuthor(`${user.username}`, user.displayAvatarURL)
            .setTitle("Version")
            .addField("Je suis en version :", `Release ${version}`)
	        .setColor('RANDOM')
            .setTimestamp()
            message.channel.send(version_embed);
}

exports.help = {
    name: "version"
  }
