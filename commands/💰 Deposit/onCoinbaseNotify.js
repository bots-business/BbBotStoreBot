/*CMD
  command: onCoinbaseNotify
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("We have notify from CoinBase");

data = options;

Bot.sendMessage(
  JSON.stringify(data).substr(0, 1000)   // just first 1000 symbols
)
