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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVPY2Q5MHU3MGxUcGN6bFNTcXM5TkR3ZE5xQnB5bmZoWnN0aGdxTkVrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkNyNUVnYUEwRVJvbmhRWDVFYmh4QllHUmwrOC9YeXlGY0VSWXFpdStUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RmlZeEtpdXd1d0xkYkQxVHJ4RUQyZHI0aHFUZVltNy9pWWxHODBURVZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdXZiUWIwY001MmxlYnc3ZUlqV1YxT3NvMnBKR2dBZ3hkcVhMcFBZcWhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGbW44eE5lcU1NcW9uN0dqelIyUks5RDdVMzUvL2o0TXdibjg3bnBrSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRubVdhRy9nNHBzT3JGZUtuUmQyYmNiNktrTXVYRFRGL0pJZC9rYkJaMHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpUU1FCUjcvQ0lBbnJMM2dhL0xSZGR1ZHlUUFZlRTdoTHlsQ0diQnNtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHdPMENncGUzcUNBcng3VmhqM1BWN3l4eGtCQ0R1aWt5RjgvaFZaRHhGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFsVlI1ZHRGVUx1SWNRL1NEM05PS2VYREpOSGhlNGpHc2N5ZDdLN2M5enUwb3UrZ2Z3N2ZtQWJuQmdJUUxBb3N5N3lTUlBjRzRBYlZEV2NwaFhDeWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6Ik5nZFBFcS9uR25MajU5NTdDYWFoNk01YXdmLzBwTDJ1YXJ3VjZnWkx3UXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhLRVkyMjJKIiwibWUiOnsiaWQiOiI5NDcyOTE3MzI5NDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRpbnV0aCIsImxpZCI6IjEwNDYyMTc2MjcyNDA5NDozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEdkOUpNSEVQV1R2Y1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibE9BczM5QkdIZUN4VmtPMk1KZlRxaGd0a0w0b2V6WHk5M0VuUGRwM3JuVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidFYzeEhhKzNiRHU4d2s0cEcyVFVXZ3JkNGhRdjhzRDhBWUxlMG01d08rTmZrVmVwOU5rUnhzTkU5cDJJZG5lbEhIYVJ4RGRXM1FhQ2t2RVJBODhpQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im9ZS01pdjF6RVNoUVZmK0FaZE9CMVk2V2s4ZlpnUzVYYklub3FJT3RwMGd1YWZzc1JiMVFUT21Kbkx2eFZTd2s4bWtNSGkzeTIxeGVrZVlpUGlnS2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjkxNzMyOTQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaVGdMTi9RUmgzZ3NWWkR0akNYMDZvWUxaQytLSHMxOHZkeEp6M2FkNjUxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzMTgyMTAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREMwIn0=",
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
