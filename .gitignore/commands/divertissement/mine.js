const { RichEmbed } = require("discord.js");

exports.run = (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    

    let replys = [
        "<:Redstone_Dust:482571847112851486> de la Redstone !",
        "<:meraude:482571846701678593> un Émeraude !",
        "<:Manyullyn_Ingot:482571847104200726> un lingot de Draconium",
        "<:Lapislazuli:482571847087423488> du Lapis Lazuli",
        "<:ironingot_icon32:482571846911262720> un lingot de Fer",
        "<:Gold_Ingot:482571846898941982> un lingot d'Or",
        "<:diamondgem_icon32:482571846668255235> un Diamant",
        "<:Charbon_Indev:482571846252756993> du Charbon",
        "<:Awakened_Draconium:482572079640870913> un lingot de Draconium enrichi"
    ];
    
const reponse = (replys[Math.floor(Math.random() * replys.length)])

const user = message.author;

const embed = new RichEmbed()
.setAuthor(`${user.username}`, user.displayAvatarURL)
.addField("<:Diamond_Pickaxe:482574288843571200> Tu as miné...", reponse)
.setColor('RANDOM')
.setFooter("Mini-jeu", bot.user.avatarURL)
.setTimestamp()
message.channel.send(embed)

}

exports.help = {
    name: "mine"
  }
