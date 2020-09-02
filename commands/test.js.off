module.exports = {
  name: 'test',
  execute(message, args, channel) {
    const Discord = require('discord.js');
	  const MinecraftAPI = require('minecraft-api');
    const info = new Discord.MessageEmbed()
    if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
    
    async function foo() {
    try{
        const uuid = await MinecraftAPI.uuidForName(args);
        console.log(uuid);
	info.setColor('#0099ff');
	    info.setTitle('Some title');
	    info.setThumbnail('https://crafatar.com/avatars/' + (uuid) + '?size=100');
	message.channel.send(info);
    } catch(err){
        console.error(err);
    }
}
    
    
    
    
    
    }
    };
