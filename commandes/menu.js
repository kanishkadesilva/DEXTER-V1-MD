const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Africa/Nairobi');

// Create a date and time in EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
┎──⊷❮ *Qᴜᴇᴇɴ ᴛʜᴀʀᴜ-ᴍᴅ* ❯──⊷❍
┃✦╭──────────────✦
┃✦┃ 𝗨𝘀𝗲𝗿 : ${s.OWNER_NAME}
┃✦┃ 𝗠𝗼𝗱𝗲 : ${mode}
┃✦┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝗞𝗮𝗻𝗶𝘀𝗵𝗸𝗮_𝘅
┃✦┃ 𝗢𝘄𝗻𝗲𝗿 : 𝗞𝗮𝗻𝗶𝘀𝗵𝗸𝗮 𝗗𝗲 𝗦𝗶𝗹𝘃𝗮
┃✦┃ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗼 : wa.me//94722477361
┃✦┃ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${s.PREFIXE}
┃✦┃ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${cm.length}
┃✦┃ 𝗥𝗮𝗺 : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃✦┃ 𝗗𝗮𝘁𝗲 : ${date}
┃✦┃ 𝗧𝗶𝗺𝗲 : ${temps} 
┃✦┃ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : 𝗞𝗮𝗹𝗶•𝗟𝗶𝗻𝘂𝘅
┃✦┃ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝐯1.0
┃✦┃ 
┃✦┃ ▒▓ ▍▌▌▉▏▎▌▉▐▏▌▓▒
┃✦┃ ▒▓ ▍▌▌▉▏▎▌▉▐▏▌▓▒
┃✦┃ 
┃✦╰━━━━━━━━━━━───◆
╰━━━━━━━━━━━──⊷ \n\n`;

  let menuMsg=`  

* ⚘ Inspiring the intelligence.
Connecting you digitality. 🐝 *

◇                             ◇
`;

    for (const cat in coms) {
        menuMsg += `*╭────☢️* *${cat}* *☢️⊷*`;
        for (const cmd of coms[cat]) {
            menuMsg += `
 *|☬* ${cmd}`;
        }
        menuMsg += `
*╰═════════════⊷* \n`
    }

    menuMsg += `
◇            ◇
*————— ★ —————*

  *📌©𝗞𝗔𝗡𝗜𝗦𝗛𝗞𝗔 🥷²0²⁴*                                         
*╰═════════════⊷*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*📌Kanishka*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
