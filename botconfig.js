module.exports = {
  Admins: ["769068434011979816", "992753086651170897"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/FkZMHwZT", //Support Server Link
  Token: process.env.Token || "ODY3NDAyOTc4ODE3MjEyNDI5.G-5gzo.32vCMpNJsaVFjXpWnpgo2Xuk_MaTnqX9E0KcLY", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "867402978817212429", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "lE8MFq-X-0A-gJh_EQCGT2110GfUfe_W", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Punsith is cute", //A Secret like a password
  IconURL:
    "https://bestanimations.com/media/notation/260157693colorful-musical-notes-flying.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 8, //Bot Inviting Permissions
  Website: process.env.Website || "https://redboyrp.cf/mta", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Colombo City Life", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink.oops.wtf", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "www.freelavalink.ga", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "245a4b2af85249ffb3cd5297fe0c30f8", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "312a162ecf014064b577d28b87f5d87a", //Spotify Client Secret
  },
};
