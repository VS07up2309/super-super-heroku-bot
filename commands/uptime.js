module.exports = {
    name: 'uptime',
    execute(message, client) {
      const time = client.uptime;
      message.channel.send(time);
  }
};
