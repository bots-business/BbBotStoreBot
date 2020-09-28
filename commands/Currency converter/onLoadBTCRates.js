/*CMD
  command: onLoadBTCRates
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Currency converter
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dat = options.result.data;
Bot.setProperty("ratesBTCList", dat, "json");
