const { MessageFlags } = require('discord.js');
const embeds = require('./embed.js');

module.exports = {
    processCommand(message, command, args, args2) {
        console.log(`Command is '${command}' and args is '${args}' and args2 is '${args2}'`);

        switch (command) {
                case 'help':
                    embeds.help.execute(message, args);
                    break;
                case 'user':
                    embeds.user.execute(message);
                    break;
                case 'menu':
                    embeds.menu.execute(message);
                    break;
                case 'prune':
                    if (!message.member.roles.cache.some(role => role.name === 'Staff')) {
                        message.reply('User must have the `staff` role to use this command');
                        return;
                    } else {
                        embeds.prune.execute(message, args, args2);
                    }
                    break;
                case 'sayAs':
                    if (message.member.id != '716058466774417548') return message.delete();
                    let thisMessage = message.content.replace('...' + command, '');
                    message.delete();
                    message.channel.send(thisMessage);
                    break;
                case 'order66':
                    if (!message.member.roles.cache.some(role => role.name === 'Staff')) {
                        message.reply('User must have the `staff` role to use this command');
                        return;
                    } else {
                        message.channel.bulkDelete(100, true).catch(err => {
                            console.error(err);
                            message.channel.send('Error');
                        });
                        message.channel.send('https://tenor.com/GqGh.gif');
                        message.channel.send('It is done.');
                    }
                    break;
                case 'mute':
                    if (message.mentions.members.size <= 0) return message.reply('You need to specify a member.');
                    if (!message.member.roles.cache.some(role => role.name === 'Staff')) return message.reply('User must have the `staff` role to use this command');
                    let muteMember = '';
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                    message.mentions.members.find(member => { return muteMember = member });
                    let muteMemberRoles = muteMember.roles;
                    if (muteMember.roles.cache.find(role => role.name === 'Staff' || role.name === 'Robot')) return message.reply('Cannot use command on staff.');

                    muteMemberRoles.remove(muteMemberRoles.cache);
                    muteMember.roles.add(muteRole);
                    break;
                case 'kick':
                    if (message.mentions.members.size <= 0) return message.reply('You need to specify a member.');
                    if (!message.member.roles.cache.some(role => role.name === 'Staff' || role.name === 'Mini Mod')) return message.reply('User must have the `staff` role to use this command');
                    let kickMember = '';
                    message.mentions.members.find(member => { return kickMember = member });
                    if (kickMember.roles.cache.find(role => role.name === 'Staff' || role.name === 'Robot')) return message.reply('Cannot use command on staff.');
                    
                    kickMember.kick(message.content.replace('...' + command + args, ''));
                    message.delete();
                    message.channel.send(`Kicked ${kickMember.displayName}`);
                    break;
                default:
                    break;
        }
    }
};