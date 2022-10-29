# h3lpeds-dj
A Simple Music Bot

# Requirements
- Node.js v18.4 or higher
- a discord bot token 
- ffmpeg
- a basic understanding of javascript + dotenv

# Instructions
- First install all the dependanices by running `npm i discord.js dotenv @discordjs/rest @discordjs/voice discord-player ffmpeg-static` in cmd
- Next make a file called `.env` and insert
```.env
TOKEN=discord bot token goes here
```
- After that go to `index.js` and replace 
```.js
const CLIENT_ID = "888582057452785685" // Replace with your Bot ID
const GUILD_ID = "812765735645347911" // Replace with your Server ID
```
With your own Bot and Server IDs
- Finally run `node . load` then `node .` to run the bot and You'll see `Logged in as {your discord bot tag}`

# Troubleshooting
- If you have an intents error, please enable all intents in your discord developer portal. Example: