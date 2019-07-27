const express = require("express");
const TelegramBot = require('node-telegram-bot-api');
const app = express();

const myalphalatin = ['A', 'Á', 'B', 'D', 'E', 'F', 'G', 'Ǵ', 'H', 'I', 'I', 'I', 'J', 'K', 'L', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Sh', 'Ch', 'T', 'U', 'Ú', 'V', 'Y', 'Ý', 'Z', 'Ia', 'Yu', 'a', 'á', 'b', 'd', 'e', 'f', 'g', 'ǵ', 'h', 'i', 'ı', 'ı', 'j', 'k', 'l', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'sh', 'ch', 't', 'u', 'ú', 'v', 'y', 'ý', 'z', 'ia', 'yu']
const myalphacyril = ['А', 'Ә', 'Б', 'Д', 'Е', 'Ф', 'Г', 'Ғ', 'Х', 'І', 'И', 'Й', 'Ж', 'К', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Қ', 'Р', 'С', 'Ш', 'Ч', 'Т', 'Ұ', 'Ү', 'В', 'Ы', 'У', 'З', 'Я', 'Ю', 'а', 'ә', 'б', 'д', 'е', 'ф', 'г', 'ғ', 'х', 'і', 'и', 'й', 'ж', 'к', 'л', 'м', 'н', 'ң', 'о', 'ө', 'п', 'қ', 'р', 'с', 'ш', 'ч', 'т', 'ұ', 'ү', 'в', 'ы', 'у', 'з', 'я', 'ю']

// replace the value below with the Telegram token you receive from @BotFather
const token = '461762820:AAEfl7uGYzm_5KRCc_d3-VT8goY-8FIJW1o';
const bot = new TelegramBot(token, {polling: true});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  var str = msg.text.toString().toLowerCase();
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  newWord = '';
  for(var i = 0; i < str.length; i++){
    if(myalphacyril.indexOf(str[i]) != -1){
      newWord += myalphalatin[myalphacyril.indexOf(str[i])];
    } else{
      newWord += str[i];
    }
  }
  bot.sendMessage(chatId, newWord.capitalize());
});

bot.onText(/\/ereje/, function (msg, match) {
  bot.sendPhoto(msg.chat.id,"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2018_Kazakh_Latin_Alphabet.png/984px-2018_Kazakh_Latin_Alphabet.png" );
});

app.listen(3000, function(){
  console.log("server started at 3000");
});