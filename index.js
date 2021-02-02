// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    //console.log(message.content);
    if (message.content === "🐈") {
        const cataasEmbed = new Discord.MessageEmbed()
            .setTitle('I founded this on cataas.com')
            .setURL('https://cataas.com/')
            .setImage('https://cataas.com/cat')
            .setTimestamp()
            .setFooter('MEOW');

        message.channel.send(cataasEmbed);
    } else if (message.content === "🐈‍⬛") {
        const makcaJakiEmbed = new Discord.MessageEmbed()
            .setTitle('Tu e Fotka Mačky Jackie! Nezabudni dat sub!!!')
            .setURL('https://www.instagram.com/mackajackie/')
            .setImage('https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/120116637_639153253659528_391864021779309979_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=OVh2C_llg2wAX8be71U&tp=1&oh=be778a826ab0149b244f351e67b860a1&oe=5FF00D08')
            .setTimestamp()
            .setFooter('(C) StudioMoonTV, Klarisa');

        message.channel.send(makcaJakiEmbed);
    } else if (message.content === "<@!779663319128473640> invite") {
        message.channel.send(`**Here is link <@!${message.author.id}> ** \nhttps://discord.com/oauth2/authorize?client_id=779663319128473640&scope=bot&permissions=8`)
    } else if (message.content === "<@!779663319128473640> help") {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Do u want help?')
            .setDescription('My comands are:\n```css\n🐈 - sends a random cat photo from cataas.com\n🐈‍⬛ - sends a photo of Mačka Jackie \n<@!779663319128473640> help - this one\n<@!779663319128473640> invite - i will send you link to invite me to your server\n```\n In case of any questions plz contact <@!398178387908100138> by mail or directly by dm\n Mail: [charliecat@skcat.tk](mailto:charliecat@skcat.tk)\n More features are comming so plz be tuned thx!')
            .setTimestamp()
            .setFooter('Made by CharllieCat#0399');
        message.channel.send(helpEmbed);
    } else
}); // login to Discord with your app's token
client.login('ODAzNjExODQyOTg3NTU2ODk2.YBAT2Q.Q0ASJ8h-9SLX41jPELIga8sC7FY')
