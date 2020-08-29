const prefix = "!"
module.exports = {
	name: 'stp',
	description: 'Schere stein papier.',
	execute(message, args) {
const acceptedReplies = ['stein', 'papier', 'schere'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

	const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("Unentschieden.");
        
        switch (choice) {
            case 'stein': {
                if (result === 'papier') return message.reply('I won!');
                else return message.reply('You won!');
            }
            case 'papier': {
                if (result === 'schere') return message.reply('I won!');
                else return message.reply('You won!');        
            }
            case 'schere': {
                if (result === 'stein') return message.reply('I won!');
                else return message.reply('You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }

};
