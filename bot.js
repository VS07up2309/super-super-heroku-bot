const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.DISCORD_SECRET);
