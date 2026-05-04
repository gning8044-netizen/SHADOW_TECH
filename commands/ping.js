import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "🥷 MR POUTINE ZETSU IS BACK𓊉🫅..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `☠️ 𓊈MR POUTINE MD𓊉☠️ en ligne\n\n` +
            `Latency: ${latency} ms\n\n` +
            `☠️𓊈*Bot Crée Par Dev Shadow Tech*𓊉☠️ `
        )
    }, { quoted: message })
}