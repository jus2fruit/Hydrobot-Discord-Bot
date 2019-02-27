const { Attachment } = require("discord.js");

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    
    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")

    const ids = [
      "20",
      "1",
      "13",
      "18",
      "17",
      "9",
      "31",
      "22",
      "23",
      "2",
      "11",
      "19",
      "24",
      "25",
      "12",
      "33"
      ]
      const number = Math.floor(Math.random()*ids.length);
      const args1 = args.join(" ")
      if (!args1) return message.channel.send("Tu dois m'indiquer un texte !");
const image = new Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[number]}&h=Achievement Get!&t=${args1}`, "achievement.png");
message.channel.send(image)
}

 exports.help = {
    name: "achievement"
  }
