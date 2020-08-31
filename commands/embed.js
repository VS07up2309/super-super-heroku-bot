module.exports = {
   name: 'embed',
   execute(message) {
     const Discord = require("discord.js");
      
      var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setDescription("Usuario rikolino.")
    .setColor("#3535353")
    .addField("Usuario", '${message.author.username}#${message.author.discriminator}')
    .addField("ID", message.author.id)
    .addField("Creación", message.author.createdAt);

message.channel.send(embed);
   }
};
