const { RichEmbed } = require("discord.js");
const emoji = require('../../assets/emojis.json')

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

const user = message.mentions.users.first() || message.author
let member = message.guild.member(user)
let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => `<@&${role.id}>`);
let ttt = (member.roles.size > 0) ? roles.length : "0";
    
let high = `<@&${member.highestRole.id}>`
if (member.highestRole.name === "@everyone") high = ['Aucun rôles !']

if (roles.length < 1) roles = ['Aucun rôles !']
const status = {
   online: `${emoji.enligne} | En ligne`, 
   idle: `${emoji.absent} | Absent`,
   dnd: `${emoji.dnd} | Ne pas déranger`,
   offline: `${emoji.deconnecte} | Déconnecté / Invisible`,
   streaming: `${emoji.streaming} | En streaming`
 };
 
 if (message.guild.member(user).hasPermission("KICK_MEMBERS")) {
    server = "Modérateur"
 }else{
     server = "Membre"
 }
 if (message.guild.member(user).hasPermission("ADMINISTRATOR")) {
    server = "Administrateur / Propriétaire"
}
 
 let game = user.presence.game && user.presence.game && user.presence.game.name
 if (!game) {
     game = "Rien"
 }
  let botuser; 
  if (member.user.bot === true) botuser = 'Oui'
  else botuser = 'Non'

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
   const embed = new RichEmbed()
  .setAuthor(user.username, user.avatarURL)
  .setColor('RANDOM')
  .setThumbnail(`${user.displayAvatarURL}`)
  .addField(":bust_in_silhouette: | Pseudo :", `${user.tag}`, true)
  .addField(":id: | ID d'utilisateur :", `${user.id}`, true)
  .addField(":gear: | Compte crée le :", member.user.createdAt.toString().split(' ')[2] + ' ' + mois[member.user.createdAt.toString().split(' ')[1]] + ' ' + member.user.createdAt.toString().split(' ')[3] + ' ' + member.user.createdAt.toString().split(' ')[4], true)
  .addField(`:inbox_tray: | A rejoint ce serveur le`, member.joinedAt.toString().split(' ')[2] + ' ' + mois[member.joinedAt.toString().split(' ')[1]] + ' ' + member.joinedAt.toString().split(' ')[3] + ' ' + member.joinedAt.toString().split(' ')[4], true)
  .addField(":white_check_mark: | Statut :", `${status[user.presence.status]}`, true)
  .addField(":video_game: | Jeux :", `Joue à : ${(user.presence.game && user.presence.game && user.presence.game.name) || 'Rien'}`, true)
  .addBlankField(false)
  .addField(":abcd: | Pseudo sur le serveur :", `${(member.nickname !==null) ? member.nickname : user.username}`, true)
  .addField(":globe_with_meridians: | Roles (" + ttt + ") :", `${roles.join(', ')}`, true)
  .addField(":top: | Rôle le plus élevé", high, true)
  .addBlankField(false)
  .addField(":robot: | Est-ce un bot ?", `${botuser}`, true)
  .addField(":pushpin: | Statut serveur", server, true)
  .setTimestamp()
  .setFooter(user.tag, bot.user.avatarURL)
message.channel.send({embed});
    }

    exports.help = {
        name: "userinfo"
      }
