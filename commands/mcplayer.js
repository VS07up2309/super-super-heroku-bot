module.exports = {
  name: 'player',
  description: 'minecraft player info',
  execute(message, args) {
      const MinecraftAPI = require('minecraft-api');
      
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
    MinecraftAPI.uuidForName(args)
              .then(uuid => message.channel.send(uuid))
              .catch(err => console.log(err));
      
      
      var player = new Discord.MessageEmbed()
                   .setThumbnail('https://crafatar.com/avatars/' + (uuid || '') + '?size=100')
                   .setColor('#0099ff')
                   .setTimestamp();
                   
    channel.send(exampleEmbed);
  }
};
