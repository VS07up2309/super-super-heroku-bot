module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args, channel) {
      const MinecraftAPI = require('minecraft-api');
      const Discord = require('discord.js');
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
	const uuid = MinecraftAPI.uuidForName(args);
      
      
      var player = new Discord.MessageEmbed()
		.setTitle('Minecraft Info')
      		.addField('Username', 'Ingamename: ${args}')
      		.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100')
                .setColor('#0099ff');
                   
    message.channel.send(player);
  }
};
