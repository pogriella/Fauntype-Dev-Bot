const { token, prefix } = require('./config.json');
const { Client, Intents } = require('discord.js');
const embeds = require('./embed.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_BANS,
     Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

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

    const command = message.content.slice(prefix.length).split(/ +/).join(' ').split(' ')[0];
    let args = message.content.split(' ')[1];
    console.log(command);

    switch (command) {
        case 'help':
            embeds.help.execute(message, args);
            break;
        case 'user':
            embeds.user.execute(message);
            break;
        case 'menu':
            embeds.menu.execute(message);
    }
});

client.login(token);
