const { RichEmbed } = require("discord.js");
const request = require("request");

exports.run = (bot, message, args) => {
	if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    let suffix = args.join(" ");
    let statut = {
        "true": "Oui",
        "false": "Non",
    };

		const embed = new RichEmbed();
        if(suffix == "" || suffix == null) return message.channel.sendMessage("Tu dois indiquer un serveur !");
			request("https://eu.mc-api.net/v3/server/info/"+suffix+"/json",
			function(err, res, body){
              let data = JSON.parse(body);
              if(data.online){
					embed.setTitle("Statut Serveur Minecraft")
					embed.setColor('RANDOM')
					embed.setThumbnail(data.favicon)
					embed.setTimestamp()
					embed.addField("IP : ", suffix, true)
					embed.addField("Joueurs en ligne : ", data.players.online, true)
					embed.addField("Joueurs maximum : ", data.players.max, true)
					embed.addField("En ligne ? : ", statut[data.online], true)
					embed.addField("Version : ", data.version.name, true)
		                        embed.addField("Protocole : ", data.version.protocol, true)
					embed.setFooter("Serveur Minecraft ", bot.user.avatarURL)

					message.channel.send(embed)
              }else{
					embed.setTitle("Statut Serveur Minecraft")
					embed.setColor('RANDOM')
					embed.setThumbnail(data.favicon)
					embed.setTimestamp()
					embed.addField("Serveur éteint ! ", "Ce serveur est soit éteint soit inéxistant !")
					embed.setFooter("Serveur Minecraft ", bot.user.avatarURL)

					message.channel.send({embed})
			  }
        })
}

exports.help = {
    name: "mcserver"
  }
