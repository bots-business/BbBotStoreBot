/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.Coinbase.setup();
Bot.runCommand("/setupGoods");

// run load btc rates in first time in background
Bot.run({ command: "/loadRates", run_after: 1 })

Bot.sendMessage(
   "Now please go to BB App > Admin Panel and setup Api Keys. Then run /setupCB"
);
