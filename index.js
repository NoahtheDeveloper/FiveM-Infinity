const { Client, RichEmbed, Collection, Attachment } = require("discord.js");
const Discord = require('discord.js')

const client = new Client({
    disableEveryone: true
});

const fivem = require("discord-fivem-api");







const activities_list = [ 
    "REDM", 
    "FiveM "
    ]; 

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]); 
    }, 10000); 
});


// Logged Into
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Modules have been Completed. Welcome to FiveM-Infinity`);    
  });




// PLAYERS
client.on('message', async (message) => {
 if (message.author.bot) return;
 var commandphrase = '--stats'; // -stats (ip)
 if (message.content.startsWith(commandphrase)) {
  const args = message.content.slice(commandphrase.length).trim().split(/ +/g);
  const input = args[0];
  if(!input) {
    const noinput = new Discord.MessageEmbed()
    
    .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
    .setDescription("Please provide a valid server ip!")
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.displayAvatarURL); 
  
    return message.channel.send(noinput);
}
    fivem.getServerInfo(input).then(server => {
      
      let result  = [];
      let index = 1;
      for (let player of server.players) {
        result.push(`${index++}. ${player.name} | ${player.id} ID | ${player.ping} ping\n`);
      }
      const Embed = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .setAuthor("Server has been Found.")
      .setTitle(`Players (${server.players.length}/${server.infos.vars.sv_maxClients})`)
      .setDescription(result)
      .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
      .setTimestamp();
      message.channel.send(Embed);
    }).catch(err => {
      console.log(err);
      const Embed = new Discord.MessageEmbed() // embed for server being offline
      .setColor("RED")
      .setAuthor("Server is offline")
      .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
      .setTimestamp();
    message.channel.send(Embed);
    });
 }
});








//FXSERVER
client.on('message', async (message) => {
    if (message.author.bot) return;
    var commandphrase = '--fxserver'; // -stats (ip)
    if (message.content.startsWith(commandphrase)) {
     const args = message.content.slice(commandphrase.length).trim().split(/ +/g);
     const input = args[0];
     if(!input) {
       const noinput = new Discord.MessageEmbed()
       
       .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
       .setDescription("Please provide a valid server IP!")
       .setColor("RED")
       .setAuthor(message.author.tag, message.author.displayAvatarURL); 
     
       return message.channel.send(noinput);
   }
       fivem.getServerInfo(input).then(server => {
         
         let result  = [];
         let index = 1;
         for (let player of server.players) {
           result.push(`${index++}. ${player.name} | ${player.id} ID | ${player.ping} ping\n`);
         }
         const Embed = new Discord.MessageEmbed()
         .setColor("ORANGE")
         .setAuthor("Server has been Found.")
         .setTitle(`Server Information`)
         .setDescription(`${server.infos.server}`)
         .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         .setTimestamp();
         message.channel.send(Embed);
       }).catch(err => {
         console.log(err);
         const Embed = new Discord.MessageEmbed() // embed for server being offline
         .setColor("RED")
         .setAuthor("Server is offline")
         .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         .setTimestamp();
       message.channel.send(Embed);
       });
    }
   });

// RESOURCES
   client.on('message', async (message) => {
    if (message.author.bot) return;
    var commandphrase = '--resources'; // -stats (ip)
    if (message.content.startsWith(commandphrase)) {
     const args = message.content.slice(commandphrase.length).trim().split(/ +/g);
     const input = args[0];
     if(!input) {
       const noinput = new Discord.MessageEmbed()
       
       .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
       .setDescription("Please provide a valid server IP!")
       .setColor("RED")
       .setAuthor(message.author.tag, message.author.displayAvatarURL); 
     
       return message.channel.send(noinput);
   }
       fivem.getServerInfo(input).then(server => {
         
         let result  = [];
         let index = 1;
         for (let player of server.players) {
           result.push(`${index++}. ${player.name} | ${player.id} ID | ${player.ping} ping\n`);
         }
         const Embed = new Discord.MessageEmbed()
         .setColor("ORANGE")
         .setAuthor("Server has been Found.")
         .setTitle(`Server Information | Listing Resources`)
         .setDescription(`${server.infos.resources}`)
         .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         .setTimestamp();
         message.channel.send(Embed);
       }).catch(err => {
         console.log(err);
         const Embed = new Discord.MessageEmbed() // embed for server being offline
         .setColor("RED")
         .setAuthor("Server is offline")
         .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         .setTimestamp();
       message.channel.send(Embed);
       });
    }
   });










// SEARCH
client.on('message', async (message) => {
    if (message.author.bot) return;
    var commandphrase = '--search'; // -stats (ip)
    if (message.content.startsWith(commandphrase)) {
     const args = message.content.slice(commandphrase.length).trim().split(/ +/g);
     const input = args[0];
     if(!input) {
       const noinput = new Discord.MessageEmbed()
       
       .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
       .setDescription("Please provide a valid server IP!")
       .setColor("RED")
       .setAuthor(message.author.tag, message.author.displayAvatarURL); 
     
       return message.channel.send(noinput);
   }
       fivem.getServerInfo(input).then(server => {
         
         let result  = [];
         let index = 1;
         for (let player of server.players) {
           result.push(`**${index++}**. ${player.name}\n`);
         }
         const Embed = new Discord.MessageEmbed()
         .setColor("ORANGE")
         .setAuthor("Server has been Found.")
         .setTitle(`Server Information | Full Information`)
         .setDescription(`**Players:** (${server.players.length}/${server.infos.vars.sv_maxClients})\n\n**Player List:**\n${result}\n **Resources:** (${server.infos.resources.length})\n**FxServer:** ${server.infos.server}\n**Server IP:** (${args[0]})\n**OneSync Enabled:** (${server.infos.vars.onesync_enabled})`)
         .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         
         
         .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         .setTimestamp();
         message.channel.send(Embed);
       }).catch(err => {
         console.log(err);
         const Embed = new Discord.MessageEmbed() // embed for server being offline
         .setColor("RED")
         .setAuthor("Server is offline")
         .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
         .setTimestamp();
       message.channel.send(Embed);
       });
    }
   });



   client.on('message', message => { 
    if(message.content === '--help') { 
        const noainput = new Discord.MessageEmbed()
      .setTitle("__**FiveM Infinity | Commands**__") 
      .setColor("ORANGE")
      .setDescription("-search (IP) | Displays IP Information\n-resources (IP) | Displays IP Resources\n-fxserver (IP) | Displays FXVersion\n-stats (IP) | Displays Server Players")
      .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
      .setFooter('FiveM-Infinity','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIIR2Q_3WDI6-nQons_bjZF-dqPiaimnXmA&usqp=CAU')
      return message.channel.send(noainput);
    }
  });








   client.login('PUT TOKEN HERE');
