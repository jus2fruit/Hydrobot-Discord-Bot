const { RichEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
  if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send("Je n'ai pas les permissions pour mute !")	

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour mute des membres");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Je ne trouve pas cette personne ! Dommage !");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas mute cette personne ! Dommage !");
  let reason = args.slice(1).join(' ') || `Aucune raison !`
  let muterole = message.guild.roles.find(ch => ch.name === 'Reduced to silence');
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Reduced to silence",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> est mute !`);

  try{
    const embed = new RichEmbed()
            .setColor('RANDOM')
            .setTitle("MUTE !")
            .setDescription(`Vous avez été mute par **${message.author.tag}**`)
            .addField(`Raison :`, reason)
            .setTimestamp()
    await tomute.send(embed)
  }catch(e){
    console.log("mute")
    
  }
	    
  return;	    
}

exports.help = {
    name: "mute"
  }
