require ('dotenv').config();

const { Bot, GrammyError, HttpError, InlineKeyboard, InputFile  } =require('grammy');
const {hydrate} = require('@grammyjs/hydrate')
const bot = new Bot(process.env.BOT_api_KEY);
bot.use(hydrate())

bot.api.setMyCommands([
  {
    command: 'mood',
    description:'Что я умею'
  }
]);

bot.command('start', async (ctx) => { 
  await ctx.reply('Приветик) Меня зову Greis, очень рада тебя видеть! Нажми на "mood" и в ответ на это я покажу тебе что умею делать. Обещаю это будет очень интересно');
});
bot.command('mood', async (ctx)=>{
    const inlineKeyboard = new InlineKeyboard()
    .text('Расклады 🎴','Расклады').row()
    .text('Свечи🕯','свечи').row()
    .text('Карта дня🌄','Карта дня').row()
    .text('Ещё🧷','Ещё').row()
    .text('Вопрос🤷‍♀️','Анонимный вопрос')
    await ctx.reply('Список услуг указан у тебя на клавиатуре🕊',{
    reply_markup: inlineKeyboard
    })
})

bot.callbackQuery('Карта дня', async (ctx) =>{
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
  await ctx.answerCallbackQuery('Вы получили карту дня💞')
})

bot.callbackQuery('Расклады', async (ctx)=>{ 
  await ctx.reply('Интерсеные схемы раскладов и другие мои услуги можно посмотреть здесь👇')
  await ctx.reply("https://t.me/taroshatycen")
  const inlineKeyboard = new InlineKeyboard()
  .text('Да','Да').row() 
  .text('Нет','Нет').row()
  await ctx.reply('💕Нашла(шёл) то что искал(а)?',{
  reply_markup: inlineKeyboard
})
  })

bot.callbackQuery('свечи', async (ctx)=>{
  await ctx.reply('Програмные свечи' )
  await ctx.reply('https://t.me/taroshatycen/59')
})
 
bot.callbackQuery('Да', async (ctx)=>{
  await ctx.reply('Рада что смогла вам помочь')
})
bot.callbackQuery('Нет', async (ctx)=>{
  await ctx.reply('Если не нашёл(a) нужный тебе расклад не расстраивайся)Напиши мне и я тебе помогу👇')
  await ctx.reply('@ia_nikochka')
})
bot.callbackQuery('Ещё', async (ctx)=>{
  const moreKeyboard = new  InlineKeyboard().text('Да :)').row().text('Нет:(')
  await ctx.reply("Так же у меня есть собственный курс по тарологии.Хотите узнать подробнее?",{
    reply_markup: moreKeyboard
  })
})
bot.on('callback_query:data', async (ctx)=>{
  
  if(ctx.callbackQuery.data==='Да :)') {
    
    await ctx.answerCallbackQuery('Рада что вас заинтерисовало')
    await ctx.reply( "Прекрасно перед переходом к самому курсу у меня есть для тебя несколько интересных фактов о Таро"),
    await ctx.reply('1. Таро - самостоятельный эгрегор, <span class="tg-spoiler">который не связывает тебя с поклонением богам, сатане или бесам, все это миф. Ты можешь быть христианином или мусульманином, все это вообще никак не мешает заниматься таро и наказания за это тоже не будет!</span>',{
    parse_mode : "HTML"
  })
    await ctx.reply("2. Заниматься этим может каждый, не нужно таланта и БАБКИНОГО ДАРА, хватит желания и искреннего интереса")
    await ctx.reply("3. А ты знала, что можно увидеть в таро, что за тобой следят в социальных сетях?Например, карта «Луна» может указывать на шпионаж или даже попытки взлома аккаунта, иногда это может доходить и до провокаций со сливом фоток")
    await ctx.reply("4. А ещё, можно узнать о 18+ желаниях человека. Некоторые дошли даже до определения размеров $ через таро, ахаха. А вот карта «8 мечей» может говорить о том, что человек имеет нестандартные предпочтения, фиксацию, доминацию над ним или даже садомазохистские наклонности. Кто вообще ожидал такого от масти мечей?")

  }

})
bot.callbackQuery('Анонимный вопрос', async (ctx)=>{
  await ctx.reply('Напишите сообщение которое начниается с "Хочу задать вопрос:" и задайте свой вопрос а я отвечу на него у себя в канале')
})
bot.hears(/Хочу задать вопрос:/, async (ctx)=>{
    const message = ctx.message.text
    await bot.api.sendMessage(1124382364,message)
    await ctx.reply('Ваш вопрос записан.Спасибо за вопрос ответ ждите в моём телеграмм канале @ia_nikochka')
}) 
bot.callbackQuery('Нет:(', async (ctx) =>{
  await ctx.reply('Хорошо, но если захочешь я всегда готова помочь')
})
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
});

bot.start();