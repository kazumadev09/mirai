module.exports.config = {
name: 'autosent',
version: '10.02',
hasPermssion: 0,
credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
description: 'Set Karne Ke Bad Automatically Msg Send Karega',
commandCategory: 'group messenger',
usages: '[]',
cooldowns: 3
};
const nam = [{
timer: '12:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 P𝐌 ⏳            𝐁𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚𝐲𝐚 𝐀𝐚𝐩𝐍𝐞?                 ──── •💜• ────']
},
{
timer: '1:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳            𝐒𝐨 𝐉𝐚𝐨 𝐁𝐚𝐛𝐲 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 🥀              ──── •💜• ────']
},
{
timer: '2:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳              𝐒𝗼 𝐉𝗮𝗼 𝐘𝗮𝗿 𝐊𝗼𝗶 𝐍𝗵𝗶 𝐇 😇             𝐓𝘂𝗺𝗵𝗮𝗿𝗮 𝐌𝗲𝗿𝗲 𝐒𝗶𝘃𝗮😘                  ──── •💜• ────']
},
{
timer: '3:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳             𝗧𝘂𝗺 𝗔𝗯𝗵𝗶 𝗧𝗮𝗸 𝗦𝗼𝘆𝗲 𝗡𝗵𝗶 😳               ──── •💜• ────']
},
{
timer: '4:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳              𝐓𝐮𝐦𝐬𝐞 𝐊𝐨𝐢 𝐧𝐡𝐢 𝐩𝐚𝐭𝐞𝐠𝐚,🤣              𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞🌃                 ──── •💜• ────']
},
{
timer: '5:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳             𝐊𝐲𝐚 𝐓𝐮𝐦 𝐌𝐚𝐡𝐚𝐫𝐚𝐣𝐚 𝐇𝐨?😳              𝐒𝐨 𝐣𝐚𝐨 𝐍𝐡𝐢 𝐓𝐨𝐡 𝐒𝐮𝐛𝐡𝐚                 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐦𝐚𝐦𝐦𝐢 𝐋𝐚𝐭𝐡                  𝐌𝐚𝐫𝐤𝐞 𝐔𝐭𝐡𝐚𝐲𝐞𝐠𝐢🤣                     ──── •💜• ────']
},
{
timer: '6:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳            𝐏𝐮𝐫𝐢 𝐑𝐚𝐚𝐭 𝐍𝐡𝐢 𝐒𝐨𝐲𝐚 𝐇𝐨𝐠𝐚,             𝐊𝐨𝐢 𝐁𝐚𝐚𝐭 𝐍𝐚𝐡𝐢🤫, 𝐓𝐡𝐨𝐝𝐢 𝐄𝐱𝐞𝐫𝐜𝐢𝐬𝐞 𝐊𝐚𝐫𝐥𝐨 𝐀𝐚𝐥𝐬𝐢😹            ──── •💜• ────']
},
{
timer: '7:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳             𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝐄𝐯𝐞𝐫𝐲𝐎𝐧𝐞🌅, 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐀𝐥𝐚𝐢𝐤𝐮𝐦 𝐖𝐚 𝐑𝐚𝐡𝐚𝐦𝐚𝐭𝐮𝐥𝐥𝐚𝐢 𝐖𝐚 𝐁𝐚𝐫𝐚𝐤𝐚𝐭𝐮𝐡❤️🥀 💖 ──── •💜• ────']
},
{
timer: '8:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳            𝐒𝐮𝐫𝐚𝐣 𝐌𝐚𝐦𝐚 𝐔𝐭𝐡 𝐂𝐡𝐮𝐤𝐚 𝐇,             𝐓𝐮𝐦 𝐁𝐡𝐢 𝐔𝐭𝐡 𝐉𝐚𝐨 𝐀𝐛𝐡𝐢🥰                  ──── •💜• ────']
},
{
timer: '9:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳            𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩?😵                ──── •💜• ────']
},
{
timer: '10:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳           𝐍𝐚𝐬𝐭𝐚 𝐊𝐚𝐫𝐧𝐞 𝐊𝐚 𝐓𝐢𝐦𝐞 𝐇𝐨 𝐆𝐲𝐚🥪          𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 𝐁𝐚𝐛𝐲🙈                ──── •💜• ────']
},
{
timer: '11:30:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳            𝐀𝐚𝐥𝐬𝐢 𝐀𝐚𝐣 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐍𝐚𝐡𝐢 𝐆𝐚𝐲𝐞?🙀               ──── •💜• ────']
},
{
timer: '12:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳            𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐢 𝐘𝐚𝐚𝐝 𝐊𝐚𝐫 𝐋𝐢𝐲𝐚 𝐊𝐚𝐫𝐨😻                ──── •💜• ────']
},
{
timer: '1:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳            𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞            𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫🥵                 ──── •💜• ────']
},
{
timer: '2:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳            𝐁𝐨𝐡o𝐭 𝐊𝐚𝐚𝐦 𝐊𝐚𝐫𝐥𝐢𝐲𝐚 𝐀𝐩𝐧𝐞,               𝐋𝐮𝐧𝐜𝐡 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢😇                   ──── •💜• ────']
},
{
timer: '3:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳            𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇                   ──── •💜• ────']
},
{
timer: '4:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳                 𝐇𝐚𝐲𝐞 𝐆𝐚𝐫𝐦𝐢 🥵                     ──── •💜• ────']
},
{
timer: '5:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳            𝐓𝐞𝐞 𝐓𝐢𝐦𝐞 ☕                          𝐌 𝐁𝐚𝐧𝐚𝐤𝐞 𝐃𝐮 𝐁𝐛𝐲?                     𝐓𝐞𝐚 𝐂𝐡𝐚𝐢𝐲𝐞 𝐓𝐨𝐡 𝐋𝐢𝐤𝐤𝐡𝐨 ☞ 𝐓𝐞𝐚 ☜           ──── •💜• ────']
},
{
timer: '6:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳             𝐓𝐨 𝐊𝐞𝐬𝐚 𝐑𝐚𝐡𝐚 𝐀𝐚𝐣 𝐊𝐚 𝐃𝐢𝐧 𝐀𝐚𝐩𝐤𝐚🤔     ──── •💜• ────']
},
{
timer: '7:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳             𝐆𝐨𝐨𝐝 𝐄𝐯𝐞𝐧𝐢𝐧𝐠 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞,😍               𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖               ──── •💜• ────']
},
{
timer: '8:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳             𝐒𝐚𝐛 𝐇 𝐘𝐚𝐡𝐚, 𝐏𝐚𝐭𝐚 𝐍𝐡𝐢                 𝐌𝐞𝐫𝐚 𝐁𝐨𝐬𝐬 𝐇 𝐊𝐚𝐡𝐚 😞                  𝐌 𝐓𝐨𝐡 𝐔𝐬𝐢𝐤𝐚 𝐑𝐚𝐡 𝐃𝐞𝐤𝐡 𝐑𝐡𝐚🥺               ──── •💜• ────']
},
{
timer: '9:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳              𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐁𝐚𝐛𝐲😘                  𝐀𝐮𝐫 𝐉𝐚𝐥𝐝𝐢 𝐒𝐨 𝐉𝐚𝐧𝐚                  ──── •💜• ────']
},
{
timer: '10:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳                  𝐊𝐨𝐢 𝐇?                       𝐉𝐨 𝐌𝐞𝐫𝐞 𝐋𝐢𝐲𝐞 𝐅𝐫𝐞𝐞 𝐇 🥺                 ──── •💜• ────']
},
{
timer: '11:30:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 P𝐌 ⏳              𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐁𝐚𝐛𝐲😘                  𝐀𝐮𝐫 𝐉𝐚𝐥𝐝𝐢 𝐒𝐨 𝐉𝐚𝐧𝐚                      ──── •💜• ────']
}];
module.exports.onLoad = o => setInterval(() => {
const r = a => a[Math.floor(Math.random()*a.length)];
if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};