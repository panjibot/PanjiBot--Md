/**
  * Created by Riy
  * WhatsApp wa.me/6283141083033
  * Follow me on Instagram @panjisuvakti2
*/

"use strict";
const {
	default: makeWASocket,
	BufferJSON,
	jidDecode,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
    makeInMemoryStore,
	useMultiFileAuthState,
	delay
} = require("@whiskeysockets/baileys")
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment')
const chalk = require('chalk')
const { Boom } = require('@hapi/boom')
const readline = require("readline");
const path = require('path')
const logg = require('pino')
const qrcode = require('qrcode');
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif2')
const clui = require('clui')
const { Spinner } = clui
const { serialize, getBuffer, sleep } = require("./lib/myfunc");
const { color, mylog, infolog } = require("./lib/color");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let { ownerNumber, ownerName, owner, creatorNumber, botName } = setting
let session = `./${setting.sessionName}.json`
let notifigroup = JSON.parse(fs.readFileSync('./database/welcome.json'));

const jadibot = async (conn, reply, msg, from) => {
const { sendImage, sendMessage } = conn;
const { sender } = msg;
const { state, saveCreds } = await useMultiFileAuthState(`./database/rentbot/${sender}_data`)
try {
const store = makeInMemoryStore({
    logger: logg().child({
        level: 'silent',
        stream: 'store'
    })
})
async function startVanz() {
const conn = await makeWASocket({
auth: state,
browser: [`jadibot by vanz (beta)`, "Chrome", "1.0.0"],
logger: logg({ level: "silent" }),
})
        store.bind(conn.ev)
        
     //call auto block by vanz
     conn.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    conn.sendContact(callerId, owner)
    await sleep(400)
    conn.sendMessage(callerId, { text: `*Sistem otomatis block!*\n_*Jangan menelpon bot*_!\n*Silahkan Hubungi Owner Untuk Dibuka !*`})
    await sleep(800)
    await conn.updateBlockStatus(callerId, "block")
    }
    })
		
	conn.multi = true
	conn.nopref = false
	conn.prefa = 'anjing'
	conn.mode = 'public'
	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0]
		msg = serialize(conn, msg)
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0')
		require('./message/msg')(conn, msg, m, setting, store, notifigroup)
	})
	
	conn.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    conn.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = conn.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    conn.getName = (jid, withoutContact = false) => {
        let id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            let v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
	 
	conn.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to rent bot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr, {scale : 8 }), 'Scan this QR to become a temporary bot\n\n1. Click the three dots in the top right corner\n2. Tap Link Devices\n3. Scan this QR \nQR Expired in 30 seconds\n\n JadiBot By Vanz (beta)', msg)
console.log(connection)
if (connection == "open") {
conn.id = conn.decodeJid(conn.user.id)
conn.time = Date.now()
await reply(`*Connected to ${botName}*\n\n*User :*\n _*× id : ${conn.decodeJid(conn.user.id)}*_`)
var user = `${conn.decodeJid(conn.user.id)}`
var txt = `*Detected using rent bot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6283857092641@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); conn.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); startVanz(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); startVanz(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); conn.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); startVanz(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); startVanz(); }
else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})
    conn.ev.on('creds.update', saveCreds)
	
        conn.ev.on('group-participants.update', async (data) => {
          const notificationgroup = notifigroup.includes(data.id) ? true : false
          if (notificationgroup) {
            try {
              for (let i of data.participants) {
                try {
                  var metadata = await conn.groupMetadata(data.id)
                  var pp_user = await conn.profilePictureUrl(i, 'image')
                } catch {
                  var pp_user = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
                }
                if (data.action == "add") {
          conn.sendMessage(data.id, { 
                text: `Welcome @${i.split("@")[0]} in ${metadata.subject}`,
                contextInfo: { 
                  mentionedJid: [i],
                  externalAdReply: { 
                      title: `Notification Group`, 
                      body: `${metadata.subject}`, 
                      thumbnailUrl: pp_user,                     
                      mediaType: 1, 
                      sourceUrl: ``,
                      renderLargerThumbnail: true }}})                            
                } else if (data.action == "remove") {
                  conn.sendMessage(data.id, { 
                text: `GoodBye  @${i.split("@")[0]} in ${metadata.subject}`,                
                contextInfo: { 
                  mentionedJid: [i],
                  externalAdReply: { 
                      title: `Notification Group`, 
                      body: `${metadata.subject}`, 
                      thumbnailUrl: pp_user,  
                      mediaType: 1, 
                      sourceUrl: ``,
                      renderLargerThumbnail: true }}})
                  } else if (data.action == "promote") {
                  conn.sendMessage(data.id, { 
                text: `Selamat kamu menjadi admin!! @${i.split("@")[0]} in ${metadata.subject}`,
                contextInfo: { 
                  mentionedJid: [i],
                  externalAdReply: { 
                      title: `Notification Group`, 
                      body: `${metadata.subject}`, 
                      thumbnailUrl: pp_user,
                      mediaType: 1, 
                      sourceUrl: ``,
                      renderLargerThumbnail: true }}})                     
                   } else if (data.action == "demote") {
                  conn.sendMessage(data.id, { 
                text: `Maaf kamu tidak lagi menjadi admin!! @${i.split("@")[0]} in ${metadata.subject}`,
                contextInfo: { 
                  mentionedJid: [i],
                  externalAdReply: { 
                      title: `Notification Group`, 
                      body: `${metadata.subject}`, 
                      thumbnailUrl: pp_user,
                      mediaType: 1, 
                      sourceUrl: ``,
                      renderLargerThumbnail: true }}})
                     }
                   }
                 } catch (e) {
                   console.log(e)
                 }
               }
             })
             
    conn.sendImageAsSticker = async (from, path, msg, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(from, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted: msg
        })
        return buffer
    }
    conn.sendStickermeta = async (from, path, msg, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await stikermeta(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(from, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted: msg
        })
        return buffer
    }
    conn.sendPoll = (from, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(from, { poll: { name, values, selectableCount }}) }
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    conn.sendVideoAsSticker = async (from, path, msg, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(from, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted: msg
        })
        return buffer
    }   
    conn.sendVideoStickerMeta = async (from, path, msg, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await smetaVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(from, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted: msg
        })
        return buffer
    }   
    conn.sendContact = async (jid, owner, msg = '', opts = {}) => {
	let list = []
	for (let i of owner) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${conn.getName(i + '@s.whatsapp.net')}\nFN:${conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:uzidiio3@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://youtube.com/@darkedtz_\nitem3.X-ABLabel:Panel\nitem4.ADR:;;Indonesia🇮🇩;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted: msg })
    }
    conn.sendTextWithMentions = async (from, text, msg, options = {}) => conn.sendMessage(from, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted: msg
    })   

	conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg })
	
  }
   
startVanz()
} catch (err) {
console.log(err)
}
}

module.exports = { jadibot }

