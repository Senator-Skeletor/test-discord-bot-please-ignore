module.exports = { 
    name: 'chicken',
    description: 'Command with arguments',
    execute(msg, args) {
        if(!args.length) {
            msg.channel.send(`Put in some actual arguments, ${msg.author} `);
        }
        else if(args[0] === 'what?') {
            msg.reply('CHICKEN BUTT HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA');
        }
        else if (args[0] === 'diode') {
            msg.channel.send('Please refer to my colleague', { files: ['https://i.imgur.com/ztUc9HH.jpg'] });
        }
        else{
            return msg.channel.send('I dont recognize the following argument(s): ' + args + '".\nCurrent recognizable arguments: "what?"", "diode"');
        }
    }
}