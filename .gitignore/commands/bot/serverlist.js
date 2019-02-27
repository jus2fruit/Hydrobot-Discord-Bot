const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    let tosend = [];
    bot.guilds.forEach((guild) => { tosend.push(`\`${guild.name}\` | ${guild.memberCount} membres`) })


    let pages = [];
for (let i = 0; i < tosend.length;) {
    if ((i + 9) > tosend.length) {
        pages.push(tosend.slice(i, (i + 9) - ((i + 9) - tosend.length)).join("\n"));
        break;
    } else {
        pages.push(tosend.slice(i, i + 9).join("\n"));
        i += 9
    };
}
    let page = 1;


    const embed = new RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Liste des serveurs")
    .setColor('RANDOM')
    .setFooter(`Page: ${page}/${pages.length}`)
    .setDescription(pages[page-1])
    .setTimestamp();

    message.channel.send(embed).then(msg => {
    if (!message.guild.member(bot.user).hasPermission('ADD_REACTIONS')) return;


        msg.react("◀").then(() => {
            msg.react("▶")

            const backF = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const ForF = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;

            const back = msg.createReactionCollector(backF, { time: 180000 });
            const For = msg.createReactionCollector(ForF, { time: 180000 });

            back.on('collect', async r => {
                r.remove(message.author.id)
                if (page === 1) return r.remove(message.author.id);
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });

            For.on('collect', async r => {
                r.remove(message.author.id)
                if (page === pages.length) return r.remove(message.author.id);
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });
        });
    });
}

exports.help = {
    name: "serverlist"
  }
