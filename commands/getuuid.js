module.exports = {
    name: 'getuuid',
    description: 'get uuid by name',
    args: true,
    execute(message, args) {
        const MinecraftAPI = require('minecraft-api');
    
    if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    getuuid();
	    
	    
        function getuuid() {
            MinecraftAPI.uuidForName('${args}')
              .then(uuid => console.log(uuid))
                .catch(err => console.log(err))
        }
    }
};
