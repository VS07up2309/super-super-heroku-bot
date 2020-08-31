module.exports = {
   name: 'embed',
   execute(message, channel) {
     const test = new Discord.MessageEmbed();
           test.setColor = ('#00FDFF');
           test.setTitle = ('Test');
           test.setDescription = ('Lmaooooo');
   }

   channel.send(test);
  };
