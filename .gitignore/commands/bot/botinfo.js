const { RichEmbed } = require("discord.js");
const os = require('os')
const cpuStat = require("cpu-stat")
const config = require('../../assets/config.json')
const version = config.Version

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const ping = bot.ping;
    const user = message.author

    cpuStat.usagePercent(function(err, percent) {
      if (err) {
        return console.log(err);
      }

        const s = (Math.round(bot.uptime / 1000) % 60)
        const m = (Math.round(bot.uptime / (1000 * 60)) % 60)
        const h = (Math.round(bot.uptime / (1000 * 60 * 60)))
        const info_embed = new RichEmbed()
           .setAuthor(user.username, user.avatarURL)
           .setTitle("Informations du bot !")
           .setColor('RANDOM')
           .setThumbnail(bot.user.avatarURL)
           .addField(":paperclip: | Nom :","`" + bot.user.tag +"`", true)
           .addField(":id: | ID :","`" + bot.user.id + "`", true)
           .addField(":robot: | Version du Bot :",`\`${version}\``, true)
           .addField(":busts_in_silhouette: | Développeur du Bot :","`Moitié prix#4263`", true)
           .addField(":busts_in_silhouette: | Membres du Projet :","`Moitié prix#4263` et `Yumiko#2997`", true)
           .addField(":busts_in_silhouette: | Administrateurs du bot :","`Moitié prix#4263` et `ΛмαɴdιɴeŁαPoммeÐeTerre 🥔#5831`", true)
           .addField(":date: | Date de Creation :","`Samedi 11 Août 2018`",true)
           .addBlankField(false)
           .addField(":desktop: | CPU :", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
           .addField(":gear: | Utilisation CPU :", `\`${percent.toFixed(2)}%\``, true)
           .addField(":keyboard: | Architecture :", `\`${os.arch()} \``, true)
           .addField(":calling: | Plateforme :", `\`${os.platform()}\``, true)
           .addField(":floppy_disk: | Mémoire Utilisée :", `\`${Math.round(process.memoryUsage().rss / 1024 / 1000)}` + " MB`", true)
           .addBlankField(false)
           .addField(`:satellite: | Latence de l'API :`,`\`${ping} ms\``, true)
           .addField(`:computer: | Uptime :`,`\`${h} heures , ${m} minutes , ${s} secondes\``, true)
           .addBlankField(false)
           .addField(":busts_in_silhouette: | Nombre d'utilisateurs :", `\`${bot.users.size} membres\``,true)
           .addField(":calling: | Nombre de serveurs :", `\`${bot.guilds.size} serveurs\``, true)
           .setTimestamp()
           .setFooter(bot.user.tag,  bot.user.avatarURL);
          message.channel.send(info_embed)
    })
}


exports.help = {
  name: "botinfo"
}
