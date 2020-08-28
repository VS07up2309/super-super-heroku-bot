const fs = require('fs');

const Discord = require('discord.js');

var config = new Object();
config.prefix = "!"

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let spamCtrl = require('./addons/spamCtrl.js');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);

});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
});


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
