const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de faire cette commande");

  const tte = args.join(" ")
  const user = message.author;

  if(!tte[0]) return message.channel.send("Tu dois me donner un message à dire !")

  const sayembed_embed = new RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setDescription(tte)
    .setTimestamp()
    .setColor('RANDOM')
  message.channel.send(sayembed_embed)
}

exports.help = {
  name: "embedsay"
}
