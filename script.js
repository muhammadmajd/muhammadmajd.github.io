document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const translations = {
  en: {
    'meta.title': 'Muhammad Aliah | Software Developer & Educator',
    'meta.description': 'Portfolio website for Muhammad Aliah, Software Developer & Educator.',
    'langSwitch.aria': 'Language',
    'nav.about': 'About',
    'nav.publications': 'Publications',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'brand.role': 'Software Developer & Educator',
    'hero.title': '11+ years building production software — and teaching others to build it.',
    'hero.text':
      "I'm a software developer and educator with over 11 years of experience in IT. I build production mobile and backend systems — 5+ years with Flutter — and spend part of my time teaching web development and databases. I'm currently researching AI and Machine Learning as part of my PhD studies.",
    'hero.cta.featured': 'Featured Work',
    'hero.platformsAria': 'Platforms',
    'hero.panel.summaryLabel': 'Professional summary',
    'hero.panel.summaryText':
      "I've shipped production apps across e-commerce, VPN infrastructure, and school management — plus two years teaching web development and databases to students.",
    'hero.panel.years': 'Years in IT',
    'hero.panel.flutterYears': 'Years with Flutter',
    'hero.panel.teaching': 'Teaching',
    'hero.panel.teachingSub': 'Web dev & databases',
    'hero.panel.research': 'Research',
    'hero.panel.researchSub': 'PhD in AI & ML',
    'about.eyebrow': 'About Me',
    'about.title': 'Development, teaching, and applied AI research.',
    'about.p1':
      'My technical background covers Python, C++, JavaScript, Dart, Java, backend development, and databases — with over 5 years building production mobile apps in Flutter, alongside Laravel, Linux server administration, and cloud infrastructure. I also use Java for native Android modules, such as the VPN tunnel service in Sham VPN, and for teaching.',
    'about.p2':
      "I hold a Master's degree from Bauman Moscow State Technical University (BMSTU) and am currently pursuing a PhD there, researching Artificial Intelligence and Machine Learning. I've also spent two years teaching web development, Java, and databases — I enjoy explaining complex topics simply and helping students build practical, independent problem-solving skills.",
    'pub.eyebrow': 'Publications',
    'pub.title': 'Applied AI & NLP research.',
    'pub.kicker': 'REEPE 2025 · April 2025',
    'pub.link': 'View on IEEE Xplore',
    'projects.eyebrow': 'Featured Projects',
    'projects.title': 'Selected product work.',
    'common.badgeActive': 'Active',
    'common.badgeLive': 'Live',
    'common.badgeResearch': 'Research',
    'common.website': 'Website',
    'common.screenshots': 'Screenshots',
    'common.viewCode': 'View Code',
    'common.openInColab': 'Open in Colab',
    'proj.shamvpn.title': 'Cross-platform VPN solution',
    'proj.shamvpn.desc':
      "A multi-platform VPN stack built with Flutter, Laravel, Linux services, and Xray for production use across mobile and desktop clients, with a focus on resilient connectivity in restrictive network environments. The native Android tunnel module is built in Java on top of Android's VpnService API.",
    'proj.bert.title': 'Dictionary-Augmented Medical Text Classifier',
    'proj.bert.desc':
      'A BERT-family text classification pipeline for medical transcription abstracts. Domain terms from a medical dictionary are tagged with special tokens before fine-tuning, and this augmentation lifts accuracy for BERT, BioBERT, ClinicalBERT, BlueBERT, and SciBERT alike.',
    'proj.hudhud.title': 'Local marketplace app',
    'proj.hudhud.desc':
      'An app for displaying and purchasing local products, with direct communication between sellers and buyers across the Gulf countries and Jordan.',
    'proj.hudhud.feature1': 'Direct seller-buyer messaging',
    'proj.hudhud.feature2': 'Local product listings',
    'proj.hudhud.feature3': 'Gulf countries & Jordan coverage',
    'proj.paloma.title': 'MENA marketplace app',
    'proj.paloma.desc': 'The best place to buy and sell things across the MENA region.',
    'proj.elan.title': 'Advertising & news platform',
    'proj.elan.desc':
      'Lets advertisers publish ads directly, aggregates news from multiple sources by category, and includes an official bulletin section covering all advertisements.',
    'proj.schooms.title': 'School management platform',
    'proj.schooms.desc':
      'A web-based platform that centralizes school admissions, news, events, and career management — families apply online while staff review and process intake from one place.',
    'proj.hrs.title': 'HR management system',
    'proj.hrs.desc':
      'A web-based Human Resources management system for handling employees, attendance, salaries, and core HR operations from a single platform.',
    'proj.supplity.title': 'B2B tech & IT hardware marketplace',
    'proj.supplity.desc':
      'A B2B e-commerce platform for enterprise IT hardware and data center solutions, serving businesses across Dubai, Qatar, and Saudi Arabia with wholesale purchasing, quote requests, and vendor-backed technology services.',
    'proj.p4m.title': 'E-commerce & network marketing platform',
    'proj.p4m.desc':
      'A multi-language e-commerce and network marketing platform with distributor accounts, a structured reward program, and training modules alongside a standard retail storefront.',
    'proj.mshop.title': 'Flutter e-commerce app',
    'proj.mshop.desc': 'A Flutter project that lets clients buy products online.',
    'proj.rickmorty.title': 'GraphQL-powered character browser',
    'proj.rickmorty.desc':
      'A Flutter app for browsing Rick and Morty characters via GraphQL, using GetX for state management and routing, Hive for offline caching, and search, favorites, and sorting.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Available for product work, mobile systems, and infrastructure.',
    'contact.email': 'Email',
    'footer.built': 'Built for GitHub Pages',
  },
  ar: {
    'meta.title': 'Muhammad Aliah | مطوّر برمجيات ومُدرّس',
    'meta.description': 'الموقع الشخصي لـ Muhammad Aliah، مطوّر برمجيات ومُدرّس.',
    'langSwitch.aria': 'اللغة',
    'nav.about': 'نبذة عني',
    'nav.publications': 'المنشورات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'brand.role': 'مطوّر برمجيات ومُدرّس',
    'hero.title': 'أكثر من 11 عامًا في بناء برمجيات إنتاجية — وتعليم الآخرين كيفية بنائها.',
    'hero.text':
      'أنا مطوّر برمجيات ومُدرّس ولديّ أكثر من 11 عامًا من الخبرة في مجال تقنية المعلومات. أبني أنظمة إنتاجية للموبايل والخلفية البرمجية (Backend) — بخبرة تتجاوز 5 سنوات في Flutter — وأخصص جزءًا من وقتي لتدريس تطوير الويب وقواعد البيانات. أعمل حاليًا على بحث في الذكاء الاصطناعي وتعلّم الآلة ضمن دراستي للدكتوراه.',
    'hero.cta.featured': 'أبرز الأعمال',
    'hero.platformsAria': 'المنصات',
    'hero.panel.summaryLabel': 'نبذة مهنية',
    'hero.panel.summaryText':
      'أطلقتُ تطبيقات إنتاجية في مجالات التجارة الإلكترونية، والبنية التحتية لشبكات VPN، وإدارة المدارس — إضافة إلى عامين في تدريس تطوير الويب وقواعد البيانات للطلاب.',
    'hero.panel.years': 'سنوات في تقنية المعلومات',
    'hero.panel.flutterYears': 'سنوات في Flutter',
    'hero.panel.teaching': 'التدريس',
    'hero.panel.teachingSub': 'تطوير الويب وقواعد البيانات',
    'hero.panel.research': 'البحث العلمي',
    'hero.panel.researchSub': 'دكتوراه في الذكاء الاصطناعي وتعلّم الآلة',
    'about.eyebrow': 'نبذة عني',
    'about.title': 'التطوير، والتدريس، وأبحاث الذكاء الاصطناعي التطبيقية.',
    'about.p1':
      'تشمل خلفيتي التقنية Python وC++ وJavaScript وDart وJava وتطوير الخلفية البرمجية (Backend) وقواعد البيانات — مع أكثر من 5 سنوات في بناء تطبيقات موبايل إنتاجية باستخدام Flutter، إلى جانب Laravel، وإدارة خوادم Linux، والبنية التحتية السحابية. كما أستخدم Java لبناء وحدات أندرويد أصلية، مثل خدمة نفق VPN في Sham VPN، وفي التدريس أيضًا.',
    'about.p2':
      'حاصل على درجة الماجستير من جامعة موسكو الحكومية التقنية باسم باومان (BMSTU)، وأتابع حاليًا دراسة الدكتوراه فيها في مجال الذكاء الاصطناعي وتعلّم الآلة. كما أمضيتُ عامين في تدريس تطوير الويب وJava وقواعد البيانات — وأستمتع بتبسيط المواضيع المعقدة ومساعدة الطلاب على اكتساب مهارات عملية ومستقلة في حل المشكلات.',
    'pub.eyebrow': 'المنشورات',
    'pub.title': 'أبحاث تطبيقية في الذكاء الاصطناعي ومعالجة اللغة الطبيعية.',
    'pub.kicker': 'REEPE 2025 · أبريل 2025',
    'pub.link': 'عرض على IEEE Xplore',
    'projects.eyebrow': 'المشاريع المميزة',
    'projects.title': 'أعمال مختارة من المشاريع.',
    'common.badgeActive': 'نشط',
    'common.badgeLive': 'متاح الآن',
    'common.badgeResearch': 'بحثي',
    'common.website': 'الموقع الإلكتروني',
    'common.screenshots': 'لقطات الشاشة',
    'common.viewCode': 'عرض الكود',
    'common.openInColab': 'فتح في Colab',
    'proj.shamvpn.title': 'حل VPN متعدد المنصات',
    'proj.shamvpn.desc':
      'منظومة VPN متعددة المنصات مبنية باستخدام Flutter وLaravel وخدمات Linux وXray، جاهزة للاستخدام الإنتاجي عبر عملاء الموبايل وسطح المكتب، مع التركيز على استمرارية الاتصال في بيئات الشبكات المقيّدة. وحدة نفق أندرويد الأصلية مبنية بلغة Java فوق واجهة VpnService الخاصة بأندرويد.',
    'proj.bert.title': 'مصنّف نصوص طبية مُعزَّز بقاموس مصطلحات',
    'proj.bert.desc':
      'خط معالجة لتصنيف النصوص الطبية باستخدام نماذج عائلة BERT، مخصص لملخصات التقارير الطبية المكتوبة. يتم وسم المصطلحات الطبية من قاموس متخصص برموز خاصة قبل عملية الضبط الدقيق (Fine-tuning)، وقد رفع هذا الإثراء دقة التصنيف في نماذج BERT وBioBERT وClinicalBERT وBlueBERT وSciBERT على حدٍّ سواء.',
    'proj.hudhud.title': 'تطبيق سوق محلي',
    'proj.hudhud.desc':
      'تطبيق لعرض وشراء المنتجات المحلية، يتيح تواصلًا مباشرًا بين البائعين والمشترين في دول الخليج والأردن.',
    'proj.hudhud.feature1': 'مراسلة مباشرة بين البائع والمشتري',
    'proj.hudhud.feature2': 'قوائم منتجات محلية',
    'proj.hudhud.feature3': 'تغطية دول الخليج والأردن',
    'proj.paloma.title': 'تطبيق سوق لمنطقة الشرق الأوسط وشمال أفريقيا',
    'proj.paloma.desc': 'أفضل مكان لبيع وشراء الأشياء في منطقة الشرق الأوسط وشمال أفريقيا.',
    'proj.elan.title': 'منصة إعلانات وأخبار',
    'proj.elan.desc':
      'تتيح للمعلنين نشر إعلاناتهم مباشرة، وتجمع الأخبار من مصادر متعددة حسب التصنيف، وتضم قسمًا رسميًا للنشرات يغطي جميع الإعلانات.',
    'proj.schooms.title': 'منصة إدارة مدرسية',
    'proj.schooms.desc':
      'منصة ويب تُوحّد إدارة القبول المدرسي والأخبار والفعاليات والمسار المهني — حيث تتقدّم العائلات بالطلبات عبر الإنترنت بينما يراجع الطاقم الطلبات ويعالجها من مكان واحد.',
    'proj.hrs.title': 'نظام إدارة الموارد البشرية',
    'proj.hrs.desc':
      'نظام ويب لإدارة الموارد البشرية يتيح إدارة الموظفين والحضور والرواتب وعمليات الموارد البشرية الأساسية من منصة واحدة.',
    'proj.supplity.title': 'سوق إلكتروني لتجارة الأجهزة التقنية بين الشركات',
    'proj.supplity.desc':
      'منصة تجارة إلكترونية بين الشركات (B2B) لتوفير أجهزة تقنية المعلومات وحلول مراكز البيانات للمؤسسات، تخدم الشركات في دبي وقطر والسعودية عبر الشراء بالجملة وطلب عروض الأسعار وخدمات تقنية مدعومة من الموردين.',
    'proj.p4m.title': 'منصة تجارة إلكترونية وتسويق شبكي',
    'proj.p4m.desc':
      'منصة تجارة إلكترونية وتسويق شبكي متعددة اللغات، تضم حسابات للموزعين، وبرنامج مكافآت منظّم، ووحدات تدريبية إلى جانب متجر تجزئة تقليدي.',
    'proj.mshop.title': 'تطبيق تجارة إلكترونية بـ Flutter',
    'proj.mshop.desc': 'مشروع Flutter يتيح للعملاء شراء المنتجات عبر الإنترنت.',
    'proj.rickmorty.title': 'متصفح شخصيات مبني على GraphQL',
    'proj.rickmorty.desc':
      'تطبيق Flutter لتصفح شخصيات Rick and Morty عبر GraphQL، باستخدام GetX لإدارة الحالة والتنقل، وHive للتخزين المؤقت دون اتصال، مع دعم البحث والمفضلة والفرز.',
    'contact.eyebrow': 'تواصل',
    'contact.title': 'متاح للعمل في تطوير المنتجات، وأنظمة الموبايل، والبنية التحتية.',
    'contact.email': 'البريد الإلكتروني',
    'footer.built': 'تم البناء لـ GitHub Pages',
  },
  ru: {
    'meta.title': 'Muhammad Aliah | Разработчик ПО и преподаватель',
    'meta.description': 'Портфолио Muhammad Aliah — разработчика ПО и преподавателя.',
    'langSwitch.aria': 'Язык',
    'nav.about': 'Обо мне',
    'nav.publications': 'Публикации',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'brand.role': 'Разработчик ПО и преподаватель',
    'hero.title': 'Более 11 лет создаю промышленное программное обеспечение — и учу этому других.',
    'hero.text':
      'Я разработчик ПО и преподаватель с более чем 11-летним опытом в сфере ИТ. Я создаю промышленные мобильные и серверные системы — свыше 5 лет работаю с Flutter — и часть времени преподаю веб-разработку и базы данных. В настоящее время провожу исследования в области ИИ и машинного обучения в рамках учёбы в аспирантуре.',
    'hero.cta.featured': 'Избранные проекты',
    'hero.platformsAria': 'Платформы',
    'hero.panel.summaryLabel': 'Профессиональное резюме',
    'hero.panel.summaryText':
      'Я выпустил в продакшн приложения в сфере электронной коммерции, VPN-инфраструктуры и управления школами — а также два года преподавал студентам веб-разработку и базы данных.',
    'hero.panel.years': 'Лет в ИТ',
    'hero.panel.flutterYears': 'Лет с Flutter',
    'hero.panel.teaching': 'Преподавание',
    'hero.panel.teachingSub': 'Веб-разработка и БД',
    'hero.panel.research': 'Исследования',
    'hero.panel.researchSub': 'PhD по ИИ и МО',
    'about.eyebrow': 'Обо мне',
    'about.title': 'Разработка, преподавание и прикладные исследования в области ИИ.',
    'about.p1':
      'Мой технический опыт охватывает Python, C++, JavaScript, Dart, Java, серверную разработку и базы данных — включая более 5 лет создания промышленных мобильных приложений на Flutter, а также работу с Laravel, администрирование серверов Linux и облачную инфраструктуру. Java я также использую для нативных модулей Android, например для VPN-туннеля в Sham VPN, и в преподавании.',
    'about.p2':
      'Имею степень магистра МГТУ им. Н.Э. Баумана и в настоящее время учусь там в аспирантуре, исследуя искусственный интеллект и машинное обучение. Также два года преподавал веб-разработку, Java и базы данных — мне нравится просто объяснять сложные темы и помогать студентам развивать практические навыки самостоятельного решения задач.',
    'pub.eyebrow': 'Публикации',
    'pub.title': 'Прикладные исследования в области ИИ и NLP.',
    'pub.kicker': 'REEPE 2025 · Апрель 2025',
    'pub.link': 'Открыть на IEEE Xplore',
    'projects.eyebrow': 'Избранные проекты',
    'projects.title': 'Избранные реализованные проекты.',
    'common.badgeActive': 'Активен',
    'common.badgeLive': 'Доступно',
    'common.badgeResearch': 'Исследование',
    'common.website': 'Сайт',
    'common.screenshots': 'Скриншоты',
    'common.viewCode': 'Посмотреть код',
    'common.openInColab': 'Открыть в Colab',
    'proj.shamvpn.title': 'Кроссплатформенное VPN-решение',
    'proj.shamvpn.desc':
      "Мультиплатформенный VPN-стек на базе Flutter, Laravel, сервисов Linux и Xray для промышленного использования на мобильных и десктопных клиентах, с акцентом на устойчивое подключение в условиях сетевых ограничений. Нативный модуль туннеля для Android написан на Java поверх Android VpnService.",
    'proj.bert.title': 'Классификатор медицинских текстов с расширением по словарю',
    'proj.bert.desc':
      'Пайплайн классификации текста на основе моделей семейства BERT для медицинских транскрипционных аннотаций. Термины из медицинского словаря размечаются специальными токенами перед дообучением, и такое расширение данных повышает точность моделей BERT, BioBERT, ClinicalBERT, BlueBERT и SciBERT.',
    'proj.hudhud.title': 'Приложение локального маркетплейса',
    'proj.hudhud.desc':
      'Приложение для просмотра и покупки локальных товаров с прямым общением между продавцами и покупателями в странах Персидского залива и Иордании.',
    'proj.hudhud.feature1': 'Прямые сообщения между продавцом и покупателем',
    'proj.hudhud.feature2': 'Локальные объявления о товарах',
    'proj.hudhud.feature3': 'Покрытие стран Залива и Иордании',
    'proj.paloma.title': 'Маркетплейс для региона MENA',
    'proj.paloma.desc': 'Лучшее место для покупки и продажи товаров в регионе MENA.',
    'proj.elan.title': 'Платформа объявлений и новостей',
    'proj.elan.desc':
      'Позволяет рекламодателям публиковать объявления напрямую, агрегирует новости из разных источников по категориям и включает официальный раздел бюллетеня со всеми объявлениями.',
    'proj.schooms.title': 'Платформа управления школой',
    'proj.schooms.desc':
      'Веб-платформа, объединяющая приём в школу, новости, мероприятия и карьерное сопровождение — семьи подают заявки онлайн, а сотрудники рассматривают и обрабатывают их из единого интерфейса.',
    'proj.hrs.title': 'Система управления персоналом',
    'proj.hrs.desc':
      'Веб-система управления персоналом для учёта сотрудников, посещаемости, зарплат и основных HR-процессов на единой платформе.',
    'proj.supplity.title': 'B2B-маркетплейс ИТ-оборудования',
    'proj.supplity.desc':
      'B2B-платформа электронной коммерции для корпоративного ИТ-оборудования и решений для дата-центров, обслуживающая компании в Дубае, Катаре и Саудовской Аравии: оптовые закупки, запросы коммерческих предложений и технологические услуги от партнёров-производителей.',
    'proj.p4m.title': 'Платформа электронной коммерции и сетевого маркетинга',
    'proj.p4m.desc':
      'Многоязычная платформа электронной коммерции и сетевого маркетинга с аккаунтами дистрибьюторов, структурированной программой вознаграждений и обучающими модулями наряду со стандартной розничной витриной.',
    'proj.mshop.title': 'Приложение электронной коммерции на Flutter',
    'proj.mshop.desc': 'Проект на Flutter, позволяющий клиентам покупать товары онлайн.',
    'proj.rickmorty.title': 'Браузер персонажей на GraphQL',
    'proj.rickmorty.desc':
      'Приложение на Flutter для просмотра персонажей Rick and Morty через GraphQL, с GetX для управления состоянием и навигацией, Hive для офлайн-кэширования, а также поиском, избранным и сортировкой.',
    'contact.eyebrow': 'Контакты',
    'contact.title': 'Открыт к сотрудничеству по продуктовой разработке, мобильным системам и инфраструктуре.',
    'contact.email': 'Email',
    'footer.built': 'Сделано для GitHub Pages',
  },
};

function translate(key, lang) {
  const table = translations[lang] || translations.en;
  if (key in table) return table[key];
  return key in translations.en ? translations.en[key] : null;
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = translate(el.getAttribute('data-i18n'), lang);
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = translate(el.getAttribute('data-i18n-aria'), lang);
    if (value !== null) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const value = translate(el.getAttribute('data-i18n-content'), lang);
    if (value !== null) el.setAttribute('content', value);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem('lang', lang);
  } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

(function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  let storedLang = null;
  try {
    storedLang = localStorage.getItem('lang');
  } catch (e) {}

  const lang = translations[urlLang] ? urlLang : translations[storedLang] ? storedLang : 'en';
  applyLanguage(lang);
})();
