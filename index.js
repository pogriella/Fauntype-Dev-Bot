const dotenv = require('dotenv');
// const { token } = require('./config.json');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

dotenv.config();

client.once('ready', () => {
	if (client.guilds.cache.size > 1) {
		console.log('Ready and watching ' + client.guilds.cache.size + ' guilds');
	}
	else {
		console.log('Ready and watching ' + client.guilds.cache.size + ' guild');
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(process.env.TOKEN);
