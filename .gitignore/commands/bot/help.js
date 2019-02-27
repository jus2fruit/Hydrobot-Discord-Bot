const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const user = message.author;

    const embed = new RichEmbed()
        .setTitle("Voici les commandes du serveur!")
        .setDescription("Mon préfixe est \`h!\`")
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter("En cas de bug d'une commande, faites h!report !", bot.user.avatarURL)
        .setAuthor(user.tag, user.avatarURL)
        .addField(":books: | Bot", "```botinfo \nhelp \ninvite \nping \nserverlist \nsuggest \nsupport \nversion```", true)
        .addField(":mag_right: | Informations", "```avatar \nemoji \ninfoemoji \ninforole \npermission \nreport \nserverinfo \ntopinvites \nuserinfo``` ", true)
        .addField(":tools: | Modération", "```ban \nclear \nkick \nmute \nsoftban \ntempmute \nunban \nunmute```", true)
	    .addField(":frame_photo: | Image", "```achievement \napprouved \nbalance \nbeautiful \nbillet \nblur \nbravery \nbrazzers \nbrilliance \ncrush \ndelete \ninvert \nmissionpassed \npixel \npresident \nrip \nshit \ntattoo \nthuglife \ntobecontinued \ntriggered \nwanted \nwasted```", true)
        .addField(":balloon: | Divertissement", "```8ball \nascii \nbigtext \nboutade \ncasino \ncat \ncook \ncowsay \ncowthink \ngif \nmine \npfc \nroll \ntableflip```", true)
        .addField(":gear: | Utilitaire", "```date \nftnstats \ngiveaway \ngoogle \nitunes \nlatex \nmcserver \nmcskull \nmcuser \nweather \nyoutube```", true)
        .addField(":musical_note: | Musique (VIP)", "```meme \nradio \nskip \nstop```", true)
	    .addField(":lock: | Administration", "```createrole \nembedsay \npoll \nsay```", true)
        .addField(":necktie: | Administration bot", "```eval \nlogout \nsetstatus```", true)
        message.channel.send(embed)
        }

 exports.help = {
    name: "help"
  }
