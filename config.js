/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // LOLHUMAN
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Momoka X Rena'
global.namaowner = 'Ruwly'
global.wagc = "https://chat.whatsapp.com/HDagpq4c0Wo814obSBBH9M"

//—————「 Setting Owner 」—————//
global.owner = ['6289516193660']
global.nomerowner = '6289516193660'
global.premium = ['6289516193660']

//—————「 Set Wm 」—————//
global.packname = 'Momoka X Rena'
global.author = 'Ruwly'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: 'Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Rena Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: 'Fitur Khusus Pengguna Rena !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: ' Limit Harian Kamu Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 5k 2 Minggu* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k 2 Minggu',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/0123f869317116f0cb044.jpg"}]'
global.link = 'https://instagram.com/zhyaricszervas'
global.thumb = fs.readFileSync('./media/Momoka.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
