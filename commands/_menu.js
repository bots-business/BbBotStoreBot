/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🔙 back, cancel
CMD*/

Bot.sendKeyboard("💰 Deposit", "Menu")

Api.sendMessage({
  text:
    "It is demo store for selling bots.\n" +
    "It is created with Coinbase Lib.\n\n" +
    "🤑 You can buy any kind of bots.\n\n" +
    "⚠️ Of course, this is a demo store. All these bots are available for free in Bots.Business",

  reply_markup: {
    inline_keyboard: [
      // line 1
      [
        // see https://core.telegram.org/bots/api#inlinekeyboardbutton for help
        { text: "List view", switch_inline_query_current_chat: "all" }
      ],
      // line 2
      [
        // see all params in
        // https://core.telegram.org/bots/api#inlinekeyboardbutton
        { text: "Image view", switch_inline_query_current_chat: "catalog" }
      ]
    ]
  }
})
