module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args, channel) {
      const mojangjs = require('mojangjs');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	
	  
	  	mojangjs.getUUID(args).then(uuid => {
    			console.log(args);
			console.log(uuid);
			message.channel.send(uuid);
		}).catch(err => console.error(err));
	  
	  
	  if (client.user.lastMessage == null) {
                const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === client.user.id, { time: 10000 });
                collector.on('collect', message => {
                    console.log(message.content);
                    collector.stop("Got my message");
                })
            } else {
                console.log(client.user.lastMessage.content);
            };
	  
	  var player = new Discord.MessageEmbed()
			.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100')
			.addField('Username', 'Ingamename: ' + (args))
                	.setColor('#0099ff');
      
      
 
                   
    message.channel.send(player);
  }
};
