/*CMD
  command: onGetAccounts
  help: 
  need_reply: 
  auto_retry_time: 
  folder: setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = options.result;

var accounts = json["data"];
Bot.setProperty("CB-accounts", accounts, "json");

Bot.sendMessage("Setupped. Total accounts: " + accounts.length)
