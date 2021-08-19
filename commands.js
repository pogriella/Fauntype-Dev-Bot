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
                default:
                    break;
        }
    }
};