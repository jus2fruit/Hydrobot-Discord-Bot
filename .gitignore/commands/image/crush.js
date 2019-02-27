const snek = require('snekfetch');
const fsn = require('fs-nextra');
const { Canvas } = require('canvas-constructor');

exports.run = async (bot, message) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")

if (message.mentions.users.size < 1) return message.channel.send("Vous devez mentionner un utilisateur !");
    const getSlapped = async (slapper, slapped) => {
    const plate = await fsn.readFile('./images/plate_crush.png');
    const pngSlapper = slapper.replace('.gif', '.png');
    const pngSlapped = slapped.replace('.gif', '.png');
    const Slapper = await snek.get(pngSlapper);
    const Slapped = await snek.get(pngSlapped);
      return new Canvas(600, 873)
    .rotate(-0.09)
    .addImage(Slapped.body, 109, 454, 360, 417)
    .resetTransformation()
    .addImage(plate, 0, 0, 600, 873)
    .addImage(Slapper.body, 407, 44, 131, 131, { type: 'round', radius: 66 })
    .restore()
    .toBuffer();
  }
  try {

    let slapped

    if (message.mentions.users.first().displayAvatarURL.endsWith("?size=2048")) {
      slapped = message.mentions.users.first().displayAvatarURL
    }else{
      slapped = message.mentions.users.first().displayAvatarURL + "?size=2048"
    }

    let slapper

    if (message.author.displayAvatarURL.endsWith("?size=2048")) {
      slapper = message.author.displayAvatarURL
    }else{
      slapper = message.author.displayAvatarURL + "?size=2048"
    }

    const result = await getSlapped(slapper, slapped);
    await message.channel.send({ files: [{ attachment: result, name: 'crush.png' }] });
  } catch (error) {
    return message.channel.send("Une erreur est survenu ! Merci de réessayer plus tard !")
  }
}

exports.help = {
    name: "crush"
  }
