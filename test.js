const { prefix, token } = require('./config.json');
const fs = require('fs'); //fs is Node's native file system module
const Discord = require('discord.js');
const { ClientRequest } = require('http');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //readdirSync returns aan array with all files in that directory (that end with js)

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  //  code for setting the '!' prefix, and slicing out spaces for arguments
  //  arguments are stored in array 'args'
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //  test ping command
  if (command === 'ping') { 
    msg.reply('pong');
  }

  //  command with arguments test
  else if (command === 'chicken') {
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

  //  command with reactions test
  else if (command === 'cont') {
    msg.react('🇬')
    .then(() => msg.react('🇦'))
    .then(() => msg.react('🇾'));
  }

  //  grab first mention
  else if (command === 'nd') {
    const taggedUser = msg.mentions.users.first();
    if(!msg.mentions.users.size) {
      return msg.reply('You gotta @ somebody as a parameter BRO. STOP BEING CRINGE.');
    }
    else {
      return msg.channel.send(`${taggedUser.username} has a needle dick. Mock them.`);
    }
  }

  //  call string gay x amount of times.
  else if(command === 'callgay') {

    //  checks the first argument (or for more than 3 arguments)
    if(!args.length) {
      msg.channel.send(`Please place a word and a positive number >=1 or <=5 as arguments, ${msg.author} (i,e "!callGay John 7").\nPlease note I will floor all numbers to the nearest whole number. `);
    }
    else if(args.length > 2) {
      msg.channel.send('Please only put in one word and one number less than or equal to 5. "(i,e !callGay John 7")');
    }
    else {
      if (!isNaN(Number(args[0]))) {
        return msg.channel.send(`The first argument , '${args[0]}', is a number. Don't be weird.`);
      }

      //  checks second argument
      if(isNaN(Number(args[1]))) {
        return msg.channel.send(`The second argument, '${args[1]}', is not a number. Don't be weird.`);
      }
      else if (Number(args[1]) <= 0 || Number(args[1]) >= 6) {
        return msg.channel.send('Positive numbers only >=1 and <=6, baby.');
      }
      else {
        var i;
        for (i = 0; i < Number(args[1]); i++) {
          msg.channel.send(`${args[0]} is gay`);
        }

      }

    }
  }

  //  no command
  else {
    msg.channel.send(`'${command}' is not a recognizable command, idyot.`);
  }
});

client.login(token);