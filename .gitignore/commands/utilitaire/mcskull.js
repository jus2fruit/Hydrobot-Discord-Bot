exports.run = (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

   if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("Je n'ai pas les permissions d'envoyer une image !")

   try {
 let pseudo = args.join(" ")
if(!pseudo) return message.channel.send('Tu dois indiquer un pseudo Minecraft !')
    message.channel.send({
        files: [{
          attachment: `https://minotar.net/avatar/${pseudo}/100.png`,
          name: 'skull.png'
        }]
      }).catch(() => {
     message.reply("Erreur ! Ce pseudo n'existe pas !");

 });

    } catch(err) {
       message.channel.send("Erreur ! Ce pseudo n'existe pas !")
    }}

    exports.help = {
    name: "mcskull"
  }
