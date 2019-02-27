const { RichEmbed } = require("discord.js");

const config = require('../assets/config.json')
const version = config.Version
const serveur = config.serveur;
const salon = config.salon

module.exports = (bot) => {

    function changement_status() {
        let status = [`h!help | ${version}`, `h!help | ${bot.guilds.size} serveurs`, `h!help | ${bot.users.size} membres`]
        let random = status[Math.floor(Math.random() * status.length)]
       bot.user.setActivity(random)
      }


        console.log("Le Bot est prêt !");
        setInterval(changement_status, 10000)

      const embed = new RichEmbed()
        .setColor('BLUE')
        .setTitle("Boot effectué avec succès !")
        .addField("ID", bot.user.id)
        .addField(`Nombre de membres :`, `${bot.users.size} membres`)
        .addField("Nombre de serveurs", `${bot.guilds.size} serveurs`)
        .setTimestamp()

        bot.guilds.get(serveur).channels.get(salon).send(embed).catch(() => {
            console.log("Arrivé sur serveur");

        });


}
