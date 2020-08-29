const fs = require('fs');
const chalk = require('chalk');
const Discord = require('discord.js');
var config = new Object();
config.prefix = "!"
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const cooldowns = new Discord.Collection();

for (const file of commandFiles)
{
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
client.on('ready', () =>
{
	console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
	client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});
client.on('message', message =>
{
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (command.guildOnly && message.channel.type === 'dm')
	{
		return message.reply('Ich kann diesen befehl nicht in den DMs ausführen!');
	}
	if (command.args && !args.length)
	{
		let reply = `Du hast nicht die richtigen bzw keine argumente angegeben, ${message.author}!`;
		if (command.usage)
		{
			reply += `\nDie korrekte Benutzung währe: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}
	if (!cooldowns.has(command.name))
	{
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id))
	{
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime)
		{
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Bitte warte noch ${timeLeft.toFixed(1)} sekunde(n) bis du den \`${command.name}\` wiederbenutzen kannst.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try
	{
		command.execute(message, args);
	}
	catch (error)
	{
		console.error(error);
		message.reply('Es gab einen Fehler beim Ausführen des Befehls. Kontaktiere bitte den programmierer des bots.');
	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.DISCORD_SECRET);
