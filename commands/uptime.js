module.export = { 
  name: 'uptime',
  execute(message) {
  const moment = require("moment");
require("moment-duration-format");
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
message.channel.send(duration);
}
};
