exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Tu dois mentionner un utilisateur !")
    }
    
    let reason = args.slice(1).join(' ') || `Aucune raison !`

    let ban = message.guild.member(message.mentions.users.first());
    if(!ban) {
        return message.channel.send("L'utilisateur n'existe pas ! C'est dommage !")
    }

    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
        return message.channel.send("Je n'ai pas la permission pour softban !");
    }
    
    if(!ban.bannable) {
        return message.channel.send("Softban impossible !");
    }

     message.guild.ban(ban, 2).then(member => {
        message.channel.send(`**${member.user.tag}** a été softban par **${message.author.tag}** pour **${reason}**`)
    });
     message.guild.unban(ban, 2)
}

exports.help = {
name: "softban"
}
