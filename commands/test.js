module.exports = {
  name: 'test',
  execute(message, args) {
    const MinecraftAPI = require('minecraft-api');
    
    if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    var id = new Object();
    MinecraftAPI.uuidForName(args)
    .then(uuid => message.channel.send(uuid))
    .catch(err => console.log(err))
    
    
    
    }
    };
