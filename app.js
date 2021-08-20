const { token, prefix } = require('./config.json');
const { Client, Intents } = require('discord.js');
const commands = require('./commands.js');

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

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.find(role => role.name === "Guest");
    const general = member.guild.channels.cache.find(channel => channel.name === "general");

    member.roles.add(role);
    general.send(`Welcome to FaunType\'s Dev Server, ${member}`)
});

client.on('messageReactionAdd', reaction => {
    let thisMessage = reaction.message.id;
    switch (thisMessage) {
        case 'hi':
            break;
    default:
        break;
    }
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix)) return;

    const command = message.content.slice(prefix.length).split(/ +/).join(' ').split(' ')[0];
    let args = message.content.split(' ')[1];
    let args2 = message.content.split(' ')[2];
    if (message.mentions.members.size === 1 && args2) message.mentions.members.find(member => { return args = member.displayName });

    commands.processCommand(message, command, args, args2);
});

client.login(token);
