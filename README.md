# [discord-welcomer for discord.js](https://www.npmjs.com/package/discord-welcomer)


This package is a rewrite of canvas-senpai!

## WELCOME IMAGE GENERATOR

```js
const Discord = require("discord.js");
const bot = new Discord.Client();
const { WelcomerDiscord } = require("discord-welcomer");
const welcome = new WelcomerDiscord();

bot.on("ready", () => {
  console.log("Ready!");
});

bot.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "general"
  );
  if (!channel) return;

  let data = await welcome.welcome(member, {
    link: "https://wallpapercave.com/wp/wp5128415.jpg",
    text: "welcome <3",
  });

  const attachment = new Discord.MessageAttachment(data, "welcome-image.png");

  channel.send(`Welcome to the server, ${member.user.username}!`, attachment);
});

bot.login("TOKEN"); // Check https://discord.com/developers/applications for the token
```

![](https://cdn.discordapp.com/attachments/792534299508605001/801534585926058024/unknown.png)

### OPTIONS OF WELCOME

```js
let data = await welcome.welcome(member, { options });
```

**link**: Link of the background image of welcome image || String

```js
let data = await welcome.welcome(member, {
  link: "https://wallpapercave.com/wp/wp5128415.jpg",
});
```

**blur**: Disable and enable blur effect (default = true) || Boolean

```js
let data = await welcome.welcome(member, {
  link: "https://wallpapercave.com/wp/wp5128415.jpg",
  blur: false,
}); //Disables The Blur
```

**gradiant**: Add gradiant image as background image of welcome image || String

```js
let data = await welcome.welcome(member, { gradiant: "peakblue" });
//GRADIANTS NAME - coldsky, peakblue, pinkman, aqua, darkness, angel
```
