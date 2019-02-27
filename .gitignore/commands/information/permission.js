const { RichEmbed } = require("discord.js");
const emoji = require('../../assets/emojis.json')

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const user = message.mentions.users.first() || message.author

    let invite = (message.guild.member(user).hasPermission('CREATE_INSTANT_INVITE')) ? emoji.enligne : emoji.dnd;
    let kick = (message.guild.member(user).hasPermission('KICK_MEMBERS')) ? emoji.enligne : emoji.dnd;
    let ban = (message.guild.member(user).hasPermission('BAN_MEMBERS')) ? emoji.enligne : emoji.dnd;
    let admin = (message.guild.member(user).hasPermission('ADMINISTRATOR')) ? emoji.enligne : emoji.dnd;
    let manchannel = (message.guild.member(user).hasPermission('MANAGE_CHANNELS')) ? emoji.enligne : emoji.dnd;
    let manguild = (message.guild.member(user).hasPermission('MANAGE_GUILD')) ? emoji.enligne : emoji.dnd;
    let addreaction = (message.guild.member(user).hasPermission('ADD_REACTIONS')) ? emoji.enligne : emoji.dnd;
    let viewlog = (message.guild.member(user).hasPermission('VIEW_AUDIT_LOG')) ? emoji.enligne : emoji.dnd;
    let sendtts = (message.guild.member(user).hasPermission('SEND_TTS_MESSAGES')) ? emoji.enligne : emoji.dnd;
    let manmessage = (message.guild.member(user).hasPermission('MANAGE_MESSAGES')) ? emoji.enligne : emoji.dnd;
    let link = (message.guild.member(user).hasPermission('EMBED_LINKS')) ? emoji.enligne : emoji.dnd;
    let files = (message.guild.member(user).hasPermission('ATTACH_FILES')) ? emoji.enligne : emoji.dnd;
    let history = (message.guild.member(user).hasPermission('READ_MESSAGE_HISTORY')) ? emoji.enligne : emoji.dnd;
    let everyone = (message.guild.member(user).hasPermission('MENTION_EVERYONE')) ? emoji.enligne : emoji.dnd;
    let emojis = (message.guild.member(user).hasPermission('USE_EXTERNAL_EMOJIS')) ? emoji.enligne : emoji.dnd;
    let connect = (message.guild.member(user).hasPermission('CONNECT')) ? emoji.enligne : emoji.dnd;
    let speak = (message.guild.member(user).hasPermission('SPEAK')) ? emoji.enligne : emoji.dnd;
    let mutespeak = (message.guild.member(user).hasPermission('MUTE_MEMBERS')) ? emoji.enligne : emoji.dnd;
    let sourdspeak = (message.guild.member(user).hasPermission('DEAFEN_MEMBERS')) ? emoji.enligne : emoji.dnd;
    let movespeak = (message.guild.member(user).hasPermission('MOVE_MEMBERS')) ? emoji.enligne : emoji.dnd;
    let vad = (message.guild.member(user).hasPermission('USE_VAD')) ? emoji.enligne : emoji.dnd;
    let priority_speak = (message.guild.member(user).hasPermission('PRIORITY_SPEAKER')) ? emoji.enligne : emoji.dnd;
    let changenick = (message.guild.member(user).hasPermission('CHANGE_NICKNAME')) ? emoji.enligne : emoji.dnd;
    let mannick = (message.guild.member(user).hasPermission('MANAGE_NICKNAMES')) ? emoji.enligne : emoji.dnd;
    let manroles = (message.guild.member(user).hasPermission('MANAGE_ROLES')) ? emoji.enligne : emoji.dnd;
    let manwebh = (message.guild.member(user).hasPermission('MANAGE_WEBHOOKS')) ? emoji.enligne : emoji.dnd;
    let manemojis = (message.guild.member(user).hasPermission('MANAGE_EMOJIS')) ? emoji.enligne : emoji.dnd;
    let view = (message.guild.member(user).hasPermission('VIEW_CHANNEL')) ? emoji.enligne : emoji.dnd;
    let parler = (message.guild.member(user).hasPermission('SEND_MESSAGES')) ? emoji.enligne : emoji.dnd;

    const embed = new RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(user.username, user.displayAvatarURL)
    .setTitle("Permissions")
    .setTimestamp()
    .setDescription(`Administrateur : ${admin} 
    Voir les logs : ${viewlog} 
    Gérer le serveur : ${manguild} 
    Gérer les rôles : ${manroles} 
    Gérer les salons : ${manchannel} 
    Kick : ${kick} 
    Ban : ${ban} 
    Créer une invitation : ${invite} 
    Changer de pseudo : ${changenick}
    Gérer les pseudos : ${mannick}
    Gérer les émojis : ${manemojis}
    Gérer les webhooks : ${manwebh}
    Voir les salons : ${view}
    \n
    Envoyer des messages : ${parler}
    Envoyer des messages TTS : ${sendtts}
    Gérer les messages : ${manmessage}
    Intégrer des liens : ${link}
    Attacher des fichiers : ${files}
    Voir les anciens messages : ${history}
    Mentionner @everyone : ${everyone}
    Utiliser les émojis externes : ${emojis}
    Ajouter des réactions : ${addreaction}
    \n
    Se connecter : ${connect}
    Parler : ${speak}
    Rendre muet : ${mutespeak}
    Rendre sourd : ${sourdspeak}
    Déplacer les membres : ${movespeak}
    Utiliser la détection de voix : ${vad}
    Priority Speaker : ${priority_speak}`)

    message.channel.send(embed)



}
exports.help = {
    name: "permission"
  }
