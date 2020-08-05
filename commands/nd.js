module.exports = { 
    name: 'nd',
    description: 'Needle dick',
    execute(msg, args) {
        const taggedUser = msg.mentions.users.first();
        if(!msg.mentions.users.size) {
            return msg.reply('You gotta @ somebody as a parameter BRO. STOP BEING CRINGE.');
        }
        else {
            return msg.channel.send(`${taggedUser.username} has a needle dick. Mock them.`);
        }
    }
};