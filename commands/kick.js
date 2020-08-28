module.exports = {
	name: 'kick',
	cooldown: 10,
	description: 'Kick someone',
	execute(message) {
		
    
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " wurde erfolgreich gekickt ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Keine Rechte");
        });
    
};
	},
};
