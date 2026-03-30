import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝙕𝙀𝙏𝙎𝙐-𝙉𝙊𝙄𝙍",
        body: "𓆩 ‪𝙕𝙀𝙏𝙎𝙐-𝙉𝙊𝙄𝙍‬ 𓆪",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com/channel/0029Vb8GNwG5K3zdm0MeFu0l",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}