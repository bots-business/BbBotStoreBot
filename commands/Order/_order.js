/*CMD
  command: /order
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.clearCache("💰 Deposit");  // because deposit is changed

var res = Libs.ResourcesLib.userRes("deposit");

var goods_cost = options["price"];
if(!res.have(goods_cost)){
   Bot.sendMessage("You do not have " + goods_cost + "$. Please top up your deposit")
   return
}

res.remove(goods_cost);

// https://help.bots.business/scenarios-and-bjs/bb-admin-functions#bbadmin-installbot
BBAdmin.installBot({
   email: options["email"],
   bot_id: options["bot_id"],
   // user can not clone or exports bot; can not modify commands 
   as_protected: true
})

Bot.sendMessage("Thank you for ordering. Please check your email or BB app");
Bot.runCommand("/menu")
