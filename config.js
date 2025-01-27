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


global.devs = "233591974789" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233591974789";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_43_01_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjhnTTBGRk1ZcmJHMmVJWUVtTjgycS84dmhNN0hWSmltY1QxMFE5QVg0WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0M0TnVWbEhReFdZcVBXQnZhN25XUVwiLFxuICBcInBob25lSWRcIjogXCIxZWUwOWNmYS1iMTA2LTRhZjQtOTJhOS0zNzdiYjQzM2Y3NjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMSxcbiAgICAgIDEyNSxcbiAgICAgIDI0LFxuICAgICAgMjM1LFxuICAgICAgNTIsXG4gICAgICAyMTEsXG4gICAgICAxMDMsXG4gICAgICA2OCxcbiAgICAgIDE2MSxcbiAgICAgIDEzNSxcbiAgICAgIDM3LFxuICAgICAgMTI0LFxuICAgICAgMjExLFxuICAgICAgNjQsXG4gICAgICAxOSxcbiAgICAgIDEzNCxcbiAgICAgIDEwMyxcbiAgICAgIDUwLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjAxLFxuICAgICAgNTUsXG4gICAgICAxNjMsXG4gICAgICAxODYsXG4gICAgICA3MSxcbiAgICAgIDE5LFxuICAgICAgODgsXG4gICAgICAxOTAsXG4gICAgICAxMjMsXG4gICAgICAyMyxcbiAgICAgIDk4LFxuICAgICAgMjEzLFxuICAgICAgOTUsXG4gICAgICAyNDcsXG4gICAgICAxMzAsXG4gICAgICA4NSxcbiAgICAgIDc0LFxuICAgICAgMTE4LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo2Q1pIWkdOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTE5NzQ3ODk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImNoZWFwIGRhdGFcIixcbiAgICBcImxpZFwiOiBcIjE2MDU0NjM5NzY0MjkwODo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UK3g3SUJFTzZYNEx3R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaEJPbjJtb0RjVmt0UmgyUEU2YVZvbTVZbnBRbmtXVWFzYVRTa1d5eDdGTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjZ1l3aUJXUC9KQ1VVYjdEUkJDNkF5cTRHUklxWExZRDlkYlZlVGVoQ0NYQ0Znc1NYQ2FwTkdrQ3dmMUo3bi92THgycHdWQVBzNVhzaXJuK3Z1dWJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSR1NlcG9LcEZuYW43WGx4dzFsZm1aMEE2UHorOE5rcGhrdUpEUGQ4dXlEcWtQODBCTWtIU2pZL2xIU3hGaWdVNlRVbmdCdmFzZmdRYzZMZkM5czVDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTE5NzQ3ODk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODAxNzc3OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "STARBOY-available",
  packname: process.env.PACK_NAME || "STARBOY-available",
  botname : process.env.BOT_NAME  || "STARBOY-available",
  ownername:process.env.OWNER_NAME|| "STARBOY-available",


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
