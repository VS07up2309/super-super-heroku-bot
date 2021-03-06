module.exports = {
	name: 'kick',
	usage: '<user>',
	guildOnly: true,
	cooldown: 3,
	description: 'Kick someone',
	execute(message) {
		if (!message.member.hasPermission("KICK_MEMBERS")) {
    message.reply('Keine Berechtigung zum Kicken...')
    return;
  }
		
		
const user = message.mentions.users.first();
     // If we have a user mentioned
     if (user) {
       // Now we get the member from the user
       const member = message.guild.member(user);
       // If the member is in the guild
       if (member) {
         /**
          * Kick the member
          * Make sure you run this on a member, not a user!
          * There are big differences between a user and a member
          */
         member
           .kick('Optional reason that will display in the audit logs')
           .then(() => {
             // We let the message author know we were able to kick the person
             message.reply(`${user.tag} Wurde erfolgreich gekickt`);
           })
           .catch(err => {
             // An error happened
             // This is generally due to the bot not being able to kick the member,
             // either due to missing permissions or role hierarchy
             message.reply('Fehler beim Kicken');
             // Log the error
             console.error(err);
           });
       } else {
         // The mentioned user isn't in this guild
         message.reply("Dieser Benutzer ist nicht in diesem Server!");
       }
       // Otherwise, if no user was mentioned
     } else {
       message.reply("Keinen Benutzer zum kicken markiert!");
     }
   }
 };
	
	
		
		
  
