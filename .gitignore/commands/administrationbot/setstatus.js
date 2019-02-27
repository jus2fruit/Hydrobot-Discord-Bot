const { RichEmbed } = require("discord.js");
const config = require('../../assets/config.json')
const admin = config.admin;
const serveur = config.serveur;
const salon = config.salon

exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if(!admin.includes(message.author.id)) return ("Vous n'avez pas la permission d'effectuer cette commande !")

    const status = args
    if (status == "online") {
        bot.user.setStatus("online")
      }

      if (status == "idle") {
        bot.user.setStatus("idle")
      }

      if (status == "dnd") {
        bot.user.setStatus("dnd")
      }

      if (status == "offline") {
        bot.user.setStatus("invisible")
      }


    const embed = new RichEmbed()
        .setColor('RANDOM')
        .setTitle("Changement de status")
        .setDescription(`Nouveau statut : ${bot.user.presence.status}`)
        .addField('Modifié par :', message.author.tag)
        .setTimestamp()

        bot.guilds.get(serveur).channels.get(salon).send(embed).catch(() => {
            console.log("Arrivé sur serveur");

        });
      }

exports.help = {
    name: "setstatus"
}
