const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    
    const user = message.author;
    
    const embed1 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Pierre ! Égalité !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed2 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Feuille ! Vous avez perdu !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed3 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Ciseaux ! Vous avez gagné !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed4 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Pierre ! Vous avez gagné !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed5 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Feuille ! Égalité !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed6 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Ciseaux ! Vous avez perdu !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed7 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Pierre ! Vous avez perdu !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed8 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Feuille ! Vous avez gagné !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const embed9 = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setTitle("Pierre, feuille, ciseaux")
    .setDescription("Ciseaux ! Égalité !")
    .setColor('RANDOM')
    .setFooter("Mini-jeu", bot.user.avatarURL)
    .setTimestamp()

    const choice = args.join(' ')

    if (!args[0]) return message.channel.send("Tu dois m'indiquer une réponse ! <pierre / feuille / ciseaux>")

    if (choice != "feuille" && choice != "ciseaux" && choice != "pierre") return message.channel.send("Ta réponse n'est pas valide ! <pierre / feuille / ciseaux>")

      const choices = ['feuille', 'pierre', 'ciseaux', 'ciseaux', 'pierre', 'feuille', 'pierre', 'ciseaux', 'feuille'];

        const response = choices[Math.floor(Math.random() * choices.length)];      

         if (choice === 'pierre') {
            if (response === 'pierre') return message.channel.send(embed1)
            else if (response === 'feuille') return message.channel.send(embed2)
            else return message.channel.send(embed3)

        } else if (choice === 'feuille') {
            if (response === 'pierre') return message.channel.send(embed4)
            else if (response === 'feuille') return message.channel.send(embed5)
            else return message.channel.send(embed6)

        } else if (choice === 'ciseaux') {
            if (response === 'pierre') return message.channel.send(embed7)
            else if (response === 'feuille') return message.channel.send(embed8)
            else return message.channel.send(embed9)
  }
}

exports.help = {
    name: "pfc"
  }
