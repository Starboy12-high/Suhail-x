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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233591974789";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "set image" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_45_02_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTdWdDZ1l3K2VxWVNnUllBSy9yTERvMHc2dmt4ZTJrT3hjazhROEl1dTJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwTHdTZHVXQVRvV0FCaWFxTE9oTm1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjMzYyOWU3LTViNzktNDkyNS05M2UxLTIwNzQ1Mzg0ZmEyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDE5MSxcbiAgICAgIDEyMCxcbiAgICAgIDExMCxcbiAgICAgIDI0MSxcbiAgICAgIDE0NyxcbiAgICAgIDIwOSxcbiAgICAgIDEyMCxcbiAgICAgIDgsXG4gICAgICAxMDcsXG4gICAgICA0MyxcbiAgICAgIDk2LFxuICAgICAgNixcbiAgICAgIDQ5LFxuICAgICAgNzIsXG4gICAgICAxODEsXG4gICAgICAxNixcbiAgICAgIDIzNyxcbiAgICAgIDUwLFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMjEzLFxuICAgICAgMjAsXG4gICAgICAxOTcsXG4gICAgICAxNjcsXG4gICAgICAxOTksXG4gICAgICAyMDUsXG4gICAgICAxODksXG4gICAgICAxODAsXG4gICAgICAyNTEsXG4gICAgICAxNTEsXG4gICAgICAxODEsXG4gICAgICA0MyxcbiAgICAgIDAsXG4gICAgICAyMjUsXG4gICAgICAzMSxcbiAgICAgIDEzMSxcbiAgICAgIDY2LFxuICAgICAgMTA2LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZENzdOR1RWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTE5NzQ3ODk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJjaGVhcCBkYXRhXCIsXG4gICAgXCJsaWRcIjogXCIxNjA1NDYzOTc2NDI5MDg6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1QreDdJQkVOYW9yYjBHR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoQk9uMm1vRGNWa3RSaDJQRTZhVm9tNVlucFFua1dVYXNhVFNrV3l4N0ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkkvUEJBK3J6d2M4OEVJSktuWG5mVUlZYVhCLzZJMHZSdnZTM0c2UXpzRVF0M3QwYkxTWk9DZy9hQjRiektpcTFQT0YwV2dBRjU4QUIwbEVQZENWK0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlsZlNTV3U1UjZGN20zTUhIelNLODdXVXZlOEphZkEvWkVQamdQS2NRUkk0VDgrYXo1UVdkRE5QOWZMQVh2VWRsUlRGVlR3c2pYNnRJMUdjN2NKckJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5MTk3NDc4OToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTI4MTUwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Starboy-available",
  packname: process.env.PACK_NAME || "Starboy-available",
  botname : process.env.BOT_NAME  || "Starboy-available",
  ownername:process.env.OWNER_NAME|| "Starboy-available",


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
