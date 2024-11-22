class SupportChat {
    constructor() {
        this.isOpen = false;
        this.createChatUI();
        this.bindEvents();
        
        // Subscribe to language changes
        document.addEventListener('languageChanged', (e) => {
            this.updateChatLanguage(e.detail.language);
        });
        
        // Set initial language
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.updateChatLanguage(currentLang);
    }

    createChatUI() {
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        
        const chatHTML = `
            <div id="support-chat" class="support-chat">
                <div class="chat-header">
                    <img src="images/mascot.svg" alt="Support Mascot" class="chat-mascot">
                    <span class="chat-title"></span>
                    <button class="close-chat">×</button>
                </div>
                <div class="chat-messages">
                    <div class="message support">
                        <img src="images/mascot.svg" alt="Support Mascot" class="message-avatar">
                        <div class="message-content welcome-message">
                        </div>
                    </div>
                </div>
                <div class="chat-input">
                    <textarea class="chat-textarea"></textarea>
                    <button class="send-message">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatHTML);
        
        this.chatElement = document.getElementById('support-chat');
        this.messageInput = this.chatElement.querySelector('.chat-textarea');
        this.messagesContainer = this.chatElement.querySelector('.chat-messages');
        this.chatTitle = this.chatElement.querySelector('.chat-title');
        this.welcomeMessage = this.chatElement.querySelector('.welcome-message');
        
        // Set initial welcome message
        this.updateWelcomeMessage(currentLang);
    }

    bindEvents() {
        // Mascot click handler
        document.querySelector('.mascot').addEventListener('click', () => this.toggleChat());
        
        // Close button handler
        this.chatElement.querySelector('.close-chat').addEventListener('click', () => this.toggleChat());
        
        // Send message handlers
        const sendButton = this.chatElement.querySelector('.send-message');
        sendButton.addEventListener('click', () => this.sendMessage());
        
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize textarea
        this.messageInput.addEventListener('input', () => {
            this.messageInput.style.height = 'auto';
            this.messageInput.style.height = this.messageInput.scrollHeight + 'px';
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatElement.classList.toggle('open', this.isOpen);
        if (this.isOpen) {
            this.messageInput.focus();
            this.scrollToBottom();
        }
    }

    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.messageInput.style.height = 'auto';
        
        // Simulate typing indicator
        this.addTypingIndicator();

        // Simulate response after a delay
        setTimeout(() => {
            this.removeTypingIndicator();
            this.respondToMessage(message);
        }, 1500);
    }

    addMessage(content, type = 'support') {
        const messageHTML = `
            <div class="message ${type}">
                ${type === 'support' ? '<img src="images/mascot.svg" alt="Support Mascot" class="message-avatar">' : ''}
                <div class="message-content">
                    ${content}
                </div>
            </div>
        `;
        this.messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    addTypingIndicator() {
        const typingHTML = `
            <div class="message support typing">
                <img src="images/mascot.svg" alt="Support Mascot" class="message-avatar">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        this.messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const typingIndicator = this.messagesContainer.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    respondToMessage(message) {
        const responses = {
            en: {
                default: "Why did Comic Sans go to therapy? Because it had too many character issues! 😅 But seriously, what's on your mind?",
                greeting: "What's up? I'm like Comic Sans - not taken seriously but definitely fun at parties! 🎉",
                thanks: "No problemo! I've got more Comic Sans facts than a font has glyphs! Want another serving? 🍽️",
                history: "In 1994, Comic Sans walked into Microsoft like 'I'm here to replace Times New Roman!' Spoiler alert: It didn't work out as planned 😂",
                usage: "Where do you use Comic Sans? Everywhere that makes designers cry! Perfect for your grandma's birthday card or making graphic designers lose sleep 🎨",
                creator: "Vincent Connare created me during a Microsoft meeting... probably because he was really bored. Now that's what I call productive procrastination! 🎯",
                download: "Finding Comic Sans is like finding dad jokes - they're pre-installed and impossible to get rid of! 💾",
                goodbye: "See ya! Remember, life is too serious to use serious fonts! 🎭"
            },
            uk: {
                default: "Чому Comic Sans пішов до психолога? Бо мав забагато проблем з характером! 😅 А якщо серйозно, що вас цікавить?",
                greeting: "Що там? Я як Comic Sans - мене не сприймають серйозно, але на вечірках я душа компанії! 🎉",
                thanks: "Нема за що! У мене більше фактів про Comic Sans, ніж у шрифту символів! Хочете ще порцію? 🍽️",
                history: "У 1994 році Comic Sans прийшов у Microsoft і каже: 'Я тут щоб замінити Times New Roman!' Спойлер: Не склалося 😂",
                usage: "Де використовувати Comic Sans? Всюди, де дизайнери будуть плакати! Ідеально для листівки бабусі або щоб дизайнери не спали вночі 🎨",
                creator: "Вінсент Коннаре створив мене під час наради в Microsoft... мабуть, йому було дуже нудно. Оце я розумію продуктивне відлинювання! 🎯",
                download: "Знайти Comic Sans - як знайти татові жарти: вони вже встановлені і від них неможливо позбутися! 💾",
                goodbye: "Бувайте! Пам'ятайте, життя занадто серйозне для серйозних шрифтів! 🎭"
            },
            zh: {
                default: "Comic Sans 为什么去看心理医生？因为它有太多性格问题！😅 说真的，你想知道什么？",
                greeting: "嘿！我就像 Comic Sans - 没人当真但派对上最好玩！🎉",
                thanks: "不客气！我懂的 Comic Sans 知识比字体有字符还多！要再来一份吗？🍽️",
                history: "1994年，Comic Sans 走进微软说：'我来取代 Times New Roman！'剧透：计划没成功 😂",
                usage: "Comic Sans 用在哪？设计师会哭的地方都可以！完美适合奶奶的生日卡片或让设计师失眠 🎨",
                creator: "Vincent Connare 在微软开会时创造了我...可能是因为太无聊了。这才叫高效摸鱼！🎯",
                download: "找 Comic Sans 就像找爸爸笑话 - 预装的，甩都甩不掉！💾",
                goodbye: "拜拜！记住，生活太严肃就用不严肃的字体！🎭"
            },
            ar: {
                default: "لماذا ذهب كوميك سانس إلى المعالج النفسي؟ لأن لديه الكثير من مشاكل الشخصية! 😅 بجدية، ما الذي يدور في ذهنك؟",
                greeting: "ما الأخبار؟ أنا مثل كوميك سانس - لا أحد يأخذني بجدية لكنني روح الحفلات! 🎉",
                thanks: "لا شكر على واجب! لدي من حقائق كوميك سانس أكثر من رموز الخط! تريد المزيد؟ 🍽️",
                history: "في عام 1994، دخل كوميك سانس إلى مايكروسوفت قائلاً: 'جئت لأحل محل تايمز نيو رومان!' سبويلر: لم تنجح الخطة 😂",
                usage: "أين تستخدم كوميك سانس؟ في كل مكان يجعل المصممين يبكون! مثالي لبطاقة عيد ميلاد الجدة أو لجعل المصممين يفقدون النوم 🎨",
                creator: "ابتكرني فينسنت كونار خلال اجتماع في مايكروسوفت... ربما لأنه كان يشعر بالملل الشديد. هذا ما أسميه تسويفاً منتجاً! 🎯",
                download: "العثور على كوميك سانس مثل العثور على نكات الأب - مثبتة مسبقاً ويستحيل التخلص منها! 💾",
                goodbye: "مع السلامة! تذكر، الحياة جادة جداً لاستخدام خطوط جادة! 🎭"
            }
        };

        let userLang = document.documentElement.lang || 'en';
        let langResponses = responses[userLang] || responses.en;
        let response = langResponses.default;
        message = message.toLowerCase();

        if (message.match(/hi|hello|hey|привіт|你好|مرحبا/)) {
            response = langResponses.greeting;
        } else if (message.match(/thank|thanks|дякую|谢谢|شكرا/)) {
            response = langResponses.thanks;
        } else if (message.match(/history|історія|历史|تاريخ/)) {
            response = langResponses.history;
        } else if (message.match(/use|usage|використання|用途|استخدام/)) {
            response = langResponses.usage;
        } else if (message.match(/creator|create|створив|创造|خالق/)) {
            response = langResponses.creator;
        } else if (message.match(/download|завантажити|下载|تحميل/)) {
            response = langResponses.download;
        } else if (message.match(/bye|goodbye|до побачення|再见|وداعا/)) {
            response = langResponses.goodbye;
        }

        this.addMessage(response);
    }

    updateChatLanguage(lang) {
        // Update chat title
        const translations = {
            en: 'Support Chat',
            uk: 'Підтримка Comic Sans',
            zh: 'Comic Sans 支持',
            ar: 'دعم Comic Sans'
        };
        this.chatTitle.textContent = translations[lang] || 'Support Chat';
        
        // Update textarea placeholder
        const placeholders = {
            en: "Type your message here...",
            uk: "Введіть ваше повідомлення тут...",
            zh: "在这里输入您的消息...",
            ar: "اكتب رسالتك هنا..."
        };
        this.messageInput.placeholder = placeholders[lang] || placeholders.en;
        
        // Update welcome message
        this.updateWelcomeMessage(lang);
    }
    
    updateWelcomeMessage(lang) {
        if (this.welcomeMessage) {
            this.welcomeMessage.textContent = this.getWelcomeMessage(lang);
        }
    }

    getWelcomeMessage(lang) {
        const welcomeMessages = {
            en: "👋 Hi! I'm your Comic Sans assistant! How can I help you today?",
            uk: "👋 Привіт! Я ваш помічник Comic Sans! Чим можу допомогти сьогодні?",
            zh: "👋 你好！我是你的 Comic Sans 助手！今天我能帮你什么？",
            ar: "👋 مرحباً! أنا مساعد Comic Sans! كيف يمكنني مساعدتك اليوم؟"
        };
        return welcomeMessages[lang] || welcomeMessages.en;
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Initialize chat when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.supportChat = new SupportChat();
});
