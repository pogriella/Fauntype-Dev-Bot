const help = {
    name: 'help',
    description: 'Opens help menu for bot functions.',
    usage: '...help [command] for in-depth explanations of specific commands \n...help for a general help menu',
    args: true,
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        switch (args) {
            case 'help':
                break;
            default:
                const help = new MessageEmbed()
                    .setColor('#13b5ea')
                    .setTitle('Help & Commands')
                    .setDescription('You can use this bot by typing the commands below.')
                    .addFields(
                    { name: 'user', value: 'Shows stats for the Discord member who called the command' },
                    { name: 'menu', value: 'Brings up the main menu' },
                    )
                    .setTimestamp()
                message.channel.send({ embeds: [help] });
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
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ format: 'png', dynamic: true }));
        message.channel.send({ embeds: [menu] });
    }
};

module.exports = {
    menu: menu,
    user: user,
    help: help,
};