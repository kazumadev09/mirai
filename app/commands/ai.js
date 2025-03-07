const axios = require("axios");

module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "lol",
    hasPrefix: false,
    description: "AI",
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 2,
    dependencies: {
        "axios": "1.4.0"
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;

    const query = args.join(" ").trim();

    if (!query) {
        return api.sendMessage("Please provide a question."), threadID, messageID);
    }

    const processingMessage = (`Searching for "${query}"....`);
    api.sendMessage(processingMessage, threadID, async (err, info) => {
        if (err) return console.error(err);

        try {
            api.setMessageReaction("⌛", messageID, () => {}, true);

            const response = await axios.get(`https://daiki.gleeze.com/api/mixtral-24b?ask=${encodeURIComponent(query)}&uid=${messageID}`);
            const reply = response.data.response || ("Sorry, I couldn't understand that.");

            api.sendMessage((reply), threadID, messageID);
            api.setMessageReaction("✅", messageID, () => {}, true);
        } catch (error) {
            console.error("Error fetching data from API:", error);
            api.sendMessage("An error occurred while fetching data. Please try again later.", threadID, messageID);
        }
    });
};