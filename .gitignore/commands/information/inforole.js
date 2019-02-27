const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
        if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

        const tte = args.join(" ")
        const role = message.guild.roles.find(ch => ch.name === tte) || message.guild.roles.get(tte)

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

        const yn = {
            "true": `Oui`,
            "false": `Non`
        };

        if(!tte) return message.channel.send("Tu dois me donner un rôle !")
        if(!role) return message.reply('Tu dois me donner une rôle valide !');

        const embed = new RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTitle(`Rôle ${role.name}`)
    .setThumbnail(message.guild.iconURL)
    .addField(':abc: | Nom :', role.name, true)
    .addField(':id: | ID :', role.id, true)
    .addField(':key: | Date de création :', role.createdAt.toString().split(' ')[2] + ' ' + mois[role.createdAt.toString().split(' ')[1]] + ' ' + role.createdAt.toString().split(' ')[3] + ' ' + role.createdAt.toString().split(' ')[4], true)
    .addField(':paintbrush: | Couleur :', role.hexColor, true)
    .addField(':bust_in_silhouette: | Utilisé par :', `${role.members.size} personne(s)`, true)
    .addField(':chart_with_upwards_trend: | Position du rôle :', role.position, true)
    .addField(':mega: | Mentionnable :', yn[role.mentionable], true)
    .addField(':closed_lock_with_key: | Éditable :', yn[role.editable.toString()], true)
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(embed);

  }

exports.help = {
  name: "inforole"
}
