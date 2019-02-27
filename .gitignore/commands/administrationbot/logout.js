const config = require('../../assets/config.json')
const admin = config.admin;

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if(!admin.includes(message.author.id)) return ("Vous n'avez pas la permission d'effectuer cette commande !")

        message.channel.send(":key: | Arrêt en cours...").then(() => {
            console.log("Logout")
            bot.destroy();
            process.exit()

        })
}

exports.help = {
    name: "logout"
  }
