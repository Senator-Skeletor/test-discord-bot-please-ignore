module.exports = { 
    name: 'cont',
    description: 'Gay reaction',
    execute(msg, args) {
        msg.react('🇬')
        .then(() => msg.react('🇦'))
        .then(() => msg.react('🇾'));
    }
};