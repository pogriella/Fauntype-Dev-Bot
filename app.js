const { token, prefix } = require('./config.json');
const { Client, Intents, MessageEmbed } = require('discord.js');
const embeds = require('./embed.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.once('ready', () => {
	if (client.guilds.cache.size > 1) {
		console.log('Ready and watching ' + client.guilds.cache.size + ' guilds');
	}
	else {
		console.log('Ready and watching ' + client.guilds.cache.size + ' guild');
	}
    client.user.setPresence({ activities: [{ name: 'Gasper make his session plans...', type: 'WATCHING' }], status: 'online' });
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix)) return;

    const command = message.content.split(prefix)[1];

    switch (command) {
        case 'help':
            message.reply({ embeds: [embeds.help] });
            break;
        case 'user':
            message.reply({ embeds: [embeds.user] });
            break;
    }
});

client.login(token);
