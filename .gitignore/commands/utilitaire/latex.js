const util = require('../../assets/util.js');

exports.run = (bot, message, args) => {

  const tex = args.join(" ")

  if (!tex) return message.channel.send("Erreur ! Je n'ai pas de code à traduire !")

  util.typeset(tex).then(image => {
            util.attachImage(message.channel, image);
        }).catch(err => {
            message.channel.send("Une erreur est survenu ! :" + err);
        });
}

exports.help = {
  name: "latex"
}
