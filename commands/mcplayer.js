module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args, channel) {
      const MinecraftAPI = require('minecraft-api');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	MinecraftAPI.uuidForName(args)
              .then(uuid => const playerid = uuid)
              .catch(err => console.log(err));
      
      
      var player = new Discord.MessageEmbed()
		.setTitle('Minecraft Info')
      		.addField('Username', 'Ingamename: ${args}')
      		.setThumbnail('https://crafatar.com/avatars/' + (playerid) + '?size=100')
                .setColor('#0099ff');
                   
    message.channel.send(player);
  }
};
