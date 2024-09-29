require ('dotenv').config();

const { Bot, GrammyError, HttpError, InlineKeyboard, InputFile  } =require('grammy');
const { hydrate } = require('@grammyjs/hydrate');
const bot = new Bot(process.env.BOT_api_KEY);
bot.use(hydrate());


bot.api.setMyCommands([
  {
    command: 'mood',
    description:'Что я умею'
  }
]);

bot.command('start', async (ctx) => { 
  await ctx.reply('Приветик) Меня зову Greis, очень рада тебя видеть! Нажми на "mood" и в ответ на это я покажу тебе что умею делать. Обещаю это будет очень интересно');
});
const inlineKeyboard = new InlineKeyboard()
.text('Расклады 🎴','Расклады').row()
.text('Свечи🕯','свечи').row()
.text('Карта дня🌄','Карта дня').row()
.text('Ещё🧷','Ещё').row()
.text('Вопрос🤷‍♀️','вопрос').row()

bot.command('mood', async (ctx)=>{
  await ctx.reply('Список услуг указан у тебя на клавиатуре🕊',{
    reply_markup: inlineKeyboard
  })
})

bot.callbackQuery('Карта дня', async (ctx) =>{
 await ctx.answerCallbackQuery()
 await ctx.reply('Перемешиваю колоду и вытасикваю карту 💌')
 const picture =[
  '-5298703438454055103_121.jpg',
  '-5298703438454055104_121.jpg',
  '-5298703438454055106_121.jpg',
  '-5298703438454055107_121.jpg',
  '-5298703438454055108_121.jpg',
  '-5298703438454055110_121.jpg',
  '-5298703438454055111_121.jpg',
  '-5298703438454055112_121.jpg',
  '-5298703438454055129_121.jpg',
  '-5298703438454055130_121.jpg',
  '-5298703438454055131_121.jpg',
  '-5298703438454055132_121.jpg',
  '-5298703438454055133_121.jpg',
  '-5298703438454055134_121.jpg',
  '-5298703438454055135_121.jpg',
  '-5298703438454055136_121.jpg',
  '-5298703438454055137_121.jpg',
  '5321271279686377243.jpg',
  '5321271279686377244.jpg',
  '5321271279686377245.jpg',
  '5321271279686377246.jpg',
  '5321271279686377247.jpg',
  '5321271279686377248.jpg',
  '5321271279686377249.jpg',
  '5321271279686377250.jpg',
  '5321271279686377251.jpg',
  '5321271279686377252.jpg',
  '5321271279686377253.jpg',
  '5321271279686377254.jpg',
  '5321271279686377255.jpg',
  '5321271279686377256.jpg',
  '5321271279686377257.jpg',
  '5321271279686377258.jpg',
  '5321271279686377259.jpg',
  '5321271279686377260.jpg',
  '5321271279686377261.jpg',
  '5321271279686377262.jpg',
  '5321271279686377263.jpg',
  '5321271279686377264.jpg',
  '5321271279686377265.jpg',
  '5321271279686377266.jpg',
  '5321271279686377267.jpg',
  '5321271279686377268.jpg',
  '5321271279686377269.jpg',
  '5321271279686377270.jpg',
  '5321271279686377271.jpg',
  '5321271279686377272.jpg',
  '5321271279686377273.jpg',
  '5321271279686377274.jpg',
  '5321271279686377275.jpg',
  '5321271279686377276.jpg',
  '5321271279686377277.jpg',
  '5321271279686377278.jpg',
  '5321271279686377279.jpg',
  '5321271279686377280.jpg',
  '5321271279686377281.jpg',
  '5321271279686377282.jpg',
  '5321271279686377283.jpg',
  '5321271279686377284.jpg',
  '5321271279686377285.jpg',
 ];
   function getRandomInt1(min, max) {
  min = Math.ceil(min);   
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomInt = getRandomInt1(0, 18)
  await ctx.reply('Твоя карта дня:')
  await ctx.replyWithPhoto(new InputFile(picture[randomInt]))
  await ctx.answerCallbackQuery('Достаю карту💞')
})

bot.callbackQuery('Расклады', async (ctx)=>{ 
  await ctx.answerCallbackQuery()
  const link = new InlineKeyboard().url('Перейти к раскладам','https://t.me/GREISshoh')
  await ctx.reply('Интересующие тебя схемы раскладов и другие мои услуги можно посмотреть здесь👇',{
    reply_markup: link
  })
  const inlineKeyboard = new InlineKeyboard()
  .text('Да','Да').row() 
  .text('Нет','Нет').row()
  await ctx.reply('💕Нашла(шёл) то что искал(а)?',{
  reply_markup: inlineKeyboard
}) 
  })

bot.callbackQuery('свечи', async (ctx)=>{
  await ctx.answerCallbackQuery()
  const link2 = new InlineKeyboard().url('Перейти к свечам','https://t.me/GREISshoh/59')
  await ctx.reply('Програмные свечи',{
    reply_markup: link2
  } )
})
 
bot.callbackQuery('Да', async (ctx)=>{
  const menu =new InlineKeyboard()
  .text('Назад к услугам','Возврат')
  await ctx.answerCallbackQuery()
  await ctx.callbackQuery.message.editText('Рада что смогла вам помочь',{
    reply_markup: menu
  })
})
bot.callbackQuery('Возврат',async (ctx) => {
  await ctx.callbackQuery.message.editText('Список услуг указан у тебя на клавиатуре🕊',{
    reply_markup:inlineKeyboard
  })
})
bot.callbackQuery('Нет', async (ctx)=>{
  await ctx.answerCallbackQuery()
  const me = new InlineKeyboard().url('Вперёд за раскладом)','https://t.me/ia_nikochka')
  await ctx.callbackQuery.message.editText('Если не нашёл(a) нужный тебе расклад не расстраивайся)Напиши мне и я тебе помогу👇',{
    reply_markup: me
  })
})

bot.callbackQuery('Ещё', async (ctx)=>{
  const course = new InlineKeyboard() .text('Да:)','Да:)')
 .text('Нет:(','Нет:(')
  await ctx.reply("Так же у меня есть собственный курс по таро.Хотите узнать подробнее?",{
    reply_markup: course
  })
  await ctx.answerCallbackQuery()
})
const backkeyboard= new InlineKeyboard()
     .text('Далее','Далее1');
const backkeyboard1= new InlineKeyboard()
     .text('Далее','Далее2');
const backkeyboard2= new InlineKeyboard()
     .text('Далее','Далее3');
const backkeyboard3= new InlineKeyboard()
     .text('Далее','Далее4');
const course2 = new InlineKeyboard()
    .text('К курсу','Далее5')
    .text('Пока не готов(а)','Назад')

    bot.callbackQuery('Да:)', async (ctx) => {
      await ctx.callbackQuery.message.editText('Прекрасно, перед переходом к самому курсу у меня есть для тебя несколько интересных фактов о Таро', {
        reply_markup: backkeyboard,
      })
      await ctx.answerCallbackQuery()
    })
    bot.callbackQuery('Далее1', async (ctx) => {
      await ctx.callbackQuery.message.editText(
        '1. Таро -<span class="tg-spoiler"> самостоятельный эгрегор, который не связывает тебя с поклонением богам, сатане или бесам &#128720;, все это миф.</span> Ты можешь быть христианином или мусульманином, все это вообще никак не мешает заниматься таро и наказания за это тоже не будет!',
        {
          parse_mode: "HTML",
          reply_markup: backkeyboard1,
        }
      );
      await ctx.answerCallbackQuery();
    });
  bot.callbackQuery('Далее2',async (ctx)=>{
  await ctx.callbackQuery.message.editText('2. Заниматься этим может каждый, не нужно таланта и БАБКИНОГО ДАРА, хватит желания и искреннего интереса',{
    reply_markup: backkeyboard2,
    })
  await ctx.answerCallbackQuery()
  })
  bot.callbackQuery('Далее3',async (ctx)=>{
    await ctx.callbackQuery.message.editText("3. А ты знала, что можно увидеть в таро, что за тобой следят в социальных сетях?Например, карта «Луна» может указывать на шпионаж или даже попытки взлома аккаунта, иногда это может доходить и до провокаций со сливом фоток",{
      reply_markup: backkeyboard3,
    })
    await ctx.answerCallbackQuery()
    })
  bot.callbackQuery('Далее4',async (ctx)=>{
    await ctx.callbackQuery.message.editText("4. А ещё, можно узнать о &#128286 желаниях человека. Некоторые дошли даже до определения размеров $ через таро, ахаха. А вот карта «8 мечей» может говорить о том, что человек имеет нестандартные предпочтения, фиксацию, доминацию над ним или даже садомазохистские наклонности. Кто вообще ожидал такого от масти мечей?",{
      reply_markup: course2,
      parse_mode:'HTML'
    })
    await ctx.answerCallbackQuery()
})
bot.callbackQuery('Назад', async (ctx) =>{
  await ctx.callbackQuery.message.editText('Список услуг указан у тебя на клавиатуре🕊',{
    reply_markup: inlineKeyboard
    })
  await ctx.answerCallbackQuery()
  })
bot.callbackQuery('Нет:(', async (ctx) => {
  await ctx.answerCallbackQuery()
  await ctx.reply('Хорошо, но если захочешь обучиться магии вне хогвартса то всегда рада буду видеть тебя в наших рядах');
});
bot.callbackQuery('Далее5',async (ctx)=>{
  await ctx.answerCallbackQuery()
  const money = new InlineKeyboard().url('К курсу', 'https://t.me/GREISshoh/60')
  await ctx.reply('&#128302Вперёд за знаниями&#128302',{
    reply_markup: money,
    parse_mode:"HTML"
   
  })
})
bot.callbackQuery('вопрос', async (ctx) => {
  await ctx.reply('Напишите свой вопрос)');
  ctx.waitForMessage = true;
  });
  bot.on('message', async (ctx) => {
    if (ctx.waitForMessage = true) {
      const messageText = ctx.message.text;
      bot.api.sendMessage(1124382364, messageText);
      await ctx.reply('Твой ответ записан жди ответ в моём канале')
      ctx.waitForMessage = false
    }
    else{
      await ctx.reply('Для взаимодествия с ботом воспользуйтесь кнопками)')
    }
  });
bot.catch((err)=>{
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`); 
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if ( e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknow error", e);
  }
})
bot.start();
