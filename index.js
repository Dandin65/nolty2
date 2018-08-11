const Discord = require("discord.js")

const TOKEN = "NDc3NzcwNTE5NzYxMTI1Mzc4.DlBFhw.LsTWUIq-BtnlePPiX8H6ICKxUz4";

var bot = new Discord.Client();

var Fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Dont even try"
];

const Prefix = "!";

bot.on ('message' , function(message) {
    console.log(message.content);
});

bot.on("ready" , function() {
        bot.user.setGame("with nolty's balls");
      


});




bot.on("message" , function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(Prefix)) return;

    var args = message.content.substring(Prefix.length).split (" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "youtube":
            message.channel.sendMessage("https://www.youtube.com/channel/UCfqEHz8LLATdj76DMRdcbsQ")
            break;
        case "carbonmade":
            message.channel.sendMessage("https://nolty.carbonmade.com/")
            break;

        case "8ball":
            if (args[1]) message.channel.sendMessage(Fortunes[Math.floor(Math.random () * Fortunes.length)]);
            else Message.channel.sendMessage("Can't find your question");
            break;
        case "myinfo":
            var embed = new Discord.RichEmbed()
                .addField("Username:" , (message.author.username))
                .addField("ID:" , (message.author.id))
                .addField("Tag:" , (message.author.tag))
                .setThumbnail (message.author.avatarURL)
                .setColor (0x14C4D2)
            message.channel.sendEmbed(embed);
            break;
            
            

             
        default:
            message.channel.sendMessage("Invalid Command");

    }
});



    

bot.login(TOKEN);