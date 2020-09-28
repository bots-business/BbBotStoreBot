/*CMD
  command: /checkPayment
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("checkingPaymentCooldown");

// can check payment once at 5 minutes only
// because it can spent more iterations


if(res.value() > 0){
   Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "Please wait. Try again after 5 minutes",
    show_alert: true // or false - for alert on top
  })
  return
}

res.set(1)
res.growth.add({value: -1, interval: 60*5, min: 0 });

Libs.Coinbase.apiCall({
  method: "GET", 
  path: "notifications",
  onSuccess: "onCheckPayment"
})
