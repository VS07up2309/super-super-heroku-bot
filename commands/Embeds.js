module.exports = {
  name: 'embed',
  execute(message) {
    const test = new Discord.MessageEmbed()
          .setColor('#00FDFF')
          .setTitle('Test')
          .setDescription('Lmaooooo');
  }
  
  channel.send(test);
 };
