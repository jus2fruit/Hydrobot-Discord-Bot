const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    if (!message.guild.member(bot.user).hasPermission('MANAGE_EMOJIS')) return message.channel.send("Je n'ai pas les permissions de gérer les emojis :/")
    const mois = {
      "Jan": "Janvier",
      "Feb": "Février",
      "Mar": "Mars",
      "Apr": "Avril",
      "May": "Mai",
      "Jun": "Juin",
      "Jul": "Juillet",
      "Aug": "Août",
      "Sep": "Septembre",
      "Oct": "Octobre",
      "Nov": "Novembre",
      "Dec": "Décembre"

  }

    if (!args[0]) return message.channel.send("Tu dois me donner un emoji !")
    args = args[0].split(':')[1];
    emoji = message.guild.emojis.find(em => em.name === args);
    if (!emoji) {
      return message.channel.send("Cet emoji n'existe pas !")
    }
    emoji.fetchAuthor().then(author => {
    const user = message.author;
      const embed = new RichEmbed()
      .setAuthor(user.tag, user.displayAvatarURL)
      .setTitle(`Emoji ${emoji}`)
      .setColor("RANDOM")
      .setThumbnail(emoji.url)
      .addField(`Nom :`, emoji.name, true)
      .addField("ID :", emoji.id, true)
      .addField(`Créateur :`, author.tag, true)
      .addField(`Date de création :`, emoji.createdAt.toString().split(' ')[2] + ' ' + mois[emoji.createdAt.toString().split(' ')[1]] + ' ' + emoji.createdAt.toString().split(' ')[3] + ' ' + emoji.createdAt.toString().split(' ')[4], true)
      .addField(`Est-t'il animé ?`, (emoji.animated?`Oui`:`Non`), true)
      .addField(`Lien :`, `[Clique ici !](${emoji.url})`, true)
      .setTimestamp()
      message.channel.send(embed)
    })
    }
    
    exports.help = {
    name: "infoemoji"
  }
