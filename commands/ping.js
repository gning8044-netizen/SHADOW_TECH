import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "🥷 𓊈𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃𓊉☠️..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🥷 𓊈𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃𓊉☠️ en ligne\n\n` +
            `Latency: ${latency} ms\n\n` +
            `☠️𓊈𝐌𝐨𝐦𝐨 𝐋𝐚 𝐂𝐡𝐞𝐟 𝐒𝐮𝐩𝐫ê𝐦𝐞 𝐃𝐮 𝐂𝐥𝐚𝐧 𝐀𝐤𝐚𝐭𝐬𝐮𝐤𝐢𓊉☠️ `
        )
    }, { quoted: message })
}