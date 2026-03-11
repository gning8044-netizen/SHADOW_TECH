import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "SHADOW-TECH",
        body: "𓆩 SHADOW-TECH 𓆪",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com/channel/0029Vb8GNwG5K3zdm0MeFu0l",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}