exports.run = (bot, message, args) => {

    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de unban !");
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Je n'ai pas la permission pour unban !")

    if (!args[0]) return message.channel.send(`Tu dois mentionner l'ID d'un utilisateur a unban !`)

    if (isNaN(args[0])) return message.channel.send("Tu dois me spécifier une ID valide !")

    message.guild.unban(args[0]).then(() => {message.channel.send("Unban effectué !")}).catch(() =>{
        message.channel.send("L'id que tu m'as donné n'est pas valide !")
    })

}
exports.help = {
    name: "unban"
}
