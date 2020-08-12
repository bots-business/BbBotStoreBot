/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
This is bot example of:

#Coinbase, #DeepLinking, #InlineBot, #caching, #MultiCurrency, #beforeAllCommand
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("🤝 Welcome to demo Bots Store");
Bot.runCommand("/menu");


function getGoods(){
  goods_id = params.split("order")[1]; 
  // load goods
  var items = Bot.getProperty("goods");
  for(var ind in items){
    if(items[ind].bot_id == goods_id){
      return items[ind]
    }
  }
}

if(params.substr(0,5)=="order"){
  var goods = getGoods();

  if(!goods){
     Bot.sendMessage("Such goods not found");
     return
  }
  
  Bot.sendMessage(
     "Do you want to order this goods?" + "\n\n" + "`" + getGoodsDescription(goods) + "`"
  );
  
  Bot.run({ command: "/startOrder", options: goods });
}
