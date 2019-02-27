exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
	

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour unmute des membres");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));    
  if(!tomute) return message.channel.send("Je ne trouve pas cette personne ! Dommage !");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas unmute cette personne ! Dommage !");
  let muterole = message.guild.roles.find(ch => ch.name === 'Reduced to silence');

  if(!muterole || !tomute.roles.has(muterole.id)) return message.channel.sendMessage("Cette utilisateur n'est pas (temp)mute !")

  await(tomute.removeRole(muterole.id));
  message.reply(`<@${tomute.id}> est désormais unmute !`);
	    
  return;	    
}

exports.help = {
    name: "unmute"
  }
