/*CMD
  command: onCheckPayment
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var payments = options["result"]["data"];

var alreadyAcceptedPayments = User.getProperty("acceptedPayments");
if(!alreadyAcceptedPayments){ alreadyAcceptedPayments = {} }
var haveNewIncome = false;

function convertToUSD(amount, currency){
  var btc_rates = Bot.getProperty("ratesBTCList")["rates"];
  var rate = btc_rates[currency];
  if(!rate){
     Bot.sendMessage("Unknown rate");
     return
  }
  var inBTC = amount/rate;  // amount in BTC
  var inUSD = inBTC*btc_rates["USD"];
  return inUSD;
}

function isAlreadyAccepted(payment){
  var payment_id = payment["id"];
  return alreadyAcceptedPayments[payment_id];
}

function isNewPayment(payment){
  if(isAlreadyAccepted(payment)){ return }

  var label = payment["data"]["name"]; // userWallet_botId_userId
  var arr = label.split("_");
  
  if(bot.id!=arr[1]){ return }  // << valid
  Bot.sendMessage("remove this code line!")

  if(user.telegramid!=parseInt(arr[2])){ return }
  return true;
}

function acceptNewPayment(payment){
  if(!isNewPayment(payment)){ return }
  
  haveNewIncome = true;  

  payment_id = payment["id"];
  amount = payment["additional_data"]["amount"]["amount"];
  currency = payment["additional_data"]["amount"]["currency"];
  hash = payment["additional_data"]["hash"];
  
  USDAmount = convertToUSD(amount, currency);
  res = Libs.ResourcesLib.userRes("deposit");
  res.add(USDAmount);

  alreadyAcceptedPayments[payment_id] = true;

  Bot.sendMessage("Thank you for payment:\n" + 
      amount + " " + currency + " (" + USDAmount.toFixed(2) + " USD)" +
      "\n\nhash: `" + hash + "`"
  );
}

function sendNoPaymentsAlert(){
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "No any new payments yet. Please try later.",
    show_alert: true // or false - for alert on top
  })
}

for(var ind in payments){
  payment = payments[ind];
  acceptNewPayment(payment);
}

if(haveNewIncome){
  User.setProperty("acceptedPayments", alreadyAcceptedPayments, "json");
  User.clearCache("💰 Deposit");  // because deposit is changed
}else{
  sendNoPaymentsAlert();
}
