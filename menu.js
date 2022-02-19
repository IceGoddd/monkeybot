const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const config = require("./config.json");

var prefix = "*";
var color = "#D3AA76";

long = require("./long");

client.login(config.token);

client.on("ready", function () {
  client.user.setStatus("idle");
  client.user.setActivity("With Monkey Tribe");
  console.log(`✅ Entertainement`);
});

client.on("messageCreate", async (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const user = message.author;
  const rando_imgs = [
    "https://cdn.discordapp.com/attachments/863231470223228948/878452785295810590/1_PAY-MAP_CHP_030821-orangutan_29474-orangutan.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452795798327356/4ttoxm.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452818535669791/033e803c-12f2-4a56-b2cf-5a27a87cc162.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452825091342356/062520_bb_recursion_feat.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452833328979988/87788.jpg.webp",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452839112933376/6529139.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452844846518332/1619849704543.jpeg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452850152337438/c2f541209302cb0401d79ef68cfd9ad0.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452856087265321/ca_1030NID_Macaque_online.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452860935872522/d3136d20-e89c-11eb-abf3-e7ab0c4fb0b9.jpeg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452866862420078/dpvtrh73-1407512073.jpg.webp",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452871320985691/GettyImages-483443332-1000x667.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452877130072154/l5fR3hUr_400x400.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452878598111242/Lemonke.webp",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452885854253056/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452886781186078/monkey092018.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452896834916382/new-world-monkey-e1574796782714.jpg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452903105396767/photo-1566127992631-137a642a90f4.jpeg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878452904573411358/QZ6FLHQFAZAVPG4S6F5DYHDZZY.jpeg",
    "https://cdn.discordapp.com/attachments/863231470223228948/878454754311819354/1b669f38-b50d-4828-995e-7177724af565-monkey_002.jpg.webp",
    ":trophy: **You've found wise monke! Congrats!** *(5% chance)*\n https://cdn.discordapp.com/attachments/863231470223228948/878452810985910302/24e6f7ad398c489e873b88a5e8963810.jpg",
  ];

  msg = message.content.toLowerCase();
  mention = message.mentions.users.first();
  field = `:arrow_right: Command requested by <@${message.author.id}>`;
  meter = Math.floor(Math.random() * 100) + 1;
  function doMagic8BallVoodoo() {
    var rand = [
      "Yes.",
      "No.",
      "No, except if you give us banana :flushed:",
      "Not at all...",
      "Maybe.",
      "Yep!",
    ];

    return rand[Math.floor(Math.random() * rand.length)];
  }
  function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith("<@") && mention.endsWith(">")) {
      mention = mention.slice(2, -1);

      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }

      return client.users.cache.get(mention);
    }
  }

  // * COMMANDS

  if (message.author.bot) return;

  const gayembed2 = new Discord.MessageEmbed()
    .setTitle(`:rainbow:   ${message.author.username}'s Gay percentage`)
    .setDescription("\u200B")
    .setColor("LUMINOUS_VIVID_PINK")
    .addField(":unicorn:   He is " + meter + "% Gay", "\u200B")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter(
      "Monkey Bot by IceGod#0001",
      "https://cdn.discordapp.com/attachments/863231460491788348/879190959185858630/logomonkeyice.png"
    );
  if (msg.startsWith(prefix + "nword")) {
    message.channel.send("nigger");
  }

  if (msg.startsWith(prefix + "help")) {
    const helpembed = new Discord.MessageEmbed()
      .setTitle(":monkey_face:   Here are my command categories:")
      .setDescription("\u200B")
      .setColor(color)
      .addFields(
        {
          name: ":slot_machine:   Entertainement",
          value: "*entertainement | List of the entertainement commands.",
        },
        {
          name: ":tools:   Moderation",
          value: "*moderation | List of the moderation commands",
        },
        {
          name: "\u200B",
          value:
            "You can also type `help <command>` for more information on a command.",
        }
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/863231460491788348/879082105110413322/monkeyhider.png"
      )
      .setFooter(
        "Monkey Bot by IceGod#0001",
        "https://cdn.discordapp.com/attachments/863231460491788348/879190959185858630/logomonkeyice.png"
      );
    message.channel.send({ embeds: [helpembed] });
    console.log(`❔ ${message.author.tag} used Help`);
  }

  if (msg.startsWith(prefix + "entertainement")) {
    const funembed = new Discord.MessageEmbed()
      .setTitle(":monkey_face:   Here are some fun commands to play with!")
      .setDescription(` 󠇰󠇰  `)
      .setColor(color)
      .addFields(
        {
          name: ":hindu_temple:   *askcouncil",
          value: "Asks the monkey council the question you want.",
          inline: true,
        },
        {
          name: ":rainbow:   *gaymeter",
          value: "Shows how gay you or your friends are.",
          inline: true,
        },
        {
          name: ":speaking_head:   *random",
          value: "Try and find the wise monkey among random monkey images!",
          inline: true,
        },
        {
          name: ":game_die:   *say",
          value: "Makes the bot say whatever you want!",
          inline: true,
        }
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/863231460491788348/879082105110413322/monkeyhider.png"
      )
      .setFooter(
        "Monkey Bot by IceGod#0001",
        "https://cdn.discordapp.com/attachments/863231460491788348/879190959185858630/logomonkeyice.png"
      );
    message.channel.send({ embeds: [funembed] });
    console.log(`🎰 ${message.author.tag} used Entertainement`);
  }

  if (msg.startsWith(prefix + "askcouncil")) {
    message.channel.send(
      ":hindu_temple: After talking to the monkey council, we've came to a conclusion that " +
        doMagic8BallVoodoo()
    );
    console.log(`🛕 ${message.author.tag} used Council`);
  }
  if (msg.startsWith(prefix + "gaymeter")) {
    console.log(`🌈 ${message.author.tag} used Gay`);
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply(
          "Please mention a **real person** if you want to see how gay they are!"
        );
      }

      const gayembed = new Discord.MessageEmbed()
        .setTitle(`:rainbow:   ${user.username}'s Gay percentage:`)
        .setDescription("\u200B")
        .setColor("LUMINOUS_VIVID_PINK")
        .addField(":unicorn:   He is " + meter + "% Gay", "\u200B")
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setFooter(
          "Monkey Bot by IceGod#0001",
          "https://cdn.discordapp.com/attachments/863231460491788348/879190959185858630/logomonkeyice.png"
        );

      return message.channel.send({ embeds: [gayembed] });
    }

    return message.channel.send({ embeds: [gayembed2] });
  }

  if (msg.startsWith(prefix + "random")) {
    message.channel.send(
      rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    );
    console.log(`🎲 ${message.author.tag} used Random`);
  }

  if (msg.startsWith(prefix + "say")) {
    message.delete();
    const SayMessage = message.content.slice(5).trim();
    if (!SayMessage) {
      return;
    }
    message.channel.send(SayMessage);
    console.log(`🗣 ${message.author.tag} used Say`);
  }
});
