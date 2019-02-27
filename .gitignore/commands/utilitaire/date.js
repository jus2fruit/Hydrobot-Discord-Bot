const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {

    let date = new Date(),
        weekdays = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"),
        weekday = weekdays[date.getDay()];
        mooths = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"),
        mooth = mooths[date.getMonth()];
        jour = date.getDate()
        annee = date.getFullYear()
        heure = date.getHours()
        minutes = date.getMinutes()
        secondes = date.getSeconds()

    let dateEmbed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle("Heure universelle (UTC)")
    .setDescription(weekday.toUpperCase() + " " + jour + " " + mooth.toUpperCase() + ", **" + heure + ":" + minutes + ":" + secondes + "**");

    message.channel.send(dateEmbed);

}

exports.help = {
    name: "date"
}
