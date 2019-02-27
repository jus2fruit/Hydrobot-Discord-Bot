const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
	

    const user = message.author; 
        const invite = new RichEmbed()
            .setTitle("Lien d'invitation")
            .setAuthor(`${user.username}`, user.displayAvatarURL)
            .addField("Pour que je vienne, ", "[Clique ici !](https://discordapp.com/oauth2/authorize?client_id=477814350405697536&scope=bot&permissions=2146958847)")
            .setColor('RANDOM')
	    .setFooter("Je ne créerai que 1 rôle (mute)", bot.user.avatarURL) 
            .setTimestamp()
            message.channel.send(invite)
}

exports.help = {
    name: "invite"
  }
