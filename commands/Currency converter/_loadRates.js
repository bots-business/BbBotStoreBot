/*CMD
  command: /loadRates
  help: 
  need_reply: 
  auto_retry_time: 86400
  folder: Currency converter
  answer: 
  keyboard: 
  aliases: 
CMD*/

// this command run periodically (daily by default) for actual data
// see auto retry option

Libs.Coinbase.apiCall({
  method: "GET",   // method can be GET and POST
  path: "exchange-rates?currency=BTC",
  onSuccess: "onLoadBTCRates ",
  onError: "onApiError"
})
