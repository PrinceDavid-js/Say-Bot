const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
let messageArray = message.content.split(" ");
let command = messageArray[0];
if (command === `${prefix}1`) {
if (message.author.bot) return undefined;
if(!message.guild.member(message.author).hasPermission("ADMINISTATOR")) {
  message.channel.send("You Don't Have A Permissions `ADMINISTATOR` ");
} else {
var sayword = message.content.split(' ').slice(1).join(' ');
if(!sayword){
message.channel.send("**Usage: `" + `${prefix}` + "say1 [Word]` **");
} else {
message.channel.send(`${sayword}`);
}}}});


client.on('message', message => {
let messageArray = message.content.split(" ");
let command = messageArray[0];
if (command === `${prefix}2`) {
if (message.author.bot) return undefined;
if(!message.guild.member(message.author).hasPermission("ADMINISTATOR")) {
  message.channel.send("You Don't Have A Permissions `ADMINISTATOR` ");
} else {
var sayword = message.content.split(' ').slice(1).join(' ');
if(!sayword){
message.channel.send("**Usage: `" + `${prefix}` + "say2 [Word]` **");
} else {
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`${sayword}`)
message.channel.send(embed);
}}}});
