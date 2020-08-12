/*CMD
  command: onApiError
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

/* Bot.sendMessage(
  "We have error with Coinbase API. Please try later. " + options.error
)
*/

Bot.sendMessage(
  options.http_status + " " + JSON.stringify(options.result)
)
