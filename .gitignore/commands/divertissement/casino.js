exports.run = (bot, message) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const slot1 = [
        ":apple:",
        ":newspaper:",
        ":watch:",
        ":gear:",
        ":telephone_receiver:",
        ":trophy:"
    ];

const reponse1 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse2 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse3 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse4 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse5 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse6 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse7 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse8 = (slot1[Math.floor(Math.random() * slot1.length)])
const reponse9 = (slot1[Math.floor(Math.random() * slot1.length)])

    message.channel.send(`=[Machine à sous]= \n= ${reponse1} = ${reponse2} = ${reponse3} = \n> ${reponse4} = ${reponse5} = ${reponse6} < \n= ${reponse7} = ${reponse8} = ${reponse9} = \n==============`)
     if(reponse4 == reponse5 && reponse5 == reponse6 && reponse4 == reponse6 && reponse4 != null && reponse5 != null && reponse6 != null) {
       message.channel.send("Tu as gagné ! Bien joué à toi ! :thumbsup:")
     }else{
       message.channel.send("Tu as perdu...")
  }
}

exports.help = {
    name: "casino"
  }
