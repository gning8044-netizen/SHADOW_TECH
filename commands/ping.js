import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "🥷 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🌟 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃 en ligne\n\n` +
            `Latency: ${latency} ms\n\n` +
            `𝐦𝐨𝐦𝐨 𝐥𝐚 𝐜𝐡𝐞𝐟 𝐝𝐮 𝐜𝐥𝐚𝐧 `
        )
    }, { quoted: message })
}