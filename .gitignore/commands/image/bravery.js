const Jimp = require('jimp');
const fsn = require('fs-nextra');

exports.run = async (bot, message, args) => {

  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

  if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")

  try {
    const plate = await fsn.readFile('./images/bravery.png');

    const user = message.mentions.users.first() || message.author;

    let avatar

    if (user.displayAvatarURL.endsWith("?size=2048")) {
      avatar = user.displayAvatarURL
    }else{
      avatar = user.displayAvatarURL + "?size=2048"
    }

    if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
      avatar = args.join(' ').replace(/gif|webp/g, 'png');
    }

        Jimp.read(avatar, (err, image) => {
            image.resize(295, 295)


            Jimp.read(plate, (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 0, 0)
                image.getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                  message.channel.send({files: [{ name: 'bravery.png', attachment: buffer }] });
                });
            });
        });



  } catch (err) {
    message.channel.send("Une erreur est survenu ! Merci de réessayer plus tard !")
  }}

  exports.help = {
    name: "bravery"
  }
