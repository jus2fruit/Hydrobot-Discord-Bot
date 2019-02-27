const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de faire un sondage");

  const tte = args.join(" ")
  const user = message.author;

  if(!tte[0]) return message.channel.send("Tu dois me donner un sondage !")

  const sondage_embed = new RichEmbed()
    .setTitle("Sondage")
    .setAuthor(user.username, user.displayAvatarURL)
    .addField(tte, "Répondre avec :heavy_check_mark:, :x: ou :shrug:")
    .setColor('RANDOM')
    .setTimestamp()

  message.channel.send(sondage_embed)
  .then(function (message) {
    message.react("✔")
    message.react("❌")
    message.react("🤷")
   }).catch(function() {
 });
}

exports.help = {
  name: "poll"
}
