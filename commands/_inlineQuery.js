/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// result.query - it is query from inline searching
if(!request.query){ return }
var query = request.query.toLowerCase();

// it is array of results.
var list = [];

// load goods
var goods = Bot.getProperty("goods");

function  replyMarkupFor(item){
   return { inline_keyboard: [
    // line 1
    [
      // deep linking - because this message can be in any chat
      // https://help.bots.business/deep-linking-pass-any-params-on-bot-starting
      { text: "Buy " + item.price + "$", url: "http://t.me/" + bot.name + "?start=order" + item.bot_id }
    ],

    // line 2
    [
      // see https://core.telegram.org/bots/api#inlinekeyboardbutton for help
      { text: "List view", switch_inline_query_current_chat: "all" },
      { text: "Image view", switch_inline_query_current_chat: "catalog" }
    ]
  ]}
}


function addItemToList(item, type){
  if(!type){ type = "article" }
  var image_url =  getGoodsImg(item);  // see @ - Before All command

  list.push({
    type: type,
    id: item.bot_id,
    title: item.name + "         " + item.price + "$",
    description: item.description,
    thumb_url: image_url,
    photo_url: image_url,
    input_message_content: {
       "message_text": getGoodsDescription(item),  // see @ - Before All command
        parse_mode: "html",
        disable_web_page_preview: false
    },
    reply_markup: replyMarkupFor(item)
  })
}

function addByNameMatches(item){
  // case insensitive search
  name = item.name.toLowerCase();
  if(name.split(query)[1]){
    // we have such goods with such name
    addItemToList(item);
  }
}

// find goods by text
var item;
var name;

for(var ind in goods){
  item = goods[ind];
  if(query=="all"){
    // show all goods in list
    addItemToList(item)
  }else if(query=="catalog"){
    // show all goods in photos list
    addItemToList(item, "photo")
  }
  else{
    addByNameMatches(item);
  }
}

// we have InlineQueryResultArticle
// core.telegram.org/bots/api#inlinequeryresultarticle
// another types: https://core.telegram.org/bots/api#inlinequeryresult
Api.answerInlineQuery({
  // see another fields at:
  // core.telegram.org/bots/api#answerinlinequery
  inline_query_id: request.id,
  results: list,
  cache_time: 5 // 60*60*24 // cache time in sec = 1 day
})
