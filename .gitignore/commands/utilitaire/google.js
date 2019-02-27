const { RichEmbed } = require("discord.js");
const google = require("google");

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

  if (!args.join(" ")) return message.channel.send("Tu dois m'indiquer une recherche à effectuer !")

    google.resultsPerPage = 3

   google(args.join(" "), function (err, res){
     if (err) console.error(err)
       let link1 = res.links[0];

    const embed = new RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`Google : ${link1.title}`)
    .setURL(link1.link)
    .addField(link1.title, link1.description)
    .setTimestamp()
    .setFooter("Google", bot.user.avatarURL)

    message.channel.send(embed)

   })
  }

exports.help = {
  name: "google"
}
