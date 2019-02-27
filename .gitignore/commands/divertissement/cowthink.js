const cowsay = require('cowsay');

exports.run = (bot, message, args) => {

  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if(!args[0]) return message.channel.send('Tu dois me donner un texte !');
    if(args.join(' ').length > 30) return message.channel.send('Tu ne dois pas dépasser 30 caractères !')

    message.channel.send("```" + cowsay.think({
        text : args.join(' ')
    }) + "```")
};

    

    exports.help = {
        name: "cowthink"
      }
