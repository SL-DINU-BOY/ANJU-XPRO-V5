//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtVcmJ5dkEyU1hickpEYU5xQzEvMmQxNzUvL2RMZjJaSkoyc2lzYytFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xQNEFwNVBBb1BNN3lWL0puWEk3RWljbERFMjAxYWowNFU4QWxVUkRtcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RElYRElySmlqTEhRbExqUFovYklLMFZ2d0VtZkFHd0o3aXlQZ2o0WkhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVXpsUHZCamFvcjQzMnhTN3o0RWpFM3JzMml3ZnZFSTBicXJQVXZLQ3o4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLaHI1SlRMVGFhMEpXQU54YzZsTXFqRDk2ejNPQTVrN0YvSy9hVVJ1RW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9SMHlHRGwzcktzanVXOWFtNVRweGhoVGRJaG5KUG52TWR4b1NQRDFCRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RRay83R2YyQUx4dkcxbzZ5SFBCdmNwWEdsdlhRR3BqRHRwRzd0MnkzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm9nTHVqWDQxM3VJdVNoUnByenIzKzVNUk9tKzIrbnlOTWUxbnBtWFZSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE4QmhMNU1mODVpazVsak9JR2xyNk5hUGh3cEJkRHlqQ09KSTZiNDZhOHRBVDJjSHV1VUpIYUwwa2tWQlR2bDU4TG1Cb25FVlI3VmFRK2FaRXAwekR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6ImxnQ1kvTHBMZlBsMjJGUmdVN09xNE12R3MweW0xV2cyeVRUbjVTSllRL009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhzN3ozUy0xUUVpemNnd1pMSFJwdVEiLCJwaG9uZUlkIjoiODk0ZTZjMmUtMGJiYy00ZWQzLTlhZmYtODJmOGNhOGMwYjhjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBtUnYvL01vS3lEaHVxQXo0ckYvZEVYWG9wOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QUQyVGw1Z1B1TGppL0k3eW9Sb3V3UUdXRTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUkZLTTNMRUgiLCJtZSI6eyJpZCI6Ijk0NzU4Nzc1NjI4OjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1yIFJhc2htaWthIiwibGlkIjoiMTIyMjQzOTYzMjAzODM1OjU3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStudUt3QkVLQzNrc1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0hRdXhiRHJsczJBTnpOTml0SjVZYy9IVHFaK0loa3hObHNpRjdid0gxWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVHhpZ3lIc3IvcThEbk5vcHRDTDVUZGcyS2dteXhGTXdRZi8vVTI2NkQxczJXT3pvRHlRaGtDclFoZURPVlFjZHlaSTFRYzBGSnFMeHpBZWdwbTFoQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IllUSmo4cDM1SG5ldnZLSzR4QkxMcVRFODh1RWc4a2VDRkYwZDl5Y1JGSEZMQ3dxdUE0YXY5TWhpS0lqQllDeEg2cDhheEx1MWtnUFhjSUdIck5XbUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTg3NzU2Mjg6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmgwTHNXdzY1Yk5nRGN6VFlyU2VXSFB4MDZtZmlJWk1UWmJJaGUyOEI5VyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzNTIxMDY5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNTMCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94781306128",
  PASSWORD: 
    process.env.PASSWORD || "dinuth2009@:",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94788214054"],
  PORT: process.env.PORT || "3000",
  USERNAME: process.env.USERNAME || "SL-DINU-BOY", 
  TOKEN:process.env.TOKEN || "mDION1XRu8f3WdcLtGO8gJCD6eujD01YrZHu",
  REPO_NAME:process.env.REPO_NAME || "ANJU-XPRO-V5",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  };
