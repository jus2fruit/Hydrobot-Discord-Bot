const ytsearch = require('youtube-search');

exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;


    if(!args[0]) return message.reply("Tu dois m'indiquer une recherche !");
    ytsearch(args.join(' '), {maxResults: 1, key: process.env.YOUTUBE}, (err, info) => {
		message.channel.send(`Voici le résultat de ta recherche : \n ${info[0].link}`);
	});
};

exports.help = {
    name: "youtube"
  }
