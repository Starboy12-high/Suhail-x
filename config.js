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


global.devs = "233204781898" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233204781898";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_46_01_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY2LFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODNZanp3YWtxV1RiMmp4QlppcnBLbld5bDZNRWxJVnFiTjIyMGY1QXcxUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTXo0dklCNkJRMU9HTENlWWZnWE1lQVwiLFxuICBcInBob25lSWRcIjogXCJjZjFjYmNjOS1lNjNiLTQ4MDItYWM0Ni1mZDk5MTQzYjhmYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTQxLFxuICAgICAgMTM2LFxuICAgICAgMTUzLFxuICAgICAgMTE5LFxuICAgICAgMTIzLFxuICAgICAgMjI4LFxuICAgICAgMTMsXG4gICAgICA4NCxcbiAgICAgIDIwMixcbiAgICAgIDIxNSxcbiAgICAgIDI0OSxcbiAgICAgIDUsXG4gICAgICAxOSxcbiAgICAgIDE3NSxcbiAgICAgIDE3OSxcbiAgICAgIDE2MixcbiAgICAgIDc2LFxuICAgICAgMTEsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAxMjIsXG4gICAgICAxOTUsXG4gICAgICAxNjcsXG4gICAgICA5MCxcbiAgICAgIDk0LFxuICAgICAgMjM4LFxuICAgICAgNzksXG4gICAgICA4NSxcbiAgICAgIDEsXG4gICAgICAxMjAsXG4gICAgICAxNixcbiAgICAgIDIxMCxcbiAgICAgIDE2LFxuICAgICAgMjMzLFxuICAgICAgNyxcbiAgICAgIDMzLFxuICAgICAgMTI0LFxuICAgICAgODUsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTURETFA4QUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwNDc4MTg5ODoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQyNzA5MzgxNzA1ODUyOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042NTU2OERFS3E4NWJ3R0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUGtkdXRWTUpod0d1VkNDVXRpMVZyRnA2S0M4ZG40OEt1NDNXcXo3bzZ6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWKy9FdVB5OFpxVzYwMU55RVQ4VVpCTC9qY1E1UFVBRzdMOCt2djJPQVJWSURsUUZWR0tPdnRhdTduUzRiOHZpV0NlRTBrSGlNV0ZLN1d3MlZKaHhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKS1hBV0xiSmRQV28vcEFFdDJ0Z2NjdUxCTVRDNWpFR1dpMElBTjJVc3N0WjhXSFgxTzRtWHlnQVBDSXI3UGxFSkU4b2YrV2ZWVk01cGEvMEZYVzdnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDQ3ODE4OTg6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzgxMDQzNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFL0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUvSC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
