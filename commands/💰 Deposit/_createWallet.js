/*CMD
  command: /createWallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var accounts = Bot.getProperty("CB-accounts");
var code = params;
var account;

// search account by currency code
for(var ind in accounts){
  account = accounts[ind];
  if(account.currency.code==code){ break }
}

// Make address
// SEE: https://developers.coinbase.com/api/v2#create-address
// Address resource represents a bitcoin, bitcoin cash, litecoin
// or ethereum address for an account.
// Account can have unlimited amount of addresses
// and they should be used only once.
Libs.Coinbase.apiCall({
  method: "POST",   // method can be GET and POST
  path: "accounts/" + account.id + "/addresses",
  onSuccess: "onCreateAddress " + code,
  body: { name: "userWallet_" + bot.id + "_" + user.telegramid },
  onError: "onApiError"  // onError command
  // background: true // perform api call in background for big timeout limit
})
