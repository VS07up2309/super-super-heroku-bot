module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args) {
      const minecraftAPI = require('minecraft-api');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	var player = new Discord.MessageEmbed()
	  
			.addField('Username', 'Ingamename: ' + (args))
                	.setColor('#0099ff');
	  	
		async function foo() {
    try{
        const uuid = await MinecraftAPI.uuidForName(args);
	message.channel.send(uuid);
	player.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100');
    } catch(err){
        console.error(err);
    }
}
	  
	  
	  
	                  
	 
      
      
 
                   
    message.channel.send(player);
  }
};
