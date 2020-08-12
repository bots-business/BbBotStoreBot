/*CMD
  command: 💰 Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

res = Libs.ResourcesLib.userRes("deposit");

Bot.sendKeyboard(
   "💳 Make payment, 📤 Withdraw,\n🔙 Back",
   "Your deposit: " + res.value().toFixed(2) + " USD"
)

// set caching for perfomance
User.setCache(
  60*60*24*7*4*12 // 1 year in seconds
)
