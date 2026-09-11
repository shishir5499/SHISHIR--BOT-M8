const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "intro",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🔰Rahat Islam🔰",
 description: "Show  Info",
 commandCategory: "info",
 usages: "info",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━━┓
┃ 🌟𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎🌟
┣━━━━━━━━━━━━━━━━┫
┃👤𝐍𝐀𝐌𝐄      :𝐒𝐇𝐈𝐒𝐇𝐈𝐑 
┃🚹𝐆𝐄𝐍𝐃𝐄𝐑    :𝐌𝐀𝐋𝐄
┃🎂𝐀𝐆𝐄       :𝟏7
┃🕌𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : 𝐈𝐒𝐋𝐀𝐌
┃🏫𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 :👙👙👙🐺
┃🏡𝐀𝐃𝐃𝐑𝐄𝐒𝐒 :𝙎𝙍𝘼𝙟𝙂𝙊𝙉𝙂,Bᴀɴɢʟᴀᴅᴇsʜ
┣━━━━━━━━━━━━━━━━┫
┃𝐓𝐈𝐊𝐓𝐎𝐊 :@xudlingpong 
┃📢𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 :Ahmed'z shishir🥴🤪
┃🌐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :https://www.facebook.com/share/1Bqg6w6CLy/
┣━━━━━━━━━━━━━━━━┫
┃🕒𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐓𝐈𝐌𝐄 :${time}
┗━━━━━━━━━━━━━━━━┛`,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/FJI61jS.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
