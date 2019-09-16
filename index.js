const Discord = require('discord.js'); 
const client = new Discord.Client();
var prefix = "$";

client.login("NjIzMDEzMjU2NTY2NjY5MzQz.XX8c9Q.3MphkoiQ0YX3041Ef76---WN7Ao");

client.on("message", message  =>{
    if(!message.guild) return
    if(message.content === prefix + "tg"){
        message.channel.send( message.author + " la putin de te mere fdp je te met des claque virtuel")
    }        
});
