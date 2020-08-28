module.exports = {
	name: 'kick',
	cooldown: 10,
	description: 'Kick someone',
	execute(message) {
		client.on("message", (message) => {
    
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    
});
	},
};
