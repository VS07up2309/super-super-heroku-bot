module.exports = {
   name: 'embed',
   execute(message) {
     const Discord = require("discord.js");
      
      var embed = new Discord.MessageEmbed() 
    .setDescription("Du bist ein dummer hund vento.")
    .setColor("#115863")
    .addField("Usuario", message.author.username)
    .addField("ID", message.author.id)
    .addField("Creación", message.author.createdAt);

message.channel.send(embed);
   }
};
