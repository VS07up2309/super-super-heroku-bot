module.exports = {
	name: 'kick',
	cooldown: 10,
	description: 'Kick someone',
	execute(message) {
		// Easy way to get member object though mentions.
	var member= message.mentions.members.first();
		//kickt den benutzer
		member.kick().then((member) => {
			//Success
			message.channel.send(member.displayName + " wurde gekickt");
		}).catch(() => {
			//Fail
			message.channel.send("Keine Berechtigung");
		});
	});
			
		
		
  
