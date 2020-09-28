/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// This is before all command
// https://help.bots.business/scenarios-and-bjs/always-running-commands

// for common functions

function getGoodsImg(item){
  return ( item.img_url || "https://app.bots.business/assets/images/bb-logo.png");
}

function getGoodsDescription(item){
  return "@" + item.name + " <b>" + item.price + "$ </b>" + "\n\n" +
    "<i>" + item.description + "</i> " + "<a href='" + getGoodsImg(item) + "'>" + item.price + "$ </a>";
}
