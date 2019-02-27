const figlet = require('figlet');

exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if(!args[0]) return message.channel.send('Tu dois me donner un texte !');
    if(args.join(' ').length > 15) return message.channel.send('Tu ne dois pas dépasser 20 caractères !')

    figlet(`${args.join(' ')}`, function(err, data) {
        if (err) {
           message.channel.send("Une erreur est survenu ! Merci de réessayer plus tard !");
            return;
        }

        message.channel.send(`${data}`, {code: 'AsciiArt'});
    });

  }

exports.help = {
    name: "ascii"
  }
