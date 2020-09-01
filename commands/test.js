module.exports = {
  name: 'test',
  execute(message, args) {
    const MinecraftAPI = require('minecraft-api');
    
    if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    
    MinecraftAPI.uuidForName(args)
    .then(uuid => uuid = id)
    .catch(err => console.log(err))
    
    message.channel.send(id);
    
    }
    };
