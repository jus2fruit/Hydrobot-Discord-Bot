const { RichEmbed } = require("discord.js");
const config = require('../assets/config.json');
const serveur = config.serveur;
const salon = config.salon;

module.exports = (bot, guild) => {
    const embed = new RichEmbed()
        .setColor('RED')
        .setTitle("Retrait d'un serveur !")
        .addField("Nom :", guild.name)
        .addField("ID", guild.id)
        .addField(`Nombre de membres :`, `${guild.memberCount}`)
        .setTimestamp()

        bot.guilds.get(serveur).channels.get(salon).send(embed).catch(() => {
            console.log("Arrivé sur serveur");

        });
    }
