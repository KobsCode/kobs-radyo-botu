const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RED')
.addField('Kobs Radyo Bot | Radyo Komutları',`
**!radyo 1** : FenomenFM 
**!radyo 2** : KralFM
**!radyo 3** : KralPopFM
**!radyo 4** : LineFM
**!radyo 5** : MetroFM 
**!radyo 6** : RadyoDFM
**!radyo 7** : SuperFM
**!radyo 8** : JoyFM
**!radyo 9** : FenomenAkustik
**!radyo 10** : SlowFm
**!radyo 11** : TaksimClup
**!radyo 12** : MegaFM
**!radyo 13** : PowerTürk
**!radyo 14** : ShowPoP
**!radyo 15** : PowerAkustik
**!radyo 16** : FenomenRap
**!radyo 17** : FenommenTürk
**!radyo 18** : Power Dance
**!radyo 19** : PowerTürkEnİyiler
**!radyo 20** : PopülerFM
**!radyo 21** : PalSlow
**!radyo 22** : RadyoPoP
**!radyo 23** : ClubMix
**!radyo 24** : TürkFM
**!radyo 25** : HitFM
**!radyo 26** : 112AcilFM
**!radyo 27** : PowerTürkCover
**!radyo 28** : ShowRadyo
**!radyo 29** : MamaşFM
**!radyo 30** : MaxLounge`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail()
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'help'
};
