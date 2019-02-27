const { RichEmbed } = require("discord.js");
const config = require('../assets/config.json')
const serveur = config.serveur;
const salon = config.salon

module.exports = (bot, guild) => {
    const embed = new RichEmbed()
        .setColor('GREEN')
        .setTitle("Ajout sur serveur !")
        .setDescription(`${bot.guilds.size}ème serveur`)
        .addField("Nom :", guild.name)
        .addField("ID", guild.id)
        .addField(`Nombre de membres :`, `${guild.memberCount}`)
        .addField(`Owner :`, `${guild.owner}`)
        .setTimestamp(new Date())

        bot.guilds.get(serveur).channels.get(salon).send(embed).catch(() => {
            console.log("Arrivé sur serveur");

        });
    }
