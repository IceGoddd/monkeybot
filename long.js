const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Permissions } = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const config = require("./config.json");

var prefix = "*";
var invisible = "\u200b";
var color = "#D3AA76";

long = require("./long");

client.login(config.token);

client.on("ready", function () {
  client.user.setStatus("idle");
  client.user.setActivity("With Monke Tribe");
  console.log(`✅ Moderation`);
  console.log(`💾 Everything is working! Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const user = message.author;

  msg = message.content.toLowerCase();
  mention = message.mentions.users.first();
  field = `:arrow_right: Command requested by <@${message.author.id}>`;
  member = message.author;

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

  if (message.author.bot) return;

  // * COMMANDS

  if (msg.startsWith(prefix + "moderation")) {
    if (message.channel.type === "dm") return;
    const helpembed = new Discord.MessageEmbed()
      .setTitle(
        ":monkey_face:   Here are all the commands you need for moderating!"
      )
      .setDescription(` 󠇰󠇰  `)
      .setColor(color)
      .addFields(
        {
          name: ":boot:   *kick",
          value: "Kicks the selected person.",
          inline: true,
        },
        {
          name: ":hammer:   *ban",
          value: "Ban the selected person.",
          inline: true,
        },
        {
          name: ":scroll:   *clear",
          value: "Clears the number of messages you want.",
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
    message.channel.send({ embeds: [helpembed] });
    console.log(`🛠 ${message.author.tag} used Moderation`);
  }

  if (msg.startsWith(prefix + "ban")) {
    if (
      !message.member.permissions.has([
        Discord.Permissions.FLAGS.KICK_MEMBERS,
        Discord.Permissions.FLAGS.BAN_MEMBERS,
      ])
    )
      return message.reply("You're not allowed to do that");
    console.log(`🔨 ${message.author.tag} used Ban`);

    if (args.length < 2) {
      return message.reply(
        ":monkey_face: Please mention the user you want to ban and specify a ban reason."
      );
    }

    const user = getUserFromMention(args[0]);
    if (!user) {
      return message.reply(":monkey_face: Please use a valid mention!");
    }

    const reason = args.slice(1).join(" ");
    try {
      await message.guild.members.ban(user, { reason });
    } catch (error) {
      return message.channel.send(
        `:monkey_face: I wasn't able to ban **${user.tag}**. Please be sure that I have enough permissions!`
      );
    }

    const banembed = new Discord.MessageEmbed()
      .setTitle(`:monkey_face:   Successfully banned ${user.tag} !`)
      .setDescription(invisible)
      .setColor(color)
      .addField(`:hammer:   Reason: ${reason}`, invisible)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setFooter(
        `Moderator: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );

    return message.channel.send({ embeds: [banembed] });
  }

  if (msg.startsWith(prefix + "kick")) {
    if (
      !message.member.permissions.has([
        Discord.Permissions.FLAGS.KICK_MEMBERS,
        Discord.Permissions.FLAGS.BAN_MEMBERS,
      ])
    )
      return message.reply("You're not allowed to do that");
    console.log(`🥾 ${message.author.tag} used Kick`);

    if (args.length < 2) {
      return message.reply(
        ":monkey_face: Please mention the user you want to kick and specify a kick reason."
      );
    }

    const user = getUserFromMention(args[0]);
    if (!user) {
      return message.reply(":monkey_face: Please use a valid mention!");
    }

    const reason = args.slice(1).join(" ");
    try {
      await message.guild.members.kick(user, { reason });
    } catch (error) {
      return message.channel.send(
        `:monkey_face: I wasn't able to kick **${user.tag}**. Please be sure that I have enough permissions!`
      );
    }

    const kickembed = new Discord.MessageEmbed()
      .setTitle(`:monkey_face:   Successfully kicked ${user.tag} !`)
      .setDescription(invisible)
      .setColor(color)
      .addField(`:hammer:   Reason: ${reason}`, invisible)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setFooter(
        `Moderator: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );

    return message.channel.send({ embeds: [kickembed] });
  }
});
