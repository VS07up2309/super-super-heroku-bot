module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args, client) {
      const mojangjs = require('mojangjs');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	
	  
	  	mojangjs.getUUID(args).then(uuid => {
    			console.log(args);
			console.log(uuid);
			
		}).catch(err => console.error(err));
	  
	  
	  
	  
	  var player = new Discord.MessageEmbed()
			.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100')
			.addField('Username', 'Ingamename: ' + (args))
                	.setColor('#0099ff');
      
      
 
                   
    message.channel.send(player);
  }
};
