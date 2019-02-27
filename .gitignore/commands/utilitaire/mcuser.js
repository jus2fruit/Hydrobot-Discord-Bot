const { RichEmbed } = require("discord.js");
const got = require("got")
const cheerio = require("cheerio")
const MojangAPI = require("mojang-api")

exports.run = async (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    const args = message.content.split(" ");

         if (!args[1]) {
  message.channel.send("Tu dois m'indiquer un pseudo !");
  return;
}
const username = args[1]

try {

async function getShortUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[2];

    if (!input) {
        return;
    }

    return input.attribs['value'];
}


async function getLongUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[1];

    if (!input) {
        return;
    }

    return input.attribs['value'];
}





const shortuuid = await getShortUUID(username);
const longuuid = await getLongUUID(username);
 if (!shortuuid && !longuuid) {
  message.channel.send(`Le pseudo **${username}** n'existe pas!`);
  return;
 }






MojangAPI.nameHistory(`${shortuuid}`, function(err, res) {
	    if (err)
        console.log(err);
            const lastName = res[res.length - 2];
            const lastName2 = res[res.length - 3];
            const lastName3 = res[res.length - 4];
            const lastName4 = res[res.length - 5];
            const lastName5 = res[res.length - 6];
            const lastName6 = res[res.length - 7];
            const lastName7 = res[res.length - 8];
            const lastName8 = res[res.length - 9];

         if (!lastName)
         {
         	const embed = new RichEmbed()
.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `**${username}** n'a pas changé de pseudo !`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `**${username}** n'a pas changé de pseudo !`)
return message.channel.send(embed)
         }
         if (!lastName2)
         {
         	           const at = new Date(lastName.changedToAt);
                     const name1 = lastName.name;
         	         	const embed = new RichEmbed()
.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed);
         }

         if (!lastName3)
         {
         	  const at = new Date(lastName.changedToAt);
            const name1 = lastName.name;
            const name2 = lastName2.name;
         	const embed = new RichEmbed()
.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed)

         }
            if (!lastName4)
            {
            const at = new Date(lastName.changedToAt);
            const name1 = lastName.name;
            const name2 = lastName2.name;
            const name3 = lastName3.name;
         	const embed = new RichEmbed()

         	.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2} <- ${name3}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed)


            }
            if (!lastName5)
            {
            const at = new Date(lastName.changedToAt);
            const name1 = lastName.name;
            const name2 = lastName2.name;
            const name3 = lastName3.name;
            const name4 = lastName4.name;
         	const embed = new RichEmbed()

         	.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2} <- ${name3} <- ${name4}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed)

            }
            if (!lastName6)
            {
          const at = new Date(lastName.changedToAt);
          const name1 = lastName.name;
          const name2 = lastName2.name;
          const name3 = lastName3.name;
          const name4 = lastName4.name;
          const name5 = lastName5.name;
         	const embed = new RichEmbed()

         	.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed)
            }
            if (!lastName7)
            {
          const at = new Date(lastName.changedToAt);
          const name1 = lastName.name;
          const name2 = lastName2.name;
          const name3 = lastName3.name;
          const name4 = lastName4.name;
          const name5 = lastName5.name;
          const name6 = lastName6.name;
         	const embed = new RichEmbed()

         	.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5} <- ${name6}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed)
            }
            if (!lastName8)
            {
          const at = new Date(lastName.changedToAt);
          const name1 = lastName.name;
          const name2 = lastName2.name;
          const name3 = lastName3.name;
          const name4 = lastName4.name;
          const name5 = lastName5.name;
          const name6 = lastName6.name;
          const name7 = lastName7.name;
         	const embed = new RichEmbed()

         	.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5} <- ${name6}  <- ${name7}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed)
            }
         else {
         	const at = new Date(lastName.changedToAt);
          const name1 = lastName.name;
          const name2 = lastName2.name;
          const name3 = lastName3.name;
          const name4 = lastName4.name;
          const name5 = lastName5.name;
          const name6 = lastName6.name;
          const name7 = lastName7.name;
          const name8 = lastName8.name;
         	const embed = new RichEmbed()
.setTitle("Profil Minecraft")
.setColor('RANDOM')
.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
.addField("🏷 | Pseudo :", username)
.addField("💳 | UUID raccourci :", `\`${shortuuid}\``)
.addField("💳 | UUID :", `\`${longuuid}\``)
.addField("👥 | Skin :", `[Téléchargement](https://crafatar.com/skins/${shortuuid}.png)`)
.addField(":film_frames: | Historique des pseudos :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5} <- ${name6} <- ${name7} <- ${name8}`)
.addField(":alarm_clock: | Dernier changement de pseudo :", `${at}`)
return message.channel.send(embed);
}});
} catch(err) {
	message.channel.send("Une erreur est survenu ! Merci de réessayer ulterieurement")
}}

      exports.help = {
        name: "mcuser"
      }
