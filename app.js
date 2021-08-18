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

    switch (command) {
        case 'help':
            if (args) {
                switch (args) {
                    case 'user':
                        message.reply('Wow, including arguments, huh.');
                        break;
                    default:
                        message.reply('Invalid argument. Expected a valid command and received \'' + args + '\'.');
                }
            }
            else {
                message.reply({ embeds: [embeds.help] });
            }
            break;
        case 'user':
            message.reply({ embeds: [embeds.user] });
            break;
        case 'menu':
            let author = message.author.id;
            message.reply({ embeds: [embeds.menu] }).then(message => {
                let thisMessage = message;
                message.react('🤔')
                // message.react('')
                // message.react('')
                let filter = (reaction, user) => reaction.emoji.name === '🤔' && user.id === author;
                let collector = message.createReactionCollector({ filter, time: 15000 });
                collector.on('collect', r => {
                    console.log(`Collected ${r.emoji.name}`)
                    thisMessage.edit({ content: 'Success', embeds: [] });
                });
            });
    }
});

client.login(token);
