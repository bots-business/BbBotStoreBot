/*CMD
  command: onCreateAddress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var currency_code = params;

json = options.result;

var accounts = Bot.getProperty("CB-accounts");
var account;

// search account by currency code
for(var ind in accounts){
  account = accounts[ind];
  if(account.currency.code==currency_code){ break }
}

/*
var wallet_name = json.data.name;

var user_wallet = {
  id: json.data.id,
  address: json.data.address,
  currency_code: currency_code
}
*/

Bot.sendInlineKeyboard(
  [ { title: "I have already paid", command: "/checkPayment" } ],

  "Please make payment to " +
  currency_code + " (" + account.currency.name + ") " +
  " wallet: \n\n`" + json.data.address + "`" +

  "\n\nthen your balance will automatically:" +
  "\n- will be replenished" +
  "\n- will be converted to dollars for the current time"
);


