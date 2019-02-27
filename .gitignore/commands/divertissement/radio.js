const { RichEmbed } = require("discord.js");
const VIP = require('../../assets/vip.json');

exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    if (!message.guild.member(bot.user).hasPermission('CONNECT')) return message.channel.send("Je ne peux pas me connecter au salon !");
    if (!message.guild.member(bot.user).hasPermission('SPEAK')) return message.channel.send("Je ne peux pas parler !");
    
    if(!VIP.some(perm => message.author.id.includes(perm))) return message.channel.send("Il faut être VIP pour utiliser le système de radio !")

    let radio
    const channel = message.member.voiceChannel;
            if (!channel) return message.channel.send("Tu dois être dans un salon vocal !");
            if (args.join(" ")) {
                if (args.join(" ") === "Virgin" || args.join(" ") === "virgin") {
                    message.channel.send(":musical_note: | **Virgin Radio**");
                    radio = "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3";
                
                } else if (args.join(" ") === "rtl" || args.join(" ") === "RTL") {
                    message.channel.send(":musical_note: | **RTL**");
                    radio = "http://icecast.rtl.fr/rtl-1-44-128.mp3";
                
                } else if (args.join(" ") === "nrj" || args.join(" ") === "NRJ") {
                    message.channel.send(":musical_note: | **NRJ**");
                    radio = "http://185.52.127.132/fr/30001/mp3_128.mp3?origine=fluxradios";

                } else if (args.join(" ") === "skyrock" || args.join(" ") === "Skyrock") {
                    message.channel.send(":musical_note: | **Skyrock**");
                    radio = "http://icecast.skyrock.net/s/natio_mp3_128k?tvr_name=tunein16&tvr_section1=128mp3";

                } else if (args.join(" ") === "rfm" || args.join(" ") === "RFM") {
                    message.channel.send(":musical_note: | **RFM**");
                    radio = "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3";

                } else if (args.join(" ") === "franceinfo" || args.join(" ") === "Franceinfo") {
                    message.channel.send(":musical_note: | **France Info**");
                    radio = "http://roo8ohho.cdn.dvmr.fr/live/franceinfo-midfi.mp3";

                } else if (args.join(" ") === "rtl2" || args.join(" ") === "RTL2") {
                    message.channel.send(":musical_note: | **RTL 2**");
                    radio = "http://streaming.radio.rtl2.fr/rtl2-1-48-192";
                
                } else {   
                    return message.channel.send("Radio non disponible ! \nSi vous avez des suggestions de radio, faites `h!suggest`")
                }
                message.member.voiceChannel.join().then(connection => {
                    require('http').get(radio, (res) => {
                        connection.playStream(res);
                    })
                })
                    
            } else {
                const user = message.author;
                    const embed2 = new RichEmbed()
                    .setColor('RANDOM')
                    .setAuthor(user.username, user.displayAvatarURL)
                    .setTitle(":musical_note: | Liste des radios :")
                    .setDescription("-virgin \n-rtl \n-nrj \n-skyrock \n-rfm \n-franceinfo \n-rtl2")
                    .setTimestamp()

                    return message.channel.send(embed2)
            }
        }

exports.help = {
    name: "radio"
    }
