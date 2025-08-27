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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0d5bDQ2MkpHUXR1Ti90MEY1MmFvOTlBbmlRMFdWRWNVTXBiVVIyb2FYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEg3RVU0UytDQS9ieDRrUWo5SWgycGY2K1l0M3R5T0Qyeks5c2U4U0IwYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS2krdVJudzRzOStDUkJMV0VwYlFaTm1pbU5QVGYrc0JQdUp2THM5Rkc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaV0dMTER1YmwvTkhLOXhLalFtUGMrRG9RQkx1R0VuK0JvNXBCdC8vVUN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGY1lOQS91emVkb2hTWGpBdjhQamFuMUhFZnZtZWQ4YzBvMFY3Ri9aM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw2SDM5YlJDUy8vU25OY3lKR2JTL1ZjTWJraXFiWFZwK09XandFZVZsQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpCRVVXOGxZUEUrRm5DQzR1T09STjVtZ3UxMWNzTlFDZExwVzBQa0VuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDdsd0VUdEZGa2Q3UHJ0ZmI0WG5JK1BKZkNtd2V6V1c4OGJEWTZHOEJROD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNta3dUTFdIdzI5TWw5czdIbEdwd1VUMzJ4bzU1dkh6T1d1dDNtQ3F1V2FoOGd4QWhwS1p4YVZkYUZzUzRLejVVYW93UTFPK1pTdjR0UnkwRm1OTEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiaVFrdWw5aGcvS1VHRUJHNXh5NnFpQ0FlOWhSbUtVL2NFRXVtVGlYUHA5VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMVRYQjdYR1AiLCJtZSI6eyJpZCI6Ijk0NzI5MTczMjk0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRElOVVZBIiwibGlkIjoiMTA0NjIxNzYyNzI0MDk0OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ2Q5Sk1IRU02MXVjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsT0FzMzlCR0hlQ3hWa08yTUpmVHFoZ3RrTDRvZXpYeTkzRW5QZHAzcm5VPSIsImFjY291bnRTaWduYXR1cmUiOiJobU1zYkNkcXlYUkNQbThzZ01PVmZ4Q2NGMk8rV05KY2dFencwVGIxOVhjcXI0SkxCRE5SUnVaRmtwallkZUNjTlc5V2taV1FGNGRveFhGM3hLdEtDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUlByVUxuUXM2VlBEb2Z1QldZUlY3TnNibWx5RjVmK3pQVXpwekFsVW4zNnZxRzdjSVRub2xxUGRjcmc2RmNtellHc0xlREFEWXlpYnpuT01GdnZFQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTE3MzI5NDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpUZ0xOL1FSaDNnc1ZaRHRqQ1gwNm9ZTFpDK0tIczE4dmR4SnozYWQ2NTEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjI1Njk4OCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdXEifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94781306128",
  PASSWORD: 
    process.env.PASSWORD || "dinuth2009@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94781306128", "94788214054"],
  PORT: process.env.PORT || "3000",
  USERNAME: process.env.USERNAME || "SL-DINU-BOY", 
  TOKEN:process.env.TOKEN || "mDION1XRu8f3WdcLtGO8gJCD6eujD01YrZHu",
  REPO_NAME:process.env.REPO_NAME || "ANJU-XPRO-V5",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  };
