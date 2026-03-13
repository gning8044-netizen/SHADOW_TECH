export async function uptime(client, message) {
    const remoteJid = message.key.remoteJid
    const uptime = process.uptime()
    
    const days = Math.floor(uptime / 86400)
    const hours = Math.floor((uptime % 86400) / 3600)
    const minutes = Math.floor((uptime % 3600) / 60)
    const seconds = Math.floor(uptime % 60)
    
    const text = `┌─🤖 𝐄𝐌𝐏𝐈𝐑𝐄 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈 𝐈𝐒 𝐁𝐀𝐂𝐊 ─┐
│
│ ⏱️ Uptime: ${days}d ${hours}h ${minutes}m
│ 💾 RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)}MB
│
│ "✅𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃"
│     - 🥷𝐄𝐌𝐏𝐈𝐑𝐄 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈 𝐈𝐒 𝐁𝐀𝐂𝐊... -
└────────────────────┘`
    
    await client.sendMessage(remoteJid, { text: text })
}

export default uptime