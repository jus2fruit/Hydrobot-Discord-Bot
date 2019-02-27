const { RichEmbed } = require("discord.js");

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    if(message.author.id !== "406135526005932043") return message.channel.send("Vous n'avez pas la permission d'éxecuter cette commande !")
    const code = args.join(" ");
    if (code === "bot.token") return message.channel.send("Je te conseil de ne pas faire ça !")
    try {

      if(!code) return message.channel.send("Tu dois donner un code à évaluer");
      const evaled = eval(code);

        if (!typeof evaled === "string")
          evaled = require("util").inspect(evaled);

        const embed = new RichEmbed()
          .setColor('RANDOM')
          .addField(":inbox_tray: Entrée: ", `\`\`\`${code}\`\`\``)
          .addField(":outbox_tray: Sortie: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
          .setTimestamp()
        message.channel.send(embed)
      } catch (err) {
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .addField(":inbox_tray: Entrée :", `\`\`\`${code}\`\`\``)
        .addField(":outbox_tray: Sortie :", `\`\`\`${clean(err)}\`\`\``)
        .setTimestamp()
      message.channel.send(embed)
      }

  function clean(text) {
    if (typeof(text) === 'string')
      return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
        return text;
    }
  }

  exports.help = {
    name: "eval"
  }
