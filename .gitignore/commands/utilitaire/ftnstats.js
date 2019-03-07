const { RichEmbed } = require("discord.js");
const Fortnite = require("fortnite");
const fortnite = new Fortnite(process.env.FORTNITE);

exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    const user = message.author

    let platform;
    let username;

    if(!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send(":x: **Erreur:** Veuillez indiquer la plateforme `pc ; xbl ; psn` :x:");
    if(!args[1]) return message.channel.send(":x: **Erreur:** Veuillez indiquer un pseudo. :x:");

    platform = args.shift();
    username = args.join(' ');

    fortnite.user(username, platform).then(data => {
        let stats = data.stats;

        let solostats = stats.solo;
        let duostats = stats.duo;
        let squadstats = stats.squad;
        let lifetime = stats.lifetime;

        let sscore = solostats.score;
        let smatchesPlayed = solostats.matches;
        let swins = solostats.wins;
        let skills = solostats.kills;
        let skd = solostats.kd;

        let dscore = duostats.score;
        let dmatchesPlayed = duostats.matches;
        let dwins = duostats.wins;
        let dkills = duostats.kills;
        let dkd = duostats.kd;

        let escore = squadstats.score;
        let ematchesPlayed = squadstats.matches;
        let ewins = squadstats.wins;
        let ekills = squadstats.kills;
        let ekd = squadstats.kd;

        let score = lifetime[6]['Score'];
        let matchesPlayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        const embed = new RichEmbed()
        .setTitle(`Statistiques Fortnite de ` + "`" + `${data.username}` + "`")
        .setAuthor(user.username, user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Fortnite stats", bot.user.avatarURL)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/0/07/Fortnite_Battle_Royale_Logo.png")
        .addField("**Solo**",`Top 1 : ${swins} \nKills : ${skills} \nScore : ${sscore} \nParties jouées : ${smatchesPlayed} \nK/D : ${skd}`, true)
        .addField("**Duo**", `Top 1 : ${dwins} \nKills : ${dkills} \nScore : ${dscore} \nParties jouées : ${dmatchesPlayed} \nK/D : ${dkd}`, true)
        .addField("**Squad**", `Top 1 : ${ewins} \nKills : ${ekills} \nScore : ${escore} \nParties jouées : ${ematchesPlayed} \nK/D : ${ekd}`, true)
        .addField("**Global**", `Top 1 : ${wins} \nKills : ${kills} \nScore : ${score} \nParties jouées : ${matchesPlayed} \nK/D : ${kd} \nPourcentage de victoire : ${winper}`, true);
        message.channel.send(embed);

    }).catch().catch((error) => console.log(error));
}

exports.help = {
name: "ftnstats"
}
