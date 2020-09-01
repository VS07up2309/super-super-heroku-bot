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
    			console.log(uuid);
			message.channel.send('https://crafatar.com/avatars/' + (uuid) + '?size=100');
			var player = new Discord.MessageEmbed()
			.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100')
			.addField('Username', 'Ingamename: ' + (args))
                	.setColor('#0099ff');
		}).catch(err => console.error(err));
	  
	
      
      
 
                   
    message.channel.send(player);
  }
};
