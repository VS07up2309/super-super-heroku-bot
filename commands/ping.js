module.exports = {
	name: 'ping',
	cooleown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
