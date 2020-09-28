/*CMD
  command: /setupGoods
  help: 
  need_reply: 
  auto_retry_time: 
  folder: setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

// It is possible load bots via url for developer:
// https://api.bots.business/v1/store/developers/1/bots
// if you want become a Developer - please write to BB admin

// also you can make table and load goods from it
// make categories and etc

goods = [{
      "bot_id":241,
      "name":"TalkWithAdminBot",
      "description":"Talk to the administrator through the bot. It's simple! The administrator can enter a password. Install it and test. It is advisable to have two telegram accounts",
      "created_at":"2018-05-16T13:57:38.450Z",
      "img_url":"https://i.imgur.com/EeU3shL.png",
      "repository_url":"https://github.com/bots-business/TalkWithAdminBot",
      "price":1
   },
   {
      "bot_id":1,
      "name":"DemoFromTableBot",
      "description":"Demo bot @DemoFromTableBot created from Google Table",
      "created_at":"2018-05-01T09:21:35.400Z",
      "img_url":null,
      "repository_url":"https://github.com/bots-business/DemoFromTableBot",
      "price":1
   },
   {
      "bot_id":1011,
      "name":"DemoInlineKeyboardBot",
      "description":"Demo with inline Keyboard",
      "created_at":"2018-06-22T06:07:22.237Z",
      "img_url":"https://i.imgur.com/kZQMwlk.png",
      "repository_url":"https://github.com/bots-business/DemoInlineKeyboardBot",
      "price":1.5
   },
   {
      "bot_id":184,
      "name":"DemoReferalTrackingBot",
      "description":"You can give to users a link to the bot with params. This will allow you to track referral links.",
      "created_at":"2018-05-11T23:44:55.846Z",
      "img_url":"https://i.imgur.com/8wmJAyn.jpg",
      "repository_url":"https://github.com/bots-business/DemoReferalTrackingBot",
      "price":1.99
   },
   {
      "bot_id":1785,
      "name":"WelcomeBBBot",
      "description":"Welcomes new users in chat.",
      "created_at":"2018-07-18T10:27:55.997Z",
      "img_url":"https://i.imgur.com/f9fRGpD.jpg",
      "repository_url":"https://github.com/bots-business/WelcomeBBBot",
      "price":2.5
   },
   {
      "bot_id":130,
      "name":"DemoUserDataBot",
      "description":"Demonstrating the collection of user data",
      "created_at":"2018-05-11T06:38:45.802Z",
      "img_url":"https://i.imgur.com/gagMH1q.jpg",
      "repository_url":"https://github.com/bots-business/DemoUserDataBot",
      "price":2.1
   },
   {
      "bot_id":8296,
      "name":"DemoResBot",
      "description":"Demo for ResourcesLib. Users can exchange resources.",
      "created_at":"2018-12-11T06:23:57.316Z",
      "img_url":"https://i.imgur.com/tOQQ9ZX.jpg",
      "repository_url":"https://github.com/bots-business/DemoResBot",
      "price":5
   },
   {
      "bot_id":2495,
      "name":"DemoBlockIOBot",
      "description":"This bot is demo for integration with Block.io. ",
      "created_at":"2019-02-03T11:54:28.708Z",
      "img_url":"https://i.imgur.com/yLRtDHT.png",
      "repository_url":"https://github.com/bots-business/DemoBlockIOBot",
      "price":0.2
   },
   {
      "bot_id":21556,
      "name":"BBDemoStoreBot",
      "description":"It is demo bot for to receive payments automatically via CoinPaymentsLib",
      "created_at":"2019-05-12T06:36:47.079Z",
      "img_url":"https://i.imgur.com/YbT6LgE.png",
      "repository_url":"https://github.com/bots-business/BBDemoStoreBot",
      "price":0.1
   },
   {
      "bot_id":2392,
      "name":"DemoCurrencyConverterBot",
      "description":"This bot created with CurrencyConverter Lib. \n\nYou can convert any currencies with it.",
      "created_at":"2018-08-03T13:28:25.606Z",
      "img_url":"https://i.imgur.com/PtLWOkp.jpg",
      "repository_url":"https://github.com/bots-business/DemoCurrencyConverterBot",
      "price":0.01
   },
   {
      "bot_id":1128,
      "name":"BBVoteBot",
      "description":"Bot for votes in Group",
      "created_at":"2018-06-24T13:01:40.477Z",
      "img_url":null,
      "repository_url":null,
      "price":99
   },
   {
      "bot_id":14896,
      "name":"BBPointBot",
      "description":"I am BB point bot. I am under development.⚒\r\n\r\n:gem: - it is BB Point.\r\n\r\nYou can spend it:\r\n- for iterations\r\n- for discount\r\n- for good help from admin\r\n\r\nAll conditions will be later!\r\nJust start collecting thems!\r\n\r\nYou can get :gem::\r\n- for good answer and help in BB chat",
      "created_at":"2019-03-27T11:16:31.673Z",
      "img_url":"https://i.imgur.com/Ywh1Sjf.png",
      "repository_url":"https://github.com/bots-business/BBPointBot",
      "price":0.5
   },
   {
      "bot_id":431,
      "name":"DemoStatBot",
      "description":"View bot statistics: all chats count, all private chats count, active chats in day and week, etc",
      "created_at":"2018-05-26T10:42:48.446Z",
      "img_url":"https://i.imgur.com/LF96CEj.jpg",
      "repository_url":"https://github.com/bots-business/DemoStatBot",
      "price":0.2
   },
   {
      "bot_id":21316,
      "name":"BBBotCreatorBot",
      "description":"Hello! With this bot you can create your own simple Bot!\r\nMake bot via bot!",
      "created_at":"2019-05-08T10:25:43.378Z",
      "img_url":"",
      "repository_url":"https://github.com/bots-business/BBBotCreatorBot",
      "price":0.2
   },
   {
      "bot_id":22208,
      "name":"BBGoogleSpreadsheetBot",
      "description":"With this bot you can post and read data from Google SpreadSheet.",
      "created_at":"2019-05-16T22:54:22.512Z",
      "img_url":"https://i.imgur.com/Ho9W57M.png",
      "repository_url":"https://github.com/bots-business/BBGoogleSpreadsheetBot",
      "price":3
   },
   {
      "bot_id":10834,
      "name":"BBHelpBot",
      "description":"This bot help to users in BB chat. ",
      "created_at":"2019-01-17T03:50:18.536Z",
      "img_url":"https://i.imgur.com/OnFDP0I.png",
      "repository_url":"https://github.com/bots-business/BBHelpBot",
      "price":5
   },
   {
      "bot_id":113,
      "name":"PlayMarketNewsBot",
      "description":"The bot periodically downloads the program page in the Google Play Market. If a new version of the program is published, bot informs everyone about it.",
      "created_at":"2018-05-06T08:02:40.057Z",
      "img_url":"https://i.imgur.com/3NzqBMl.jpg",
      "repository_url":"https://github.com/bots-business/PlayMarketNewsBot",
      "price":10
   },
   {
      "bot_id":21300,
      "name":"BBStartBot",
      "description":"You can create your own BB Start Bot for new users attraction. \n\nWith own bot you do not need any deep link.\nUse only simple link to your own Start Bot. ",
      "created_at":"2019-05-08T03:36:15.403Z",
      "img_url":"https://i.imgur.com/oQwkRHh.png",
      "repository_url":null,
      "price":3
   },
   {
      "bot_id":25458,
      "name":"BBWebhookBot",
      "description":"Example of simple user's webhook",
      "created_at":"2019-06-14T21:42:26.509Z",
      "img_url":"https://i.imgur.com/XrpUiD3.png",
      "repository_url":null,
      "price":1.2
   },
   {
      "bot_id":42947,
      "name":"BBInvestmentBot",
      "description":"This bot in progress.\r\nNot completed",
      "created_at":"2019-10-18T08:47:11.152Z",
      "img_url":"",
      "repository_url":"",
      "price":25
   },
   {
      "bot_id":81,
      "name":"PokemonGoHelpBot",
      "description":"Pokemons database. You can find information about any pokemon whit this bot. More than 300 commands. ",
      "created_at":"2018-05-01T12:40:06.896Z",
      "img_url":"https://i.imgur.com/STYknG8.jpg",
      "repository_url":null,
      "price":5.8
   }
]

Bot.setProperty("goods", goods, "json");
Bot.sendMessage("done")
