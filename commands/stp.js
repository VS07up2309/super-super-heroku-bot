const prefix = "!"
module.exports = {
	name: 'stp',
	description: 'Schere stein papier.',
	execute(message, args) {
const acceptedReplies = ['stein', 'papier', 'schere'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

	const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}stp <stein|papier|schere>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Nur das wird akzeptiert: \`${acceptedReplies.join(', ')}\``);
        
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("Unentschieden.");
        
        switch (choice) {
            case 'stein': {
                if (result === 'papier') return message.reply('Ich hab gewonnen!');
                else return message.reply('Du gewinnst');
            }
            case 'papier': {
                if (result === 'schere') return message.reply('Ich hab gewonnen!');
                else return message.reply('Du gewinnst!');        
            }
            case 'schere': {
                if (result === 'stein') return message.reply('Ich hab gewonnen!');
                else return message.reply('Du gewinnst!');
            }
            default: {
                return message.channel.send(`Nur diese Argumente werden akzeptiert: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }

};
