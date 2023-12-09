const moment = require("moment-timezone");
const fs = require("fs");
const petik = '```'
const ms = require("parse-ms");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const hariini = moment.tz('Asia/Jakarta').format('dddd DD MMMM YYYY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { creatorNumber, ownerName, botName, } = setting
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")
var ultah = ms(1722685340539 - Date.now())
var thbr = ms(1704065098611 - Date.now())

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isCreator, isPremium, botName, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

 Hitung Mundur
 • Ultah Creator :
${ultah.days} hari ${ultah.hours} jam ${ultah.minutes} menit 
• Tahun Baru :
${thbr.days} hari ${thbr.hours} jam ${thbr.minutes} menit

 Bot Info
 • Creator : ${setting.ownerName}
 • Bot Name : ${setting.botName}
 • Version : 5
 • Date : ${hariini}
 • Time : ${jam} WIB
${readmore} 
 User Info
 • Name : ${pushname}
 • Nomer : wa.me/${sender.split("@")[0]}
 • Status : ${isOwner ? 'Owner' : isCreator ? 'Creator' : isPremium ? 'Premium' : 'Free'}
 • Limit Harian/Game : ${isCreator ? '-' : isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}/${isCreator ? '-' : isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 • Balance : $${toCommas(getBalance(sender, balance))}
 
LIST MENU
• ${prefix}mainmenu
• ${prefix}convermenu
• ${prefix}toolsmenu
• ${prefix}stikermenu
• ${prefix}anonymous
• ${prefix}aimenu
• ${prefix}downloadmenu
• ${prefix}religion
• ${prefix}photooxy
• ${prefix}randommenu
• ${prefix}searchmenu
• ${prefix}gamemenu
• ${prefix}pay
• ${prefix}groupmenu
• ${prefix}bugmenu
• ${prefix}ownermenu

*Other*
• ${prefix}jadibot

By Vanz?`
}
exports.menuall = (sender, prefix, pushname, isOwner, isCreator, isPremium, botName, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} ${pushname}

*Hitung Mundur*
 • Ultah Creator :
${ultah.days} hari ${ultah.hours} jam ${ultah.minutes} menit 
• Tahun Baru :
${thbr.days} hari ${thbr.hours} jam ${thbr.minutes} menit 
	
*Bot Info*
• Creator : @${creatorNumber.split("@")[0]}
• Bot Name : ${setting.botName}
• Version : 5.5
• Date : ${hariini}
• Time : ${jam} WIB
${readmore}
User Info
 • Name : ${pushname}, wa.me/${sender.split("@")[0]}
 • Status : ${isOwner ? 'Owner' : isCreator ? 'Creator' : isPremium ? 'Premium' : 'Free'}
 • Limit Harian/Game : ${isCreator ? '-' : isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}/${isCreator ? '-' : isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 • Balance : $${toCommas(getBalance(sender, balance))}

*MAIN MENU*${petik}
• ${prefix}menu
• ${prefix}owner
• ${prefix}donasi
• ${prefix}rules
• ${prefix}sc
• ${prefix}speed
• ${prefix}runtime
• ${prefix}cekprem
• ${prefix}listprem${petik}

*CONVERTER MENU*${petik}
• ${prefix}toimg <for sticker>
• ${prefix}tovid <for sticker>
• ${prefix}tomp3
• ${prefix}tourl${petik}

*TOOLS MENU*${petik}
• ${prefix}say 
• ${prefix}nulis
• ${prefix}ss 
• ${prefix}ssweb 
• ${prefix}sertifikat <new>${petik}

*Artificial Intelligence*${petik}
• ${prefix}openai <ChatGPT-4>
• ${prefix}openai1 <ChatGPT-3>
• ${prefix}bard <Google AI>
• ${prefix}chatty
• ${prefix}jadianime${petik}

*STICKER MENU*${petik}
• ${prefix}emojimix
• ${prefix}meme
• ${prefix}qc
• ${prefix}sticker
• ${prefix}smeme <new>
• ${prefix}ttp
• ${prefix}attp
• ${prefix}smeta
• ${prefix}swm${petik}

*ANONYMOUS CHAT*${petik}
• ${prefix}anonymous
• ${prefix}start
• ${prefix}skip
• ${prefix}stop
• ${prefix}sendprofile
• ${prefix}menfess${petik}

*DOWNLOAD*${petik}
• ${prefix}tiktokaudio
• ${prefix}tiktokvideo 
• ${prefix}igreels
• ${prefix}igphotos
• ${prefix}play
• ${prefix}ytmp4 <youtube.com/>
• ${prefix}ytmp3 <youtube.com/>
• ${prefix}ytvideo1 <youtu.be/>
• ${prefix}ytaudio1 <youtu.be/>${petik}

*RANDOM MENU*${petik}
• ${prefix}quote
• ${prefix}fakta
• ${prefix}quoteanime
• ${prefix}waifu
• ${prefix}neko${petik}

*SEARCH MENU*${petik}
• ${prefix}ytsearch
• ${prefix}lirik
• ${prefix}igstalk
• ${prefix}tiktokstalk
• ${prefix}gimage <google>${petik}

*GAME MENU*${petik}
• ${prefix}asahotak
• ${prefix}caklontong
• ${prefix}family100
• ${prefix}siapakahaku
• ${prefix}susunkata
• ${prefix}tebakbendera
� ${prefix}tebakgambar
� ${prefix}tebakkalimat
� ${prefix}tebakkata
• ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tictactoe
• ${prefix}werewolf
� ${prefix}kuis
� ${prefix}math
� ${prefix}nyerah${petik}

*PHOTOOXY*${petik}
� ${prefix}flaming
� ${prefix}night
� ${prefix}shadow
� ${prefix}paper
� ${prefix}rainbow
� ${prefix}grass
� ${prefix}cube
� ${prefix}glow
� ${prefix}growing
� ${prefix}fabric${petik}

*PAYMENT & BANK*${petik}
� ${prefix}buylimit
� ${prefix}buyglimit
� ${prefix}transfer
� ${prefix}limit
� ${prefix}balance${petik}

*GROUP MENU*${petik}
� ${prefix}linkgrup
� ${prefix}setnamegc
• ${prefix}setppgc
� ${prefix}setdesc
• ${prefix}bcgc
• ${prefix}afk
• ${prefix}add
• ${prefix}kick
• ${prefix}promote
• ${prefix}demote
� ${prefix}group
� ${prefix}revoke
� ${prefix}delete
� ${prefix}tagall
� ${prefix}hidetag
� ${prefix}antilink
� ${prefix}welcome${petik}

*Bug By Vanz*${petik}
• ${prefix}bugcall
• ${prefix}bugvideo
• ${prefix}virtex${petik}

*RELIGION*${petik}
• ${prefix}kisahnabi
• ${prefix}jadwalsholat${petik}

*OWNER MENU*${petik}
• > evalcode
• => evalcode-2
• $ executor
• ${prefix}join
• ${prefix}mode
• ${prefix}broadcast
• ${prefix}addowner
• ${prefix}setreply
• ${prefix}setlistmenu 
• ${prefix}setnamegrup
• ${prefix}setnamebot 
• ${prefix}autoread
• ${prefix}autotyping
• ${prefix}autorecording
• ${prefix}delowner
• ${prefix}setppbot
• ${prefix}exif
• ${prefix}leave
• ${prefix}shutdown
• ${prefix}addprem
• ${prefix}delprem${petik}`
}
exports.menumain = (prefix) => {
	return `*MAIN MENU*${petik}
• ${prefix}menu
• ${prefix}owner
• ${prefix}donasi
• ${prefix}rules
• ${prefix}sc
• ${prefix}speed
• ${prefix}runtime
• ${prefix}cekprem
• ${prefix}listprem${petik}`
}
exports.menuconver = (prefix) => {
	return `*CONVERTER MENU*${petik}
• ${prefix}toimg <for sticker>
• ${prefix}tovid <for sticker>
• ${prefix}tomp3
• ${prefix}tourl${petik}`
}
exports.menutools = (prefix) => {
	return `*TOOLS MENU*${petik}
• ${prefix}say <text-to-speech>
• ${prefix}nulis <new>
• ${prefix}ssweb <new>
• ${prefix}ssweb1 
• ${prefix}hd
• ${prefix}removebg${petik}`
}
exports.menustiker = (prefix) => {
	return `*STICKER MENU*${petik}
• ${prefix}emojimix
• ${prefix}meme
• ${prefix}qc
• ${prefix}sticker
• ${prefix}smeme <new>
• ${prefix}ttp
• ${prefix}attp
• ${prefix}smeta
• ${prefix}swm${petik}`
}
exports.menuai = (prefix) => {
	return `*Artificial Intelligence*${petik}
• ${prefix}openai <ChatGPT-4>
• ${prefix}openai1 <ChatGPT-3>
• ${prefix}bard <Google AI>
• ${prefix}chatty
• vanz
• ${prefix}jadianime${petik}`
}
exports.menuanon = (prefix) => {
	return `*ANONYMOUS CHAT*${petik}
• ${prefix}anonymous
• ${prefix}start
• ${prefix}skip
• ${prefix}stop
• ${prefix}sendprofile
• ${prefix}menfess${petik}`
}
exports.menurandom = (prefix) => {
	return `*RANDOM MENU*${petik}
• ${prefix}quote
• ${prefix}fakta
• ${prefix}quoteanime
• ${prefix}waifu
• ${prefix}neko${petik}`
}
exports.menudownload = (prefix) => {
	return `*DOWNLOAD*${petik}
• ${prefix}tiktokaudio
• ${prefix}tiktokvideo 
• ${prefix}igreels
• ${prefix}igphotos
• ${prefix}play
• ${prefix}ytmp4 <youtube.com/>
• ${prefix}ytmp3 <youtube.com/>
• ${prefix}ytvideo1 <youtu.be/>
• ${prefix}ytaudio1 <youtu.be/>${petik}`
}
exports.menusearch = (prefix) => {
	return `*SEARCH MENU*${petik}
• ${prefix}ytsearch
• ${prefix}lirik
• ${prefix}igstalk
• ${prefix}tiktokstalk
• ${prefix}gimage <google>${petik}`
}
exports.menugame = (prefix) => {
	return `*GAME MENU*${petik}
• ${prefix}asahotak
• ${prefix}caklontong
• ${prefix}family100
• ${prefix}siapakahaku
• ${prefix}susunkata
• ${prefix}tebakbendera
• ${prefix}tebakgambar
• ${prefix}tebakkalimat
• ${prefix}tebakkata
•  ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tictactoe
• ${prefix}werewolf
• ${prefix}kuis
• ${prefix}math
• ${prefix}nyerah${petik}`
}
exports.menupo = (prefix) => {
	return `*PHOTOOXY*${petik}
• ${prefix}flaming
• ${prefix}night
• ${prefix}shadow
• ${prefix}paper
• ${prefix}rainbow
• ${prefix}grass
• ${prefix}cube
• ${prefix}glow
• ${prefix}growing
• ${prefix}fabric${petik}`
}
exports.menupb = (prefix) => {
	return `*PAYMENT & BANK*${petik}
• ${prefix}buylimit
• ${prefix}buyglimit
• ${prefix}transfer
• ${prefix}limit
• ${prefix}topbalance
• ${prefix}balance${petik}`
}
exports.menureligion = (prefix) => {
	return `*RELIGION*${petik}
• ${prefix}kisahnabi
• ${prefix}jadwalsholat${petik}`
}
exports.menugrup = (prefix) => {
	return `*GROUP MENU*${petik}
• ${prefix}linkgrup
• ${prefix}setnamegc
• ${prefix}setppgc
• ${prefix}setdesc
• ${prefix}bcgc
• ${prefix}afk
• ${prefix}add
• ${prefix}kick
• ${prefix}promote
• ${prefix}demote
• ${prefix}group
• ${prefix}revoke
• ${prefix}delete
• ${prefix}tagall
• ${prefix}hidetag
• ${prefix}antilink
• ${prefix}welcome${petik}`
}
exports.menuowner = (prefix) => {
	return `*OWNER MENU*
• > evalcode
• => evalcode-2
• $ executor
• ${prefix}join
• ${prefix}mode
• ${prefix}broadcast
• ${prefix}addowner
• ${prefix}setreply
• ${prefix}setlistmenu 
• ${prefix}setnamegrup
• ${prefix}setnamebot 
• ${prefix}autoread
• ${prefix}autotyping
• ${prefix}autorecording
• ${prefix}delowner
• ${prefix}setppbot
• ${prefix}exif
• ${prefix}leave
• ${prefix}shutdown
• ${prefix}addprem
• ${prefix}delprem${petik}`
}
exports.menubug = (prefix) => {
	return `*Bug By Vanz*${petik}
• ${prefix}bugcall
• ${prefix}bugvideo
• ${prefix}virtex${petik}`
}

