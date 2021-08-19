const help = {
    name: 'help',
    description: 'Opens help menu for bot functions.',
    usage: '...help [command] for in-depth explanations of specific commands \n...help for a general help menu',
    args: true,
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        switch (args) {
            case 'user':
                const helpUser = new MessageEmbed()
                    .setColor('#13b5ea')
                    .setTitle('Help: `user`')
                    .setDescription('`user` command')
                    .addFields(
                        { name: 'Command', value: '...user' },
                        { name: 'Usage', value: user.usage },
                        { name: 'What it does', value: user.description },
                    )
                    .setTimestamp()
                    .setFooter(`Called by ${message.member.displayName}`, message.author.displayAvatarURL({ format: 'png', dynamic: true }));
                message.channel.send({ embeds: [helpUser] });
                break;
            default:
                const helpMain = new MessageEmbed()
                    .setColor('#13b5ea')
                    .setTitle('Help & Commands')
                    .setDescription('You can use this bot by typing the commands below.')
                    .addFields(
                        { name: 'help', value: 'Brings up this menu' },
                        { name: 'user', value: 'Shows stats for the Discord member who called the command' },
                        { name: 'menu', value: 'Brings up the main menu' },
                    )
                    .setTimestamp()
                    .setFooter(`Called by ${message.member.displayName}`, message.author.displayAvatarURL({ format: 'png', dynamic: true }));
                message.channel.send({ embeds: [helpMain] });
                break;
        }
    }
};

const user = {
    name: 'user',
    description: 'Opens user menu for bot functions.',
    usage: 'This command takes no arguments.',
    args: false,
    execute(message) {
        const { MessageEmbed } = require('discord.js');
        const user = new MessageEmbed()
            .setColor('#13b5ea')
            .setTitle('USER')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter(`Called by ${message.member.displayName}`, message.author.displayAvatarURL({ format: 'png', dynamic: true }));
        message.channel.send({ embeds: [user] });
    }
};

const menu = {
    name: 'menu',
    description: 'Opens main menu for bot functions.',
    usage: 'This command takes no arguments.',
    args: false,
    execute(message) {
        const { MessageEmbed } = require('discord.js');
        const menu = new MessageEmbed()
            .setColor('#13b5ea')
            .setTitle('Main Menu')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter(`Called by ${message.member.displayName}`, message.author.displayAvatarURL({ format: 'png', dynamic: true }));
        message.channel.send({ embeds: [menu] });
    }
};

module.exports = {
    menu: menu,
    user: user,
    help: help,
};