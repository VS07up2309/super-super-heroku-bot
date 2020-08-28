module.exports = {
	name: 'ping',
	cooledown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
