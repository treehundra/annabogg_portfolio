/* Faithful recreation of Богомолова Анна — PORTFOLIO (17 pages).
   Builds every slide as a <section> inside <deck-stage>, in order. */
(function () {
  const P = '../../photos/';
  const stage = document.getElementById('deck');

  // ---- helpers ----
  const section = (html, cls) => {
    const s = document.createElement('section');
    if (cls) s.className = cls;
    s.innerHTML = html;
    return s;
  };
  const range = (pre, n, start = 1) =>
    Array.from({ length: n }, (_, i) => `${pre}-${String(i + start).padStart(2, '0')}.jpg`);

  // marker scribbles (the ONLY red) — hand-drawn squiggles
  const redScribble = (w = 230) => `
    <svg class="scribble" width="${w}" viewBox="0 0 230 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,95 C25,55 70,28 115,38 C170,50 205,82 192,116 C180,148 120,160 74,146 C40,135 26,116 34,92 C44,62 92,52 138,64 C170,72 192,94 182,114"
        stroke="var(--marker-red)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M150,30 C175,40 196,58 200,84" stroke="var(--marker-red)" stroke-width="7" stroke-linecap="round"/>
    </svg>`;
  const blackScribble = (w = 200) => `
    <svg class="scribble" width="${w}" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14,120 C70,118 150,120 210,118 M22,132 C90,128 160,134 206,130 M30,108 C80,104 140,112 196,106"
        stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
      <path d="M120,30 C150,20 185,34 178,60 C172,82 132,86 124,64 C118,46 150,40 168,52"
        stroke="var(--ink)" stroke-width="5" stroke-linecap="round" fill="none"/>
    </svg>`;
  const spiralRings = (n) => `<div class="rings">${'<div class="ring"></div>'.repeat(n)}</div>`;

  // generic gallery: rows = array of counts; imgs = filenames
  function galleryHTML(imgs, rows) {
    let i = 0, out = '';
    for (const n of rows) {
      const cells = imgs.slice(i, i + n).map((f) => `<img src="${P}${f}" alt="" loading="eager">`).join('');
      out += `<div class="grow" style="--n:${n}">${cells}</div>`;
      i += n;
    }
    return `<div class="gallery">${out}</div>`;
  }

  // standard gallery slide
  function gallerySlide({ title, imgs, rows, capL, capR }) {
    return section(`
      <h2 class="sec-title ${title.big || 't-xl'}">${title.text}</h2>
      ${galleryHTML(imgs, rows)}
      <div class="cap-row">
        <div class="left">${capL || ''}</div>
        <div class="right">${capR || ''}</div>
      </div>`, 'slide layout-gallery');
  }

  const slides = [];

  /* ===== 1. COVER ===== */
  slides.push(section(`
    <h1 class="sec-title t-xxl abs" style="left:0;right:0;top:48px;text-align:center;">PORTFOLIO</h1>
    <div class="abs" style="left:1330px;top:34px;">${redScribble(250)}</div>
    <div class="abs" style="left:1430px;top:150px;">${blackScribble(150)}</div>
    <div class="abs" style="left:0;right:0;top:300px;text-align:center;font-family:var(--font-marker);font-weight:700;font-size:128px;line-height:0.9;color:var(--ink);">БОГОМОЛОВА АННА</div>

    <!-- left polaroid -->
    <div class="abs polaroid rot-n2" style="left:84px;top:486px;width:360px;">
      <img class="" style="aspect-ratio:3/4;filter:var(--filter-bw);" src="${P}cover-model.jpg" alt="Анна Богомолова">
      <div class="pcap" style="min-height:18px;"></div>
    </div>
    <span class="tape" style="left:90px;top:470px;width:120px;height:34px;transform:rotate(-42deg);"></span>
    <span class="tape" style="left:360px;top:470px;width:120px;height:34px;transform:rotate(44deg);"></span>
    <span class="tape" style="left:70px;top:830px;width:120px;height:34px;transform:rotate(38deg);"></span>
    <span class="tape" style="left:360px;top:840px;width:120px;height:34px;transform:rotate(-40deg);"></span>
    <div class="abs" style="left:70px;top:910px;">${redScribble(150)}</div>
    <div class="abs" style="left:120px;top:980px;">${blackScribble(180)}</div>

    <!-- center contacts -->
    <div class="abs" style="left:760px;top:560px;width:660px;text-align:center;">
      <div class="kicker" style="font-size:30px;line-height:1.45;">Стилист, креативный продюсер,<br>ассистент креативного директора</div>
      <div class="contacts" style="margin-top:34px;">
        <div class="h">Контакты:</div>
        <div>Телефон: +7 916 838-06-76</div>
        <div>Email: <u>BogomolovaAnna.sty@yandex.ru</u></div>
        <div>Instagram / Telegram : @anyabogg</div>
        <div>Город: Москва</div>
        <div>Дата рождения: 26.11.2004</div>
      </div>
    </div>

    <!-- right framed photo -->
    <div class="abs framed rot-2" style="right:96px;top:600px;width:330px;">
      <img style="aspect-ratio:4/5;filter:var(--filter-bw);object-fit:cover;" src="${P}p01-01.jpg" alt="">
    </div>
    <span class="tape paper" style="right:200px;top:586px;width:140px;height:40px;transform:rotate(-3deg);"></span>
  `, 'slide'));

  /* ===== 2. EXPERIENCE / WORK CASES ===== */
  slides.push(section(`
    <h2 class="sec-title t-lg abs" style="left:200px;top:48px;">EXPERIENCE</h2>
    <!-- spiral notebook timeline -->
    <div class="abs spiral" style="left:150px;top:132px;width:760px;height:910px;padding:34px 56px 34px 96px;">
      ${spiralRings(13)}
      <div class="tabs">
        ${['A & P','Assessment','Calculations','Coding','Equipment','Injections'].map(t=>`<div class="tab">${t}</div>`).join('')}
      </div>
      <div style="text-align:center;">
        <div class="script" style="font-size:44px;">2024 - now</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 14px;">Национальный исследовательский университет <b>«Высшая школа экономики»</b><br>Факультет креативных индустрий, программа «Мода»<br>Специализация: брендинг в индустрии моды</div>
        <div class="script" style="font-size:44px;">2022 – 2024</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 14px;"><b>Британская высшая школа дизайна</b><br>Факультет креативных индустрий, программа «Мода»<br>Специализация: дизайн одежды</div>
        <div class="script" style="font-size:44px;">2021 – 2022</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 14px;"><b>Британская высшая школа дизайна</b><br>Foundation Art &amp; Design<br>Специализация: совр­менное искусство</div>
        <div class="script" style="font-size:44px;">2013 – 2021</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 0;"><b>Архитектурная школа СТАРТ при МАрхИ</b><br>Курсы: дизайн одежды, профессиональный архитектурный класс</div>
      </div>
    </div>

    <!-- right: editorial / lookbook / tv cards -->
    <div class="abs torn white" style="left:1030px;top:140px;width:680px;padding:40px 48px;">
      <span class="paperclip" style="left:80px;top:-30px;"></span>
      <div class="script" style="font-size:46px;margin-bottom:14px;">Editorial. Fashion magazines</div>
      <ul class="blist" style="font-size:23px;font-weight:600;">
        <li>«Мнение Редакции» с Анджелиной Смерфит</li>
        <li>«Сноб» с Иваном Янковским</li>
        <li>L'Officiel × Неделя Вьетнама в Москве</li>
        <li>Open Call Badlon Magazine</li>
      </ul>
    </div>

    <div class="abs polaroid rot-n2" style="left:980px;top:470px;width:300px;">
      <img style="aspect-ratio:3/4;object-fit:cover;" src="${P}p02-03.jpg" alt="Снобъ">
      <div class="pcap" style="min-height:14px;"></div>
    </div>

    <div class="abs torn aged" style="left:1310px;top:392px;width:400px;padding:30px 40px;">
      <span class="paperclip" style="right:54px;top:-30px;"></span>
      <div class="script" style="font-size:34px;">Lookbook Production</div>
      <ul class="blist" style="font-size:18px;font-weight:700;margin-top:4px;">
        <li>Ostin Kids</li><li>Kapsula</li><li>Parit</li><li>Botrois</li>
      </ul>
      <div class="script" style="font-size:34px;margin-top:10px;">TV shows Production</div>
      <ul class="blist serif" style="font-size:17px;font-weight:600;margin-top:4px;">
        <li>Финал реалити-шоу «Королева ринга»</li>
        <li>Рекламная кампания Озон Банка с Гошей Куценко</li>
        <li>Шоу «Страсти по Фишеру» со Славой КПСС, Яном Топлесом и Азаматом Мусагалиевым</li>
        <li>Музыкальный клип Ozerniki</li>
        <li>Музыкальный клип Ozerniki × Feduk</li>
      </ul>
    </div>

    <h2 class="sec-title t-md abs" style="right:60px;bottom:48px;">WORK CASES</h2>
  `, 'slide'));

  /* ===== 3. PUBLICATIONS (list + show prod) ===== */
  slides.push(section(`
    <div class="abs torn white" style="left:60px;top:120px;width:900px;padding:60px 70px;">
      <span class="clip" style="left:140px;top:-46px;"><span class="arm l"></span><span class="arm r"></span><span class="body"></span></span>
      <h2 class="sec-title t-lg" style="margin-bottom:24px;">PUBLICATIONS</h2>
      <ul class="blist serif" style="font-size:30px;font-weight:700;">
        <li>Сноб — журнал №111, осень 2025</li>
        <li>L'Officiel — журнал №278, лето 2025</li>
        <li>«Мнение Редакции» — журнал №5 осень 2025</li>
        <li>Badlon Magazine — журнал №44 осень 2025</li>
        <li>Sheer Magazine — журнал №1 осень–зима 2025</li>
        <li>Pretty Magazine — журнал №1 лето 2026</li>
      </ul>
    </div>

    <div class="abs polaroid rot-n2" style="left:80px;top:600px;width:300px;">
      <img style="aspect-ratio:3/4;object-fit:cover;" src="${P}p03-pol1.jpg" alt=""><div class="pcap" style="min-height:12px;"></div>
    </div>
    <div class="abs polaroid rot-3" style="left:400px;top:600px;width:300px;">
      <img style="aspect-ratio:3/4;object-fit:cover;" src="${P}p03-pol2.jpg" alt=""><div class="pcap" style="min-height:12px;"></div>
    </div>
    <div class="abs" style="left:760px;top:520px;width:300px;background:#0c0c0c;padding:14px;box-shadow:var(--shadow-photo);transform:rotate(-1deg);">
      <img style="width:100%;display:block;" src="${P}p03-film.jpg" alt="PHOBOS / Pretty">
    </div>

    <!-- brand logos (wordmarks) -->
    <div class="abs" style="right:80px;top:120px;width:640px;text-align:right;">
      <div style="display:flex;justify-content:flex-end;gap:30px;align-items:center;flex-wrap:wrap;">
        <span style="font-family:var(--font-body);font-weight:800;font-size:26px;letter-spacing:.02em;">TELLING STORIES <span style="color:#7CFC4D;">FEST</span></span>
        <span style="font-family:var(--font-serif);font-style:italic;font-weight:700;font-size:40px;">L'</span>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:36px;align-items:center;margin-top:14px;">
        <span style="font-family:var(--font-body);font-weight:800;font-size:34px;color:#FF5A5F;letter-spacing:-.01em;">❀ FLOWWOW</span>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:10px;">
        <span style="font-family:var(--font-body);font-weight:800;font-size:38px;color:#FF3366;">○ самокат</span>
      </div>
    </div>

    <!-- SHOW PROD lanyard -->
    <div class="abs lanyard" style="right:140px;top:430px;">
      <div class="cord"></div>
      <div class="tag" style="width:520px;text-align:left;padding:30px 40px 34px;">
        <div class="inner">
          <h3 class="sec-title t-md" style="font-size:60px;margin-bottom:18px;">SHOW PROD</h3>
          <ul class="blist serif" style="font-size:22px;font-weight:600;">
            <li>Британская Высшая школа дизайна × Flowow (2024)</li>
            <li>HSE Fashion Show × Самокат (2025)</li>
            <li>HSE Fashion Show Hard (2025)</li>
            <li>Универмаг «Цветной»</li>
            <li>HSE Telling Stories Fest (Digital Business Hub)</li>
          </ul>
        </div>
      </div>
    </div>
  `, 'slide'));

  /* ===== 4. HARD SKILLS / SOFT SKILLS ===== */
  slides.push(section(`
    <h2 class="sec-title t-lg abs" style="left:60px;top:44px;">HARD SKILLS</h2>
    <div class="abs spiral" style="left:120px;top:150px;width:760px;height:900px;padding:30px 56px 30px 96px;">
      ${spiralRings(13)}
      <div class="script" style="font-size:40px;text-align:center;">Fashion &amp; Creative</div>
      <ul class="blist serif" style="font-size:18px;margin-top:4px;">
        <li>Editorial Styling</li><li>Commercial Styling</li><li>Fashion Styling</li>
        <li>Creative Direction</li><li>Art Direction Support</li>
        <li>Разработка визуальных концепций</li>
        <li>Создание мудбордов и работа с референсами</li>
        <li>Продюсирование fashion-проектов и съёмок</li>
        <li>Организация editorial, campaign и lookbook production</li>
      </ul>
      <div class="script" style="font-size:40px;text-align:center;margin-top:10px;">Brand &amp; Production</div>
      <ul class="blist serif" style="font-size:18px;margin-top:4px;">
        <li>Коммуникация с брендами и партнёрами</li>
        <li>Организация barter-сотрудничества</li>
        <li>Координация съёмочных команд</li>
        <li>Работа с моделями, фотографами, визажистами и продюсерами</li>
        <li>Полный цикл подготовки fashion-съёмок</li>
        <li>Управление логистикой одежды и реквизита</li>
      </ul>
      <div class="script" style="font-size:40px;text-align:center;margin-top:10px;">Digital Tools</div>
      <ul class="blist serif" style="font-size:18px;margin-top:4px;column-count:2;">
        <li>Figma</li><li>Google Workspace</li><li>Microsoft Office</li>
        <li>WaveSpeedAI</li><li>Midjourney</li><li>Ideogram</li>
      </ul>
    </div>

    <div class="abs deckle" style="right:80px;top:90px;width:780px;padding:44px 56px;">
      <ul class="blist" style="font-size:26px;font-weight:500;">
        <li>Креативное мышление</li><li>Визуальная насмотренность</li><li>Лидерство</li>
        <li>Коммуникабельность</li><li>Эмоциональный интеллект</li><li>Гибкость мышления</li>
        <li>Организованность</li><li>Работа в режиме многозадачности</li>
        <li>Стрессоустойчивость</li><li>Умение быстро принимать решения</li>
      </ul>
      <h2 class="sec-title t-md" style="font-size:64px;margin-top:18px;">SOFT SKILLS</h2>
    </div>

    <div class="abs polaroid rot-n2" style="right:430px;top:710px;width:280px;">
      <img style="aspect-ratio:4/5;object-fit:cover;" src="${P}p04-studio.jpg" alt=""><div class="pcap" style="min-height:12px;"></div>
    </div>
    <span class="tape" style="right:640px;top:700px;width:110px;height:30px;transform:rotate(-44deg);"></span>
    <span class="tape" style="right:430px;top:700px;width:110px;height:30px;transform:rotate(46deg);"></span>

    <div class="abs lanyard" style="right:110px;top:700px;">
      <div class="cord" style="height:60px;"></div>
      <div class="tag" style="width:230px;">
        <div class="inner serif" style="font-size:21px;line-height:1.5;">
          <b>Английский язык</b> — C1, IELTS 7.0.<br><b>Немецкий</b> — B1 Goethe-Test
        </div>
      </div>
    </div>
  `, 'slide'));

  /* ===== 5. PUBLICATIONS gallery (captioned columns) ===== */
  {
    const items = [
      ['p05-01.jpg', 'Ассистирование на для «Мнение Редакции» с Анджелиной Смерфит'],
      ['p05-02.jpg', 'Ассистирование для «Сноба» с Иваном Янковским:'],
      ['p05-03.jpg', 'Ассистирование L\'Officiel × Неделя Вьетнама в Москве'],
      ['p05-04.jpg', 'Продюсирование и стилизация для печатного журнала "SHEER"'],
      ['p05-05.jpg', 'Стилизация для печатного журнала "Pretty"'],
    ];
    slides.push(section(`
      <h2 class="sec-title t-lg" style="margin-bottom:30px;">PUBLICATIONS</h2>
      <div style="display:flex;gap:36px;align-items:flex-start;justify-content:center;height:760px;">
        ${items.map(([f, c]) => `
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:24px;height:100%;">
            <div style="flex:1;display:flex;align-items:center;min-height:0;"><img src="${P}${f}" style="max-width:100%;max-height:100%;object-fit:contain;background:var(--photo-bg);" alt=""></div>
            <p class="cap" style="text-align:center;font-size:24px;">${c}</p>
          </div>`).join('')}
      </div>
    `, 'slide'));
  }

  /* ===== 6–16. gallery slides ===== */
  gallerySlide; // (defined above)
  const G = [
    { title: { text: 'EDITORIAL<br>STYLING' }, imgs: range('p06', 10), rows: [5, 5],
      capL: `<p class="cap cap-serif">Ассистирование L'Officiel × Неделя Вьетнама в Москве</p><p class="cap cap-serif">L'Officiel журнал №278, лето 2025</p>` },
    { title: { text: 'EDITORIAL<br>STYLING' }, imgs: range('p07', 11), rows: [6, 5],
      capL: `<p class="cap">Ассистирование на для «Мнение Редакции» с Анджелиной Смерфит</p><p class="cap">«Мнение Редакции» — журнал №5 осень 2025</p>`,
      capR: `<p class="link">Ссылка на видео съемку</p><p class="link">Ссылка на бэкстейдж</p>` },
    { title: { text: 'EDITORIAL<br>STYLING' }, imgs: range('p08', 8), rows: [4, 4],
      capL: `<p class="cap">Ассистирование для «Сноба» с Иваном Янковским</p><p class="cap">Сноб — журнал №111, осень 2025</p>`,
      capR: `<p class="link">Ссылка на бэкстейдж</p>` },
    { title: { text: 'PROD &amp; STYLE' }, imgs: range('p09', 17), rows: [6, 6, 5],
      capL: `<p class="cap cap-serif">Продюсирование и стилизация съемок<br>портфолио для моделей агентсва Ultra Models</p>`,
      capR: `<p class="cap">Координация всего съемочного процесса, поиска и<br>коммуникации с фотографами, визажистами и моделями</p>` },
    { title: { text: 'STYLE' }, imgs: range('p10', 9), rows: [6, 3],
      capL: `<p class="cap">Продюсирование и стилизация съемки лукбука<br>для дизайнеров Высшей Школы Дизайна</p>` },
    { title: { text: 'PROD &amp; STYLE' }, imgs: range('p11', 12), rows: [7, 5],
      capL: `<p class="cap">Продюсирование и стилизация съемки<br>коллекции выпускницы Британской Высшей<br>Школы Дизайна -  Авроры Луниной</p>`,
      capR: `<p class="cap">Команда из 12 человек, 3 модели, локация<br>предоставлена на основе сотрудничества с<br><span class="cap-serif">Marco Polo Hotel Moscow</span></p>` },
    { title: { text: 'PROD &amp; STYLE' }, imgs: range('p12', 7), rows: [7],
      capL: `<p class="cap">Продюсирование и стилизация съемки с<br>макро-инфлюенсером Лизой Анохиной<br><span class="cap-serif">(TikTok: 40.5M, Inst: 4.5M подписчиков)</span></p>` },
    { title: { text: 'PROD &amp; STYLE' }, imgs: range('p13', 13), rows: [7, 6],
      capL: `<p class="cap">Продюсирование и стилизация серии съемок<br>для собственного печатного издания журнала "SHEER"</p>`,
      capR: `<p class="cap">Дизайн, верстка и написание текстов для<br>печатного издания журнала "SHEER"</p><p class="link">Ссылка на диджитал версию журнала</p>` },
    { title: { text: 'STYLE' }, imgs: range('p14', 8), rows: [6, 2],
      capL: `<p class="cap cap-serif">Стилизация творческой съемки и видео<br>клипа для  Angels project</p>`,
      capR: `<p class="cap">Ссылка на видео <span class="link">клип</span></p>` },
    { title: { text: 'STYLE' }, imgs: range('p15', 11), rows: [6, 5],
      capL: `<p class="cap">Стилизация музыкального клипа для "Ozerniki"</p><p class="cap">Стилизация второго музыкального клипа для<br>"Ozerniki" совместно <span class="cap-serif">Feduk</span></p>`,
      capR: `<p class="cap">Ссылка на клип <span class="link cap-serif">Parfumeur, the pak, Тейстлув - FIRST L</span></p><p class="cap">Ссылка на клип <span class="link cap-serif">Parfumeur, FEDUK, the pak, Тейстлув —<br>FIRST L (REMIX)</span></p>` },
  ].map(gallerySlide);
  G.forEach((s) => slides.push(s));

  /* ===== 16. PROD & STYLE — shows (per-row captions) ===== */
  slides.push(section(`
    <h2 class="sec-title t-xl" style="margin:0 0 14px;">PROD &amp; STYLE</h2>
    <div class="gallery">
      <div class="grow" style="--n:6">${range('p16', 6).map(f => `<img src="${P}${f}" alt="">`).join('')}</div>
      <p class="cap cap-serif" style="margin:10px 0 6px;font-size:24px;">Продюсирование показа HSE Fashion Design x Самокат</p>
      <div class="grow" style="--n:4">${range('p16', 4, 7).map(f => `<img src="${P}${f}" alt="">`).join('')}</div>
      <p class="cap cap-serif" style="margin:10px 0 0;font-size:24px;">Продюсирование показа Британской Высшей Школы Дизайна x <span style="font-style:italic;">Flowow</span></p>
    </div>
  `, 'slide layout-gallery'));

  /* ===== 17. PROFESSIONAL GOAL + contacts ===== */
  slides.push(section(`
    <div class="abs torn white" style="left:560px;top:90px;width:820px;padding:60px 80px 70px;">
      <span class="clip" style="left:180px;top:-46px;"><span class="arm l"></span><span class="arm r"></span><span class="body"></span></span>
      <div class="script" style="font-size:78px;text-align:center;">Professional goal :</div>
      <p class="serif" style="font-size:27px;line-height:1.55;text-align:center;margin:24px 0 0;">
        Развиваться как Editorial Stylist и Art Director, создавая визуальные концепции для
        глянцевых медиа, рекламных кампаний и fashion-брендов. Стремлюсь работать на стыке
        стилизации, креативного продюсирования и художественного руководства, формируя
        сильные визуальные истории и узнаваемую эстетику проектов.
      </p>
    </div>

    <div class="abs" style="left:700px;top:728px;width:540px;text-align:center;">
      <div class="contacts">
        <div class="h" style="font-size:32px;">Контакты:</div>
        <div>Телефон: +7 916 838-06-76</div>
        <div>Email: <u>BogomolovaAnna.sty@yandex.ru</u></div>
        <div>Instagram / Telegram : @anyabogg</div>
        <div>Город: Москва</div>
        <div>Дата рождения: 26.11.2004</div>
      </div>
    </div>
    <div class="abs" style="left:430px;top:760px;">${redScribble(150)}</div>
    <div class="abs" style="left:470px;top:840px;">${blackScribble(150)}</div>
    <div class="abs" style="right:330px;top:820px;">${blackScribble(150)}</div>
    <div class="abs" style="right:300px;top:900px;">${redScribble(120)}</div>
  `, 'slide'));

  // append all
  slides.forEach((s) => stage.appendChild(s));
})();
