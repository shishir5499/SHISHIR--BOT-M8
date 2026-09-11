const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "owner",
    aliases: ["admininfo", "info", "ownerinfo"],
    version: "3.0",
    author: "xalman",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Show owner information" },
    category: "owner",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ api, event, message }) {

    const ownerName = "༒︎ 𝑨𝑯𝑴𝑬𝑫’𝒁 𝑺𝑯𝑰'𝑺𝑯𝑰𝑹 ༒︎";
    const ownerAge = "17";
    const fbName = "𝗬𝗼𝘂𝗿 𝗔𝗕𝗕𝘂";
    const messenger = "https://www.facebook.com/share/1BwKAMDu3N/";
    const whatsapp = "017493--26";
    const telegram = "@Ahmed shishir";
    const address = "𝙎𝙞𝙧𝙖𝙟𝙜𝙖𝙣𝙟, 𝘿𝙝𝙖𝙠𝙖, 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝";
    const religion = "☪︎ 𝑰𝒔𝒍𝒂𝒎 ☪︎";
    const apiServer = "https://shishir-apis.vercel.app";
    const relationship = "『𝑺𝑰𝑵𝑮𝑳𝑬』";
    const videoLink = "https://i.imgur.com/elfBlOg.mp4";
    const timeBD = moment().tz("Asia/Dhaka");
    
    const infoMsg = 
`『 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 』
━━━━━━━━━━━━━━━━━━━━━

👤 𝗔𝗕𝗢𝗨𝗧 𝗠𝗘:
● Name: ${ownerName}
● Age: ${ownerAge}
● Relationship: ${relationship}
● Religion: ${religion}
● Address: ${address}

📞 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗗𝗘𝗧𝗔𝗜𝗟𝗦:
● Facebook: ${fbName}
● Fb Link: ${messenger}
● WhatsApp: ${whatsapp}
● Telegram: ${telegram}
● API Server: ${apiServer}

⏰ 𝗗𝗔𝗧𝗘 & 𝗧𝗜𝗠𝗘 (𝗕𝗗):
● ${timeBD.format("DD MMMM, YYYY")}
● ${timeBD.format("hh:mm:ss A")}
━━━━━━━━━━━━━━━━━━━━━`;

    try {
      return message.reply({
        body: infoMsg,
        attachment: await global.utils.getStreamFromURL(videoLink)
      });
    } catch (e) {
      return message.reply(infoMsg);
    }
  },

  onChat: async function ({ event, message }) {
    if (event.body?.toLowerCase() === "info") {
      return this.onStart({ message, event });
    }
  }
};
