module.exports = {
   name: 'id',
   description: 'name/id vom ausführer anzeigen',
   execute(message) {
     const Discord = require("discord.js");
      
      var embed = new Discord.MessageEmbed() 
    .setColor("#115863")
    .addField("User", message.author.username)
    .addField("ID", message.author.id);

message.channel.send(embed);
   }
};
