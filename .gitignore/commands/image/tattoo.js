const snek = require('snekfetch');
const fsn = require('fs-nextra');
const { Canvas } = require('canvas-constructor');

exports.run = async (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")

    const getSlapped = async (person) => {
        const plate = await fsn.readFile('./images/plate_tattoo.png');
        const png = person.replace('.gif', '.png');
        const { body } = await snek.get(png);
        return new Canvas(684, 825)
            .setColor(0x00A2E8)
            .addRect(0, 0, 434, 675)
            .addImage(plate, 0, 0, 684, 825)
            .addImage(body, 200, 505, 271, 271, { type: 'round', radius: 125 })
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
        await message.channel.send({ files: [{ attachment: result, name: 'tattoo.png' }] });
    } catch (error) {
        return message.channel.send("Une erreur est survenu ! Merci de réessayer plus tard !")
    }
}

exports.help = {
    name: "tattoo"
}
