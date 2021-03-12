const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 EN CURSO*`
}

exports.succes = () => {
	return`*「 EXITO 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LOS NIVELES DE GRUB NO SE HAN ACTIVADO*`
}

exports.noregis = () => {
	return`*「 Nombre de usuario 」*\n\n*Ingrese usuario ${prefix}daftar nombre|edad* \n*ejemplo ${prefix}daftar Satan|17*`
}

exports.rediregis = () => {
	return`*「 Nombre de usuario 」*\n\n*Ya está registrado en la base de datos de bot*`
}

exports.stikga = () => {
	return`*bien no pudo tratar de repetir en unos momentos de nuevo*`
}

exports.linkga = () => {
	return`*lamentable enlace inválido*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ACTIVADO*`
}

exports.bug = () => {
	return`*El problema ha sido reportado al propietario del bot, informe falso/main2 no se responderá a*`
}

exports.wrongf = () => {
	return`*formato/texto incorrecto en blanco*`
}

exports.clears = () => {
	return`*claro todo el éxito*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\npara averiguar si usted ha registrado ponga mensaje de verificación que envié \n\nNOTE:\n*si aún no tienes el mensaje. significa que no ha guardado el número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA 」*\n\nYa está registrado con los datos\n\n┏━⊱nombre\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Edad\n┗⊱${umurUser}\n┏━⊱tiempo de inscripción\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : No olvides este número porque es importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* no encontrado\c pureba con *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*lo siento, pero ${pushname} no eres el propietario del guión*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${aha}*\n\n_NOTE : CHAT/ SIEMPRE EN CONSEGUIR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahb}*\n\n_NOTE : CHAT/ SIEMPRE EN CONSEGUIR XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahc}*\n\n_NOTE : CHAT/ SIEMPRE EN CONSEGUIR XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahd}*\n\n_NOTE : CHAT/ SIEMPRE EN CONSEGUIR XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahe}*\n\n_NOTE : CHAT/ SIEMPRE EN CONSEGUIR XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏⊱level  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel: ${ahf}*\n\n_NOTE : CHAT/ SIEMPRE EN CONSEGUIR XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
${a}❏ ABOUT USER${a}
 ${a}│ Nombre : ${pushname}${a}
 ${a}│ Premium :${a} ${premi}
 ${a}│ Numero : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Dinero : Rp${uangku}${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Rol : ${role}${a}
 │ *Grupo 1* : https://chat.whatsapp.com/JyD8Vj11LPu1TofWhWnYMA
 │ *Grupo 2* : https://chat.whatsapp.com/GUdiX6cuCE1I14hNTPzhae
 ${a}╰ Registro de usuarios : ${_registered.length}${a}

 *${prefix}info*
 *${prefix}owner*

${a}❏MAKER MENU${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏FUN MENU${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}moddroid${a} *[VIP]*
 ${a}╰•${prefix}happymod${a} *[VIP]*
 
${a}❏MUTUAL${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏MEDIA MENU${a}
 ${a}│•${prefix}brainly${a} *[VIP]*
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a} *[VIP]*
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏SONG${a}
 ${a}╰•${prefix}joox${a} *[VIP]*
 
${a}❏NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏LIMIT & UANG${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏GROUP MENU${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏TOOLS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏CLOUD STORAGE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏OWNER MENU${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}
 
${a}❏ABOUT BOT${a}
 ${a}│ • Nombre : ${client.user.name}${a}
 ${a}│ • Navegador : ${client.browserDescription[1]}${a}
 ${a}│ • server : ${client.browserDescription[0]}${a}
 ${a}│ • version : ${client.browserDescription[2]}${a}
 ${a}│ • Velocidad : ${process.uptime()}${a}
 ${a}│ • Celular : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • version de wa : ${client.user.phone.wa_version}${a}
 
${a}❏THANGKS TO${a}
 ${a}│${a}
 ${a}│ • 🌷♞  𝕤αт𝕒ⓝ  ☯🐺${a}
 ${a}│ • Mr. Pato <partner>${a}
 ${a}│ • Nathalia <Ayuda>${a}
 ${a}│ • Satanic Creations <team>${a}
 ${a}│${a}
 ${a}╰ • NOTE : Siganos en youtube abortos${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}

