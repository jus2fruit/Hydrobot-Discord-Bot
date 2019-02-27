const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

        const user = message.author; 
        const invite = new RichEmbed()
            .setTitle("Lien d'invitation pour le serveur support")
            .setAuthor(`${user.username}`, user.displayAvatarURL)
            .addField("Pour rejoindre mon serveur de support, ", "[Clique ici !](https://discord.gg/vJ6GVvq)")
            .setColor('RANDOM')
            .setTimestamp()
            message.channel.send(invite)
}

exports.help = {
    name: "support"
  }
