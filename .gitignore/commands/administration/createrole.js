exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send("Je n'ai pas les permissions de créer des rôles !");

    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
        message.reply("Tu n'as pas la permission de créer un role")
    }else{
    const createrole = args.join(" ")
    if (!createrole) return message.channel.send("Tu dois m'indiquer un rôle à créer !")
    message.guild.createRole({
        name: createrole,
        color: "#000000",
        permissions:[]
      })
    message.channel.send(`Le role ${createrole} à été crée !`)

}}

exports.help = {
  name: "createrole"
}
