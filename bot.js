const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NzQ4NjQ2NjI3ODk5NjA1MTUy.X0gdgQ.-N_c3m581RZ6oQIdZbp8GK8z6OQ');
