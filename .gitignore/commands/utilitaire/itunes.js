const { RichEmbed } = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

    const mois = {
        "Jan": "Janvier",
        "Feb": "Février",
        "Mar": "Mars",
        "Apr": "Avril",
        "May": "Mai",
        "Jun": "Juin",
        "Jul": "Juillet",
        "Aug": "Août",
        "Sep": "Septembre",
        "Oct": "Octobre",
        "Nov": "Novembre",
        "Dec": "Décembre"
  
    }

    try {
        const query = args.join(" ");
        const { body } = await snekfetch
            .get('https://itunes.apple.com/search')
            .query({
                term: query,
                media: 'music',
                entity: 'song',
                limit: 1,
                explicit: message.channel.nsfw ? 'yes' : 'no',
            });
        const body2 = JSON.parse(body.toString());
        if (!body2.results.length) return message.channel.send("Hummm... Ta musique n'a pas l'air d'exister...");
        const data = body2.results[0];
        const user = message.author;
        const embed = new RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setAuthor(user.tag, user.displayAvatarURL)
            .setURL(data.trackViewUrl)
            .setThumbnail(data.artworkUrl100)
            .setTitle(data.trackName)
            .addField('Artiste / Groupe :', data.artistName, true)
            .addField('Album :', data.collectionName, true)
            .addField('Date de sortie :', new Date(data.releaseDate).toDateString().split(' ')[2] + ' ' + mois[new Date(data.releaseDate).toDateString().split(' ')[1]] + ' ' + new Date(data.releaseDate).toDateString().split(' ')[3], true)
            .addField('Genre :', data.primaryGenreName, true);
            
        return message.channel.send(embed);
    } catch (err) {
        if (err.statusCode === 400) {
            return message.channel.send('Une erreur est survenu ! Merci de réessayer ulterieurement !');
        }
        return message.channel.send(`Une erreur est survenu ! Merci de réessayer ulterieurement !`);
    }
}

exports.help = {
    name: "itunes"
  }
