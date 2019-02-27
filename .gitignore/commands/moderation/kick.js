const { RichEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Tu dois mentionner un utilisateur !")
        }

        let reason = args.slice(1).join(' ') || `Aucune raison !`

        let kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("L'utilisateur n'existe pas ! C'est dommage !")
        }

        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick ! C'est dommage !");
        }
        if(!kick.kickable) {
            return message.channel.send("Kick impossible !");
        }

        try{
            const embed = new RichEmbed()
            .setColor('RANDOM')
            .setTitle("KICK !")
            .setDescription(`Vous avez été kick par **${message.author.tag}**`)
            .addField(`Raison :`, reason)
            .setTimestamp()
            await kick.send(embed)
          }catch(e){
            console.log("kick")
            
          }

        kick.kick().then(member => {
            message.channel.send(`**${member.user.tag}** a été kick par **${message.author.tag}** pour **${reason}**`)
        });
}

exports.help = {
    name: "kick"
  }

