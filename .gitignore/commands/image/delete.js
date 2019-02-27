const snek = require('snekfetch');
const fsn = require('fs-nextra');
const { Canvas } = require('canvas-constructor');

exports.run = async (bot, message) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

   if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")


   const getSlapped = async (person) => {
    const plate = await fsn.readFile('./images/plate_delete.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(550, 275)
    .setColor(0x00A2E8)
    .addRect(0, 0, 634, 675)
    .addImage(plate, 0, 0, 550, 275)
    .addImage(body, 92, 106, 139, 151)
    .toBuffer();
  }
     try {
       const user = message.mentions.users.first() || message.author;

       let person

       if (user.displayAvatarURL.endsWith("?size=2048")) {
         person = user.displayAvatarURL
       }else{
         person = user.displayAvatarURL + "?size=2048"
       }

    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'garbagememe.png' }] });
  } catch (error) {
    return message.channel.send("Une erreur est survenu ! Merci de réessayer plus tard !")
  }
}

exports.help = {
    name: "delete"
  }
