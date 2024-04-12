module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:` --❖-- 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝐍 --❖--
✢━━━━━━━━━━━━━━━✢\n=======================
𝗔𝗗𝗠𝗜𝗡:-- 𝗡𝗔𝗭𝗥𝗨𝗟
𝗟𝗢𝗖𝗔𝗧𝗜𝗡𝗘:-𝗡𝗔𝗢𝗚𝗔𝗢𝗡.𝗥𝗔𝗝𝗦𝗛𝗔𝗛𝗜
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: বি্ঁষা্ঁক্ত্ঁ ধো্ঁয়া্ঁ
𝗔𝗚𝐄 := 19+
𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 := 𝗦𝗜𝗡𝗚𝗟𝗘
𝗪𝗢𝗥𝗞 := 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
==============================================
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞:= https://www.facebook.com/ji.li.pi.6
✢━━━━━ N/S ━━━━━✢
----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000350435589/picture?height=&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
