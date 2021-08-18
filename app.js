const { token, prefix } = require('./config.json');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.once('ready', () => {
	if (client.guilds.cache.size > 1) {
		console.log('Ready and watching ' + client.guilds.cache.size + ' guilds');
	}
	else {
		console.log('Ready and watching ' + client.guilds.cache.size + ' guild');
	}
    client.user.setActivity('WIP');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix)) return;

    const command = message.content.split(prefix)[1];

    switch (command) {
        case 'hi':
            message.reply('Hello!');
            break;
    }
});

client.login(token);
