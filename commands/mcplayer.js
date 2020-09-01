module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args) {
      const MinecraftAPI = require('minecraft-api');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	var player = new Discord.MessageEmbed()
	  
			.addField('Username', 'Ingamename: ' + (args))
                	.setColor('#0099ff');
	  	
		MinecraftAPI.uuidForName(args)
              .then(uuid => player.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100'))
	      //.then(uuid => message.channel.send(uuid))
              .catch(err => console.log(err))
    

	  
	  
	  
	                  
	 
      
      
 
                   
    message.channel.send(player);
  }
};
