const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
client.user.setActivity(`Use !help.`, {type: "playing"}); 

});

let spamCtrl = require('./addons/spamCtrl.js');

 client.on('message', message => {
if (message.content === '!spam') {  
 spamCtrl.setChannel(message.channel);
    spamCtrl.setStatus(true);
}
});

client.on('message', message => {
if (message.content === '!ss') {
    spamCtrl.setStatus(false);
    
}
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'Ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on("message", (message) => {
     if (message.content.startsWith("!kick")) {
         // Easy way to get member object though mentions.
         var member= message.mentions.members.first();

         member.kick().then((member) => {
             // Successmessage
             message.channel.send(":wave: " + member.displayName + " has been successfully kicked :D ");
 console.log('KICKED');
         }).catch(() => {
              // Failmessage
             message.channel.send("Access Denied");
         });
     }
 });

client.on("message", (message) => {
    if (message.content.startsWith("!ban")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :D ");
console.log('BANNED');
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});

  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.DISCORD_SECRET);
