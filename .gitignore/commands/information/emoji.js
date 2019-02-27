const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

const user = message.author;
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
      const embed = new RichEmbed()
      .setAuthor(`${user.username}`, user.displayAvatarURL)
      .setTimestamp()
      .setColor('RANDOM')
      .setTitle(`Emojis du serveur **${message.guild.name}** (${message.guild.emojis.size})`)
      .setDescription(emojiList)
      message.channel.send(embed)
    }
    
    exports.help = {
    name: "emoji"
  }
