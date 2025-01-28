const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Ghana, Accra."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Ghana/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "true" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "233209537809" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233209537809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "set image" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_41_01_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcImN0aHMzMHdjNnZtM2hzaWlMYWttRllPWE5UVlpBQW9XcnRveHQ4bkpQRWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjA5NTM3ODA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMkMzRTczRDZBQzU5NTRDRTc2OTY5OUQwMUMwNkI2QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzgwNzE2NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyMDk1Mzc4MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk3QzcxOUMwN0QzNTkyNjEzMDg1MEQ2NjY0QTY1NEY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczODA3MTY1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzIwOTUzNzgwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTlBNkQ5REE3MDk5NDc5NjdDRkQwNTYxMkJCNDI3RTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM4MDcxNjU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjA5NTM3ODA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMjc4MUE3M0FDMDIxNzc2ODlBMEFENzc0RTM5MDVFMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzgwNzE2NTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUtrSG1GN2xSVHU4Qzh5dFg1TWpuZ1wiLFxuICBcInBob25lSWRcIjogXCJlODM5OTI1NS1mNzQ2LTQzZWItYjgxYi05MGYwNTZjZmFhZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICA2NCxcbiAgICAgIDE2OCxcbiAgICAgIDU3LFxuICAgICAgMjM1LFxuICAgICAgNjAsXG4gICAgICA3OCxcbiAgICAgIDE5NSxcbiAgICAgIDI2LFxuICAgICAgMTcyLFxuICAgICAgODYsXG4gICAgICAzNyxcbiAgICAgIDE3NCxcbiAgICAgIDE1MixcbiAgICAgIDE0LFxuICAgICAgMTA0LFxuICAgICAgODksXG4gICAgICAzNCxcbiAgICAgIDE4OCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDE0OSxcbiAgICAgIDUsXG4gICAgICAyMTksXG4gICAgICAxOTEsXG4gICAgICAxMzcsXG4gICAgICA3NCxcbiAgICAgIDIyMixcbiAgICAgIDE1MixcbiAgICAgIDIyLFxuICAgICAgNTcsXG4gICAgICAxMjcsXG4gICAgICAyMixcbiAgICAgIDc0LFxuICAgICAgMTI3LFxuICAgICAgOTIsXG4gICAgICAyMDUsXG4gICAgICA1MyxcbiAgICAgIDIyMSxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZMUFOSDZQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyMDk1Mzc4MDk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0ODA2ODA5NjQxMTk0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+HsiDwn4e3IPCfh7wg8J+HriDwn4exIPCfh7FcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSDhpN2tDRU9DODQ3d0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldlMTdGQjFEVS96Nko0T0ZoT2tCS2ZuRFMxMzZaRURQRlFKMXJ2dTVIQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTgyRENPRmdYZ3U1L1YvNXNVS2t6aG5oRnpTTzhTanlVZlBmWkgzNFl6WjF4YlI1MkI1cXpTZkNVc2E0Q3J1bVd0V3I0T0toTkZIMXZXNUdIV2JtQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSVc0bVp4OHFvK0ZRNUlmZCtVSmdYWTQ1U1c0YUFaZGljS1JNYTk5Z2l5RG5XeUNUQnpXdGFEWDNOdXk2WmFzTzIzRXZWYWY1MElqK3NDZ3Y3S055QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjA5NTM3ODA5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzgwNzE2NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQQzZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBDNi5qc29uIjogIntcImtleURhdGFcIjpcIlBYL3NIVWVlL0VIN0tOSi9SUDVYV29rc1U2T0RHWmdScGlmQnVoZG5zWnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU2NjA0Nzg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzgwNzE2NTI3NTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
