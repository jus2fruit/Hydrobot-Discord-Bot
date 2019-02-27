const { RichEmbed } = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
  if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send("Je n'ai pas les permissions pour mute !")
	

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour tempmute des membres");
    let totempmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!totempmute) return message.channel.send("Je ne trouve pas cette personne ! Dommage !");
  if(totempmute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas mute cette personne ! Dommage !");
  let tempmuterole = message.guild.roles.find(ch => ch.name === 'Reduced to silence');
  if(!tempmuterole){
    try{
      tempmuterole = await message.guild.createRole({
        name: "Reduced to silence",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(tempmuterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let tempmutetime = args[1];
  if(!tempmutetime) return message.channel.send("Spécifie un temps !");
  if(isNaN(parseInt(args[1]))) return message.channel.send("Erreur de syntaxe !")

  let reason = args.slice(2).join(' ') || `Aucune raison !`

  await(totempmute.addRole(tempmuterole.id));
  message.channel.send(`<@${totempmute.id}> est mute pendant ${ms(ms(tempmutetime))} pour ${reason}`);

  try{
    const embed = new RichEmbed()
            .setColor('RANDOM')
            .setTitle("TEMPMUTE !")
            .setDescription(`Vous avez été tempmute par **${message.author.tag}**`)
            .addField(`Raison :`, reason)
            .addField('Pendant :', tempmutetime)
            .setTimestamp()
    await totempmute.send(embed)
  }catch(e){
    console.log("tempmute")
    
  }

  setTimeout(function(){
    totempmute.removeRole(tempmuterole.id);
    message.channel.send(`<@${totempmute.id}> a été unmute !`);
  }, ms(tempmutetime));
	    
  return;	    
}

exports.help = {
    name: "tempmute"
  }
