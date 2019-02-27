const { RichEmbed } = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const user = message.author;

    let{body} = await superagent
  .get(`http://aws.random.cat/meow`);
  if(!body) return message.channel.send("Une erreur est survenu ! Merci de réessayer ulterieurement !")
  let catembed = new RichEmbed()
  .setAuthor(user.tag, user.displayAvatarURL)
  .setColor('RANDOM')
  .setTitle("Miaw !")
  .setTimestamp()
  .setImage(body.file);

  message.channel.send(catembed);
}


exports.help = {
    name: "cat"
  }
