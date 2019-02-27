const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

    const user = message.author; 
    const ping = bot.ping;

    const embed = new RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle(":ping_pong: | Pong !")
    .addField(":signal_strength: Temps de réponse du bot :", `\`${Date.now() - message.createdTimestamp}ms\``)
    .addField(":satellite: Latence de l'API :", `\`${ping}ms\``)
    message.channel.send(embed)
}
    
exports.help = {
    name: "ping"
  }
