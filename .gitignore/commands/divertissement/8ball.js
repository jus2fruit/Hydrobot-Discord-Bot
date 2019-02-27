const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const question = args.join(" ")
        
        if(!question[0]) return message.channel.send("Tu dois me poser une question !")

        const replys = [
            "Oui",
            "Non",
            "Peut être",
            "Peut être pas",
            "Je ne sais pas",
            "42",
	        ":thinking:",
	        "Demande à ta mère !",
	        "Johnathan"
        ];

        const user = message.author;
        const reponse = (replys[Math.floor(Math.random() * replys.length)])
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .setAuthor(user.username, user.displayAvatarURL)
        .setTitle(":8ball: | 8ball")
        .addField(":question: | Question :", question)
        .addField(":speech_balloon: | Réponse :", reponse)
        .setFooter("Mini-jeu", bot.user.avatarURL)
        .setTimestamp()
        message.channel.send(embed)
}

exports.help = {
    name: "8ball"
  }
