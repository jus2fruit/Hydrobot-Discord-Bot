const { RichEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
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
            return message.channel.send("Je n'ai pas la permission pour ban !");
        }
        
        if(!ban.bannable) {
            return message.channel.send("Ban impossible !");
        }

        try{
            const embed = new RichEmbed()
            .setColor('RANDOM')
            .setTitle("BAN !")
            .setDescription(`Vous avez été banni par ${message.author.tag}`)
            .addField(`Raison :`, reason)
            .setTimestamp()
            await ban.send(embed)
          }catch(e){
            console.log("ban")
            
          }
        ban.ban(reason).then(member => {
            message.channel.send(`**${member.user.tag}** a été banni par **${message.author.tag}** pour **${reason}**`)
        });
    }
    
exports.help = {
    name: "ban"
}
