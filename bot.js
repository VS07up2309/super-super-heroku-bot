const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

let moderatorRole = message.guild.roles.get('748683300192911390');

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

if(msg.member.roles.has(moderatorRole.id)) {
    // the user has the role
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
    } else {

return message.reply("Sorry, an error occurred.")
}

});
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
