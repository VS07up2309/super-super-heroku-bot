module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args, client) {
      const mojangjs = require('mojangjs');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    var player = new Discord.MessageEmbed()
	
	  
	  	async function foo() {
    try{
        const uuid = await MinecraftAPI.uuidForName(args);
       
			player.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100');
			player.addField('Username', 'Ingamename: ' + (args));
                	player.setColor('#0099ff');
    } catch(err){
        console.error(err);
    }
}
	  
	  
	  
	  
	 
      
      
 
                   
    message.channel.send(player);
  }
};
