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
		.setTitle('Minecraft Info')
      		.addField('Username', 'Ingamename: ' + (args))
                .setColor('#0099ff');
	  
	  
	  	mojangjs.getUUID(args).then(uuid => {
    		console.log(uuid);
		player.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100');
		message.channel.send('https://crafatar.com/avatars/' + (uuid) + '?size=100');
		}).catch(err => console.error(err));
	  
	
      
      
 
                   
    message.channel.send(player);
  }
};
