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
    client.user.setPresence({ activities: [{ name: 'furries', type: 'WATCHING' }], status: 'online' });
});

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.find(role => role.name === "Guest");
    const general = member.guild.channels.cache.find(channel => channel.name === "general");

    member.roles.add(role);
    general.send(`Welcome to FaunType\'s Dev Server, ${member}`);
});

client.on('messageReactionAdd', reaction => {
    if (!reaction.message.author.id === '877260418169577513') return;
    const caller = reaction.message.mentions.users.first();
    const callerMember = reaction.message.guild.members.cache.find(user => user.id === caller.id);
    if (!reaction.users.cache.find(user => user.id === caller.id)) return;
    if (reaction.message.content.includes("do you want to see the furry section of the Discord?")) {
        let furryRole = reaction.message.guild.roles.cache.find(role => role.id === "917858836658929714");
        switch (reaction.emoji.name) {
            case '✔️':
                callerMember.roles.add(furryRole);
                reaction.message.reply('Unlocked!');
                break;
            case '❌':
                reaction.message.reply('You\'re not a furry...');
                break;
            default:
                return;
        }
        return;
    }
    else if (reaction.message.content.includes('would you like to remove your access to this channel?')) {
        let yiffChannel = reaction.message.guild.channels.cache.find(channel => channel.id === '918167891193503754');
        if (reaction.emoji.name === '✔️') {
            yiffChannel.permissionOverwrites.cache.find(o => o.member === callerMember && o.id === caller.id).delete();
            return;
        }
        return;
    }
    else {
        return;
    }
});

client.on('messageCreate', message => {
    if (message.content.toLowerCase().includes('owo') && message.channelId !== '917900527738695720' && !message.content.startsWith(prefix)) {
        if (message.member.roles.cache.some(role=>role.id==="917858836658929714")) return;
        message.reply(`${message.author}, do you want to see the furry section of the Discord?`).then(message => {
            message.react('✔️');
            message.react('❌');
        });
        return;
    }

    if (message.content.toLowerCase() === 'you so musky') {
        let member = message.member;
        message.channel.messages.fetch({
            limit: 10
        }).then(messages => {
            const usrMessages = messages.filter(message => message.author.id === member.user.id);
            if (usrMessages.first().includes('bolgy-wolgy')) {
                let yiffChannel = reaction.message.guild.channels.cache.find(channel => channel.id === '918167891193503754');
                yiffChannel.permissionOverwrites.create(member.user, {
                    SEND_MESSAGES: true
                });
            }
            else {
                return;
            }
        });
        return;
    }

    if (!message.content.startsWith(prefix)) return;

    const command = message.content.slice(prefix.length).split(/ +/).join(' ').split(' ')[0];
    let args = message.content.split(' ')[1];
    let args2 = message.content.split(' ')[2];
    if (message.mentions.members.size === 1 && args2) message.mentions.members.find(member => { return args = member.displayName });

    commands.processCommand(message, command, args, args2);
});

client.login(token);
