const { RichEmbed } = require("discord.js");
const emoji = require('../../assets/emojis.json')

module.exports.run = async (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    const user = message.author;
    let region = {
        "brazil": ":flag_br: Brézil",
        "eu-central": "Europe Centrale :flag_eu:",
        "singapore": "Singapour :flag_sg:",
        "us-central": "Centre États-Unis :flag_us:",
        "sydney": "Sydney :flag_au:",
        "us-east": "Est États-Unis :flag_us:",
        "us-south": "Sud États-Unis :flag_us:",
        "us-west": "Ouest États-Unis :flag_us:",
        "eu-west": "Europe Occidentale :flag_eu:",
        "vip-us-east": "VIP Est États-Unis :flag_us:",
        "london": "Londres :flag_gb:",
        "amsterdam": "Amsterdam :flag_nl:",
        "hongkong": "Hong Kong :flag_hk:",
        "russia": "Russie :flag_ru:",
        "southafrica": " Afrique du Sud :flag_za:"
    };

    let mois = {
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
    let afk;
    let timeout;
    if(message.guild.afkChannelID !== null) {
        afk = `#${bot.channels.get(message.guild.afkChannelID).name}`
        timeout = `${message.guild.afkTimeout / 60} minutes`
    } else {
        afk = "Aucun salon AFK !"
        timeout = "Aucun AFK !"
    }

    const contentLevels = ['Aucun', 'Analyse les messages des personnes sans rôle', 'Analyse tout les messages']
    const verificationLevels = ['Aucun', 'Faible : Email vérifié', 'Moyen : Inscrit sur Discord depuis 5 min', 'Élevé : Doit être sur le serveur depuis 10 min', 'Extreme : Double authentification requise !']
    let guildCreateDate = message.guild.createdAt.toString().split(' ');
    let memberCreateDate = message.member.joinedAt.toString().split(' ');
    const embed = new RichEmbed()
    .setAuthor(user.username, user.avatarURL)
    .setDescription("**Informations du serveur**")
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(message.guild.name, bot.user.avatarURL)
    .addField(":abc: | Nom du serveur :", message.guild.name, true)
    .addField(":id: | ID", message.guild.id, true)
    .addField(":necktie: | Propriétaire du serveur :", message.guild.owner, true)
    .addField(":walking: | Dernier membre :", `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}\n`, true)
    .addBlankField(false)
    .addField(":key: | Créé le :", guildCreateDate[2] + ' ' + mois[guildCreateDate[1]] + ' ' + guildCreateDate[3] + ', ' + guildCreateDate[4], true)
    .addField(":inbox_tray: | Tu as rejoint ce serveur le :", memberCreateDate[2] + ' ' + mois[memberCreateDate[1]] + ' ' + memberCreateDate[3] + ', ' + memberCreateDate[4], true)
    .addBlankField(false)
    .addField(":map: | Région :", region[message.guild.region], true)
    .addField(`:gear: | Emojis | Roles :`, `Emojis : ${message.guild.emojis.size} \nRoles : ${message.guild.roles.size}`, true)
    .addBlankField(false)
    .addField(`:bust_in_silhouette: | Utilisateurs sur ce serveur (${message.guild.memberCount}) :`, `:grinning: | Humains : ${message.guild.members.filter(member => !member.user.bot).size} \n${emoji.bot} | Bots : ${message.guild.members.filter(member => member.user.bot).size} \n${emoji.enligne} | Membres en ligne : ${message.guild.members.filter(o => o.presence.status === "online").size} \n${emoji.absent} | Membres absents / inactifs : ${message.guild.members.filter(i => i.presence.status === "idle").size} \n${emoji.dnd} | Membres à ne pas déranger : ${message.guild.members.filter(i => i.presence.status === "dnd").size} \n${emoji.deconnecte} | Membres déconnectés / invisibles : ${message.guild.members.filter(i => i.presence.status === "offline").size} \n${emoji.streaming} | Membres en streaming : ${message.guild.members.filter(i => i.presence.status === "streaming").size}`, true)
    .addField(`:envelope: | Salons et Catégories (${message.guild.channels.size}) :`, `Salons Textuels : ${message.guild.channels.filter(chan => chan.type === 'text').size} \nSalons Vocaux : ${message.guild.channels.filter(chan => chan.type === 'voice').size} \nCatégories : ${message.guild.channels.filter(chan => chan.type === 'category').size}`, true)
    .addBlankField(false)
    .addField(":lock: | Protections :", `Niveau de vérification : ${verificationLevels[message.guild.verificationLevel]} \nFiltre de contenu explicite : ${contentLevels[message.guild.explicitContentFilter]}`, true)
    .addField(":sleeping: | AFK :", `Salon : ${afk} \nDélai : ${timeout}`, true)
    message.channel.send(embed)
  }
module.exports.help = {
  name: "serverinfo"
}
