const Jimp = require('jimp');
const GIFEncoder = require('gifencoder');
const fsn = require('fs-nextra');

const options = {
    size: 256,
    frames: 16
}

exports.run = async (bot, message, args) => {

  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

  if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")

  const user = message.mentions.users.first() || message.author;

  function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let avatarurl

      if (user.displayAvatarURL.endsWith("?size=2048")) {
        avatarurl = user.displayAvatarURL
      }else{
        avatarurl = user.displayAvatarURL + "?size=2048"
      }

      if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
        avatarurl = args.join(' ').replace(/gif|webp/g, 'png');
      }

      const base = new Jimp(options.size, options.size);
      const avatar = await Jimp.read(avatarurl);
      const red = await fsn.readFile('./images/triggered.png');
      const triggered = await fsn.readFile('./images/red.png');
      const text = await Jimp.read(red);
      const tint = await Jimp.read(triggered);

      avatar.resize(320, 320);
      tint.scaleToFit(base.bitmap.width, base.bitmap.height);
      tint.opacity(0.2);
      text.scaleToFit(280, 60);

      const frames = [];
      const buffers = [];
      const encoder = new GIFEncoder(options.size, options.size);
      const stream = encoder.createReadStream();
      let temp;

      stream.on('data', async buffer => await buffers.push(buffer));
      stream.on('end', async() => {
        return await message.channel.send({
          files: [{
            name: 'triggered.gif',
            attachment: Buffer.concat(buffers)
          }]
        });
      });

      for (let i = 0; i < options.frames; i++) {
        temp = base.clone();

        if (i === 0) {
          temp.composite(avatar, -16, -16);
        } else {
          temp.composite(avatar, -32 + getRandomInt(-16, 16), -32 + getRandomInt(-16, 16));
        }

        temp.composite(tint, 0, 0);

        if (i === 0) temp.composite(text, -10, 200);
        else temp.composite(text, -12 + getRandomInt(-8, 8), 200 + getRandomInt(-0, 12));

        frames.push(temp.bitmap.data);
        }

      encoder.start();
      encoder.setRepeat(0);
      encoder.setDelay(20);
      for (const frame of frames) {
        encoder.addFrame(frame);
      }
      encoder.finish();

  };

exports.help = {
  name: 'triggered',
};
