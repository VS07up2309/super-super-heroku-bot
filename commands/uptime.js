module.exports = {
    name: 'uptime',
    execute(message) {
      const time = client.uptime;
      message.channel.send(time);
  }
};
