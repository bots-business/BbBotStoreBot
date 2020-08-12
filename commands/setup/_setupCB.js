/*CMD
  command: /setupCB
  help: 
  need_reply: 
  auto_retry_time: 
  folder: setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

// SEE https://developers.coinbase.com/api/v2#accounts

Libs.Coinbase.apiCall({
  method: "GET",   // method can be GET and POST
  path: "accounts",
  onSuccess: "onGetAccounts",
  // onError: "/onApiError"  // onError command
  // background: true // perform api call in background for big timeout limit
})
