const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['260978532917'] //ur owner number
global.ownername = "illusion fox" //ur owner name
global.ytname = "YT: illusion fox" //ur yt chanel name
global.socialm = "GitHub: maiki300" //ur github or insta name
global.location = "japan, Tokyo" //ur location

//bot bomdy 
global.ownernomer = "260978532917" //ur number
global.premium = ['260978532917'] //ur premium number
global.botname = 'illusion fox' //ur bot name
global.linkz = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //your theme url which will be displayed on whatsapp
global.websitex = "https://www.helacloud.ga" //ur website to be displayed
global.botscript = 'https://github.com/maiki300/illusion-fox' //script link
global.themeemoji = "🖕" //ur theme emoji
global.packname = "Sticker By illusion" //ur sticker watermark packname
global.author = "illusion fox 🦊" //ur sticker watermark author
global.wm = "illusion fox 𝗜𝗡𝗖" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['/','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'have this!',
    admin: 'Do you look like admin? this feature could be used by admins only!',
    botAdmin: 'make Bot Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'Do you look like owner,this feature could be used by owner only',
    group: 'Does this look like a group,Features Used Only For Groups!',
    private: 'Does this look like private chat,Features Used Only For Private Chat!',
    bot: 'Do you look like bot?,this feature could be used by bot only',
    wait: 'sabar...',
    wal: 'ටිකක් හිටහන් බඩු මග එන ගමන්',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./DragonMedia/theme/dragonpic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DragonMedia/theme/dragonpic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DragonMedia/theme/dragonpic.jpg") //ur error pic
global.thumb = fs.readFileSync("./DragonMedia/theme/dragonpic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
