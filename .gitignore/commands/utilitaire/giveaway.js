const { RichEmbed } = require("discord.js");
const ms = require('ms')

exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    
    if(message.author.id !== "406135526005932043") return message.channel.send("La commande giveaway est en cours de développement, elle sera disponible sous peu !")
    let time = args[0];
    if(!args[0]) return message.channel.send("Tu dois indiquer un temps, exemple : 10m (s=seconde, m=minute, h=heure, d=jour)")
    if(isNaN(parseInt(args[0]))) return message.channel.send("Erreur de syntaxe")
    if(args[0] === '5s' || args[0] === '4s' || args[0] === '3s' || args[0] === '2s' || args[0] === '1s' || args[0] === '0s') return message.channel.send("Tu dois indiquer un temps supérieur à 5s")
    if(!args[1]) return message.channel.send("Tu dois indiquer une récompense")
    message.delete()
    let channel, giveaway;
    
    const prefix = `/giveaway ${time} `;
    const a = message.content.slice(prefix.length).split(' ');
    const prize = a.join(' ')
    let actualTime = ms(time)

    

    try{
        if(!channel) {
          let reaction = '🎉';
          let giveawayMessage = await message.channel.send("", {
              embed: new RichEmbed()
                .setTitle("GIVEAWAY! 🎉")
                .setDescription(`Un giveaway a été lancé par <@${message.author.id}> ! Réagis avec la réaction ${reaction} pour avoir une chance de gagner **${prize}**.`)
                .setColor('RANDOM')
            .setFooter(`Le giveaway se stop dans ${time}. Le gagnant recevra sa récompense une fois le giveaway terminé.`)
            });
        await giveawayMessage.react(reaction);
    
        let giveawayMessageID = giveawayMessage.id;
        channel = message.channel.id;
          
            let interval = await setInterval (function () {
              time = ms(time)
              time = time - 5000
              time = ms(time)
              
              if(time === '5s' || time === '4s' || time === '3s' || time === '2s' || time === '1s' || time === '0s') clearInterval(interval)
              giveawayMessage.edit("", {
                  embed: new RichEmbed()
                  .setTitle("GIVEAWAY! 🎉")
                  .setDescription(`Un giveaway a été lancé par <@${message.author.id}> ! Réagis avec la réaction ${reaction} pour avoir une chance de gagner **${prize}**.`)
                  .setColor('RANDOM')
                  .setFooter(`Le giveaway se stop dans ${time}. Le gagnant recevra sa récompense une fois le giveaway terminé.`)
                });
            }, 5 * 1000);
          
        giveaway = bot.setTimeout(async () => {
            let giveawayMessage = await message.channel.fetchMessage(giveawayMessageID);
    
            let winners = [];
            if (giveawayMessage.reactions.get(reaction)) {
              winners = giveawayMessage.reactions.get(reaction).users.filter(user => !user.bot).map(u => u.id);
            }
    
            let winner;
            while (!winner && winners.length) {
              winner = winners[Math.floor(Math.random() * winners.length)];
              winners.splice(winners.indexOf(winner), 1);
              winner = await bot.fetchUser(winner).catch(() => {});
            }
    
            if (winner) {
    
              giveawayMessage.edit("", {
                  embed: new RichEmbed()
                    .setTitle("Le giveaway est terminé !")
                    .setDescription(`${winner} gagne ce giveway ! Tu gagnes ${prize}!\nMerci de votre participation !`)
                    .setColor('RANDOM')
              }).catch(err => {
                console.log(err);
              });
    
                winner.send("", {
                  embed: new RichEmbed()
                    .setTitle("Félicitation")
                    .setDescription(`Tu gagnes le giveaway du serveur **${message.guild.name}** ! Tu viens de gagner **${prize}**!`)
                    .setColor('RANDOM')
              }).catch(() => {});
              }
              else {
                giveawayMessage.edit("", {
                  embed: new RichEmbed()
                    .setTitle("Le giveaway est terminé !")
                    .setDescription(`Malheureusement, personne n'a participé et apparemment, il n'y a pas de gagnant. 😕`)
                    .setColor('RANDOM')
              }).catch(e => {
                  bot.log.error(e);
                });
              }
    
              channel = null;
          }, actualTime);
        }
        else {
          if (args[0] === 'end') {
            bot.clearTimeout(giveaway);
            channel = null;
    
            message.channel.send("", {
                  embed: new Discord.RichEmbed()
                    .setTitle("Le giveaway est terminé !")
                    .setDescription(`Le giveaway a été arrêté par : ${message.author.tag}. Désolé, mais pas de récompense cette fois !`)
                    .setColor('RANDOM')
              }).catch(e => {
              bot.log.error(e);
            });
          }
          else {
            return console.log('ew')
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

    exports.help = {
        name: "giveaway"
      }
