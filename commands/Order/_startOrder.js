/*CMD
  command: /startOrder
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Order
  answer: *Please enter your email address for ordering*
  keyboard: Cancel
  aliases: 
CMD*/

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var email = message;
if(!validateEmail(email)){
  Bot.sendMessage("Invalid email. Please try again.");
  Bot.run({ command: "/startOrder", options: options });
  return
}

options.email = email; 

Bot.run({ command: "/order", options: options });
