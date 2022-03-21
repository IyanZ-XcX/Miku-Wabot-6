let handler = async (m, { conn }) => {
	conn.reply(m.chat, `_*PAYMENT RELLZ :*_
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
- KLIK LINK PAY TRSEBUT
- SKRENSHOOT
- SCAN 
- ISI NOM
- TF 
- DONE`.trim(), m)
}

handler.command = /^viadana$/i

module.exports = handler
