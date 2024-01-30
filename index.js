/**
  * Created by Pan
  * WhatsApp wa.me/6283141083033
  * Follow me on Instagram @riycoders
*/

"use strict";
const {
	default: makeWASocket,
	BufferJSON,
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
const path = require('path')
const logg = require('pino')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif2')
const clui = require('clui')
const { Spinner } = clui
const { serialize, getBuffer } = require("./lib/myfunc");
const { color, mylog, infolog } = require("./lib/color");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let session = `./${setting.sessionName}.json`
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));

function title() {
      console.clear()
	  console.log(chalk.bold.green(figlet.textSync('VanzBot by Daf', {
		font: 'Standard',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	})))
	console.log(chalk.yellow(`\n            ${chalk.yellow('[Version 4.5]')}\n\n${chalk.red('Nama Bot')} : ${chalk.white('VanzBot - MultiDevices')}\n${chalk.red('Follow IG Dev')} : ${chalk.white('@xmhddafa')}\n${chalk.red('Message Me On WhatsApp')} : ${chalk.white('+62 838-5709-2641')}\n${chalk.red('Subscribe Youtube')} : ${chalk.white('@darkedtz_')}\n`))
}

/**
* Uncache if there is file change;
* @param {string} module Module name or path;
* @param {function} cb <optional> ;
*/
function nocache(module, cb = () => { }) {
	console.log(`VanzModule ${module} sedang menantau situasi untuk perubahan`) 
	fs.watchFile(require.resolve(module), async () => {
		await uncache(require.resolve(module))
		cb(module)
	})
}
/**
* Uncache a module
* @param {string} module Module name or path;
*/
function uncache(module = '.') {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(module)]
			resolve()
		} catch (e) {
			reject(e)
		}
	})
}

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`))

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

async function startVanz() {
	const { 
         state, 
         saveCreds } = await useMultiFileAuthState(`./Vanz_sesi`)
	const conn = makeWASocket({
            printQRInTerminal: true,
            logger: logg({ level: 'fatal' }),
            auth: state,
            browser: ["VanzBot By Daf", "Safari", "4.0"],
	    getMessage: async key => {
              return {
                
              }
          }
        })
	title()
        store.bind(conn.ev)
	
	/* Auto Update */
	require('./message/help')
	require('./lib/myfunc')
	require('./message/msg')
	nocache('./message/help', module => console.log(chalk.whiteBright('vanz >') + chalk.greenBright(' [WABOT]') + chalk.cyanBright(` "${module}" Telah diupdate!!! `) + time ))
	nocache('./lib/myfunc', module => console.log(chalk.whiteBright('vanz >') + chalk.greenBright(' [WABOT]') + chalk.cyanBright(` "${module}" Telah diupdate!!! `) + time ))
	nocache('./message/msg', module => console.log(chalk.whiteBright('vanz >') + chalk.greenBright(' [WABOT]') + chalk.cyanBright(` "${module}" Telah diupdate!!! `) + time ))
	
	conn.multi = true
	conn.nopref = false
	conn.prefa = 'anjing'
	conn.mode = 'public'
	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0]
		msg = serialize(conn, msg)
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0')
		require('./message/msg')(conn, msg, m, setting, store, welcome)
	})
	conn.ev.on('connection.update', (update) => {
          if (global.qr !== update.qr) {
           global.qr = update.qr
          }
          const { connection, lastDisconnect } = update
            if (connection === 'close') {
                lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : console.log('sepertinya kamu harus menghapus sesi dan scan ulang qr whatsapp')
            }
        })
	conn.ev.on('creds.update', await saveCreds)
	
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
                text: `GoodBye 👋 @${i.split("@")[0]} in ${metadata.subject}`,                
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
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${conn.getName(i + '@s.whatsapp.net')}\nFN:${conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:uzidiio3@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://youtube.com/@darkedtz_\nitem3.X-ABLabel:Panel\nitem4.ADR:;;IndonesiaðŸ‡®ðŸ‡©;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
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

	return conn
}

startVanz()
