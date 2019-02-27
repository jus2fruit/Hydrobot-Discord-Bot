exports.run = (bot, message, args) => {

  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission d'effectuer cette commande !");

  const tte = args.join(" ")
  const user = message.author;

  if(!tte[0]) return message.channel.send("Tu dois me donner un message à dire !")

  message.channel.send(`[${user.username}] => ${tte}`)

}

exports.help = {
  name: "say"
}
