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
			
		}).catch(err => console.error(err));
	  
	player.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100');
			player.addField('Username', 'Ingamename: ' + (args));
                	player.setColor('#0099ff');
      
      
 
                   
    message.channel.send(player);
  }
};
