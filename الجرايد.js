const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const http = require('http');

const tokens = [
  'توكنك'
]; 
const targetUsers = [
  "ايدي ولد زبي"
];
const targetChannels = [
  "ايدي الروم"
];
const initialDelay = 2000; 
const typingDuration = 4 * 60 * 1000; 
const shortTypingInterval = 10 * 1000; 
const maxWords = 30; 

const randomWords = [
  'شقمك', 
  'حرقمك',
  'بصعمك', 
  'فتحمك', 
  'بحوي كسم الي جابتك', 
  'ياولد الجرار', 
  'انيك كسمك يبن القحاب', 
  'و ادحش بكسمك زوبر عملاق', 
  'و انيك كسمك بكل زمان', 
  'و اضرب كسمك بكل مكان', 
  'و اشنق كسمك بين الابعاد', 
  'و اعسل كسمك المتناك', 
  'تزبيل كسمك المنكوح',
  'و جعل كسمك قحبه منيوك', 
  'تحليه كسمك', 
  'نيك كسمك', 
  'كسمك', 
  'كسختك', 
  'كسعمتك', 
  'كسخالاتك', 
  'كسخالك', 
  'كسم اسلافك', 
  'كسم احيائك', 
  'كسم اولادك', 
  'نيك كسم ابوك الديوث', 
  'كسخوك', 
  'اشق رحم امك', 
  'كسمك منهار', 
  'كسختك محتاج ل غيار', 
  'تعديه كسمك', 
  'تمعدن كسمك', 
  'تحجر كسختك', 
  'انقلاب كسمك الي قرد', 
  'اضرب كسمك بالسوط', 
  'انيك كسمك علطول', 
  'انيك ربمك يبن المقحبه', 
  'تقلبات كس امك المزاجيه', 
  'اغتيال كس امك من الامام و الخلف', 
  'تلاعب ب جثه امك', 
  'ادخل كسمك للجحيم', 
 'جعلمك تتناك من زنجي', 
 'ادحش بكسمك العود', 
 'اسلق كسمك',
 'اقود طيزمك', 
 'اقرط ربمك', 
 'اخسف عرضمك', 
 'اشلمك', 
 'اعوقمك', 
 'اخنقمك', 
 'اقتلمك', 
 'افعطمك', 
 'اجلطمك', 
 'اقودمك', 
 'نيكمك', 
 'صفعمك', 
 'جلطمك', 
 'خرطمك', 
 'نباحمك', 
 'استفسارمك', 
 'هروبمك', 
 'قشعمك', 
 'غدرمك', 
 'سلخمك', 
 'فسخمك', 
 'نسخمك', 
 'صرعمك', 
 'طخمك ارضا', 
 'ابادتمك', 
 'موتمك جوعا', 
 'تشرد كسمج', 
 'تبول امج تحتها', 
 'خرائمك', 
 'انقراض ربمك يبن العارية', 
 'يبن زبي', 
 'يبن الشرموطة', 
 'يبن المفعوصة', 
 'يبن المقعورة', 
 'يبن المقتولة', 
 'يبن المبعورة', 
 'اغشائمك', 
 'نطح كسمك', 
 'اختفائمك', 
 'ارباكمك', 
 'توترمك', 
 'توسلمك', 
 'تقعبرمك', 
 'تنشفمك', 
 'تخسفمك', 
 'انقصاف عرضمك', 
 'التفاف طيزمج', 
 'ارتقائمك للاعلالي', 
 'انصراعمك يبن الخاري', 
 'تقرجط ترمة امك', 
 'نكح حتشون ربك', 
 'تنشيف خرزت والدتك', 
 'تصفف كسمج', 
 'تشردمك يبن الجحبة', 
 'انصراع زكمك تحت رحمة عيري يبن الفيري', 
 'طلبمك الرحمة', 
 'استنجادمك', 
 'استفزازمك', 
 'يبن المزعجة', 
 'نيكخواتمك', 
 'انطفائمك', 
 'انقهارمك', 
 'انحراقمك', 
 'خرقمك', 
 'تعسفمك', 
 'تخسفمك', 
 'تقشرمك', 
 'تعثرمك', 
 'انفصالمك', 
 'انخصالمك', 
 'انتحار دينمك', 
 'اخضاعمك', 
 'استغلالمك', 
 'تقرطمك', 
 'فشلمك', 
 'تعبمك', 
 'خرطمك', 
 'طحنمك', 
 'دفنمك و هي حية', 
 'نيك امواتمك', 
 'انقطاع نسلمك', 
 'ضرب طيزمك بمنجل يبن تيري', 
 'ربطمك بشجرة', 
 'اقعرمك يبن القوادة', 
 'نيجمك يبن الخنيثة', 
 'كسمين امج يبن اللبوثة', 
 'نيجمك يبن المكبوثة', 
 'قربعة طيزمج', 
 'نحر نسلمج', 
 'قهر طيزمج', 
 'قطع كسمياتمج', 
 'انهيار حتشونمج', 
 'ضربمك يبن البواسر', 
 'انقراض جميع اسلاف ربك يبن المعاقين', 
 'تشرد ابوك ابن الهاربة و تركك وحيدا يبن القحبة', 
 'احتراق منزل ربك يبن الجحوبة', 
 'اختراق كسمج', 
 'افتكاك طيزمج', 
 'شق خواتمك يبن عيري', 
 'فقس عقلمك', 
 'نيك اهلمك', 
 'شوي جدمك', 
 'رفدمك', 
 'رعفمك', 
 'خلقمك', 
 'شوطمك', 
 'حنطمك', 
 'تكريسمك', 
 'تعبيسمك', 
 'تفريممك', 
 'تقليدمك', 
 'تعنيفمك', 
 'تخرفنمك', 
 'تبزيزمك', 
 'تعبمك', 
 'نيكهامك', 
 'نيكاصلمك', 
 'تعوبجمك', 
 'طخمك', 
 'طعنمك', 
 'نفخمك', 
 'صفقمك', 
 'شلقمك', 
 'بكيمك', 
 'حكمك', 
 'ركلمك', 
 'سكسمك', 
 'سفكمك', 
 'تفريشمك', 
 'يبن المكلوبة', 
 'يبن المسعورة', 
 'يبن القواويد', 
 'يبن الداعر', 
 'يبن الساعر', 
 'نيكمك العاهر', 
 'تفتيشمك', 
 'نطحختمك', 
 'تدبيزمك', 
 'تكريسمك', 
 'وفاتمك', 
 'استشهادمك', 
 'تخويطمك', 
 'تعويجمك', 
 'تنشيف نسلمك', 
 'قصاصمك', 
 'هلاك امك', 
 'شعور امك بالراحة', 
 'نيكمك يبن الكلبة', 
 'تشبيع كسمك بوكسات', 
 'تكسير راس امك', 
 'امك تتناك بينما انت تفرح وتصفق',
 'امك تبحث عن زبي',
 'عثور امك على زبي',
 'كسمك فاتن',
 'قصف كسمك بالنووي',
 'سكب الكحول في كسمك',
 'زرع فواكه في كسمك',
 'قطع أعضاء امك بالخنجر',
 'كلك الظلام ينيك كسمك مع ملكة النور',
 'افتتاح مقهى في كسمك',
 'لطم امك لحد التبلل',
 'تأليف كتاب الاصول في نيك امك',
 'خلع الستار عن زبي زبي والتصاقه في كسمك',
 'رش كسمك بالكولا',
 'كس سلالتك لحد ادم ودحش ادم في كسمك',
 'وضع ام اربعة واربعين في كسمك',
 'كسمك كبير وعميق لدرجة ان حتى امك وقاعت وضاعت فيه',
 'كسمك هاوية خاوية',
 'شق كسمك 6191346 نصف',
 'تجول المني بكسمك',
 'زبي بكس امك يا ابن المجهول',
 'خدش سوة ربك', 
 'حنط اهلك', 
 'نيكمك بزب افريقي', 
 'باكا باكا نيكمك يبن الحزاقة', 
 'نيكمك يبن المحنوكة', 
 'شعور امك بالسعادة', 
 'انصداممك', 
 'ذوبانمك', 
 'رفسمك', 
 'قلع ضرس امك', 
 'خبط امك بكف خماسي', 
 'سقلمك', 
 'حقنمك', 
 'عناقمك', 
 'لعقمك', 
 'لحسمك', 
 'فرشمك', 
 'غريمك', 
 'غرق ابوك', 
 'وفاة اخوك', 
 'نيكمك بزب رانغو الفرار', 
 'نايك كسمك و الي مشعل فيه النار', 
 'نيك ربك يبن الجرار', 
 'انيك كسختمك يبن الفار', 
 'فقس ربمك يبن قضيبي', 
 'جري جدمك', 
 'حوي عرضمك', 
 'طحن خواتمك', 
 'تكسير سنمك', 
 'انقطاع نسلمك', 
 'شعور كسمك بالحزن', 
 'انهيار شرف امك', 
 'تعليق سوة امك بالشجرة',  
 'يبن الكل', 
 'يبن العالم', 
 'خشي السواك بطبون امك', 
 'نيك حتشون يماك', 
 'الو عادي انيك امك', 
 'تم كسر ظهر امك', 
 'ادخال الموس بكسمك يبن اللبوس', 
 'تشبيع كسمك بوس', 
 'البزق بطبون امك', 
 'حرق شعر امك', 
 'تكفيتي بطبونمك', 
 'تنزيل المعجزات على راسمك', 
 'خبط كسمك بالباب يبن العطاية', 
 'نيك ربمك يبن الحلاب', 
]; 


const getRandomSentence = (words, length) => {
  let sentence = '';
  for (let i = 0; i < length; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    sentence += `${randomWord} `;
  }
  return sentence.trim();
};

const repliedMessages = new Map();

const shouldReply = (message) => {
  const words = message.content.split(' ');
  if (words.length > maxWords) {
    return true;
  }
  return false;
};

const clients = tokens.map(token => {
  const client = new Client();

  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  });

  client.on('messageCreate', async (message) => {
    if (!targetUsers.includes(message.author.id) || !targetChannels.includes(message.channel.id)) return;

    const channelId = message.channel.id;
    const userId = message.author.id;

    if (!shouldReply(message)) return;
    if (repliedMessages.has(channelId) && repliedMessages.get(channelId) === message.id) return;

    try {
      const startTime = Date.now();
      while (Date.now() - startTime < typingDuration) {
        message.channel.sendTyping();
        await new Promise(resolve => setTimeout(resolve, shortTypingInterval));
      }

      const randomReply = getRandomSentence(randomWords, 90);
      const replyMessage = await message.reply(randomReply);
      repliedMessages.set(channelId, replyMessage.id);
      console.log(`Replied to message: ${replyMessage.content}`);

      const replyTime = Date.now();
      while (Date.now() - replyTime < typingDuration) {
        message.channel.sendTyping();
        await new Promise(resolve => setTimeout(resolve, shortTypingInterval));
      }

    } catch (error) {
      console.error(`Error replying to message: ${error}`);

      if (error.code === 429) {
        console.log('Rate limited! Retrying after delay...');
        await new Promise(resolve => setTimeout(resolve, initialDelay));
      } else {
        console.error('Encountered an unexpected error. Retrying...');
        await new Promise(resolve => setTimeout(resolve, initialDelay));
      }
    }
  });

  client.on('error', (error) => {
    console.error('Client encountered an error:', error);
  });

  client.login(token);
  return client;
});

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send(`
    <body>
      <center><h1>كسمك يا علاوي</h1></center>
    </body>
  `);
});

app.get('/webview', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <head>
        <title>كسمك يا لحن</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>
  `);
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
  console.log("I'm ready to nik ksm 3lawi..!");
  console.log("I'm ready to nik ksm l7n..!");
});
