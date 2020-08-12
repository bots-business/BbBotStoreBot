/*CMD
  command: 💳 Make payment
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

// get CB accounts from prop
var accounts = Bot.getProperty("CB-accounts");

var keyboard = [[]];
var account;
var keyboardRow = 0;

for(var ind in accounts){
  account = accounts[ind];
  keyboard[keyboardRow].push({
    title: account.currency.code,
    command: "/createWallet " + account.currency.code
  })
  
  if(ind==0){ continue }  
  if((ind%5)==0){
    // new row in keyboard
    keyboard.push([])
    keyboardRow = keyboardRow + 1
  }
}

Bot.sendInlineKeyboard(keyboard, "What payment method do you prefer?")
