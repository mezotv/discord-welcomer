# ZeroTwo-welcomer for discord

This package is a rewrite of canvas-sepai!

## WELCOME IMAGE GENERATOR

```js
const Discord = require("discord.js");
const bot = new Discord.Client();
const { WelcomerZerotwo } = require("002-welcome");
const welcome = new WelcomerZerotwo();

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
  });

  const attachment = new Discord.MessageAttachment(data, "welcome-image.png");

  channel.send(`Welcome to the server, ${member.user.username}!`, attachment);
});

bot.login("TOKEN");
```

![](https://cdn.discordapp.com/attachments/791114608215588874/801172386661007420/unknown.png)

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

[![Discord Bots](https://top.gg/api/widget/770007992262590504.svg)](https://top.gg/bot/770007992262590504)
