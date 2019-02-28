const weather = require('weather-js');
const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch")

exports.run = async (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) console.log(err);
		
		if (result === undefined) {
              message.channel.send("Je n'ai pas trouvé cette ville")
		    return;
            }


            if (result.length === 0) {
                message.channel.send('Veuillez rentrer une localisation !')
                return;
            }

            let current = result[0].current;
            let results = result[0]

            let temps = {
                "Sunny": "Soleil",
                "Clear": "Dégagé",
                "Mostly Sunny": "Assez ensoleillé",
                "Cloudy": "Nuageux",
                "Mostly Cloudy": "Plutôt nuageux",
                "Light Rain": "Pluie légère",
                "Partly Sunny": "Partiellement ensoleillé",
                "T-Storm": "Tempêtes",
                "Partly Cloudy": "Partiellement nuageux",
                "Rain Showers": "Averses de pluie",
                "Light Snow": "Neige légère",
                "Mostly Clear": "Plutôt dégagé",
                "Rain": "Pluie",
                "Snow": "Neige"
            }


            const weather_embed = new RichEmbed()
                .setDescription(`**${current.observationpoint}**`)
                .setAuthor(`Météo de :`)
	            .setThumbnail(current.imageUrl)
                .setColor('RANDOM')
                .addField("`Météo actuelle`", temps[current.skytext])
                .addField(':thermometer: Température',`${current.temperature} °C`, true)
                .addField(':thermometer_face: Température ressentie', `${current.feelslike} °C`, true)
                .addField(':dash: Vent',current.winddisplay, true)
                .addField(':droplet: Humidité', `${current.humidity}%`, true)
                .addBlankField(false)
                .addField("`Prévisions à un jour`", temps[results.forecast[1].skytextday])
                .addField(':thermometer: Température max',`${results.forecast[1].high} °C`, true)
                .addField(':thermometer: Température min',`${results.forecast[1].low} °C`, true)
                .addField(':sweat_drops: Chance de précipitation',`${results.forecast[1].precip} %`, true)
                .setTimestamp()
                .setFooter("Météo", bot.user.avatarURL)
                message.channel.send(weather_embed);
        });
    }

exports.help = {
    name: "weather"
}
