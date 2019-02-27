exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour clear un salon");
    if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.reply("Je n'ai pas les permissions pour clear un salon !")

    if (isNaN(args[0])) return message.channel.send("Vous n'avez pas fournit de nombre !");

    if (args[0] > 100) return message.channel.send("Vous devez fournir un nombre inférieur à 100 !");


    let messagecount = parseInt(args.join(" "))
    message.channel.fetchMessages({
        limit: messagecount
    }).then(() => message.channel.bulkDelete(messagecount)).catch().catch(() => message.channel.send('Vous ne pouvez pas supprimer les messages de plus de 14 jours.')).then((nombremsg) => {message.channel.send(`Tu viens de supprimer ${nombremsg.size} message(s)`).then(msg => msg.delete(5000))

})
    message.delete()

}

exports.help = {
    name: "clear"
  }
