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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0syQ29rSUIyeEsxRncwd1FaSDExWkdTSllQVmJSbkN0Rkg5M01seUlXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWdtZHRuL2VvVGdScVFka0pGZURFOVljbndpRVpLVGZES0ZpdDFKNFYxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTzl2dy9VZmJMZ0lpNWxSTXhQVFBoN2FsK2xuUVBaM2Mwb3NVRWErRkdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNmJXQW9kb2lzaC9aN21DUTNHMUNBclIvSkJmVGZucVpGU29kQVNsa2pRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIK2Rma2RHUTdLUVQ4cmlZVkY2akRVYXZCVFA3YkJwM3dJeUlTb0YrSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhRVVFnL0duYkV3dFdjdjBvamVIT0Vwa3FWbHl1c2lFZU1XRktxNEZPakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0c2Rmg1N0k2MmFuZTZlQWlmS3dKMG5IaHRqSWJQcTB1cE5SdkpqeGFYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWI3c1BKdUcwdTBlQXRXU3JMR0VvNDZETnlYdXpaNnkzaVhlcGpHMjNSbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTTUZ6Mzdqb2M1VkIyYThjYXhjVms5WFZpdEM3RTFod1hUVGJDT0tHckwwaS9ySVBhR1NKZkxDY2l6R2V4ZWV3TzJsVFl3VVdiSDRaN2wzQmRMK2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IlFadjNMTmpCcGxtRzU4dmZYL3J0UE1aZmtZNVhXTXlsa0VFUFFld2NwNHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJJSzgtdnVWUUEtWWU1MHZQaWxLTEEiLCJwaG9uZUlkIjoiZTJkNjE2YjEtNDRlNC00ZDk3LTg0ZGItNjVmZGU2ZGE0NDQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNRelhuSjl2czJBWFJEQW9HZWtqb2FQWkloST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEZFZmlGQ1RXbHNBUFVTL1ptSnFNdGFGZzZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFNkOUpNSEVMZmJ2OFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibE9BczM5QkdIZUN4VmtPMk1KZlRxaGd0a0w0b2V6WHk5M0VuUGRwM3JuVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibStZOGpDVS9oRVFyaUlzSG1BbTVqakF6dDh5S1BHeWpEVGpzeHpqcEx3ZDh4dGpDTHA5Zk02OThxSlpoZCtmcjNoSU42OW5BUWFNZ3VIQUg0VDVkRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InVpZXdLaXBabzNWUjNVekc0RUZmbnZHZ3VCc2haazB6KzBJekNXYkRYZUgwbTdhRDJGbUpVZGhTL3EzYjh4T0lNS1RwN1dUYklXMGZZakc5eVJDU2d3PT0ifSwibWUiOnsiaWQiOiI5NDcyOTE3MzI5NDo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRpbnV0aCIsImxpZCI6IjEwNDYyMTc2MjcyNDA5NDo0QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTE3MzI5NDo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpUZ0xOL1FSaDNnc1ZaRHRqQ1gwNm9ZTFpDK0tIczE4dmR4SnozYWQ2NTEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjM2MDEyMywibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
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
