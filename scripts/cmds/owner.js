const request = require("request");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "owner",
    aliases: ["admininfo", "ownerinfo"],
    version: "2.0.0",
    author: "SHISHIR",
    countDown: 2,
    role: 0,
    shortDescription: {
      en: "Show Owner Information"
    },
    description: {
      en: "Show owner information with random photo"
    },
    category: "Information",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event }) {

    const info = `
╔══════════════════════════╗
║   👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑
╠══════════════════════════╣
║
║ 👑 𝗡𝗔𝗠𝗘
║ ➜ 𝘈𝘩𝘮𝘦𝘋’𝘴 𝐒𝐇𝐈𝐒𝐇𝐈𝐑
║
║ 🧸 𝗡𝗜𝗖𝗞 𝗡𝗔𝗠𝗘
║ ➜ 𝙔𝙤𝙪𝙧 𝘼𝘽𝘽𝙐
║
║ 🎂 𝗔𝗚𝗘
║ ➜ 17+
║
║ 💘 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡
║ ➜ 𝗦𝗶𝗻𝗴𝗹𝗲
║
║ 🎓 𝗣𝗥𝗢𝗙𝗘𝗦𝗦𝗜𝗢𝗡
║ ➜ 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║
║ 🏡 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡
║ ➜ 𝗦𝗜𝗥𝗔𝗝𝗚𝗔𝗡𝗝 🇧🇩
║
╠══════════════════════════╣
║      🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧
╠══════════════════════════╣
║
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸
║ ➜ fb.com/61592841571046
║
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿
║ ➜ m.me/61592841571046
║
╚══════════════════════════╝

       ✦ 𝐒𝐇𝐈𝐒𝐇𝐈𝐑 - 𝐀𝐈 - 𝐁𝐎𝐓 ✦
`;

    const images = [
      "https://i.imgur.com/G8wZwUB.jpeg",
      "https://i.imgur.com/942vNzR.jpeg",
      "https://i.imgur.com/viT3o6b.jpeg",
      "https://i.imgur.com/btn02Xz.jpeg"
    ];

    const randomImg =
      images[Math.floor(Math.random() * images.length)];

    const cacheDir = __dirname + "/cache";
    const imagePath = cacheDir + "/owner.jpg";

    // Create cache folder if it doesn't exist
    await fs.ensureDir(cacheDir);

    try {
      request
        .get(randomImg)
        .pipe(fs.createWriteStream(imagePath))
        .on("finish", () => {

          api.sendMessage(
            {
              body: info,
              attachment: fs.createReadStream(imagePath)
            },
            event.threadID,
            () => {
              if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
              }
            },
            event.messageID
          );

        })
        .on("error", (err) => {
          console.error("OWNER IMAGE ERROR:", err);

          api.sendMessage(
            info,
            event.threadID,
            event.messageID
          );
        });

    } catch (error) {

      console.error("OWNER COMMAND ERROR:", error);

      api.sendMessage(
        info,
        event.threadID,
        event.messageID
      );
    }
  }
};
