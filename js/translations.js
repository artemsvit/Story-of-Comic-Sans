// Global language state
let currentLanguage = 'en';

const translations = {
    en: {
        lang_name: 'English',
        title: '🎨 Comic Sans: The CRAZY Font Journey! 🚀',
        subtitle: '💥 Created in 1994 - Still Making Waves! 💥',
        home: '🏠 HOME!',
        examples: '👀 EXAMPLES!',
        reviews: '⭐ REVIEWS!',
        usage: '📊 USAGE!',
        roadmap: '🗺️ ROADMAP!',
        about: 'ℹ️ ABOUT!',
        'selling-points': '🌟 AMAZING Features! 🌟',
        feature1: '💫 Born in 1994!',
        'feature1-description': 'Created by the LEGENDARY Vincent Connare! 🎨',
        feature2: '🎯 Super Friendly!',
        'feature2-description': 'The Most APPROACHABLE Font Ever! 🤗',
        feature3: '🌍 Global Impact!',
        'feature3-description': 'Used EVERYWHERE on Planet Earth! 🚀',
        'gallery-title': '🌟 INCREDIBLE Real-World Examples! 🌟',
        'gallery-item1-title': 'CERN\'s Higgs Boson! 🔬',
        'gallery-item1-description': 'Scientists at CERN used Comic Sans for their GROUNDBREAKING Higgs boson discovery presentation! MIND = BLOWN! 🤯',
        'gallery-item1-year': '2012 🚀',
        mascotSays: 'Hi! I\'m Comic Sans! 👋',
        supportChat: 'Need help? Ask me!',
        footer: '🎨 Comic Sans History - Making The Web FUN Since 1994! 🎨',
        footer2: '💫 Created with LOVE and COMIC SANS! 💫',
        'example1-description': 'AMAZING Basic Text! ✨',
        'example2-description': 'INCREDIBLE Pangram! 🌟',
        'example3-description': 'FANTASTIC Numbers! 💥',
        'review1': '"ABSOLUTELY PERFECT for fun content!"',
        'review1-author': '- Design Weekly 🏆',
        'review2': '"The Most CONTROVERSIAL Font Ever!"',
        'review2-author': '- Typography Magazine 🎯',
        'review3': '"You Can\'t Ignore This AMAZING Font!"',
        'review3-author': '- Font Reviews 🌟',
        'usage-stat1': '95%',
        'usage-stat1-description': 'INCREDIBLE Recognition! 🎯',
        'usage-stat2': '1M+',
        'usage-stat2-description': 'DAILY Uses! 🚀',
        'usage-stat3': '200+',
        'usage-stat3-description': 'Countries Using It! 🌍',
        'roadmap-item1': '1994 💫',
        'roadmap-item1-description': 'The BIRTH of GREATNESS!',
        'roadmap-item2': '1995 🚀',
        'roadmap-item2-description': 'WINDOWS 95 Launch!',
        'roadmap-item3': '2000s 🌟',
        'roadmap-item3-description': 'WORLDWIDE Fame!',
        'roadmap-item4': 'NOW! 💥',
        'roadmap-item4-description': 'CULTURAL ICON!',
        'about-description': 'Comic Sans MS is the MOST INCREDIBLE casual font EVER created! 🎨',
        'about-description2': 'Made by the LEGENDARY Vincent Connare in 1994 for Microsoft Bob! 🚀',
        'about-description3': 'Now it\'s EVERYWHERE and EVERYONE knows it! 💫',
    },
    zh: {
        lang_name: '中文',
        title: '🎨 Comic Sans：字体的疯狂之旅！🚀',
        subtitle: '💥 1994年诞生 - 至今仍在掀起波澜！💥',
        home: '🏠 首页！',
        examples: '👀 示例！',
        reviews: '⭐ 评论！',
        usage: '📊 使用统计！',
        roadmap: '🗺️ 路线图！',
        about: 'ℹ️ 关于！',
        'selling-points': '🌟 惊人特色！🌟',
        feature1: '💫 诞生于1994年！',
        'feature1-description': '由传奇设计师Vincent Connare创造！🎨',
        feature2: '🎯 超级友好！',
        'feature2-description': '最平易近人的字体！🤗',
        feature3: '🌍 全球影响！',
        'feature3-description': '在地球上随处可见！🚀',
        'gallery-title': '🌟 令人难以置信的真实案例！🌟',
        'gallery-item1-title': 'CERN的希格斯玻色子！🔬',
        'gallery-item1-description': 'CERN的科学家在他们突破性的希格斯玻色子发现演示中使用了Comic Sans！太震撼了！🤯',
        'gallery-item1-year': '2012年 🚀',
        'gallery-item2-title': 'Comic Chat时代！💻',
        'gallery-item2-description': 'Comic Sans让Microsoft Comic Chat变得有趣！原创表情符号！🎉',
        'gallery-item2-year': '1996 💫',
        'gallery-item3-title': 'Beanie Babies！🧸',
        'gallery-item3-description': '还记得这些可爱的Beanie Babies标签吗？全都用Comic Sans！怀旧！💝',
        'gallery-item3-year': '90年代 ✨',
        'gallery-item4-title': '表情包传奇！🌟',
        'gallery-item4-description': '制作表情包的最佳字体！让互联网更有趣！😂',
        'gallery-item4-year': '2000年代 🎭',
        'gallery-item5-title': '字体革命！✊',
        'gallery-item5-description': 'Comic Sans在设计界掀起了一场革命！爱它或恨它，但不能忽视它！🎨',
        'gallery-item5-year': '2010年代 🎯',
        'gallery-item6-title': '孩子们的最爱！📚',
        'gallery-item6-description': '让儿童读物更有趣、更易读！完美适合年轻读者！🌈',
        'gallery-item6-year': '2023 🎨',
        'gallery-item7-title': '生日快乐！🎂',
        'gallery-item7-description': '用最有趣的字体让生日更特别！🎈',
        'gallery-item7-year': '永远！🎉',
        'gallery-item8-title': '神圣设计！⛪',
        'gallery-item8-description': '连教堂都喜欢Comic Sans！让信息更容易理解！🙏',
        'gallery-item8-year': '永恒！✨',
        'gallery-item9-title': '美味字体！🍽️',
        'gallery-item9-description': '让菜单更有食欲！开动！🍕',
        'gallery-item9-year': '美味！🍳',
        'gallery-item10-title': '校园精神！📚',
        'gallery-item10-description': '让学校通知更有趣！家长们都喜欢！🎓',
        'gallery-item10-year': '每学期！📝',
        'gallery-item11-title': '友好警示！⚠️',
        'gallery-item11-description': '让警示标志不那么吓人，更友好！🤗',
        'gallery-item11-year': '安全第一！🛡️',
        'gallery-item12-title': '办公室乐趣！📝',
        'gallery-item12-description': '让办公室备忘录不再无聊！💼',
        'gallery-item12-year': '朝九晚五！🏢',
        'gallery-item13-title': '婚礼奇思！💒',
        'gallery-item13-description': '为婚礼邀请函增添趣味！谁说正式就不能有趣？💍',
        'gallery-item13-year': '永远！💑',
        'gallery-item14-title': '商店风格！🛍️',
        'gallery-item14-description': '用友好的标志让购物更愉快！🏪',
        'gallery-item14-year': '24/7营业！🔑',
        'gallery-item15-title': '咖啡馆魅力！☕',
        'gallery-item15-description': '让咖啡馆菜单更吸引人！是时候喝杯咖啡了！☕',
        'gallery-item15-year': '新鲜出炉！🥐',
        'gallery-item16-title': '项目力量！📊',
        'gallery-item16-description': '为学校项目增添个性！风格满分！🎨',
        'gallery-item16-year': '作业时间！📓',
        'gallery-item17-title': '体育戏剧！🏀',
        'gallery-item17-description': '丹·吉尔伯特甚至在他著名的骑士队信中使用了它！多么精彩的时刻！🏆',
        'gallery-item17-year': '2010！🔥',
        mascotSays: '嗨！我是Comic Sans！👋',
        supportChat: '需要帮助吗？问我吧！',
        footer: '🎨 Comic Sans历史 - 自1994年起让网络充满乐趣！🎨',
        footer2: '💫 用爱和COMIC SANS创造！💫',
        'example1-description': '令人惊叹的基本文字！✨',
        'example2-description': '令人难以置信的字母表！🌟',
        'example3-description': '神奇的数字！💥',
        'review1': '"对于有趣的内容来说绝对完美！"',
        'review1-author': '- 设计周刊 🏆',
        'review2': '"史上最具争议的字体！"',
        'review2-author': '- 字体杂志 🎯',
        'review3': '"你无法忽视这个令人惊叹的字体！"',
        'review3-author': '- 字体评论 🌟',
        'usage-stat1': '95%',
        'usage-stat1-description': '令人难以置信的认可度！🎯',
        'usage-stat2': '1M+',
        'usage-stat2-description': '每日使用量！🚀',
        'usage-stat3': '200+',
        'usage-stat3-description': '使用国家！🌍',
        'roadmap-item1': '1994 💫',
        'roadmap-item1-description': '伟大的诞生！',
        'roadmap-item2': '1995 🚀',
        'roadmap-item2-description': 'WINDOWS 95发布！',
        'roadmap-item3': '2000年代 🌟',
        'roadmap-item3-description': '全球声名！',
        'roadmap-item4': '现在！💥',
        'roadmap-item4-description': '文化标志！',
        'about-description': 'Comic Sans MS是最令人难以置信的休闲字体！🎨',
        'about-description2': '1994年由传奇设计师Vincent Connare为Microsoft Bob创造！🚀',
        'about-description3': '现在它无处不在，人人都知道！💫',
    },
    ar: {
        lang_name: 'العربية',
        title: '🎨 كوميك سانس: رحلة الخط المجنونة! 🚀',
        subtitle: '💥 تم إنشاؤه في 1994 - ما زال يصنع الأمواج! 💥',
        home: '🏠 الرئيسية!',
        examples: '👀 أمثلة!',
        reviews: '⭐ المراجعات!',
        usage: '📊 الإحصائيات!',
        roadmap: '🗺️ خارطة الطريق!',
        about: 'ℹ️ حول!',
        'selling-points': '🌟 ميزات مذهلة! 🌟',
        feature1: '💫 ولد في 1994!',
        'feature1-description': 'تم إنشاؤه بواسطة الأسطوري Vincent Connare! 🎨',
        feature2: '🎯 ودود للغاية!',
        'feature2-description': 'الخط الأكثر سهولة على الإطلاق! 🤗',
        feature3: '🌍 تأثير عالمي!',
        'feature3-description': 'يستخدم في كل مكان على كوكب الأرض! 🚀',
        'gallery-title': '🌟 أمثلة مذهلة من العالم الحقيقي! 🌟',
        'gallery-item1-title': 'بوزون هيغز في سيرن! 🔬',
        'gallery-item1-description': 'استخدم علماء سيرن خط كوميك سانس في عرضهم الثوري لاكتشاف بوزون هيغز! مذهل! 🤯',
        'gallery-item1-year': '2012 🚀',
        'gallery-item2-title': 'عصر كوميك تشات! 💻',
        'gallery-item2-description': 'جعل كوميك سانز مايكروسوفت كوميك تشات ممتعًا! الرموز التعبيرية الأصلية! 🎉',
        'gallery-item2-year': '1996 💫',
        'gallery-item3-title': 'بيني بيبيز! 🧸',
        'gallery-item3-description': 'تتذكر علامات بيني بيبيز اللطيفة تلك؟ كلها بخط كوميك سانز! حنين! 💝',
        'gallery-item3-year': 'التسعينات ✨',
        'gallery-item4-title': 'أسطورة الميمز! 🌟',
        'gallery-item4-description': 'أفضل خط للميمز! يجعل الإنترنت أكثر متعة! 😂',
        'gallery-item4-year': '2000s 🎭',
        'gallery-item5-title': 'ثورة الخطوط! ✊',
        'gallery-item5-description': 'أحدث كوميك سانز ثورة في التصميم! أحبه أو اكرهه، لكن لا تتجاهله! 🎨',
        'gallery-item5-year': '2010s 🎯',
        'gallery-item6-title': 'محبوب الأطفال! 📚',
        'gallery-item6-description': 'يجعل كتب الأطفال أكثر متعة وسهولة في القراءة! مثالي للقراء الصغار! 🌈',
        'gallery-item6-year': '2023 🎨',
        'gallery-item7-title': 'عيد ميلاد سعيد! 🎂',
        'gallery-item7-description': 'نجعل أعياد الميلاد مميزة بأكثر الخطوط متعة! 🎈',
        'gallery-item7-year': 'دائماً! 🎉',
        'gallery-item8-title': 'تصميم مقدس! ⛪',
        'gallery-item8-description': 'حتى الكنائس تحب كوميك سانز! يجعل الرسائل أكثر سهولة في الفهم! 🙏',
        'gallery-item8-year': 'أبدي! ✨',
        'gallery-item9-title': 'خط شهي! 🍽️',
        'gallery-item9-description': 'نجعل القوائم أكثر شهية! بالهناء والشفاء! 🍕',
        'gallery-item9-year': 'شهي! 🍳',
        'gallery-item10-title': 'روح المدرسة! 📚',
        'gallery-item10-description': 'نجعل الإشعارات المدرسية أكثر متعة! الآباء يحبونها! 🎓',
        'gallery-item10-year': 'كل فصل دراسي! 📝',
        'gallery-item11-title': 'تحذير ودي! ⚠️',
        'gallery-item11-description': 'نجعل علامات التحذير أقل تخويفاً وأكثر ودية! 🤗',
        'gallery-item11-year': 'السلامة أولاً! 🛡️',
        'gallery-item12-title': 'مرح المكتب! 📝',
        'gallery-item12-description': 'نجعل مذكرات المكتب أقل ملاً! 💼',
        'gallery-item12-year': 'من 9 إلى 5! 🏢',
        'gallery-item13-title': 'نزوة الزفاف! 💒',
        'gallery-item13-description': 'نضيف المرح لدعوات الزفاف! من قال أن الرسمي لا يمكن أن يكون ممتعاً؟ 💍',
        'gallery-item13-year': 'للأبد! 💑',
        'gallery-item14-title': 'أسلوب المتجر! 🛍️',
        'gallery-item14-description': 'نجعل التسوق أكثر متعة بلافتات ودية! 🏪',
        'gallery-item14-year': 'مفتوح 24/7! 🔑',
        'gallery-item15-title': 'سحر المقهى! ☕',
        'gallery-item15-description': 'نجعل قوائم المقاهي أكثر جاذبية! حان وقت استراحة القهوة! ☕',
        'gallery-item15-year': 'طازج! 🥐',
        'gallery-item16-title': 'قوة المشروع! 📊',
        'gallery-item16-description': 'نضيف شخصية للمشاريع المدرسية! درجة كاملة في الأسلوب! 🎨',
        'gallery-item16-year': 'وقت الواجب المنزلي! 📓',
        'gallery-item17-title': 'دراما رياضية! 🏀',
        'gallery-item17-description': 'حتى دان جيلبرت استخدمه في رسالته الشهيرة للكافز! يا له من لحظة! 🏆',
        'gallery-item17-year': '2010! 🔥',
        mascotSays: 'مرحباً! أنا كوميك سانس! 👋',
        supportChat: 'تحتاج مساعدة؟ اسألني!',
        footer: '🎨 تاريخ كوميك سانس - نجعل الويب ممتعاً منذ 1994! 🎨',
        footer2: '💫 تم إنشاؤه بالحب وكوميك سانس! 💫',
        'example1-description': 'نص أساسي مذهل! ✨',
        'example2-description': 'جملة رائعة تحتوي كل الحروف! 🌟',
        'example3-description': 'أرقام رائعة! 💥',
        'review1': '"مثالي تماماً للمحتوى المرح!"',
        'review1-author': '- مجلة التصميم 🏆',
        'review2': '"أكثر خط مثير للجدل على الإطلاق!"',
        'review2-author': '- مجلة الخطوط 🎯',
        'review3': '"لا يمكنك تجاهل هذا الخط المذهل!"',
        'review3-author': '- مراجعات الخطوط 🌟',
        'usage-stat1': '95%',
        'usage-stat1-description': 'اعتراف مذهل! 🎯',
        'usage-stat2': '1M+',
        'usage-stat2-description': 'استخدام يومي! 🚀',
        'usage-stat3': '200+',
        'usage-stat3-description': 'دولة تستخدمه! 🌍',
        'roadmap-item1': '1994 💫',
        'roadmap-item1-description': 'ميلاد العظمة!',
        'roadmap-item2': '1995 🚀',
        'roadmap-item2-description': 'إطلاق ويندوز 95!',
        'roadmap-item3': '2000s 🌟',
        'roadmap-item3-description': 'شهرة عالمية!',
        'roadmap-item4': 'الآن! 💥',
        'roadmap-item4-description': 'أيقونة ثقافية!',
        'about-description': 'كوميك سانس هو أكثر خط عادي مذهل تم إنشاؤه على الإطلاق! 🎨',
        'about-description2': 'صممه الأسطوري Vincent Connare في 1994 لـ Microsoft Bob! 🚀',
        'about-description3': 'الآن هو في كل مكان والجميع يعرفه! 💫',
    },
    uk: {
        lang_name: 'Українська',
        title: '🎨 Comic Sans: Божевільна Подорож Шрифту! 🚀',
        subtitle: '💥 Створений у 1994 - Досі Створює Хвилі! 💥',
        home: '🏠 ГОЛОВНА!',
        examples: '👀 ПРИКЛАДИ!',
        reviews: '⭐ ВІДГУКИ!',
        usage: '📊 СТАТИСТИКА!',
        roadmap: '🗺️ РОЗВИТОК!',
        about: 'ℹ️ ПРО НАС!',
        'selling-points': '🌟 НЕЙМОВІРНІ Особливості! 🌟',
        feature1: '💫 Народився у 1994!',
        'feature1-description': 'Створений легендарним Vincent Connare! 🎨',
        feature2: '🎯 Супер Дружній!',
        'feature2-description': 'Найбільш Доступний Шрифт! 🤗',
        feature3: '🌍 Світовий Вплив!',
        'feature3-description': 'Використовується Всюди на Планеті! 🚀',
        'gallery-title': '🌟 НЕЙМОВІРНІ Приклади з Реального Світу! 🌟',
        'gallery-item1-title': 'Бозон Хіггса в CERN! 🔬',
        'gallery-item1-description': 'Вчені CERN використали Comic Sans для своєї РЕВОЛЮЦІЙНОЇ презентації відкриття бозона Хіггса! НЕЙМОВІРНО! 🤯',
        'gallery-item1-year': '2012 🚀',
        'gallery-item2-title': 'Віртуальна Реальність! 🎮',
        'gallery-item2-description': 'Розробники використовують його для НЕЙМОВІРНИХ VR інтерфейсів! МАЙБУТНЄ ТУТ! 🚀',
        'gallery-item2-year': '2023 🎯',
        'gallery-item3-title': 'Наукові Відкриття! 🔬',
        'gallery-item3-description': 'Від шкільних проєктів до НАУКОВИХ ПРЕЗЕНТАЦІЙ! ЗНАННЯ = СИЛА! 📚',
        'gallery-item3-year': 'Завжди Актуально! 🎓',
        'gallery-item4-title': 'Мистецька Галерея! 🎨',
        'gallery-item4-description': 'Сучасні художники використовують його для своїх РЕВОЛЮЦІЙНИХ виставок! МИСТЕЦТВО ЖИВЕ! 🖼️',
        'gallery-item4-year': 'Щодня! 🎨',
        'gallery-item5-title': 'Дитячі Книги! 📚',
        'gallery-item5-description': 'Улюблений шрифт для ЗАХОПЛИВИХ дитячих історій! МАГІЯ ЧИТАННЯ! 🌈',
        'gallery-item5-year': 'З 1995! 📖',
        'gallery-item6-title': 'Соціальні Мережі! 📱',
        'gallery-item6-description': 'ВІРУСНІ меми та пости використовують наш шрифт! ІНТЕРНЕТ ЛЮБИТЬ НАС! 💖',
        'gallery-item6-year': 'Тренд 2023! 🚀',
        'gallery-item7-title': 'Космічні Дослідження! 🛸',
        'gallery-item7-description': 'Навіть NASA іноді використовує Comic Sans! КОСМОС КЛИЧЕ! 🌠',
        'gallery-item7-year': 'Майбутнє! 🚀',
        'gallery-item8-title': 'Святкові Листівки! 🎉',
        'gallery-item8-description': 'Створюйте РАДІСНІ святкові привітання! ЩАСТЯ ГАРАНТОВАНО! 🎈',
        'gallery-item8-year': 'Всі Свята! 🎊',
        'gallery-item9-title': 'Смачна Типографіка! 🍽️',
        'gallery-item9-description': 'Робимо меню більш АПЕТИТНИМИ! СМАЧНОГО! 🍕',
        'gallery-item9-year': 'Смачно! 🍳',
        'gallery-item10-title': 'Шкільні Проєкти! 📚',
        'gallery-item10-description': 'Улюблений шрифт для КРЕАТИВНИХ шкільних робіт! НАВЧАННЯ - ЦЕ ВЕСЕЛО! 🎨',
        'gallery-item10-year': 'Навчальний Рік! 📝',
        'gallery-item11-title': 'Веб-Дизайн! 💻',
        'gallery-item11-description': 'Створюємо УНІКАЛЬНІ веб-сайти! ВИДІЛЯЙСЯ! 🎯',
        'gallery-item11-year': 'Щодня Онлайн! 🌐',
        'gallery-item12-title': 'Рекламні Кампанії! 📢',
        'gallery-item12-description': 'Великі бренди обирають нас для ВЕСЕЛИХ кампаній! УСПІХ ГАРАНТОВАНО! 🎯',
        'gallery-item12-year': 'Постійно! 🎪',
        'gallery-item13-title': 'Музичні Фестивалі! 🎵',
        'gallery-item13-description': 'Від квитків до плакатів - ми ВСЮДИ! МУЗИКА + ШРИФТ = МАГІЯ! 🎸',
        'gallery-item13-year': 'Рок-н-Рол! 🎼',
        'gallery-item14-title': 'Екологічні Проєкти! 🌱',
        'gallery-item14-description': 'Допомагаємо рятувати планету СТИЛЬНО! ЗЕЛЕНЕ МАЙБУТНЄ! 🌍',
        'gallery-item14-year': 'Щодня! 🌿',
        'gallery-item15-title': 'Медичні Презентації! 👨‍⚕️',
        'gallery-item15-description': 'Робимо медичну інформацію більш ДОСТУПНОЮ! ЗДОРОВ\'Я - ЦЕ ВАЖЛИВО! 🏥',
        'gallery-item15-year': '24/7! 🚑',
        'gallery-item16-title': 'Сила Проєктів! 📊',
        'gallery-item16-description': 'Додаємо характер шкільним проєктам! ПОВНІ БАЛИ за стиль! 🎨',
        'gallery-item16-year': 'Час Домашки! 📓',
        'gallery-item17-title': 'Спортивна Драма! 🏀',
        'gallery-item17-description': 'Навіть Ден Гілберт використав його у своєму ЗНАМЕНИТОМУ листі про Кавальєрс! Що за момент! 🏆',
        'gallery-item17-year': '2010! 🔥',
        mascotSays: 'Привіт! Я Comic Sans! 👋',
        supportChat: 'Потрібна допомога? Запитай мене!',
        footer: '🎨 Історія Comic Sans - Робимо Веб Веселим з 1994! 🎨',
        footer2: '💫 Створено з ЛЮБОВ\'Ю та COMIC SANS! 💫',
        'example1-description': 'ДИВОВИЖНИЙ Базовий Текст! ✨',
        'example2-description': 'НЕЙМОВІРНИЙ Панграм! 🌟',
        'example3-description': 'ФАНТАСТИЧНІ Цифри! 💥',
        'review1': '"АБСОЛЮТНО ІДЕАЛЬНИЙ для веселого контенту!"',
        'review1-author': '- Дизайн Тижня 🏆',
        'review2': '"Найбільш СУПЕРЕЧЛИВИЙ Шрифт!"',
        'review2-author': '- Журнал Типографії 🎯',
        'review3': '"Ви Не Можете Ігнорувати Цей ДИВОВИЖНИЙ Шрифт!"',
        'review3-author': '- Огляди Шрифтів 🌟',
        'usage-stat1': '95%',
        'usage-stat1-description': 'НЕЙМОВІРНЕ Визнання! 🎯',
        'usage-stat2': '1M+',
        'usage-stat2-description': 'ЩОДЕННІ Використання! 🚀',
        'usage-stat3': '200+',
        'usage-stat3-description': 'Країн Використовують! 🌍',
        'roadmap-item1': '1994 💫',
        'roadmap-item1-description': 'НАРОДЖЕННЯ ВЕЛИЧІ!',
        'roadmap-item2': '1995 🚀',
        'roadmap-item2-description': 'Запуск WINDOWS 95!',
        'roadmap-item3': '2000-ні 🌟',
        'roadmap-item3-description': 'СВІТОВА Слава!',
        'roadmap-item4': 'ЗАРАЗ! 💥',
        'roadmap-item4-description': 'КУЛЬТОВА ІКОНА!',
        'about-description': 'Comic Sans MS - це НАЙБІЛЬШ НЕЙМОВІРНИЙ повсякденний шрифт, який коли-небудь створювали! 🎨',
        'about-description2': 'Створений ЛЕГЕНДАРНИМ Vincent Connare у 1994 році для Microsoft Bob! 🚀',
        'about-description3': 'Тепер він ВСЮДИ і КОЖЕН його знає! 💫',
    }
};

// Language switcher configuration
const languageConfig = {
    en: {
        flag: '🇺🇸',
        direction: 'ltr'
    },
    zh: {
        flag: '🇨🇳',
        direction: 'ltr'
    },
    ar: {
        flag: '🇸🇦',
        direction: 'rtl'
    },
    uk: {
        flag: '🇺🇦',
        direction: 'ltr'
    }
};

function updateContent() {
    // Update document title
    document.title = translations[currentLanguage].title;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            // Handle both textContent and placeholder attributes
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });

    // Update gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        const itemNumber = index + 1;
        const title = item.querySelector('.gallery-title');
        const description = item.querySelector('.gallery-description');
        const year = item.querySelector('.gallery-year');

        const titleKey = `gallery-item${itemNumber}-title`;
        const descKey = `gallery-item${itemNumber}-description`;
        const yearKey = `gallery-item${itemNumber}-year`;

        if (translations[currentLanguage][titleKey]) {
            title.textContent = translations[currentLanguage][titleKey];
        }
        if (translations[currentLanguage][descKey]) {
            description.textContent = translations[currentLanguage][descKey];
        }
        if (translations[currentLanguage][yearKey]) {
            year.textContent = translations[currentLanguage][yearKey];
        }
    });
    
    // Force a DOM reflow to ensure all changes are applied
    document.body.style.display = 'none';
    document.body.offsetHeight; // Force reflow
    document.body.style.display = '';
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = languageConfig[lang].direction;
    
    // Update all translated content
    updateContent();
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
function initializeLanguageSwitcher() {
    const languageSwitcher = document.querySelector('.language-switcher');
    languageSwitcher.innerHTML = ''; // Clear existing buttons
    
    // Create buttons for each language
    Object.keys(translations).forEach(lang => {
        const button = document.createElement('button');
        button.textContent = `${languageConfig[lang].flag} ${translations[lang]['lang_name']}`;
        button.setAttribute('data-lang', lang);
        button.className = lang === currentLanguage ? 'active' : '';
        
        button.addEventListener('click', () => {
            setLanguage(lang);
            document.querySelectorAll('.language-switcher button').forEach(btn => {
                btn.className = btn.getAttribute('data-lang') === lang ? 'active' : '';
            });
        });
        
        languageSwitcher.appendChild(button);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.toLowerCase();
    let defaultLang = 'en';
    
    if (browserLang.startsWith('zh')) defaultLang = 'zh';
    if (browserLang.startsWith('ar')) defaultLang = 'ar';
    if (browserLang.startsWith('uk')) defaultLang = 'uk';
    
    // Initialize language
    setLanguage(storedLang || defaultLang);
    
    // Initialize switcher
    initializeLanguageSwitcher();
});
