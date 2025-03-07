const axios = require("axios");
module.exports.config = {
    name: "gemini",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "lol",
    hasPrefix: false,
    description: "Gemini AI with vision capability",
    commandCategory: "ai",
    usages: "[ask] or reply to an image with [ask]",
    cooldowns: 2,
    dependencies: {
        "axios": "1.4.0"
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID, messageReply } = event;
    const query = args.join(" ").trim();

    if (!query) {
        return api.sendMessage("Please provide a question.", threadID, messageID);
    }

    const processingMessage = `Searching for "${query}"...`;
    api.sendMessage(processingMessage, threadID, async (err, info) => {
        if (err) return console.error(err);

        try {
            api.setMessageReaction("⌛", messageID, () => {}, true);

            let response;

            if (messageReply && messageReply.attachments && messageReply.attachments[0] && messageReply.attachments[0].type === "photo") {
                const imageUrl = messageReply.attachments[0].url;
                response = await axios.get(`https://api.shizuki.linkpc.net/api/gemini?chat=${encodeURIComponent(query)}&imageUrl=${encodeURIComponent(imageUrl)}`);
            } else {
                response = await axios.get(`https://api.shizuki.linkpc.net/api/gemini?chat=${encodeURIComponent(query)}`);
            }

            const reply = response.data.response || "Sorry, I couldn't understand that.";

            api.sendMessage(reply, threadID, messageID);
            api.setMessageReaction("✅", messageID, () => {}, true);
        } catch (error) {
            console.error("Error fetching data from API:", error);
            api.sendMessage("An error occurred while fetching data. Please try again later.", threadID, messageID);
            api.setMessageReaction("❌", messageID, () => {}, true);
        }
    });
};