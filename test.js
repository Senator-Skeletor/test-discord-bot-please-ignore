const { prefix, token } = require('./config.json');
const fs = require('fs'); //fs is Node's native file system module
const Discord = require('discord.js');
const { ClientRequest } = require('http');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //readdirSync returns an array with all files in that directory (that end with js)

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  //  set a new item in the Collection
  //  with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  //  code for setting the '!' prefix, and slicing out spaces for arguments
  //  arguments are stored in array 'args'
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return msg.channel.send('Command not recognized.');

  try {
    client.commands.get(command).execute(msg, args);
  }
  catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command');
  }
});

client.login(token);