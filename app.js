/**
 * ABYROY FILTER COMPANY — CLIENT WEB APPLICATION
 * City: Aktau, Mangystau Region, Kazakhstan
 * Features:
 * - Full Bilingual Support (Kazakh & Russian) with LocalStorage
 * - Interactive TDS Water Purity Simulator
 * - Interactive Cost Savings & Filter Quiz Calculator
 * - Catalog Filter Tabs & Detailed Product Modals
 * - Lead Capture Forms with instant WhatsApp Pre-composition
 * - Mobile Drawer & Sticky Navigation
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. BILINGUAL DICTIONARY (RUSSIAN & KAZAKH)
     ========================================================================== */
  const translations = {
    ru: {
      announcement: "Бесплатный выезд мастера и TDS-анализ воды в любой микрорайон Актау при заказе сегодня!",
      claimDiscount: "Записаться в WhatsApp",
      companyTagline: "Актау • Системы очистки воды",
      navAbout: "Технология",
      navCatalog: "Каталог",
      navTds: "Качество воды",
      navCalc: "Калькулятор",
      navService: "Сервис",
      navReviews: "Отзывы",
      navContacts: "Контакты",
      onlineNow: "Сейчас на связи",
      selectLanguage: "Выберите язык / Тілді таңдаңыз:",
      heroBadge: "Турецкие стандарты качества • Актау",
      heroTitle: "Кристально чистая вода в вашем кране <span class=\"text-gradient\">с гарантией 5 лет</span>",
      heroSubtitle: "Установка премиальных систем обратного осмоса с 6-ступенчатой очисткой и минерализацией в Актау. Забудьте о накипи в чайнике, тяжелых бутылях и неприятном привкусе.",
      kaspiZero: "Рассрочка 0-0-12",
      kaspiPerMonth: "Всего от 4 830 ₸ в месяц без переплат",
      btnCalculate: "Рассчитать стоимость",
      btnFreeTest: "Бесплатный TDS-тест",
      feat1: "Гарантия 5 лет",
      feat2: "Сервис до 15 лет",
      feat3: "Монтаж за 45 минут",
      feat4: "Бесплатная доставка по Актау",
      purityDegree: "Степень очистки",
      mineralEnriched: "С минерализатором",
      fastInstall: "Быстрый монтаж",
      statClients: "Довольных семей в Мангистау",
      statWarranty: "Официальной заводской гарантии",
      statService: "Бесперебойного сервисного цикла",
      statTest: "Замер качества воды и выезд мастера",
      tagWaterTest: "Анализ качества воды",
      titleTds: "Какую воду вы пьете в Актау на самом деле?",
      descTds: "Из-за специфики опреснения и износа трубопроводов вода в Мангистау содержит избыточные соли, хлор и ржавчину. Проверьте разницу с помощью интерактивного TDS-сравнения.",
      tapWaterTitle: "Водопроводная вода (из крана в Актау)",
      statusHighHardness: "Критическая жесткость и осадок",
      tap1: "Белый известковый налет на чайнике уже через 2 дня",
      tap2: "Хлорный привкус и технический запах из труб",
      tap3: "Нагрузка на почки, суставы и пищеварение всей семьи",
      tap4: "Вред для чувствительной кожи детей при умывании",
      filteredWaterTitle: "После фильтра ABYROY",
      statusPerfect: "Эталонная питьевая чистота",
      clean1: "Чайник и кофемашина всегда зеркально чистые",
      clean2: "Свежий родниковый вкус благодаря кокосовому углю",
      clean3: "Насыщение биодоступными ионами магния, кальция и калия",
      clean4: "Идеально для младенцев, готовки супов, чая и кофе",
      sliderLabel: "Проверьте уровень жесткости:",
      calloutTitle: "Хотите узнать точный TDS вашей домашней воды бесплатно?",
      calloutDesc: "Мастер приедет с профессиональным тестером в любой микрорайон Актау, сделает экспресс-анализ и ответит на любые вопросы.",
      btnBookTest: "Заказать бесплатный замер",
      tagCatalog: "Модельный ряд",
      titleCatalog: "Надежные фильтры с турецкими комплектующими",
      descCatalog: "Каждая система адаптирована под актаускую воду: усиленные колбы выдерживают перепады давления, а мембраны удаляют до 99.8% примесей.",
      tabAll: "Все модели",
      tabHome: "Для квартир",
      tabCottage: "Для коттеджей и домов",
      tabBusiness: "Для бизнеса и общепита",
      badgeReliable: "Надежный выбор",
      badgeHit: "ХИТ ПРОДАЖ №1 В АКТАУ",
      badgeSmart: "Smart Casing",
      badgeHighPower: "Высокая мощность",
      p1Desc: "Классическая 5-ступенчатая система обратного осмоса под мойку. Удаляет соли, хлор и ржавчину.",
      p2Desc: "Шестиступенчатая система с минерализатором и помпой для стабильного давления. Идеальный родниковый вкус.",
      p3Desc: "Закрытый дизайнерский корпус с LED дисплеем TDS-качества воды и автоматическим датчиком протечки.",
      p4Desc: "Высокопроизводительная система для больших частных домов, кафе, ресторанов и офисов от 400 до 800 л/сутки.",
      btnOrderNow: "Заказать с установкой",
      btnDetails: "Характеристики",
      btnGetConsult: "Получить расчет",
      giftNoteTitle: "В каждый комплект уже входит:",
      giftNoteDesc: "стильный хромированный кран, накопительный бак, комплект оригинальных турецких картриджей, фитинги John Guest и бесплатная установка мастером.",
      tagCalc: "Умный калькулятор",
      titleCalc: "Подберите идеальный фильтр и рассчитайте выгоду",
      descCalc: "Ответьте на 3 простых вопроса, чтобы узнать точную модель для вашего дома и сколько вы сэкономите на покупке бутилированной воды.",
      q1Title: "Где планируете установить фильтр?",
      q2Title: "Сколько человек будет пить воду?",
      q3Title: "Сколько 19-литровых бутылей воды вы заказываете в месяц?",
      bottlesPerMonth: "бутылей в месяц",
      resBadge: "Рекомендованная система:",
      yearlySavingsTitle: "Ваша экономия за 1 год:",
      savingsFormula: "Вы тратите на привозную воду около <span id=\"currentSpent\">144 000 ₸</span> в год. Фильтр окупается уже за <span id=\"paybackMonths\">6-7 месяцев</span>, а затем чистая вода обходится вам почти бесплатно!",
      perk1: "Больше не нужно поднимать тяжелые 19 кг бутыли",
      perk2: "Чистая питьевая вода без ограничений 24/7 прямо из крана",
      perk3: "Бесплатный выезд, доставка и монтаж в Актау",
      perk4: "Скидка 10% при заказе прямо сейчас",
      btnClaimDiscount: "Зафиксировать скидку и заказать",
      tagTech: "Технология водоочистки",
      titleTech: "6 ступеней абсолютной чистоты и пользы",
      descTech: "Система Abyroy задерживает даже мельчайшие молекулярные загрязнения, микробы и соли тяжелых металлов, обогащая воду полезными минералами.",
      st1Title: "Механический полипропилен (PP 5 мкм)",
      st1Desc: "Задерживает песок, ржавчину от старых труб Актау, окалину и крупные нерастворимые частицы.",
      st2Title: "Гранулированный уголь (GAC)",
      st2Desc: "Очищает от активного хлора, токсичных органических соединений и неприятного запаха.",
      st3Title: "Прессованный угольный блок (CTO)",
      st3Desc: "Тонкая фильтрация остаточных химических веществ, пестицидов и нефтепродуктов.",
      st4Title: "Мембрана обратного осмоса (0.0001 мкм)",
      st4Desc: "Главное сердце системы: пропускает только молекулы чистой H₂O. Задерживает 99.8% вирусов, бактерий и солей жесткости.",
      st5Title: "Кокосовый постфильтр",
      st5Desc: "Придает воде приятный мягкий родниковый вкус и кристальную прозрачность перед подачей в кран.",
      st6Title: "Био-минерализатор",
      st6Desc: "Насыщает воду ионами кальция, магния, натрия и калия, выравнивая оптимальный pH баланс (7.4–7.8).",
      safeMaterialsTitle: "Пищевые материалы высшего стандарта",
      safeMaterialsDesc: "Все колбы и фитинги Abyroy изготавливаются из первичного пищевого полипропилена без содержания бисфенола-А (BPA Free). Надежные соединения Quick-Fitting предотвращают протечки даже при гидроударах в водосети.",
      yearsServiceBadge: "лет сервисной поддержки клиентов",
      tagService: "Забота и сервис",
      titleService: "Мы помним о замене картриджей за вас",
      descService: "Вам не нужно следить за календарем. Сервисная служба Abyroy Company ведет личную карточку каждого клиента в Актау и заранее напоминает о плановой профилактике.",
      s1Title: "Автоматические напоминания",
      s1Desc: "Оператор звонит раз в 6 месяцев и предлагает удобное время для визита мастера.",
      s2Title: "Выездной мастер за 1 час",
      s2Desc: "Мастера работают по всем микрорайонам Актау: 1-35 мкр, Приморский, Акшукур, Баскудук.",
      s3Title: "Санитарная обработка колб",
      s3Desc: "При замене картриджей мастер бесплатно промывает и дезинфицирует внутренние колбы системы.",
      btnOrderService: "Вызвать мастера на сервис / замену картриджей",
      tagWhy: "Почему выбирают нас",
      titleWhy: "Преимущества работы с Abyroy Filter",
      why1Title: "5 лет официальной гарантии",
      why1Desc: "Выдаем гарантийный талон с печатью компании на корпус, помпу, кран и все рабочие узлы.",
      why2Title: "Бесплатная доставка и монтаж",
      why2Desc: "Привезем оборудование и аккуратно установим за 45 минут без грязи и пыли.",
      why3Title: "Kaspi Рассрочка 0-0-12",
      why3Desc: "Покупайте сегодня, оплачивайте равными частями до 12 месяцев без скрытых комиссий и процентов.",
      why4Title: "Турецкое качество",
      why4Desc: "Надежные пищевые пластмассы, мембраны премиум-класса и прочные двойные уплотнители.",
      why5Title: "TDS-тест до и после",
      why5Desc: "Мастер замеряет чистоту воды до установки и сразу после, чтобы вы своими глазами увидели результат.",
      why6Title: "Офис и склад в Актау",
      why6Desc: "Все картриджи, сменные мембраны и запчасти всегда в наличии в 15 микрорайоне.",
      tagReviews: "Отзывы клиентов",
      titleReviews: "Что говорят жители Актау о наших фильтрах",
      descReviews: "Более 4 800 семей уже наслаждаются чистой и полезной водой дома.",
      rev1: "«В Актау вода всегда была больной темой — накипь в чайнике образовывалась буквально за 3 дня. Установили Abyroy Premium 6 с минерализатором. Теперь чайник кристально чистый, а вода на вкус как родниковая. Спасибо мастеру за быстрый и чистый монтаж!»",
      rev2: "«Раньше муж постоянно таскал 19-литровые бутылки на 4 этаж. Решили взять через Kaspi рассрочку на 12 месяцев — платеж копеечный, а вода теперь всегда есть! Готовлю детям супы и каши только на ней. Очень довольны сервисом.»",
      rev3: "«Заказал smart-систему в закрытом корпусе. Выглядит стильно, на дисплее сразу показывает качество очистки. При установке мастер замерил водопроводную воду — было 470 ppm, а из фильтра стало 16 ppm! Разница колоссальная.»",
      igFollowTitle: "Следите за нами в Instagram:",
      tagFaq: "Вопросы и ответы",
      titleFaq: "Часто задаваемые вопросы",
      faq1Q: "Сколько времени занимает установка фильтра?",
      faq1A: "Установка занимает в среднем 40-50 минут. Мастер аккуратно врезается в водопровод, устанавливает кран для чистой воды на мойку и подключает накопительный бак. Никакого мусора и протечек.",
      faq2Q: "Как часто нужно менять картриджи?",
      faq2A: "Первые три картриджа предварительной очистки рекомендуется менять каждые 5-6 месяцев. Мембрана обратного осмоса и минерализатор служат от 1.5 до 2 лет. Наша служба сервиса сама напомнит вам о сроках замены!",
      faq3Q: "Что делать, если в доме слабое давление воды?",
      faq3A: "В наших системах предусмотрены комплектации со встроенной бесшумной помпой (насосом повышения давления). Она гарантирует стабильную фильтрацию даже на верхних этажах старых домов Актау.",
      faq4Q: "Как оформить рассрочку через Kaspi?",
      faq4A: "Очень просто: мастер после установки выставляет вам счет на оплату в мобильном приложении Kaspi (Kaspi QR или удаленно). Вы выбираете срок 3, 6 или 12 месяцев без первого взноса и переплат.",
      faq5Q: "Не вымывает ли обратный осмос все полезные минералы?",
      faq5A: "Мембрана действительно очищает воду до молекулярного уровня. Именно поэтому в системы Abyroy установлен шестой блок — минерализатор, который насыщает воду физиологически необходимыми ионами кальция, магния и калия.",
      tagContacts: "Контакты и адрес",
      titleContacts: "Приезжайте в наш магазин в Актау",
      descContacts: "Попробуйте очищенную воду на вкус, сравните системы лично и получите профессиональную консультацию инженера.",
      addrLabel: "Наш адрес:",
      addrVal: "г. Актау, 15-й микрорайон, здание 69 (ЖК «Оазис», 1 этаж)",
      phonesLabel: "Телефоны для заявок и консультаций:",
      workHoursLabel: "Режим работы:",
      workHoursVal: "Ежедневно с 09:00 до 20:00 (без выходных)",
      btnRoute: "Открыть в 2GIS",
      fastFormTitle: "Оставьте заявку онлайн",
      fastFormDesc: "Мастер свяжется с вами в течение 10 минут, ответит на все вопросы и забронирует за вами скидку.",
      labelName: "Ваше имя:",
      labelPhone: "Номер телефона / WhatsApp:",
      labelMicrodistrict: "Микрорайон или адрес в Актау:",
      btnSendInquiry: "Отправить заявку",
      privacyNotice: "🔒 Ваши данные защищены. Мы не рассылаем спам.",
      successTitle: "Заявка успешно отправлена!",
      successDesc: "Спасибо! Наш менеджер уже набирает ваш номер. Если вам удобнее, вы можете сразу написать нам в WhatsApp.",
      footerDesc: "Официальная дистрибуция, продажа и квалифицированное сервисное обслуживание бытовых и промышленных систем фильтрации воды в г. Актау и Мангистауской области.",
      fNavTitle: "Навигация",
      fModelsTitle: "Системы очистки",
      fContactsTitle: "Контакты в Актау",
      floatCall: "Звонок",
      mTestTitle: "Бесплатный TDS-анализ воды в Актау",
      mTestSub: "Мастер приедет с профессиональным тестером, замерит уровень солей и проконсультирует без каких-либо обязательств.",
      btnSubmitTest: "Записаться на бесплатный выезд",
      labelPayment: "Способ оплаты:",
      btnConfirmOrder: "Подтвердить заказ",
      mServiceTitle: "Вызов мастера на сервис и замену картриджей",
      mServiceSub: "Оригинальные картриджи в наличии для любых систем очистки воды в Актау.",
      labelServiceType: "Что необходимо сделать?",
      btnSendService: "Отправить заявку мастеру",
      writeWhatsApp: "Написать в WhatsApp",
      chatWhatsApp: "Чат в WhatsApp",
      openWhatsApp: "Открыть WhatsApp",
      ppmScale1: "0-50 ppm (Идеал RO)",
      ppmScale2: "100-200 ppm (Бутыли)",
      ppmScale3: "300-500+ ppm (Водопровод Актау)",
      p1Reviews: "(142 отзыва)",
      p1Spec1: "5 ступеней",
      p1Spec2: "Бак 8-12 л",
      p1Spec3: "Мембрана 75 GPD",
      p1Inst: "от 4 830 ₸/мес",
      p2Reviews: "(389 отзывов)",
      p2Spec1: "6 ступеней + Минерализатор",
      p2Spec2: "Помпа высокого давления",
      p2Spec3: "Мембрана 80 GPD",
      p2Inst: "от 6 500 ₸/мес",
      p3Reviews: "(94 отзыва)",
      p3Spec1: "7 ступеней + Биокерамика",
      p3Spec2: "LED дисплей TDS",
      p3Spec3: "Защита от протечек",
      p3Inst: "от 9 580 ₸/мес",
      p4Reviews: "(61 отзыв)",
      p4Spec1: "400-800 л/сутки",
      p4Spec2: "2-4 мембраны",
      p4Spec3: "Для бизнеса и коттеджей",
      p4Price: "от 165 000 ₸",
      p4Inst: "от 13 750 ₸/мес",
      step1Of3: "Шаг 1 из 3",
      step2Of3: "Шаг 2 из 3",
      step3Of3: "Шаг 3 из 3",
      q1Opt1Title: "Квартира в Актау",
      q1Opt1Sub: "Компактная установка под раковину",
      q1Opt2Title: "Частный дом / Коттедж",
      q1Opt2Sub: "Высокая потребность в воде",
      q1Opt3Title: "Офис / Кофейня",
      q1Opt3Sub: "Для сотрудников и клиентов",
      q2Opt1Title: "1-2 человека",
      q2Opt1Sub: "Базовый расход",
      q2Opt2Title: "3-4 человека",
      q2Opt2Sub: "Стандартная семья",
      q2Opt3Title: "5+ человек",
      q2Opt3Sub: "Большая семья или гости",
      tickMin: "2 шт (мин)",
      tickMid: "15 шт",
      tickMax: "30 шт (макс)",
      rev1Loc: "г. Актау, 14 мкр",
      rev1Tag: "Модель: Abyroy Premium Mineral 6",
      rev2Loc: "г. Актау, 27 мкр",
      rev2Tag: "Kaspi 0-0-12 • Abyroy Eco 5",
      rev3Loc: "ЖК Green Park",
      rev3Tag: "Модель: Abyroy Smart Digital 7",
      igFollowSub: "Видео установок, полезные советы по воде и отзывы наших клиентов:",
      chipMain: "Основной • WhatsApp",
      chipService: "Сервис / Склад",
      chipSales: "Отдел продаж",
      phName: "Например: Арман",
      phEnterName: "Введите имя",
      phAddress: "Например: 14 мкр, 23 дом",
      fModel5: "Сменные комплекты картриджей",
      footerAddr: "г. Актау, 15 мкр, здание 69 (ЖК «Оазис»)",
      footerHours: "Пн-Вс: 09:00 — 20:00 (без выходных)",
      footerCopy: "© 2026 Abyroy Filter Company (Абырой фильтр Актау). Барлық құқықтар қорғалған / Все права защищены.",
      footerCredit: "Адаптивный сайт для клиентов в Актау и Мангистау",
      optKaspiInst: "Kaspi Рассрочка 0-0-12 (без переплат)",
      optKaspiRed: "Kaspi Red (на 3 месяца)",
      optCashQr: "Kaspi QR / Оплата при получении",
      optSrv1: "Замена 3-х предфильтров (механика + 2 угля)",
      optSrv2: "Полная замена комплекта (все ступени + минерализатор)",
      optSrv3: "Диагностика системы / Устранить протечку или слабый напор",
      optSrv4: "Демонтаж и перенос фильтра на новую квартиру"
    },
    kz: {
      announcement: "Бүгін тапсырыс бергенде — Ақтау қаласының кез келген шағынауданына шебердің тегін келуі және TDS-тексеруі!",
      claimDiscount: "WhatsApp арқылы жазылу",
      companyTagline: "Ақтау • Су тазарту жүйелері",
      navAbout: "Технология",
      navCatalog: "Каталог",
      navTds: "Су сапасы",
      navCalc: "Есептегіш",
      navService: "Қызметтер",
      navReviews: "Пікірлер",
      navContacts: "Байланыс",
      onlineNow: "Қазір байланыста",
      selectLanguage: "Тілді таңдаңыз:",
      heroBadge: "Түркиялық сапа стандарттары • Ақтау",
      heroTitle: "Үйіңіздегі краннан мөлдір таза су <span class=\"text-gradient\">5 жыл кепілдікпен</span>",
      heroSubtitle: "Ақтау қаласында 6 сатылы минералдандырумен премиум кері осмос су сүзгілерін орнату. Шәйнектегі қақты, ауыр бөтелкелерді және жағымсыз дәмді ұмытыңыз.",
      kaspiZero: "Kaspi Бөліп төлеу 0-0-12",
      kaspiPerMonth: "Артық төлемсіз айына небәрі 4 830 ₸ бастап",
      btnCalculate: "Бағасын есептеу",
      btnFreeTest: "Тегін TDS-тексеру",
      feat1: "5 жыл кепілдік",
      feat2: "15 жылға дейін сервис",
      feat3: "45 минутта орнату",
      feat4: "Ақтау бойынша тегін жеткізу",
      purityDegree: "Тазарту деңгейі",
      mineralEnriched: "Минерализатормен",
      fastInstall: "Жылдам орнату",
      statClients: "Маңғыстаудағы риза отбасылар",
      statWarranty: "Ресми зауыттық кепілдік",
      statService: "Үздіксіз сервистік қызмет",
      statTest: "Су сапасын өлшеу және тегін келу",
      tagWaterTest: "Су сапасын сараптау",
      titleTds: "Ақтауда шын мәнінде қандай су ішіп жүрсіз?",
      descTds: "Тұщыту ерекшелігі мен құбырлардың тозуы салдарынан Маңғыстау суында тұздар, хлор және тот көп. Интерактивті TDS-салыстыру арқылы айырмашылықты көріңіз.",
      tapWaterTitle: "Құбыр суы (Ақтаудағы кран суы)",
      statusHighHardness: "Шектен тыс кермектік пен тұз",
      tap1: "2 күннен кейін шәйнекте пайда болатын қалың ақ қақ",
      tap2: "Хлор дәмі мен тот басқан құбырлардың жағымсыз иісі",
      tap3: "Бүкіл отбасының бүйрегі мен ас қорытуына ауыр салмақ",
      tap4: "Балалардың сезімтал терісіне кері әсері",
      filteredWaterTitle: "ABYROY сүзгісінен кейін",
      statusPerfect: "Мінсіз таза ауыз су",
      clean1: "Шәйнек пен кофеқайнатқыш әрдайым айнадай таза",
      clean2: "Кокос көмірінің арқасындағы табиғи бұлақ дәмі",
      clean3: "Магний, кальций және калий пайдалы иондарымен байытылған",
      clean4: "Нәрестелерге, тамақ пісіруге, шай мен кофеге өте қолайлы",
      sliderLabel: "Судың кермектік деңгейін тексеріңіз:",
      calloutTitle: "Үйіңіздегі судың нақты TDS көрсеткішін тегін білгіңіз келе ме?",
      calloutDesc: "Шебер кәсіби құралмен Ақтаудың кез келген ықшамауданына келіп, суды тексеріп, барлық сұрақтарыңызға жауап береді.",
      btnBookTest: "Тегін өлшеуге жазылу",
      tagCatalog: "Үлгілер қатары",
      titleCatalog: "Түркия бөлшектерімен жасалған сенімді сүзгілер",
      descCatalog: "Әрбір жүйе Ақтау суына арнайы бейімделген: нығайтылған сауыттар қысымға төзімді, ал мембраналар ластанудың 99.8%-ын жояды.",
      tabAll: "Барлық үлгілер",
      tabHome: "Пәтерлерге",
      tabCottage: "Коттедждер мен үйлерге",
      tabBusiness: "Бизнес пен мейрамханаларға",
      badgeReliable: "Сенімді таңдау",
      badgeHit: "АҚТАУДАҒЫ №1 ХИТ",
      badgeSmart: "Smart Корпус",
      badgeHighPower: "Жоғары қуат",
      p1Desc: "Раковина астына орнатылатын классикалық 5 сатылы кері осмос жүйесі. Тұз бен хлорды жояды.",
      p2Desc: "Минерализаторы және қысым күшейткіш сорғысы бар 6 сатылы жүйе. Табиғи бұлақ дәмі.",
      p3Desc: "LED экраны, TDS сапа көрсеткіші және су ағудан қорғаныс датчигі бар жабық стильді корпус.",
      p4Desc: "Үлкен жеке үйлерге, дәмханаларға және кеңселерге арналған тәулігіне 400-800 литрлік қуатты жүйе.",
      btnOrderNow: "Орнатумен тапсырыс беру",
      btnDetails: "Сипаттамасы",
      btnGetConsult: "Есептеуді алу",
      giftNoteTitle: "Әр жиынтыққа кіреді:",
      giftNoteDesc: "стильді хромдалған кран, су жинақтаушы бак, түпнұсқа сүзгі картридждері, John Guest фитингтері және шебердің тегін орнатуы.",
      tagCalc: "Ақылды калькулятор",
      titleCalc: "Өзіңізге сай сүзгіні таңдап, үнемдеуді есептеңіз",
      descCalc: "3 қарапайым сұраққа жауап беріп, отбасыңызға сай келетін үлгіні және қанша ақша үнемдейтініңізді біліңіз.",
      q1Title: "Сүзгіні қайда орнатқыңыз келеді?",
      q2Title: "Суды қанша адам ішеді?",
      q3Title: "Айына 19 литрлік қанша бөтелке су тапсырыс бересіз?",
      bottlesPerMonth: "бөтелке айына",
      resBadge: "Ұсынылатын жүйе:",
      yearlySavingsTitle: "1 жылдағы үнемдейтін қаражатыңыз:",
      savingsFormula: "Сіз тасымалды суға жылына шамамен <span id=\"currentSpent\">144 000 ₸</span> жұмсайсыз. Сүзгі құны <span id=\"paybackMonths\">6-7 айда</span> ақталады!",
      perk1: "Ауыр 19 кг бөтелкелерді көтерудің қажеті жоқ",
      perk2: "Үйде тәулік бойы 24/7 шектеусіз таза су",
      perk3: "Ақтау бойынша тегін жеткізу және шебердің орнатуы",
      perk4: "Дәл қазір тапсырыс берсеңіз 10% жеңілдік",
      btnClaimDiscount: "Жеңілдікті бекітіп, тапсырыс беру",
      tagTech: "Тазарту технологиясы",
      titleTech: "Абсолютті тазалық пен пайданың 6 сатысы",
      descTech: "Abyroy жүйесі ең ұсақ молекулалық ластануларды, бактерияларды ұстап қалып, суды пайдалы минералдармен байытады.",
      st1Title: "Механикалық полипропилен (PP 5 мкм)",
      st1Desc: "Құмды, Ақтаудың ескі құбырларындағы тотты және ірі бөлшектерді сүзеді.",
      st2Title: "Түйіршікті көмір (GAC)",
      st2Desc: "Белсенді хлордан, органикалық қосылыстардан және жағымсыз иістен тазартады.",
      st3Title: "Тығыздалған көмір блогы (CTO)",
      st3Desc: "Химиялық қалдықтарды, пестицидтерді және мұнай өнімдерін терең сүзу.",
      st4Title: "Кері осмос мембранасы (0.0001 мкм)",
      st4Desc: "Жүйенің негізгі жүрегі: тек таза H₂O молекулаларын өткізеді. Вирустар мен тұздардың 99.8%-ын ұстап қалады.",
      st5Title: "Кокос постсүзгісі",
      st5Desc: "Суға жұмсақ бұлақ дәмін және кристалдай мөлдірлікті береді.",
      st6Title: "Био-минерализатор",
      st6Desc: "Суды кальций, магний және калий иондарымен байытып, pH теңгерімін қалыпқа келтіреді.",
      safeMaterialsTitle: "Тағамдық жоғары стандартты материалдар",
      safeMaterialsDesc: "Барлық колбалар мен бөлшектер BPA Free бастапқы тағамдық пластиктен жасалады. Қысымға мықты John Guest қосылыстары су ағудың алдын алады.",
      yearsServiceBadge: "жыл клиенттерге сервистік қолдау",
      tagService: "Қамқорлық және сервис",
      titleService: "Картридж ауыстыруды біз қадағалаймыз",
      descService: "Күнтізбені бақылаудың қажеті жоқ. Сервистік қызметіміз әрбір клиенттің жеке картасын жүргізіп, мерзімі келгенде алдын ала ескертеді.",
      s1Title: "Автоматты еске салу",
      s1Desc: "Оператор әр 6 ай сайын хабарласып, шебердің келуіне ыңғайлы уақытты ұсынады.",
      s2Title: "Шебер 1 сағатта келеді",
      s2Desc: "Шеберлер Ақтаудың барлық ықшамаудандарына (1-35 мкр, Приморский, Ақшұқыр) қызмет көрсетеді.",
      s3Title: "Колбаларды санитарлық тазалау",
      s3Desc: "Картридждерді ауыстыру кезінде шебер жүйені тегін жуып, зарарсыздандырады.",
      btnOrderService: "Шеберді шақыру / Картридж ауыстыру",
      tagWhy: "Неге бізді таңдайды",
      titleWhy: "Abyroy Filter артықшылықтары",
      why1Title: "5 жыл ресми кепілдік",
      why1Desc: "Корпусқа, сорғыға және барлық түйіндерге мөрі бар ресми кепілдік талонын береміз.",
      why2Title: "Тегін жеткізу және орнату",
      why2Desc: "Құрылғыны үйіңізге жеткізіп, 45 минутта ұқыпты, шаң-тозаңсыз орнатамыз.",
      why3Title: "Kaspi 0-0-12 Бөліп төлеу",
      why3Desc: "Бүгін алып, 12 айға дейін тең бөліп, пайызсыз және артық төлемсіз төлеңіз.",
      why4Title: "Түркиялық жоғары сапа",
      why4Desc: "Төзімді тағамдық пластик, премиум мембраналар және қос тығыздағыш резеңкелер.",
      why5Title: "Орнатуға дейінгі және кейінгі TDS-тест",
      why5Desc: "Шебер суды орнатуға дейін және кейін өлшеп, нәтижені көз алдыңызда көрсетеді.",
      why6Title: "Ақтаудағы ресми кеңсе мен қойма",
      why6Desc: "Барлық картридждер мен қосалқы бөлшектер әрдайым 15-шағынаудандағы қоймамызда бар.",
      tagReviews: "Клиенттер пікірі",
      titleReviews: "Ақтау тұрғындары сүзгілеріміз жайлы не дейді",
      descReviews: "Маңғыстаудағы 4 800-ден астам отбасы таза судың рақатын көруде.",
      rev1: "«Ақтауда су сапасы үнемі қиын мәселе болатын — шәйнекте 3 күнде қалың қақ тұратын. Abyroy Premium 6 минерализаторы бар сүзгісін қойдық. Шәйнек айнадай, суы бұлақтай тәтті. Шеберге тез әрі таза орнатқаны үшін рақмет!»",
      rev2: "«Бұрын күйеуім 4-қабатқа 19 литрлік су тасып қиналатын. Kaspi-мен 12 айға бөліп төлеуге алдық, ай сайынғы төлемі аз ғана, есесіне су үнемі бар! Балаларға тамақты осы сумен пісіремін.»",
      rev3: "«Жабық корпустағы смарт сүзгіні алдым. Өте әдемі көрінеді, экранында судың тазалығын көрсетіп тұрады. Кранның суы 470 ppm болған, сүзгіден кейін 16 ppm болды! Сапасы керемет.»",
      igFollowTitle: "Біздің Instagram парақшамыз:",
      tagFaq: "Сұрақ-жауап",
      titleFaq: "Жиі қойылатын сұрақтар",
      faq1Q: "Сүзгіні орнату қанша уақытты алады?",
      faq1A: "Орнату орта есеппен 40-50 минут уақыт алады. Шебер ұқыпты түрде жалғап, арнайы шүмекті орнатып, бакты қосады. Ешқандай қоқыс пен су ағу болмайды.",
      faq2Q: "Картридждерді қанша уақытта ауыстыру қажет?",
      faq2A: "Алғашқы үш тазалау картриджі 5-6 ай сайын ауыстырылады. Негізгі мембрана мен минерализатор 1.5-2 жыл қызмет етеді. Біздің сервис өзі хабарласып ескертеді!",
      faq3Q: "Үйде судың қысымы төмен болса не істейміз?",
      faq3A: "Біздің сүзгілерде дыбыссыз арнайы қысым күшейткіш сорғы (помпа) бар үлгілер қарастырылған. Ол тіпті жоғарғы қабаттарда да суды жақсы тазартады.",
      faq4Q: "Kaspi арқылы бөліп төлеуді қалай рәсімдейді?",
      faq4A: "Өте оңай: шебер орнатып берген соң, Kaspi мобильді қосымшасы арқылы шот жібереді. 3, 6 немесе 12 ай мерзімге артық төлемсіз таңдай аласыз.",
      faq5Q: "Кері осмос судың барлық пайдалы тұздарын жойып жібермей ме?",
      faq5A: "Мембрана суды молекулалық деңгейге дейін тазартады. Сондықтан Abyroy жүйелеріне суды кальций, магний, калий элементтерімен қайта қанықтыратын минерализатор блогы орнатылған.",
      tagContacts: "Байланыс және мекенжай",
      titleContacts: "Ақтаудағы дүкенімізге келіңіз",
      descContacts: "Тазартылған судың дәмін көріп, жүйелерді салыстырып, инженердің кәсіби кеңесін алыңыз.",
      addrLabel: "Біздің мекенжай:",
      addrVal: "Ақтау қаласы, 15-шағынаудан, 69-ғимарат («Оазис» ТК, 1-қабат)",
      phonesLabel: "Тапсырыс пен кеңес алу телефондары:",
      workHoursLabel: "Жұмыс уақыты:",
      workHoursVal: "Күн сайын 09:00-ден 20:00-ге дейін (демалыссыз)",
      btnRoute: "2GIS-тен ашу",
      fastFormTitle: "Онлайн өтінім қалдырыңыз",
      fastFormDesc: "Шебер 10 минут ішінде хабарласып, сұрақтарыңызға жауап береді және жеңілдікті бекітеді.",
      labelName: "Атыңыз:",
      labelPhone: "Телефон нөмірі / WhatsApp:",
      labelMicrodistrict: "Ақтаудағы ықшамауданыңыз немесе мекенжайыңыз:",
      btnSendInquiry: "Өтінім жіберу",
      privacyNotice: "🔒 Сіздің мәліметтеріңіз қорғалған. Спам жібермейміз.",
      successTitle: "Өтінішіңіз сәтті қабылданды!",
      successDesc: "Рақмет! Біздің маман қазір нөміріңізге қоңырау шалады. Ыңғайлы болса, тікелей WhatsApp-қа жаза аласыз.",
      footerDesc: "Ақтау қаласы мен Маңғыстау облысында тұрмыстық және өндірістік су сүзгілерін ресми сату және білікті сервистік қызмет көрсету.",
      fNavTitle: "Бөлімдер",
      fModelsTitle: "Тазарту жүйелері",
      fContactsTitle: "Ақтаудағы байланыс",
      floatCall: "Қоңырау",
      mTestTitle: "Ақтауда суды тегін TDS-талдау",
      mTestSub: "Шебер кәсіби құрылғымен келіп, тұз деңгейін өлшейді және тегін кеңес береді.",
      btnSubmitTest: "Тегін келуге жазылу",
      labelPayment: "Төлем түрі:",
      btnConfirmOrder: "Тапсырысты растау",
      mServiceTitle: "Шеберді шақыру және картридж ауыстыру",
      mServiceSub: "Ақтауда кез келген су сүзгілеріне арналған түпнұсқа картридждер қолжетімді.",
      labelServiceType: "Қандай қызмет қажет?",
      btnSendService: "Шеберге өтінім жіберу",
      writeWhatsApp: "WhatsApp-қа жазу",
      chatWhatsApp: "WhatsApp чат",
      openWhatsApp: "WhatsApp-ты ашу",
      ppmScale1: "0-50 ppm (Мінсіз RO)",
      ppmScale2: "100-200 ppm (Бөтелке суы)",
      ppmScale3: "300-500+ ppm (Ақтау құбыр суы)",
      p1Reviews: "(142 пікір)",
      p1Spec1: "5 сатылы тазарту",
      p1Spec2: "Бак 8-12 л",
      p1Spec3: "Мембрана 75 GPD",
      p1Inst: "4 830 ₸/ай бастап",
      p2Reviews: "(389 пікір)",
      p2Spec1: "6 саты + Минерализатор",
      p2Spec2: "Қысым күшейткіш помпа",
      p2Spec3: "Мембрана 80 GPD",
      p2Inst: "6 500 ₸/ай бастап",
      p3Reviews: "(94 пікір)",
      p3Spec1: "7 саты + Биокерамика",
      p3Spec2: "LED экран TDS",
      p3Spec3: "Су ағудан қорғаныс",
      p3Inst: "9 580 ₸/ай бастап",
      p4Reviews: "(61 пікір)",
      p4Spec1: "400-800 л/тәулік",
      p4Spec2: "2-4 мембрана",
      p4Spec3: "Бизнес пен коттеджге",
      p4Price: "165 000 ₸ бастап",
      p4Inst: "13 750 ₸/ай бастап",
      step1Of3: "3-тен 1-қадам",
      step2Of3: "3-тен 2-қадам",
      step3Of3: "3-тен 3-қадам",
      q1Opt1Title: "Ақтаудағы пәтер",
      q1Opt1Sub: "Раковина астына ықшам орнату",
      q1Opt2Title: "Жеке үй / Коттедж",
      q1Opt2Sub: "Су тұтыну көлемі жоғары",
      q1Opt3Title: "Кеңсе / Дәмхана",
      q1Opt3Sub: "Қызметкерлер мен қонақтарға",
      q2Opt1Title: "1-2 адам",
      q2Opt1Sub: "Базалық шығын",
      q2Opt2Title: "3-4 адам",
      q2Opt2Sub: "Стандартты отбасы",
      q2Opt3Title: "5+ адам",
      q2Opt3Sub: "Үлкен отбасы немесе қонақтар",
      tickMin: "2 дана (мин)",
      tickMid: "15 дана",
      tickMax: "30 дана (макс)",
      rev1Loc: "Ақтау қ., 14 ш/а",
      rev1Tag: "Үлгі: Abyroy Premium Mineral 6",
      rev2Loc: "Ақтау қ., 27 ш/а",
      rev2Tag: "Kaspi 0-0-12 • Abyroy Eco 5",
      rev3Loc: "Green Park ТК",
      rev3Tag: "Үлгі: Abyroy Smart Digital 7",
      igFollowSub: "Орнату видеолары, пайдалы кеңестер және клиенттеріміздің пікірлері:",
      chipMain: "Негізгі • WhatsApp",
      chipService: "Сервис / Қойма",
      chipSales: "Сату бөлімі",
      phName: "Мысалы: Арман",
      phEnterName: "Атыңызды енгізіңіз",
      phAddress: "Мысалы: 14 ш/а, 23 үй",
      fModel5: "Ауыспалы картридж жиынтықтары",
      footerAddr: "Ақтау қ., 15 ш/а, 69 ғимарат («Оазис» ТК)",
      footerHours: "Дс-Жс: 09:00 — 20:00 (демалыссыз)",
      footerCopy: "© 2026 Abyroy Filter Company (Абырой фильтр Ақтау). Барлық құқықтар қорғалған.",
      footerCredit: "Ақтау және Маңғыстау тұрғындарына арналған ресми сайт",
      optKaspiInst: "Kaspi Бөліп төлеу 0-0-12 (артық төлемсіз)",
      optKaspiRed: "Kaspi Red (3 айға)",
      optCashQr: "Kaspi QR / Алған кезде төлеу",
      optSrv1: "3 алдын ала сүзгіні ауыстыру (механика + 2 көмір)",
      optSrv2: "Толық жиынтықты ауыстыру (барлық сатылар + минерализатор)",
      optSrv3: "Жүйені диагностикалау / Су ағуды немесе әлсіз қысымды жөндеу",
      optSrv4: "Сүзгіні шешіп, жаңа пәтерге көшіріп орнату"
    }
  };

  let currentLang = localStorage.getItem('abyroy_lang') || 'ru';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('abyroy_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update buttons state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    if (typeof updateTdsSliderText === 'function') {
      updateTdsSliderText(document.getElementById('ppmRange')?.value || 350);
    }
    if (typeof recalcQuiz === 'function') {
      recalcQuiz();
    }
  }

  // Language buttons event
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.getAttribute('data-lang');
      if (selected) applyLanguage(selected);
    });
  });


  /* ==========================================================================
     2. STICKY HEADER, SCROLLSPY & SCROLL TO TOP
     ========================================================================== */
  const header = document.getElementById('header');
  const btnScrollTop = document.getElementById('btnScrollTop');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const trackedSections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      btnScrollTop?.classList.add('visible');
    } else {
      btnScrollTop?.classList.remove('visible');
    }

    // Active section ScrollSpy
    let currentSectionId = '';
    const offset = scrollY + 180;
    for (const sec of trackedSections) {
      if (sec.offsetTop <= offset) {
        currentSectionId = '#' + sec.id;
      }
    }
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });

  btnScrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ==========================================================================
     3. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  function toggleMobileMenu() {
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuBtn?.classList.remove('open');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      mobileDrawer?.classList.add('open');
      mobileDrawer?.setAttribute('aria-hidden', 'false');
      mobileMenuBtn?.classList.add('open');
      mobileMenuBtn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer?.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });


  /* ==========================================================================
     4. INTERACTIVE TDS WATER QUALITY SLIDER
     ========================================================================== */
  function updateTdsSliderText(val) {
    const sliderOutputText = document.getElementById('sliderOutputText');
    if (!sliderOutputText) return;
    const num = parseInt(val, 10);

    if (currentLang === 'kz') {
      if (num <= 50) {
        sliderOutputText.textContent = `${num} ppm — Мінсіз таза су (ABYROY кері осмосы)`;
        sliderOutputText.style.background = '#dcfce7';
        sliderOutputText.style.color = '#15803d';
      } else if (num <= 150) {
        sliderOutputText.textContent = `${num} ppm — Тазартылған бөтелкедегі су`;
        sliderOutputText.style.background = '#e0f2fe';
        sliderOutputText.style.color = '#0369a1';
      } else if (num <= 300) {
        sliderOutputText.textContent = `${num} ppm — Орташа кермек су (қақ жинала бастайды)`;
        sliderOutputText.style.background = '#fef3c7';
        sliderOutputText.style.color = '#b45309';
      } else if (num <= 450) {
        sliderOutputText.textContent = `${num} ppm — Ақтау құбыр суы (жоғары тұздылық, қақ, хлор)`;
        sliderOutputText.style.background = '#fee2e2';
        sliderOutputText.style.color = '#b91c1c';
      } else {
        sliderOutputText.textContent = `${num} ppm — Қауіпті кермектік (бүйрекке және құрылғыларға зиян)`;
        sliderOutputText.style.background = '#fecdd3';
        sliderOutputText.style.color = '#9f1239';
      }
    } else {
      if (num <= 50) {
        sliderOutputText.textContent = `${num} ppm — Эталонная чистота (Обратный осмос ABYROY)`;
        sliderOutputText.style.background = '#dcfce7';
        sliderOutputText.style.color = '#15803d';
      } else if (num <= 150) {
        sliderOutputText.textContent = `${num} ppm — Бутилированная покупная вода`;
        sliderOutputText.style.background = '#e0f2fe';
        sliderOutputText.style.color = '#0369a1';
      } else if (num <= 300) {
        sliderOutputText.textContent = `${num} ppm — Умеренная жесткость (появление накипи)`;
        sliderOutputText.style.background = '#fef3c7';
        sliderOutputText.style.color = '#b45309';
      } else if (num <= 450) {
        sliderOutputText.textContent = `${num} ppm — Водопровод г. Актау (высокая минерализация, накипь)`;
        sliderOutputText.style.background = '#fee2e2';
        sliderOutputText.style.color = '#b91c1c';
      } else {
        sliderOutputText.textContent = `${num} ppm — Критическая жесткость (опасность для почек и чайников)`;
        sliderOutputText.style.background = '#fecdd3';
        sliderOutputText.style.color = '#9f1239';
      }
    }
  }

  const ppmRange = document.getElementById('ppmRange');
  ppmRange?.addEventListener('input', (e) => {
    updateTdsSliderText(e.target.value);
  });


  /* ==========================================================================
     5. INTERACTIVE QUIZ & COST SAVINGS CALCULATOR
     ========================================================================== */
  function recalcQuiz() {
    const bottlesRange = document.getElementById('bottlesRange');
    const bottlesVal = document.getElementById('bottlesVal');
    const recommendedModel = document.getElementById('recommendedModel');
    const savingsAmount = document.getElementById('savingsAmount');
    const currentSpent = document.getElementById('currentSpent');
    const paybackMonths = document.getElementById('paybackMonths');

    const place = document.querySelector('input[name="place"]:checked')?.value || 'apartment';
    const family = document.querySelector('input[name="family"]:checked')?.value || 'medium';
    const bottles = parseInt(bottlesRange?.value || '8', 10);

    if (bottlesVal) bottlesVal.textContent = bottles;

    // Recommendation logic
    let modelName = 'Abyroy Premium Mineral 6';
    let filterPrice = 78000;

    if (place === 'cottage' || place === 'office') {
      modelName = 'Abyroy Cottage & Commercial RO';
      filterPrice = 165000;
    } else if (family === 'small') {
      modelName = 'Abyroy Classic Eco 5';
      filterPrice = 58000;
    } else if (family === 'large') {
      modelName = 'Abyroy Smart Digital 7 Box';
      filterPrice = 115000;
    } else {
      modelName = 'Abyroy Premium Mineral 6';
      filterPrice = 78000;
    }

    if (recommendedModel) recommendedModel.textContent = modelName;

    // Financial calculations: Average 19L bottle in Aktau costs ~1,500 KZT
    const bottleCost = 1500;
    const monthlySpend = bottles * bottleCost;
    const yearlySpend = monthlySpend * 12;
    // Yearly filter service cartridge cost is approx 22,000 KZT
    const yearlyServiceCost = 22000;
    const netSavings = Math.max(0, yearlySpend - yearlyServiceCost);

    const payback = Math.max(2, Math.round((filterPrice / Math.max(monthlySpend, 1)) * 10) / 10);

    if (savingsAmount) {
      savingsAmount.textContent = netSavings.toLocaleString('ru-RU') + ' ₸';
    }
    if (currentSpent) {
      currentSpent.textContent = yearlySpend.toLocaleString('ru-RU') + ' ₸';
    }
    if (paybackMonths) {
      paybackMonths.textContent = currentLang === 'kz' ? `${payback} айда` : `${payback} мес.`;
    }
  }

  document.querySelectorAll('input[name="place"], input[name="family"]').forEach(input => {
    input.addEventListener('change', recalcQuiz);
  });

  bottlesRange?.addEventListener('input', recalcQuiz);
  recalcQuiz();

  // "Claim Discount" button from quiz
  document.getElementById('btnClaimResult')?.addEventListener('click', () => {
    const model = document.getElementById('recommendedModel')?.textContent || 'Abyroy Premium Mineral 6';
    openOrderModal(model, currentLang === 'kz' ? '10% жеңілдікпен' : 'со скидкой 10%');
  });


  /* ==========================================================================
     6. PRODUCT CATALOG TABS & FILTERING
     ========================================================================== */
  const tabBtns = document.querySelectorAll('.catalog-tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     7. PRODUCT DETAILS MODAL (SPECIFICATIONS — BILINGUAL)
     ========================================================================== */
  const productDetailsData = {
    prod1: {
      name: "Abyroy Classic Eco 5",
      price: "58 000 ₸",
      specs: [
        "Ступеней очистки: 5 (PP 5 мкм, GAC, CTO, RO мембрана 75 GPD, угольный постфильтр)",
        "Производительность: до 190 литров в сутки (8 л/час)",
        "Объем накопительного бака: 8–10 литров (чистая вода всегда под рукой)",
        "Материал корпуса: пищевой первичный полипропилен без BPA",
        "Кран в комплекте: дизайнерский хромированный гусак на мойку",
        "Гарантия: 5 лет на корпус и соединения John Guest",
        "Срок службы мембраны: 18-24 месяца"
      ],
      specsKz: [
        "Тазарту сатысы: 5 (PP 5 мкм, GAC, CTO, 75 GPD RO мембранасы, көмір постсүзгісі)",
        "Өнімділігі: тәулігіне 190 литрге дейін (8 л/сағ)",
        "Жинақтаушы бак көлемі: 8–10 литр (таза су әрдайым дайын)",
        "Корпус материалы: BPA қоспасыз бастапқы тағамдық полипропилен",
        "Жиынтықтағы шүмек: раковинаға арналған хромдалған дизайнерлік кран",
        "Кепілдік: корпус пен John Guest фитингтеріне 5 жыл",
        "Мембрананың қызмет ету мерзімі: 18-24 ай"
      ]
    },
    prod2: {
      name: "Abyroy Premium Mineral 6",
      price: "78 000 ₸",
      specs: [
        "Ступеней очистки: 6 (PP 5 мкм, GAC, CTO, RO 80 GPD, постфильтр, Mineralizer)",
        "Обогащение минералами: биодоступные ионы Ca²⁺, Mg²⁺, K⁺, нормализация pH 7.5",
        "Встроенная помпа: повышает напор и стабильно работает даже на верхних этажах Актау",
        "Производительность: до 280 литров в сутки",
        "Объем бака: 12 литров из пищевой эмалированной стали",
        "Гарантия: 5 лет полной гарантии + до 15 лет сервисного сопровождения",
        "В комплекте: стильный кран с двумя ручками (чистая вода / минерализованная вода)"
      ],
      specsKz: [
        "Тазарту сатысы: 6 (PP 5 мкм, GAC, CTO, RO 80 GPD, постсүзгі, Минерализатор)",
        "Минералдармен байыту: Ca²⁺, Mg²⁺, K⁺ иондары, pH 7.5 теңгерімі",
        "Кіріктірілген помпа: су қысымын көтеріп, Ақтаудың жоғарғы қабаттарында да тұрақты жұмыс істейді",
        "Өнімділігі: тәулігіне 280 литрге дейін",
        "Бак көлемі: 12 литр (тағамдық эмальданған болат)",
        "Кепілдік: 5 жыл толық кепілдік + 15 жылға дейін сервистік қолдау",
        "Жиынтықта: екі тұтқалы стильді кран (таза су / минералды су)"
      ]
    },
    prod3: {
      name: "Abyroy Smart Digital 7 Box",
      price: "115 000 ₸",
      specs: [
        "Ступеней очистки: 7 (включая биокерамический структуризатор и минерализатор)",
        "Интеллектуальный LED экран: онлайн мониторинг TDS чистоты воды и ресурса каждого картриджа",
        "AquaStop сенсор: система автоматической мгновенной защиты от протечек",
        "Корпус: премиальный закрытый бокс с защитой от пыли и ультрафиолета",
        "Производительность: до 300 литров в сутки с мембраной Vontron/Filmtec",
        "Гарантия: 5 лет расширенной гарантии",
        "Идеально подходит для современных кухонь с раковинами из искусственного камня"
      ],
      specsKz: [
        "Тазарту сатысы: 7 (биокерамикалық құрылымдағыш пен минерализаторды қоса)",
        "Ақылды LED экран: судың TDS тазалығын және картридж ресурсын онлайн бақылау",
        "AquaStop сенсоры: су ағудан автоматты лезде қорғау жүйесі",
        "Корпус: шаңнан қорғалған премиум жабық дизайнерлік бокс",
        "Өнімділігі: Vontron/Filmtec мембранасымен тәулігіне 300 литрге дейін",
        "Кепілдік: 5 жыл кеңейтілген кепілдік",
        "Заманауи асүйлерге өте үйлесімді"
      ]
    },
    prod4: {
      name: "Abyroy Cottage & Commercial High Output",
      price: "от 165 000 ₸",
      priceKz: "165 000 ₸ бастап",
      specs: [
        "Назначение: для больших частных домов, ресторанов, кофеен и офисных центров Актау",
        "Производительность: от 400 до 800+ литров очищенной воды в сутки",
        "Мембранный блок: 2–4 параллельные высоконапорные мембраны 100 GPD",
        "Промышленная помпа с датчиком сухого хода и защитой от перегрева",
        "Увеличенные колбы стандарта Big Blue 10 / 20 для высокого расхода",
        "Специальная защита от накипи в бойлерах, ледогенераторах и рожковых кофемашинах",
        "Индивидуальный проект и подбор под конкретный анализ воды"
      ],
      specsKz: [
        "Мақсаты: үлкен жеке үйлерге, мейрамханаларға, кофеханаларға және кеңселерге арналған",
        "Өнімділігі: тәулігіне 400-ден 800+ литрге дейін тазартылған су",
        "Мембраналық блок: 2–4 параллельді жоғары қысымды 100 GPD мембранасы",
        "Құрғақ жүріс датчигі мен қызып кетуден қорғанысы бар өнеркәсіптік сорғы",
        "Жоғары шығынға арналған Big Blue 10 / 20 стандартты үлкейтілген колбалар",
        "Кофемашиналарды, мұз генераторларын және бойлерлерді қақтан арнайы қорғау",
        "Су талдауына сәйкес жеке жобалау және таңдау"
      ]
    }
  };

  const detailsModal = document.getElementById('detailsModal');
  const detailsModalContent = document.getElementById('detailsModalContent');

  /* ==========================================================================
     8. MODAL WINDOWS CONTROLLER & EVENT DELEGATION
     ========================================================================== */
  function openModalById(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }

  // Open order modal helper
  window.openOrderModal = function(productName, price) {
    closeAllModals();
    const orderModal = document.getElementById('orderModal');
    const orderModalTitle = document.getElementById('orderModalTitle');
    const orderModalPrice = document.getElementById('orderModalPrice');
    const hiddenProductName = document.getElementById('hiddenProductName');

    if (orderModalTitle) {
      orderModalTitle.textContent = currentLang === 'kz' ? `Тапсырыс: ${productName}` : `Заказ: ${productName}`;
    }
    if (orderModalPrice) {
      orderModalPrice.textContent = currentLang === 'kz'
        ? `Бағасы: ${price} (Ақтау бойынша тегін жеткізу және орнату)`
        : `Стоимость: ${price} (Бесплатная доставка и монтаж в Актау)`;
    }
    if (hiddenProductName) hiddenProductName.value = productName;

    orderModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // Robust document-level event delegation for all modals and buttons
  document.addEventListener('click', (e) => {
    // Details button
    const detailsBtn = e.target.closest('.details-btn');
    if (detailsBtn) {
      const prodId = detailsBtn.getAttribute('data-product-id');
      const data = productDetailsData[prodId];
      if (data && detailsModalContent) {
        const isKz = currentLang === 'kz';
        const specsList = (isKz && data.specsKz) ? data.specsKz : data.specs;
        const displayPrice = (isKz && data.priceKz) ? data.priceKz : data.price;
        const installNote = isKz ? '(Ақтауда тегін орнатумен)' : '(с бесплатной установкой в Актау)';
        const specsHeading = isKz ? 'Техникалық сипаттамалары мен жиынтығы:' : 'Технические характеристики и комплектация:';
        const orderBtnText = isKz ? 'Тегін орнатумен тапсырыс беру' : 'Заказать с бесплатной установкой';

        detailsModalContent.innerHTML = `
          <div class="modal-header">
            <div class="modal-icon-badge">📋</div>
            <h3 class="modal-title">${data.name}</h3>
            <p class="modal-subtitle" style="color: #0284c7; font-weight: 700; font-size: 1.1rem;">${displayPrice} ${installNote}</p>
          </div>
          <div style="margin: 20px 0;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 12px;">${specsHeading}</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; color: #334155;">
              ${specsList.map(s => `<li style="display:flex; align-items:flex-start; gap:8px;"><span style="color:#0284c7; font-weight:800;">✓</span> <span>${s}</span></li>`).join('')}
            </ul>
          </div>
          <div style="display: flex; gap: 12px; margin-top: 24px;">
            <button class="btn btn-primary btn-block btn-lg" type="button" onclick="openOrderModal('${data.name}', '${displayPrice}')">
              ${orderBtnText}
            </button>
          </div>
        `;

        detailsModal?.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    // Open modal buttons (e.g. data-modal="tdsModal")
    const openBtn = e.target.closest('.open-modal-btn');
    if (openBtn) {
      const target = openBtn.getAttribute('data-modal');
      if (target) openModalById(target);
      return;
    }

    // Direct product order buttons
    const orderBtn = e.target.closest('.open-order-btn');
    if (orderBtn) {
      const prod = orderBtn.getAttribute('data-product') || 'Система фильтрации';
      const price = orderBtn.getAttribute('data-price') || '';
      openOrderModal(prod, price);
      return;
    }

    // Close on overlay or close button
    if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
      closeAllModals();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      if (mobileDrawer?.classList.contains('open')) {
        toggleMobileMenu();
      }
    }
  });


  /* ==========================================================================
     9. FAQ ACCORDION INTERACTION
     ========================================================================== */
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const headerBtn = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    headerBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close others
      accordionItems.forEach(i => {
        i.classList.remove('active');
        const h = i.querySelector('.accordion-header');
        const b = i.querySelector('.accordion-body');
        if (h) h.setAttribute('aria-expanded', 'false');
        if (b) b.style.maxHeight = null;
      });

      if (!isActive && body) {
        item.classList.add('active');
        headerBtn.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });


  /* ==========================================================================
     10. FORM SUBMISSION, PHONE MASK & WHATSAPP REDIRECTION
     ========================================================================== */
  let toastTimeout = null;
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastText');
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // Gentle KZ phone number formatter (+7 (7XX) XXX-XX-XX)
  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', (e) => {
      let digits = e.target.value.replace(/\D/g, '');
      if (!digits) {
        e.target.value = '';
        return;
      }
      if (digits[0] === '8' || digits[0] === '7') {
        digits = '7' + digits.slice(1);
      } else {
        digits = '7' + digits;
      }
      digits = digits.slice(0, 11);
      let formatted = '+7';
      if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
      if (digits.length >= 5) formatted += ') ' + digits.slice(4, 7);
      if (digits.length >= 8) formatted += '-' + digits.slice(7, 9);
      if (digits.length >= 10) formatted += '-' + digits.slice(9, 11);
      e.target.value = formatted;
    });
  });

  function sendToWhatsApp(message) {
    const phone = '77029797232';
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Contact section form
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName')?.value || '';
    const phone = document.getElementById('userPhone')?.value || '';
    const address = document.getElementById('userAddress')?.value || '';

    const msg = `Здравствуйте! Меня зовут ${name}. Хочу получить консультацию по фильтрам для воды в Актау.\nТелефон: ${phone}\nАдрес/Микрорайон: ${address}`;

    if (contactForm) contactForm.style.display = 'none';
    if (formSuccessAlert) formSuccessAlert.style.display = 'flex';

    showToast(currentLang === 'kz' ? 'Өтінішіңіз қабылданды! WhatsApp ашылуда...' : 'Заявка отправлена! Открываем WhatsApp...');
    sendToWhatsApp(msg);
  });

  // Modal: TDS Test Form
  const tdsModalForm = document.getElementById('tdsModalForm');
  tdsModalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(tdsModalForm);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const address = formData.get('address') || '';

    const msg = `Здравствуйте! Заявка на БЕСПЛАТНЫЙ TDS-анализ воды в Актау.\nИмя: ${name}\nТелефон: ${phone}\nМикрорайон/Адрес: ${address}`;

    closeAllModals();
    tdsModalForm.reset();
    showToast(currentLang === 'kz' ? 'Өтінішіңіз қабылданды! WhatsApp ашылуда...' : 'Заявка принята! Открываем WhatsApp для подтверждения...');
    sendToWhatsApp(msg);
  });

  // Modal: Order Product Form
  const orderModalForm = document.getElementById('orderModalForm');
  orderModalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(orderModalForm);
    const product = formData.get('product') || '';
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const payment = formData.get('payment_type') || '';
    const address = formData.get('address') || '';

    const msg = `Здравствуйте! Хочу заказать фильтр: ${product}.\nИмя: ${name}\nТелефон: ${phone}\nОплата: ${payment}\nАдрес в Актау: ${address}`;

    closeAllModals();
    orderModalForm.reset();
    showToast(currentLang === 'kz' ? 'Тапсырыс қабылданды! WhatsApp ашылуда...' : 'Заказ принят! Открываем WhatsApp...');
    sendToWhatsApp(msg);
  });

  // Modal: Service Form
  const serviceModalForm = document.getElementById('serviceModalForm');
  serviceModalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(serviceModalForm);
    const task = formData.get('service_task') || '';
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const address = formData.get('address') || '';

    const msg = `Здравствуйте! Заявка на сервис/замену картриджей в Актау.\nЗадача: ${task}\nИмя: ${name}\nТелефон: ${phone}\nАдрес: ${address}`;

    closeAllModals();
    serviceModalForm.reset();
    showToast(currentLang === 'kz' ? 'Сервис өтініші қабылданды! WhatsApp ашылуда...' : 'Заявка на сервис принята! Открываем WhatsApp...');
    sendToWhatsApp(msg);
  });

  // Initialize initial language and state after everything is set up
  applyLanguage(currentLang);

});
