const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

        let suffix_args = args.join(' ')
        if (!args[0]) return message.reply("Tu dois report quelque chose !")


        const ask_embed = new RichEmbed()
        .setAuthor("Question", message.author.avatarURL)
        .addField("Question de :", message.author.tag + " (``" + message.author.id + "``)")
        .addField("Provenance du message : ", "``" + message.guild.name + "``" + " (``" + message.guild.id + "``)")
        .addField("Sa question : ", suffix_args)
        .setTimestamp()
        .setColor('RANDOM')
        message.client.users.get("406135526005932043").send(ask_embed)
        message.delete();
        message.reply("ton report a bien été envoyé !")
}

module.exports.help = {
    name: "report"
  }
