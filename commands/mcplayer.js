module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args, channel) {
      const mojangjs = require('mojangjs');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	  var player = new Discord.MessageEmbed()
	  
	  	mojangjs.getUUID(args).then(uuid => {
    			console.log(args);
			console.log(uuid);
			message.channel.send({embed: {
  			color: 3447003,
  			thumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100'),
			field('Username', 'Ingamename: ' + (args))
			}});
			
			//player.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100');
			//player.addField('Username', 'Ingamename: ' + (args));
                	//player.setColor('#0099ff');
		}).catch(err => console.error(err));
	  
	
      
      
 
                   
    message.channel.send(player);
  }
};
