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

data = options.result.data;
Bot.setProperty("ratesBTCList", data, "json");

