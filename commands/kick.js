module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	execute(message) {
		const taggedUser = message.mentions.users.first();

		taggedUser.kick();
	},
};
