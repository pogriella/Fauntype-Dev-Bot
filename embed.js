const { MessageEmbed } = require('discord.js');

const help = new MessageEmbed()
    .setColor('#13b5ea')
    .setTitle('Help & Commands')
    .setDescription('You can use this bot by typing the commands below.')
    .addFields(
    { name: 'user', value: 'Shows stats for the Discord member who called the command' },
    )
    .setTimestamp()

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
    .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

const menu = new MessageEmbed()
    .setColor('#13b5ea')
    .setTitle('Author')
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
    .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

module.exports = {
    help: help,
    user: user,
    menu: menu,
};