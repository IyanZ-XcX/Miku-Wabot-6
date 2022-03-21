let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
_*PAYMENT RELLZ :*_
╭─ *GopayOnly*
╰ *➤* *https://ibb.co/4jYrTJP*
╭─ *DanaOnly*
╰ *➤* *085823437696*
╭─ *Qris All Pay*
╰ *➤* *https://tinyurl.com/y9nbgonc*

*ATAS NAMA PAYMENT*
*- GOPAY : R E L L Z*
*- Dana : Farell*
*- All Pay : CHILZ STORE*


*IKUTI TUTORIAL INI*
```- KLIK LINK PAY TRSEBUT
- SKRENSHOOT
- SCAN 
- ISI NOM
- TF 
- DONE```
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
