/*===== زبان (فارسی/انگلیسی) =====*/
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_services: "Services",
        nav_skills: "My Skills",
        nav_work: "My Portfolio",
        nav_contact: "Contact Me",
        resume_download: "Download Resume",
        theme_tooltip_to_dark: "Switch to dark mode",
        theme_tooltip_to_light: "Switch to light mode",
        home_title: `Hi, I'm<br><span class="home__title-color">Alireza Akhoondi</span><br>Web Developer`,
        home_subtitle: "A fast, custom website for your business, from idea to delivery and support.",
        home_call: "Call Me",
        home_consult: "Free Consultation",
        about_title: "About Me",
        about_subtitle: "I'm Alireza, a web programmer and developer",
        about_text: "For about four years I've been working in website and web programming, from business websites and online stores to organizational and admin panels. I write the interface with HTML, CSS, JavaScript and React, and for larger projects I turn to Next.js and Vue (with Vuetify).",
        about_text2: "I'm currently building a large online store on my own, from scratch, with an admin panel, an authentication system and API integration; I'm finishing the UI and getting it onto a server. I've worked in a team setting as well as on personal projects, and I've also spent about two years working in WordPress website design.",
        about_cta: "Have an idea? You can turn it into reality with just one click and a free consultation.",
        services_title: "Services",
        services_intro: "Whatever stage your business is at, I design and build the website that fits it: fast, responsive, and easy for you to manage.",
        svc1_title: "Business Website",
        svc1_desc: "A professional, fast website that introduces your business and turns visitors into customers.",
        svc1_features: "<li>Custom responsive design (WordPress or Next.js)</li><li>Technical SEO basics and fast loading</li><li>Contact form, map, and social links</li><li>Easy content editing by you</li>",
        svc1_time: "Typical delivery: 1–2 weeks",
        svc1_for: "Best for: businesses that don't have a website yet, or whose current one is outdated and slow.",
        svc2_for: "Best for: anyone who wants to sell their products online.",
        svc3_for: "Best for: businesses whose daily work (bookings, orders, reports) is still done by hand.",
        svc2_title: "Online Store",
        svc2_desc: "A complete store to sell your products online, with payments and an admin panel.",
        svc2_features: "<li>WooCommerce or a custom Next.js store</li><li>Online payment gateway integration</li><li>Product, order, and customer management</li><li>User accounts and order tracking</li>",
        svc2_time: "Typical delivery: 3–6 weeks",
        svc3_title: "Custom Panels & Systems",
        svc3_desc: "Dashboards and web apps for the work your business does every day, like booking, orders, and internal tools.",
        svc3_features: "<li>Admin panels and dashboards (Vue/Vuetify or React)</li><li>Booking and appointment systems</li><li>Backend and API integration</li><li>Role-based access and secure login</li>",
        svc3_time: "Delivery depends on project scope",
        services_cta: "Get a Quote",
        services_note: "After delivery, I can also provide monthly support and maintenance (backups, updates, and SEO reports).",
        process_title: "How We Work Together",
        step1_num: "1",
        step1_title: "Consultation and agreement",
        step1_desc: "In a short free consultation I listen to your goals and needs; then we agree on the scope, delivery time, and cost before anything starts.",
        step2_num: "2",
        step2_title: "Design",
        step2_desc: "I design the structure and look of the site around your brand and goals, and get your feedback before development starts.",
        step3_num: "3",
        step3_title: "Development",
        step3_desc: "I build the approved design step by step and show you the result at each stage, so we can apply your feedback along the way.",
        step4_num: "4",
        step4_title: "Delivery and support",
        step4_desc: "After final testing on mobile and desktop, I hand the project over, and ongoing support and maintenance can continue if you need it.",
        faq_title: "Frequently Asked Questions",
        faq1_q: "My idea isn't fully formed yet. Can I still get a consultation?",
        faq1_a: "Yes. That's exactly what the free consultation is for; tell me your goal or problem and we'll find the right path together.",
        faq2_q: "How are cost and delivery time decided?",
        faq2_a: "It depends on the type and size of the project. After the consultation, once the scope is clear, I tell you the price and delivery time before we start.",
        faq3_q: "After delivery, can I change the website's content myself?",
        faq3_a: "Yes. The site is built so you can edit text, images, and products yourself without technical knowledge.",
        faq4_q: "Do you offer support after delivery?",
        faq4_a: "Yes. Monthly support and maintenance (backups, updates, and SEO reports) is available.",
        cta_title: "Have a project in mind?",
        cta_text: "A short, free conversation is enough to find out which approach suits your business best.",
        skills_title: "My Skills",
        skills_subtitle: "Professional Skills",
        skills_group_ui: "Building the interface",
        skills_group_frameworks: "Frameworks and libraries",
        skills_group_cms: "Content management",
        work_title: "My Portfolio",
        popup_status_done: "Completed",
        popup_status_progress: "In development",
        popup_kind_practice: "Practice project",
        popup_kind_active: "Active project",
        proj1_title: "Lugx Gaming",
        proj2_title: "Online Game Shop",
        proj3_title: "Barista Cafe",
        proj4_title: "Vue SPA",
        proj5_title: "Orkideh Store",
        work_new_project: "New Project",
        work_coming_soon: "Coming Soon",
        contact_title: "Contact Me",
        contact_lead: "For a free consultation or a quote, fill in the form below; I'll get back to you as soon as I can.",
        req_legend: "Request type",
        req_consult: "Free consultation",
        req_quote: "Get a quote",
        svc_label: "Service you're interested in",
        opt_service_unsure: "Not sure yet",
        contact_name: "First name",
        contact_lastname: "Last name",
        contact_phone: "Phone number",
        contact_telegram: "Telegram ID",
        country_label: "Country code",
        country_search: "Search country or code",
        country_none: "No results",
        channel_legend: "I prefer that you communicate with me this way",
        ch_call: "Phone call",
        ch_telegram: "Telegram",
        contact_email: "Email (optional)",
        time_group_legend: "I prefer that you contact me at this time",
        day_label: "Suitable day",
        day_any: "Any day",
        day_sat: "Saturday",
        day_sun: "Sunday",
        day_mon: "Monday",
        day_tue: "Tuesday",
        day_wed: "Wednesday",
        day_thu: "Thursday",
        day_fri: "Friday",
        time_label: "Suitable time",
        time_any: "Any time",
        time_morning: "Morning (9 to 12)",
        time_afternoon: "Afternoon (12 to 17)",
        time_evening: "Evening (17 to 21)",
        contact_message: "Tell me about your project or need",
        contact_submit: "Send Request",
        contact_submitting: "Submitting...",
        direct_text: "You can also get in touch with me directly.",
        direct_tg: "Telegram",
        direct_call: "Phone call",
        footer_title: "Alireza",
        footer_copy: "© {year} Alireza Akhoondi — All rights reserved",
        err_name_required: "First name is required.",
        err_lastname_required: "Last name is required.",
        err_phone_required: "Phone number is required.",
        err_phone_invalid: "Please enter a valid phone number (without the leading zero).",
        err_telegram_required: "Telegram ID is required.",
        err_telegram_invalid: "Please enter a valid Telegram ID (5-32 characters: letters, digits and _).",
        err_email_invalid: "Please enter a valid email address.",
        err_message_required: "Please describe your project or need.",
        err_message_short: "Please write at least 10 characters.",
        alert_success_title: "Your request has been sent!",
        alert_success_text: "Thank you 🙏. I'll contact you soon in the way you chose.",
        alert_error_title: "Error sending message!",
        alert_error_text: "Please try again.",
        page_title: "Website Design by Alireza Akhoondi (علیرضا آخوندی) | Online Stores",
        page_description: "Website design by Alireza Akhoondi (علیرضا آخوندی): business websites, online stores and custom admin panels built with WordPress, React and Next.js. Free consultation."
    },
    fa: {
        nav_home: "خانه",
        nav_about: "درباره من",
        nav_services: "خدمات",
        nav_skills: "مهارت‌های من",
        nav_work: "نمونه‌کارهای من",
        nav_contact: "ارتباط با من",
        resume_download: "دانلود رزومه",
        theme_tooltip_to_dark: "تغییر به حالت تاریک",
        theme_tooltip_to_light: "تغییر به حالت روشن",
        home_title: `سلام،<br><span class="home__title-color">علیرضا آخوندی</span> هستم<br>توسعه‌دهنده وب`,
        home_subtitle: "برای کسب‌وکار شما یک سایت اختصاصی و سریع طراحی می‌کنم؛ از ایده تا تحویل و پشتیبانی.",
        home_call: "تماس با من",
        home_consult: "مشاوره رایگان",
        about_title: "درباره من",
        about_subtitle: "من علیرضا هستم؛ برنامه‌نویس و توسعه‌دهندۀ وب",
        about_text: "حدود ۴ سال است که در حوزۀ سایت و برنامه‌نویسی وب فعالیت دارم؛ از سایت معرفی کسب‌وکار و فروشگاه اینترنتی گرفته تا پنل‌های سازمانی و مدیریتی. ظاهر و بخش رابط کاربری را با HTML، CSS، JavaScript و React می‌نویسم و برای پروژه‌های بزرگ‌تر از Next.js و Vue (به‌همراه Vuetify) کمک می‌گیرم.",
        about_text2: "الان به‌تنهایی مشغول ساخت یک فروشگاه آنلاین بزرگ از صفر هستم، با پنل مدیریت، سیستم احراز هویت و اتصال به APIها؛ رابط کاربری را تکمیل می‌کنم و آن را روی سرور می‌برم. هم در یک گروه تیمی کار کرده‌ام و هم روی پروژه‌های شخصی، و حدود ۲ سال هم در زمینۀ طراحی سایت‌های وردپرسی فعالیت داشته‌ام.",
        about_cta: "ایده‌ای دارید؟ می‌توانید ایدۀ خود را تنها با یک کلیک و مشاورۀ رایگان به واقعیت تبدیل کنید.",
        services_title: "خدمات",
        services_intro: "کسب‌وکارتان در هر مرحله‌ای باشد، سایتی متناسب با آن می‌سازم: سریع، واکنش‌گرا و ساده برای مدیریت شما.",
        svc1_title: "سایت معرفی کسب‌وکار",
        svc1_desc: "یک سایت حرفه‌ای و سریع که کسب‌وکارتان را معرفی می‌کند و بازدیدکننده را به مشتری تبدیل می‌کند.",
        svc1_features: "<li>طراحی اختصاصی و واکنش‌گرا (وردپرس یا Next.js)</li><li>سئوی فنی پایه و سرعت بالای بارگذاری</li><li>فرم تماس، نقشه و لینک شبکه‌های اجتماعی</li><li>امکان ویرایش آسان محتوا توسط خودتان</li>",
        svc1_time: "زمان تحویل معمول: ۱ تا ۲ هفته",
        svc1_for: "مناسب برای: کسب‌وکارهایی که هنوز سایت ندارند یا سایت فعلی‌شان قدیمی و کند شده است.",
        svc2_for: "مناسب برای: کسانی که می‌خواهند محصولاتشان را آنلاین بفروشند.",
        svc3_for: "مناسب برای: کسب‌وکارهایی که کارهای روزمره‌شان (نوبت، سفارش، گزارش) هنوز دستی انجام می‌شود.",
        svc2_title: "فروشگاه اینترنتی",
        svc2_desc: "یک فروشگاه کامل برای فروش آنلاین محصولاتتان، با پرداخت اینترنتی و پنل مدیریت.",
        svc2_features: "<li>ووکامرس یا فروشگاه اختصاصی با Next.js</li><li>اتصال به درگاه پرداخت آنلاین</li><li>مدیریت محصولات، سفارش‌ها و مشتریان</li><li>حساب کاربری و پیگیری سفارش</li>",
        svc2_time: "زمان تحویل معمول: ۳ تا ۶ هفته",
        svc3_title: "پنل و سیستم اختصاصی",
        svc3_desc: "داشبورد و اپلیکیشن وب برای کارهای روزمره کسب‌وکارتان؛ مثل نوبت‌دهی، سفارش‌ها و ابزارهای داخلی.",
        svc3_features: "<li>پنل مدیریت و داشبورد (Vue/Vuetify یا React)</li><li>سیستم نوبت‌دهی و رزرو</li><li>اتصال به بک‌اند و APIها</li><li>سطوح دسترسی و ورود امن</li>",
        svc3_time: "زمان تحویل بسته به حجم پروژه",
        services_cta: "دریافت قیمت",
        services_note: "پس از تحویل، پشتیبانی و نگهداری ماهانه (بکاپ، به‌روزرسانی و گزارش سئو) هم قابل ارائه است.",
        process_title: "مراحل همکاری",
        step1_num: "۱",
        step1_title: "مشاوره و توافق",
        step1_desc: "در یک مشاوره‌ی کوتاه و رایگان، هدف و نیاز شما را می‌شنوم؛ بعد دامنه‌ی کار، زمان تحویل و هزینه را پیش از شروع با هم مشخص می‌کنیم.",
        step2_num: "۲",
        step2_title: "طراحی",
        step2_desc: "ساختار و ظاهر سایت را متناسب با برند و هدف شما طراحی می‌کنم و پیش از شروع توسعه، نظرتان را می‌گیرم.",
        step3_num: "۳",
        step3_title: "توسعه",
        step3_desc: "طراحیِ تأییدشده را مرحله‌به‌مرحله پیاده می‌کنم و نتیجه را در هر مرحله نشانتان می‌دهم تا نظرتان را اعمال کنیم.",
        step4_num: "۴",
        step4_title: "تحویل و پشتیبانی",
        step4_desc: "پس از آزمایش نهایی روی موبایل و دسکتاپ، پروژه را تحویل می‌دهم و در صورت نیاز، پشتیبانی و نگهداری ادامه پیدا می‌کند.",
        faq_title: "سوالات متداول",
        faq1_q: "ایده‌ام هنوز کامل نیست؛ باز هم می‌توانم مشاوره بگیرم؟",
        faq1_a: "بله. مشاوره‌ی رایگان دقیقاً برای همین است؛ هدف یا مشکلتان را بگویید تا با هم مسیر مناسب را پیدا کنیم.",
        faq2_q: "هزینه و زمان تحویل چطور مشخص می‌شود؟",
        faq2_a: "بسته به نوع و حجم پروژه فرق می‌کند. بعد از مشاوره و مشخص شدن دامنه‌ی کار، قیمت و زمان تحویل را پیش از شروع به شما اعلام می‌کنم.",
        faq3_q: "بعد از تحویل، خودم می‌توانم محتوای سایت را تغییر بدهم؟",
        faq3_a: "بله. سایت طوری ساخته می‌شود که متن، تصویر و محصولات را بدون دانش فنی خودتان ویرایش کنید.",
        faq4_q: "بعد از تحویل هم پشتیبانی می‌کنید؟",
        faq4_a: "بله. پشتیبانی و نگهداری ماهانه (بکاپ، به‌روزرسانی و گزارش سئو) قابل ارائه است.",
        cta_title: "پروژه‌ای در ذهن دارید؟",
        cta_text: "یک گفتگوی کوتاه و رایگان کافی است تا بدانید چه راهی برای کسب‌وکارتان مناسب‌تر است.",
        skills_title: "مهارت‌های من",
        skills_subtitle: "مهارت‌های حرفه‌ای",
        skills_group_ui: "ساخت ظاهر سایت",
        skills_group_frameworks: "فریم‌ورک‌ها و کتابخانه‌ها",
        skills_group_cms: "سیستم مدیریت محتوا",
        work_title: "نمونه‌کارهای من",
        popup_status_done: "اتمام‌یافته",
        popup_status_progress: "در دست توسعه",
        popup_kind_practice: "پروژه تمرینی",
        popup_kind_active: "پروژه فعال",
        proj1_title: "Lugx Gaming",
        proj2_title: "فروشگاه آنلاین بازی",
        proj3_title: "کافه باریستا",
        proj4_title: "Vue SPA",
        proj5_title: "فروشگاه ارکیده",
        work_new_project: "پروژه‌ی جدید",
        work_coming_soon: "به‌زودی",
        contact_title: "ارتباط با من",
        contact_lead: "برای مشاوره‌ی رایگان یا دریافت قیمت، فرم زیر را پر کنید؛ در اولین فرصت با شما تماس می‌گیرم.",
        req_legend: "نوع درخواست",
        req_consult: "مشاوره رایگان",
        req_quote: "دریافت قیمت",
        svc_label: "خدمت مورد نظر",
        opt_service_unsure: "هنوز مطمئن نیستم",
        contact_name: "نام",
        contact_lastname: "نام خانوادگی",
        contact_phone: "شماره تماس",
        contact_telegram: "آیدی تلگرام",
        country_label: "کد کشور",
        country_search: "جستجوی کشور یا کد",
        country_none: "موردی پیدا نشد",
        channel_legend: "ترجیح می‌دهم از این راه با من در ارتباط باشید",
        ch_call: "تماس تلفنی",
        ch_telegram: "تلگرام",
        contact_email: "ایمیل (اختیاری)",
        time_group_legend: "ترجیح می‌دهم در این زمان با من در ارتباط باشید",
        day_label: "روز مناسب",
        day_any: "هر روز",
        day_sat: "شنبه",
        day_sun: "یکشنبه",
        day_mon: "دوشنبه",
        day_tue: "سه‌شنبه",
        day_wed: "چهارشنبه",
        day_thu: "پنجشنبه",
        day_fri: "جمعه",
        time_label: "ساعت مناسب",
        time_any: "هر ساعتی",
        time_morning: "صبح (۹ تا ۱۲)",
        time_afternoon: "بعدازظهر (۱۲ تا ۱۷)",
        time_evening: "عصر (۱۷ تا ۲۱)",
        contact_message: "درباره‌ی پروژه یا نیازتان بنویسید",
        contact_submit: "ارسال درخواست",
        contact_submitting: "در حال ارسال...",
        direct_text: "همچنین می‌توانید مستقیماً با من در ارتباط باشید",
        direct_tg: "تلگرام",
        direct_call: "تماس تلفنی",
        footer_title: "علیرضا",
        footer_copy: "{year} © تمام حقوق برای علیرضا آخوندی محفوظ است",
        err_name_required: "نام الزامی است.",
        err_lastname_required: "نام خانوادگی الزامی است.",
        err_phone_required: "شماره تماس الزامی است.",
        err_phone_invalid: "شماره تماس معتبر نیست؛ آن را بدون صفر اول وارد کنید.",
        err_telegram_required: "آیدی تلگرام الزامی است.",
        err_telegram_invalid: "آیدی تلگرام معتبر نیست (۵ تا ۳۲ کاراکتر: حروف انگلیسی، عدد و _).",
        err_email_invalid: "لطفاً یک ایمیل معتبر وارد کنید.",
        err_message_required: "لطفاً پروژه یا نیازتان را بنویسید.",
        err_message_short: "لطفاً دست‌کم ۱۰ حرف بنویسید.",
        alert_success_title: "درخواست شما ارسال شد!",
        alert_success_text: "ممنون 🙏. به‌زودی از همان راهی که انتخاب کردید با شما تماس می‌گیرم.",
        alert_error_title: "خطا در ارسال پیام!",
        alert_error_text: "لطفاً دوباره تلاش کنید.",
        page_title: "طراحی سایت علیرضا آخوندی | فروشگاه اینترنتی",
        page_description: "طراحی سایت علیرضا آخوندی : سایت معرفی کسب‌وکار، فروشگاه اینترنتی و پنل مدیریت اختصاصی با وردپرس، React و Next.js. مشاوره رایگان."
    }
};

// مقدار اولیه از زبان ذخیره‌شده/پیش‌فرض (فارسی) خونده می‌شه، نه 'en'؛ چون ScrollReveal می‌تونه عنوان بخش‌های نزدیک به بالای صفحه رو
// (مثل «درباره من» روی صفحه‌های بلند) قبل از اجرای applyLanguage تایپ کنه و با 'en' عنوان انگلیسی تایپ می‌شد
let currentLang = detectInitialLang();

// انگلیسی: سال میلادی — فارسی: سال شمسی با ارقام فارسی
function getFooterYear(lang) {
    const now = new Date();
    if (lang === 'fa') {
        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(now);
    }
    return String(now.getFullYear());
}

// کدهایی که باید بعد از هر تغییر زبان دوباره اجرا بشن (مثل ساخت دوباره‌ی اسم کشورها و لیست‌های کشویی فرم)
const languageHooks = [];

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key].replace('{year}', getFooterYear(lang));
        }
    });

    // برای تجربه‌ی کاربری (عنوان تب و توضیح مرورگر)؛ متن فارسی پیش‌فرض هم مستقیماً داخل index.html هست، پس نسخه‌ی ایندکس‌شده در گوگل هم فارسیه
    document.title = translations[lang].page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[lang].page_description);

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        const targetLang = lang === 'fa' ? 'en' : 'fa';
        const label = langToggleBtn.querySelector('.lang-toggle__label');
        const badge = langToggleBtn.querySelector('.lang-toggle__badge');
        if (label) label.textContent = targetLang === 'en' ? 'English' : 'فارسی';
        if (badge) badge.textContent = targetLang === 'en' ? 'EN' : 'فا';
    }

    try { localStorage.setItem('site-lang', lang); } catch (e) {}

    // چون متن tooltip دکمه‌ی تم به زبان بستگی داره، با تغییر زبان دوباره به‌روزش می‌کنیم
    updateThemeTooltip();

    // رزومه از ۷۶۸ به بالا فقط آیکونه؛ tooltip مرورگرش باید به زبان فعلی باشه
    document.querySelectorAll('.resume-download').forEach(link => {
        link.title = translations[lang].resume_download;
    });

    languageHooks.forEach(hook => hook(lang));
}

function detectInitialLang() {
    try {
        const saved = localStorage.getItem('site-lang');
        if (saved === 'en' || saved === 'fa') return saved;
    } catch (e) {}
    // بدون تنظیم قبلی، زبان پیش‌فرض سایت فارسیه (صرف‌نظر از زبان مرورگر)
    return 'fa';
}

/*===== تم (روشن/تاریک) =====*/
function applyTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') theme = 'light';

    document.documentElement.setAttribute('data-theme', theme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        // آیکون همیشه نشون‌دهنده‌ی تمی هست که با کلیک بهش می‌ری (مثل دکمه‌ی زبان)
        themeToggleBtn.innerHTML = theme === 'dark'
            ? "<i class='bx bx-sun'></i>"
            : "<i class='bx bx-moon'></i>";
    }

    // رنگ نوار آدرس مرورگر موبایل هم هماهنگ با تم بشه
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0f1720' : '#3e6ff4');

    try { localStorage.setItem('site-theme', theme); } catch (e) {}

    updateThemeTooltip();
}

// متن tooltip دکمه‌ی تم رو متناسب با تمی که با کلیک بهش می‌ریم (و زبان فعلی) تنظیم می‌کنه
function updateThemeTooltip() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const key = isDark ? 'theme_tooltip_to_light' : 'theme_tooltip_to_dark';
    themeToggleBtn.setAttribute('data-tooltip', translations[currentLang][key]);
}

function detectInitialTheme() {
    try {
        const saved = localStorage.getItem('site-theme');
        if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

// تغییر تم با انیمیشن دایره‌ای که از نقطه‌ی کلیک باز می‌شه (شبیه تلگرام)، با استفاده از View Transitions API
function toggleTheme(event) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // مرورگرهایی که این API رو ندارن (مثل فایرفاکس) همون رفتار قبلی رو دارن: تعویض آنی تم
    if (!document.startViewTransition || reduceMotion) {
        applyTheme(newTheme);
        return;
    }

    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
        applyTheme(newTheme);
    });

    transition.ready.then(() => {
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`
                ]
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)'
            }
        );
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(detectInitialLang());
    applyTheme(detectInitialTheme());

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            applyLanguage(currentLang === 'fa' ? 'en' : 'fa');
        });
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (event) => {
            toggleTheme(event);
        });
    }
});

/*===== MENU SHOW =====*/
const navToggleBtn = document.getElementById('nav-toggle')
const navMenuEl = document.getElementById('nav-menu')
const navOverlayEl = document.getElementById('nav-overlay')

// باز/بسته کردن سایدبار موبایل؛ کلاس سایدبار، حالت ضربدری دکمه، aria، لایه‌ی محو‌کننده‌ی پشت
// و قفل اسکرول صفحه‌ی اصلی (کلاس menu-open روی html) همه از همین‌جا با هم هماهنگ می‌شن
function setMenuOpen(isOpen){
    if(!navMenuEl) return
    navMenuEl.classList.toggle('show', isOpen)
    if(navToggleBtn){
        navToggleBtn.classList.toggle('open', isOpen)
        navToggleBtn.setAttribute('aria-expanded', String(isOpen))
    }
    if(navOverlayEl) navOverlayEl.classList.toggle('is-visible', isOpen)
    document.documentElement.classList.toggle('menu-open', isOpen)
}

if(navToggleBtn && navMenuEl){
    navToggleBtn.addEventListener('click', ()=>{
        setMenuOpen(!navMenuEl.classList.contains('show'))
    })
}

// کلیک روی بخش محو‌شده‌ی بیرون از سایدبار، منو رو نمی‌بنده؛ فقط دکمه‌ی ضربدر این کار رو می‌کنه.
// به‌جاش یه تپش رو همون دکمه اجرا می‌شه تا به کاربر نشون بده باید همونجا رو بزنه
function pulseNavToggle(){
    if(!navToggleBtn) return
    navToggleBtn.classList.remove('pulse')
    void navToggleBtn.offsetWidth
    navToggleBtn.classList.add('pulse')
}
if(navToggleBtn) navToggleBtn.addEventListener('animationend', ()=> navToggleBtn.classList.remove('pulse'))
if(navOverlayEl) navOverlayEl.addEventListener('click', pulseNavToggle)

// اگه سایدبار باز باشه و عرض پنجره به حالت دسکتاپ برسه، حالت باز (و قفل اسکرول) نباید باقی بمونه
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if(e.matches) setMenuOpen(false)
})

/*===== PRESS FEEDBACK (جایگزین :hover/:active که روی لمس گیر می‌کنن) =====*/
// دکمه‌هایی مثل تماس/دانلود رزومه/شبکه‌های اجتماعی کاربر رو از صفحه خارج می‌کنن (برنامه تلفن، مرورگر جدید و...)؛
// وقتی برمی‌گرده، :hover/:active مرورگر گاهی روشون "گیر" کرده می‌مونه. به‌جاش همین کلاس is-pressed
// فقط برای مدت واقعی لمس/فشردن با pointer event ها کنترل می‌شه و با رها شدن یا برگشتن به صفحه همیشه پاک می‌شه
// دکمه‌ی nav-toggle از این مکانیزم مستثناست؛ بالا رفتنش فقط به کلاس open (در پایین همین فایل) وابسته‌ست
const PRESSABLE_SELECTOR = '.flag-button:not(.nav__toggle), .lang-toggle, .theme-toggle, .resume-download, .nav__cta, .chip'
let pressedEl = null
function setPressed(el){
    if(pressedEl && pressedEl !== el) pressedEl.classList.remove('is-pressed')
    pressedEl = el
    if(pressedEl) pressedEl.classList.add('is-pressed')
}
document.addEventListener('pointerdown', e => {
    const el = e.target.closest(PRESSABLE_SELECTOR)
    if(el) setPressed(el)
})
document.addEventListener('pointerup', () => setPressed(null))
document.addEventListener('pointercancel', () => setPressed(null))
document.addEventListener('visibilitychange', () => { if(document.visibilityState === 'visible') setPressed(null) })
window.addEventListener('pageshow', () => setPressed(null))
window.addEventListener('blur', () => setPressed(null))

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

// وقتی روی هر nav__link کلیک می‌شه، سایدبار (و لایه‌ی محو‌کننده/قفل اسکرول) بسته می‌شه
navLink.forEach(n => n.addEventListener('click', ()=> setMenuOpen(false)))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const headerEl = document.querySelector('.l-header');

// متغیرهایی برای تشخیص اینکه آیا اسکرول توسط کلیک کاربر انجام شده است یا خیر
let isClickScrolling = false;
let scrollTimeout;

const setActiveLink = (id) => {
    document.querySelectorAll('.nav__menu .nav__link.active-link').forEach(link => link.classList.remove('active-link'));
    const activeLink = document.querySelector('.nav__menu a[href="#' + id + '"]');
    if (activeLink) activeLink.classList.add('active-link');
}

// ۱. مدیریت کلیک روی لینک‌های منو
const navLinksArray = document.querySelectorAll('.nav__link');
navLinksArray.forEach(link => {
    link.addEventListener('click', function(e) {
        // فعال‌سازی حالت "اسکرول با کلیک"
        isClickScrolling = true;
        
        // بلافاصله لینک هدف را اکتیو می‌کنیم تا منتظر آبزرور نماند
        document.querySelectorAll('.nav__menu .nav__link.active-link').forEach(n => n.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});

// ۲. تشخیص پایان اسکرول برای روشن کردن مجدد آبزرور
window.addEventListener('scroll', () => {
    if (isClickScrolling) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isClickScrolling = false; // اسکرول به پایان رسید
        }, 150); // ۱۵۰ میلی‌ثانیه توقف به معنای پایان اسکرول نرم است
    }
});

const headerHeight = headerEl ? headerEl.offsetHeight : 58;

const sectionObserver = new IntersectionObserver((entries) => {
    // ۳. اگر در حال اسکرول ناشی از کلیک هستیم، آبزرور هیچ کلاسی را تغییر ندهد
    if (isClickScrolling) return;

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
        }
    });
}, {
    root: null,
    rootMargin: `-${headerHeight}px 0px -60% 0px`,
    threshold: 0
});

sections.forEach(section => sectionObserver.observe(section));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle',{});
sr.reveal('.home__img, .about__subtitle, .about__text, .about__actions, .skills__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});
sr.reveal('.skills__group, .services__card, .work__img, .contact__input',{
    interval: 200,
    // بعد از تمام شدن انیمیشن ورود، یه کلاس اضافه می‌کنیم تا ترنزیشن سریع هاور
    // (رفتن و برگشتن) بدون تداخل با ترنزیشن کند ScrollReveal اعمال بشه
    afterReveal: el => el.classList.add('is-revealed')
});

// مراحل همکاری، سوالات متداول و بنر دعوت به اقدام
sr.reveal('.services__note, .process__step, .faq__item, .cta-band__inner', {
    interval: 150,
    distance: '30px',
    // برای .faq__item: بعد از ورود، ترنزیشن سریع هاور بدون تداخل با ترنزیشن کند ScrollReveal (CSS: .faq__item.is-revealed)
    afterReveal: el => el.classList.add('is-revealed')
});

/*===== سوالات متداول: باز و بسته شدن نرم =====
   <details> به‌تنهایی محتوا را ناگهانی نشان می‌دهد؛ پس کلیک را خودمان می‌گیریم، کلاس is-open را فوراً می‌گذاریم (فلش همان لحظه می‌چرخد)
   و ارتفاع پنل جواب را از مقدار فعلی تا مقدار هدف انیمیت می‌کنیم. اتریبیوت open تا پایان انیمیشنِ بستن می‌ماند تا محتوا وسط راه ناپدید نشود. */
document.querySelectorAll('.faq__item').forEach(item => {
    const summary = item.querySelector('.faq__q');
    const panel = item.querySelector('.faq__panel');
    if (!summary || !panel) return;
    let animation = null;

    summary.addEventListener('click', event => {
        event.preventDefault();
        const opening = !item.classList.contains('is-open');
        item.classList.toggle('is-open', opening);

        // اگر کاربر وسط انیمیشنِ قبلی دوباره کلیک کند، از همان ارتفاع و شفافیتِ فعلی ادامه می‌دهیم.
        // برای <details> بسته نباید offsetHeight خوانده شود: مرورگر ارتفاع طبیعیِ پنلِ پنهان را برمی‌گرداند، نه ۰
        const wasOpen = item.open;
        const fromHeight = wasOpen ? panel.offsetHeight : 0;
        const fromOpacity = wasOpen ? (parseFloat(getComputedStyle(panel).opacity) || 0) : 0;
        if (animation) animation.cancel();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            item.open = opening;
            return;
        }

        item.open = true;
        const toHeight = opening ? panel.scrollHeight : 0;
        animation = panel.animate(
            { height: [fromHeight + 'px', toHeight + 'px'], opacity: [fromOpacity, opening ? 1 : 0] },
            { duration: 380, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
        );
        const current = animation;
        current.onfinish = () => {
            item.open = opening;
            if (animation === current) animation = null;
        };
    });
});

// افکت تایپ برای عنوان بخش‌ها (درباره من/مهارت‌های من/نمونه‌کارهای من/ارتباط با من)؛
// فقط یک‌بار و همون لحظه‌ای که هنگام اسکرول وارد دید می‌شن اجرا می‌شه (نه در تعویض زبان).
// هم‌زمان با تایپ شدن هر حرف، --underline-progress هم به‌روز می‌شه تا خط زیر عنوان (در styles.css)
// با همون سرعت رشد کنه؛ جهت رشدش (از چپ یا راست) با html[dir] در CSS تعیین می‌شه.
function typeSectionTitle(titleEl) {
    const textEl = titleEl.querySelector('[data-i18n]');
    if (!textEl || textEl.dataset.typed === 'true') return;
    textEl.dataset.typed = 'true';

    // متن رو از دیکشنری ترجمه (بر اساس زبان فعلی) می‌خونیم، نه از textContent فعلی المنت؛
    // چون ممکنه این افکت قبل از اینکه applyLanguage اجرا بشه (مثلاً اگه عنوان همون ابتدا در دید باشه) صدا زده بشه
    const key = textEl.getAttribute('data-i18n');
    const fullText = (translations[currentLang] && translations[currentLang][key]) || textEl.textContent;
    const totalChars = fullText.length;
    if (!totalChars) return;

    textEl.textContent = '';

    // سرعت تایپ: هر حرف ۹۰ میلی‌ثانیه (کاملاً قابل مشاهده)، با سقف کلی برای عنوان‌های خیلی بلند
    const perCharDelay = 90;
    const totalDuration = Math.min(2200, totalChars * perCharDelay);
    const stepDuration = totalDuration / totalChars;

    // خط زیر عنوان رو مستقل از مراحل تایپ، با یک ترنزیشن CSS پیوسته (نه پله‌ای) از صفر تا صد پر می‌کنیم؛
    // این‌طوری هیچ‌وقت وسط راه پرش نمی‌خوره و دقیقاً هم‌زمان با تمام شدن تایپ به انتها می‌رسه
    titleEl.style.setProperty('--underline-duration', totalDuration + 'ms');
    titleEl.style.setProperty('--underline-progress', '0');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            titleEl.style.setProperty('--underline-progress', '1');
        });
    });

    let index = 0;

    function typeStep() {
        index++;
        textEl.textContent = fullText.slice(0, index);
        if (index < totalChars) setTimeout(typeStep, stepDuration);
    }

    setTimeout(typeStep, stepDuration);
}

sr.reveal('.section-title', {
    duration: 400,
    delay: 0,
    distance: '20px',
    beforeReveal: typeSectionTitle
});

// داده‌های پروژه‌ها (عنوان/توضیح دوزبانه)
const projects = {
    project1: {
        title: { en: "Lugx Gaming", fa: "Lugx Gaming" },
        status: 'done',
        kind: 'practice',
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A multi-page gaming e-commerce storefront covering the full shopping journey, from the homepage to product details, the shop listing, and sign-in.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Challenge and Approach</p>
                    <div class="popup__desc-inner">
                        <p>The main challenge was keeping several independent pages (home, shop, product details, sign-in) consistent as one storefront. I designed the pages myself and built them on Bootstrap 5, with the filterable and sortable product grid in Isotope.js and the carousels in Owl Carousel and Swiper, all in a mobile-first layout.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Tech Stack</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Bootstrap 5</li><li>jQuery</li><li>Isotope.js</li><li>Owl Carousel</li><li>Swiper</li><li>Animate.css</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Key Features</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>Filterable and sortable shop grid (Isotope.js)</li>
                    <li>Homepage banner and testimonial carousels</li>
                    <li>Dedicated product details, contact, and sign-in/login pages</li>
                    <li>Scroll-triggered entrance animations throughout</li>
                    <li>Fully responsive, mobile-first layout</li>
                </ul>
                    </div>
                </div>`,
            fa: `<div class="popup__desc-card">
                    <p class="popup__desc-label">معرفی</p>
                    <div class="popup__desc-inner">
                        <p>یک فروشگاه چندصفحه‌ای گیمینگ که کل مسیر خرید، از صفحه‌ی اصلی تا جزئیات محصول، لیست فروشگاه و صفحه‌ی ورود رو پوشش می‌ده.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">چالش و رویکرد</p>
                    <div class="popup__desc-inner">
                        <p>چالش اصلی، یکدست نگه داشتن چند صفحه‌ی مستقل (خانه، فروشگاه، جزئیات محصول و ورود) در قالب یک فروشگاه بود. طراحی صفحه‌ها را خودم انجام دادم و آن‌ها را روی Bootstrap 5 ساختم؛ گرید قابل فیلتر و مرتب‌سازی محصولات با Isotope.js و اسلایدرها با Owl Carousel و Swiper پیاده شده و چیدمان از ابتدا موبایل‌محور است.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">تکنولوژی‌ها</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Bootstrap 5</li><li>jQuery</li><li>Isotope.js</li><li>Owl Carousel</li><li>Swiper</li><li>Animate.css</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">ویژگی‌های کلیدی</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>گرید فروشگاه با قابلیت فیلتر و مرتب‌سازی (Isotope.js)</li>
                    <li>اسلایدرهای بنر و معرفی در صفحه‌ی اصلی</li>
                    <li>صفحات اختصاصی جزئیات محصول، تماس و ورود/ثبت‌نام</li>
                    <li>انیمیشن‌های نرم هنگام اسکرول در سراسر صفحه</li>
                    <li>طراحی کاملاً واکنش‌گرا و موبایل‌محور</li>
                </ul>
                    </div>
                </div>`
        },
        media: [
            "assets/img/g1.jpg",
            "assets/img/gm1.mp4"
        ]
    },
    project2: {
        title: { en: "Online Game Shop", fa: "فروشگاه آنلاین بازی" },
        status: 'done',
        kind: 'practice',
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A single-page e-commerce app for digital games and gaming consoles, built with a component-driven React architecture and a mock REST API for realistic client-server interaction.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Challenge and Approach</p>
                    <div class="popup__desc-inner">
                        <p>To make client-server communication feel realistic, I used a mock REST API (json-server) instead of hard-coded data. Data fetching and caching run through React Query, so search results, filters and the cart respond without reloading the page, and React Router handles navigation between pages.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Tech Stack</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>React</li><li>React Router</li><li>TanStack Query</li><li>Axios</li><li>Material UI</li><li>Swiper</li><li>json-server</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Key Features</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>Category-based browsing (consoles, featured titles, special collections)</li>
                    <li>Dedicated search page with live results</li>
                    <li>Product filtering and a card-based catalog grid</li>
                    <li>Shopping cart module</li>
                    <li>Async data fetching and caching via React Query against a mock backend</li>
                </ul>
                    </div>
                </div>`,
            fa: `<div class="popup__desc-card">
                    <p class="popup__desc-label">معرفی</p>
                    <div class="popup__desc-inner">
                        <p>یک اپلیکیشن تک‌صفحه‌ای فروش بازی و کنسول‌های گیمینگ، با معماری کامپوننت‌محور React و یک REST API شبیه‌سازی‌شده برای تجربه‌ی واقعی ارتباط کلاینت-سرور.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">چالش و رویکرد</p>
                    <div class="popup__desc-inner">
                        <p>برای اینکه ارتباط کلاینت و سرور واقعی به نظر برسد، به‌جای داده‌ی ثابت از یک REST API شبیه‌سازی‌شده (json-server) استفاده کردم. دریافت و کش داده‌ها با React Query انجام می‌شود تا جستجو، فیلتر و سبد خرید بدون بارگذاری مجدد صفحه کار کنند و جابه‌جایی بین صفحه‌ها با React Router است.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">تکنولوژی‌ها</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>React</li><li>React Router</li><li>TanStack Query</li><li>Axios</li><li>Material UI</li><li>Swiper</li><li>json-server</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">ویژگی‌های کلیدی</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>مرور محصولات بر اساس دسته‌بندی (کنسول‌ها، عنوان‌های ویژه، مجموعه‌های خاص)</li>
                    <li>صفحه‌ی اختصاصی جستجو با نتایج آنی</li>
                    <li>فیلتر محصولات و گرید کارت‌محور فروشگاه</li>
                    <li>ماژول سبد خرید</li>
                    <li>واکشی و کش داده‌ها به‌صورت ناهمگام با React Query</li>
                </ul>
                    </div>
                </div>`
        },
        media: [
            "assets/img/og1.jpg",
            "assets/img/ogm1.mp4"
        ]
    },
    project3: {
        title: { en: "Barista Cafe", fa: "کافه باریستا" },
        status: 'done',
        kind: 'practice',
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A responsive marketing website for a coffee shop, built around full-screen imagery and atmosphere, plus an online table reservation page.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Challenge and Approach</p>
                    <div class="popup__desc-inner">
                        <p>The site's feel depends on full-screen imagery, so the focus was on the background slideshow (Vegas.js) and on keeping image and video sections proportionate at every screen size. Table reservation lives on its own dedicated page.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Tech Stack</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Bootstrap</li><li>jQuery</li><li>Vegas.js</li><li>Bootstrap Icons</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Key Features</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>Full-screen animated background slideshow (Vegas.js)</li>
                    <li>Dedicated table reservation page</li>
                    <li>Sticky navigation with smooth scrolling</li>
                    <li>Responsive image and video sections showcasing the cafe's atmosphere</li>
                </ul>
                    </div>
                </div>`,
            fa: `<div class="popup__desc-card">
                    <p class="popup__desc-label">معرفی</p>
                    <div class="popup__desc-inner">
                        <p>یک وب‌سایت معرفی و تبلیغاتی برای یک کافی‌شاپ، با محوریت تصاویر تمام‌صفحه و فضاسازی، به‌همراه یک صفحه‌ی رزرو میز آنلاین.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">چالش و رویکرد</p>
                    <div class="popup__desc-inner">
                        <p>حس این سایت به تصاویر تمام‌صفحه بستگی دارد؛ پس تمرکز روی اسلایدشوی پس‌زمینه (Vegas.js) و متناسب ماندن بخش‌های تصویری و ویدیویی در همه‌ی اندازه‌های صفحه بود. رزرو میز هم در یک صفحه‌ی جداگانه قرار گرفت.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">تکنولوژی‌ها</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Bootstrap</li><li>jQuery</li><li>Vegas.js</li><li>Bootstrap Icons</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">ویژگی‌های کلیدی</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>اسلایدشوی پس‌زمینه‌ی تمام‌صفحه با انیمیشن (Vegas.js)</li>
                    <li>صفحه‌ی اختصاصی رزرو میز</li>
                    <li>ناوبری چسبان (Sticky) با اسکرول نرم</li>
                    <li>بخش‌های تصویری و ویدیویی واکنش‌گرا برای نمایش فضای کافه</li>
                </ul>
                    </div>
                </div>`
        },
        media: [
            "assets/img/cafe.jpg",
            "assets/img/mcafe.mp4",
        ]
    },
    project4: {
        title: { en: "Vue SPA", fa: "اپلیکیشن تک‌صفحه‌ای Vue" },
        status: 'done',
        kind: 'practice',
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A single-page application demonstrating full CRUD workflows and client-side routing in Vue 3, built by consuming a public REST API for posts and users.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Challenge and Approach</p>
                    <div class="popup__desc-inner">
                        <p>The goal was to show the full data cycle in a single-page app: reading from a public REST API, creating and editing posts, and showing the outcome in the interface. Navigation is client-side with Vue Router, and actions are confirmed with SweetAlert2 dialogs.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Tech Stack</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Vue 3</li><li>Vue Router</li><li>Axios</li><li>Bootstrap 5</li><li>SweetAlert2</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Key Features</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>Full CRUD for posts: create, view, edit, and list</li>
                    <li>User listing and detail views</li>
                    <li>Client-side routing between views with Vue Router</li>
                    <li>Interactive confirmation and alert dialogs (SweetAlert2)</li>
                    <li>Asynchronous REST API integration via Axios</li>
                </ul>
                    </div>
                </div>`,
            fa: `<div class="popup__desc-card">
                    <p class="popup__desc-label">معرفی</p>
                    <div class="popup__desc-inner">
                        <p>یک اپلیکیشن تک‌صفحه‌ای که چرخه‌ی کامل CRUD و مسیریابی سمت کلاینت رو در Vue 3 نشون می‌ده، با اتصال به یک REST API عمومی برای مدیریت پست‌ها و کاربران.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">چالش و رویکرد</p>
                    <div class="popup__desc-inner">
                        <p>هدف نشان دادن چرخه‌ی کامل داده در یک اپ تک‌صفحه‌ای بود: خواندن از یک REST API عمومی، ساخت و ویرایش پست‌ها و نمایش نتیجه در رابط کاربری. مسیریابی سمت کلاینت با Vue Router انجام می‌شود و عملیات‌ها با دیالوگ‌های SweetAlert2 تأیید می‌شوند.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">تکنولوژی‌ها</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Vue 3</li><li>Vue Router</li><li>Axios</li><li>Bootstrap 5</li><li>SweetAlert2</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">ویژگی‌های کلیدی</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>CRUD کامل برای پست‌ها: ایجاد، مشاهده، ویرایش و فهرست</li>
                    <li>نمایش فهرست و جزئیات کاربران</li>
                    <li>مسیریابی سمت کلاینت بین صفحات با Vue Router</li>
                    <li>دیالوگ‌های تأیید و هشدار تعاملی (SweetAlert2)</li>
                    <li>اتصال ناهمگام به REST API با Axios</li>
                </ul>
                    </div>
                </div>`
        },
        media: [
            "assets/img/vue.jpg",
            "assets/img/mvue.mp4"
        ]
    },
    project5: {
        title: { en: "Orkideh Sewing Machine Store", fa: "فروشگاه چرخ خیاطی ارکیده" },
        status: 'progress',
        kind: 'active',
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A complete, end-to-end online store for buying, selling, and repairing sewing machines and accessories, designed and built solo from the database to the UI.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Challenge and Approach</p>
                    <div class="popup__desc-inner">
                        <p>Building a full store alone means owning every layer: the data is modeled in PostgreSQL with Prisma, sign-in works with JWT or Google OAuth, and the admin dashboard and the user panel share one custom UI.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Tech Stack</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Next.js</li><li>React</li><li>PostgreSQL</li><li>Prisma ORM</li><li>Material UI</li><li>JWT</li><li>Google OAuth</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">Key Features</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>Full admin dashboard: products, categories, orders, comments, and homepage banners</li>
                    <li>Animated, tab-based user panel (orders, addresses, cart, favorites, account settings) with smooth Framer Motion transitions</li>
                    <li>Accounts with email/password or Google sign-in, email verification, and password recovery</li>
                    <li>Product catalog with categories, search, and detail pages</li>
                    <li>Online payment integration and order tracking</li>
                    <li>Fully custom UI, designed end-to-end by the developer</li>
                </ul>
                    </div>
                </div>`,
            fa: `<div class="popup__desc-card">
                    <p class="popup__desc-label">معرفی</p>
                    <div class="popup__desc-inner">
                        <p>یک فروشگاه آنلاین کامل و end-to-end برای خرید، فروش و تعمیر چرخ خیاطی و لوازم جانبی آن، که از پایگاه‌داده تا رابط کاربری تماماً توسط خودم طراحی و توسعه داده شده.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">چالش و رویکرد</p>
                    <div class="popup__desc-inner">
                        <p>ساخت یک فروشگاه کامل به‌تنهایی یعنی مسئولیت همه‌ی لایه‌ها: داده‌ها با PostgreSQL و Prisma مدل شده‌اند، ورود با JWT یا گوگل انجام می‌شود و پنل مدیریت و پنل کاربری روی یک رابط اختصاصی مشترک ساخته شده‌اند.</p>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">تکنولوژی‌ها</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-tags"><li>Next.js</li><li>React</li><li>PostgreSQL</li><li>Prisma ORM</li><li>Material UI</li><li>JWT</li><li>Google OAuth</li></ul>
                    </div>
                </div>
                <div class="popup__desc-card">
                    <p class="popup__desc-label">ویژگی‌های کلیدی</p>
                    <div class="popup__desc-inner">
                        <ul class="popup__desc-features">
                    <li>پنل ادمین کامل: مدیریت محصولات، دسته‌بندی‌ها، سفارش‌ها، نظرات و بنرهای صفحه‌ی اصلی</li>
                    <li>پنل کاربری تب‌بندی‌شده و انیمیشنی (سفارش‌ها، آدرس‌ها، سبد خرید، علاقه‌مندی‌ها، تنظیمات حساب) با ترنزیشن‌های نرم Framer Motion</li>
                    <li>حساب کاربری با ورود از طریق ایمیل/رمز عبور یا گوگل، تأیید ایمیل و بازیابی رمز عبور</li>
                    <li>کاتالوگ محصولات با دسته‌بندی، جستجو و صفحات جزئیات</li>
                    <li>اتصال به درگاه پرداخت آنلاین و پیگیری سفارش</li>
                    <li>رابط کاربری کاملاً اختصاصی، طراحی‌شده از صفر توسط خودم</li>
                </ul>
                    </div>
                </div>`
        },
        media: [
            "assets/img/sewing.jpg",
            "assets/img/sewing1.mp4"
        ]
    }
};

/*===== اسکرول‌بار سفارشی =====
   جایگزین اسکرول‌بار مرورگر (که در CSS مخفی شده): باریک و مینیمال، و سمتش با زبان عوض می‌شه
   (فارسی: راست، انگلیسی: چپ)؛ سمت فقط با CSS و بر اساس html[dir] تعیین می‌شه، پس تعویض زبان چیزی اینجا لازم نداره.
   اسکرول واقعی هنوز همون اسکرول بومی مرورگره (چرخ ماوس، لمس، کیبورد)، این فقط نشانگر و دستگیره‌ی کشیدنه. */
function createScrollbar(scroller, host, { page = false, topEl = null } = {}) {
    const track = document.createElement('div');
    track.className = 'cscroll' + (page ? ' cscroll--page' : '');
    track.setAttribute('aria-hidden', 'true');
    const thumb = document.createElement('div');
    thumb.className = 'cscroll__thumb';
    track.appendChild(thumb);
    host.appendChild(track);

    let frame = 0;
    let idleTimer = 0;

    function update() {
        frame = 0;
        // ریل اسکرول صفحه دقیقاً از لبه‌ی پایین هدر ثابت شروع می‌شه (ارتفاع هدر در دسکتاپ و موبایل فرق داره، پس اندازه‌ی واقعی رو می‌خونیم)
        if (topEl) track.style.top = topEl.getBoundingClientRect().bottom + 'px';
        const scrollable = scroller.scrollHeight - scroller.clientHeight;
        if (scrollable <= 1) {
            track.classList.remove('is-scrollable');
            return;
        }
        track.classList.add('is-scrollable');
        const trackH = track.clientHeight;
        const thumbH = Math.max(32, trackH * scroller.clientHeight / scroller.scrollHeight);
        const top = (scroller.scrollTop / scrollable) * (trackH - thumbH);
        thumb.style.height = thumbH + 'px';
        thumb.style.transform = 'translateY(' + top + 'px)';
    }

    function schedule() {
        if (!frame) frame = requestAnimationFrame(update);
    }

    // روی دستگاه‌های لمسی دستگیره فقط هنگام اسکرول (و چند لحظه بعدش) دیده می‌شه
    function onScroll() {
        schedule();
        track.classList.add('is-scrolling');
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => track.classList.remove('is-scrolling'), 900);
    }

    (page ? window : scroller).addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', schedule);
    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(schedule);
        if (page) {
            observer.observe(document.body);
            if (topEl) observer.observe(topEl);
        } else {
            observer.observe(scroller);
            Array.from(scroller.children).forEach(child => observer.observe(child));
        }
    }

    // کشیدن دستگیره (behavior: 'instant' چون html روی scroll-behavior: smooth هست و کشیدن نباید تأخیر داشته باشه)
    thumb.addEventListener('pointerdown', e => {
        e.preventDefault();
        const scrollable = scroller.scrollHeight - scroller.clientHeight;
        const travel = track.clientHeight - thumb.offsetHeight;
        if (scrollable <= 0 || travel <= 0) return;
        const startY = e.clientY;
        const startTop = scroller.scrollTop;
        thumb.setPointerCapture(e.pointerId);
        track.classList.add('is-dragging');
        const move = ev => scroller.scrollTo({ top: startTop + (ev.clientY - startY) * scrollable / travel, behavior: 'instant' });
        const end = () => {
            track.classList.remove('is-dragging');
            thumb.removeEventListener('pointermove', move);
            thumb.removeEventListener('pointerup', end);
            thumb.removeEventListener('pointercancel', end);
        };
        thumb.addEventListener('pointermove', move);
        thumb.addEventListener('pointerup', end);
        thumb.addEventListener('pointercancel', end);
    });

    // کلیک روی ریل، بالا یا پایینِ دستگیره: یک صفحه جابه‌جا می‌شه
    track.addEventListener('pointerdown', e => {
        if (e.target !== track) return;
        const rect = thumb.getBoundingClientRect();
        scroller.scrollBy({ top: (e.clientY < rect.top ? -1 : 1) * scroller.clientHeight * 0.9, behavior: 'smooth' });
    });

    update();
    return { update };
}

createScrollbar(document.documentElement, document.body, { page: true, topEl: document.querySelector('.l-header') });

// مدیریت پاپ‌آپ
const popup = document.getElementById('projectPopup');
const popupTitle = document.querySelector('.popup__title');
const popupChips = document.querySelector('.popup__chips');
const popupGallery = document.querySelector('.popup__gallery');
const popupDescription = document.querySelector('.popup__description');
const closePopup = document.querySelector('.popup__close');
const workItems = document.querySelectorAll('.work__img');
const popupScrollbar = createScrollbar(document.querySelector('.popup__content'), document.querySelector('.popup__window'));

// چیپ‌های وضعیت (در دست توسعه / اتمام‌یافته) و نوع (پروژه فعال / تمرینی) روبه‌روی عنوان پاپ‌آپ
function renderProjectChips(project) {
    const t = translations[currentLang] || translations.en;
    const makeChip = (variant, label) => {
        const chip = document.createElement('span');
        chip.className = 'popup-chip popup-chip--' + variant;
        chip.textContent = label;
        return chip;
    };
    popupChips.replaceChildren(
        makeChip(project.status, t['popup_status_' + project.status]),
        makeChip(project.kind, t['popup_kind_' + project.kind])
    );
}

workItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];

        if (project) {
            // تنظیم عنوان و توضیحات بر اساس زبان فعلی
            const localizedTitle = project.title[currentLang] || project.title.en;
            popupTitle.textContent = localizedTitle;
            renderProjectChips(project);
            popupDescription.innerHTML = project.description[currentLang] || project.description.en;

            // پاک کردن گالری قبلی
            popupGallery.innerHTML = '';

            // افزودن رسانه‌ها (تصاویر یا ویدیوها) به گالری
            project.media.forEach(media => {
                const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg');
                if (isVideo) {
                    const video = document.createElement('video');
                    video.src = media;
                    video.alt = localizedTitle;
                    video.controls = true;
                    video.className = 'popup__media';
                    popupGallery.appendChild(video);
                } else {
                    const img = document.createElement('img');
                    img.src = media;
                    img.alt = localizedTitle;
                    img.className = 'popup__media';
                    popupGallery.appendChild(img);
                }
            });

            // نمایش پاپ‌آپ؛ اسکرول صفحه‌ی اصلی رو قفل می‌کنیم تا فقط خودِ پاپ‌آپ اسکرول بخوره
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.documentElement.classList.add('popup-open');
            requestAnimationFrame(popupScrollbar.update);
        }
    });
});

// بستن پاپ‌آپ — فقط با کلیک روی آیکون ضربدر (کلیک روی پس‌زمینه دیگه پاپ‌آپ رو نمی‌بنده)
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = '';
    document.documentElement.classList.remove('popup-open');
});

/*===== Toast (جایگزین SweetAlert2 برای پیام‌های موفقیت/خطای فرم تماس) =====*/
function ensureToastContainer() {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    return container;
}

function showToast({ type = 'success', title = '', text = '', duration = 3500 }) {
    const container = ensureToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;

    const iconClass = type === 'success' ? 'bx bx-check-circle' : 'bx bx-x-circle';

    toast.innerHTML = `
        <i class="${iconClass} toast__icon"></i>
        <div class="toast__body">
            ${title ? `<p class="toast__title"></p>` : ''}
            ${text ? `<p class="toast__text"></p>` : ''}
        </div>
        <button type="button" class="toast__close" aria-label="Close"><i class='bx bx-x'></i></button>
    `;
    // متن رو با textContent ست می‌کنیم (نه innerHTML) تا اگه یه‌وقت متن ترجمه شامل کاراکتر خاصی بود، امن بمونه
    if (title) toast.querySelector('.toast__title').textContent = title;
    if (text) toast.querySelector('.toast__text').textContent = text;

    container.appendChild(toast);
    // یک فریم صبر می‌کنیم تا حالت اولیه (مخفی) واقعاً اعمال بشه، بعد کلاس show رو اضافه کنیم تا ترنزیشن ورود اجرا بشه
    requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));

    let dismissTimer;
    const dismiss = () => {
        clearTimeout(dismissTimer);
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    };

    toast.querySelector('.toast__close').addEventListener('click', dismiss);
    dismissTimer = setTimeout(dismiss, duration);
}

/*==================== کد کشورها (پیش‌شماره‌ی تماس) ====================*/
// «کد دوحرفی کشور:پیش‌شماره»؛ اسم کشورها از Intl.DisplayNames و به زبان فعلی ساخته می‌شه، پس نیازی به ترجمه‌ی دستی نیست
const COUNTRY_DIAL_DATA = 'AF:93,AX:358,AL:355,DZ:213,AS:1684,AD:376,AO:244,AI:1264,AG:1268,AR:54,AM:374,AW:297,AU:61,AT:43,AZ:994,BS:1242,BH:973,BD:880,BB:1246,BY:375,BE:32,BZ:501,BJ:229,BM:1441,BT:975,BO:591,BQ:599,BA:387,BW:267,BR:55,IO:246,VG:1284,BN:673,BG:359,BF:226,BI:257,KH:855,CM:237,CA:1,CV:238,KY:1345,CF:236,TD:235,CL:56,CN:86,CX:61,CC:61,CO:57,KM:269,CG:242,CD:243,CK:682,CR:506,CI:225,HR:385,CU:53,CW:599,CY:357,CZ:420,DK:45,DJ:253,DM:1767,DO:1809,EC:593,EG:20,SV:503,GQ:240,ER:291,EE:372,SZ:268,ET:251,FK:500,FO:298,FJ:679,FI:358,FR:33,GF:594,PF:689,GA:241,GM:220,GE:995,DE:49,GH:233,GI:350,GR:30,GL:299,GD:1473,GP:590,GU:1671,GT:502,GG:44,GN:224,GW:245,GY:592,HT:509,HN:504,HK:852,HU:36,IS:354,IN:91,ID:62,IR:98,IQ:964,IE:353,IM:44,IL:972,IT:39,JM:1876,JP:81,JE:44,JO:962,KZ:7,KE:254,KI:686,XK:383,KW:965,KG:996,LA:856,LV:371,LB:961,LS:266,LR:231,LY:218,LI:423,LT:370,LU:352,MO:853,MG:261,MW:265,MY:60,MV:960,ML:223,MT:356,MH:692,MQ:596,MR:222,MU:230,YT:262,MX:52,FM:691,MD:373,MC:377,MN:976,ME:382,MS:1664,MA:212,MZ:258,MM:95,NA:264,NR:674,NP:977,NL:31,NC:687,NZ:64,NI:505,NE:227,NG:234,NU:683,NF:672,KP:850,MK:389,MP:1670,NO:47,OM:968,PK:92,PW:680,PS:970,PA:507,PG:675,PY:595,PE:51,PH:63,PL:48,PT:351,PR:1787,QA:974,RE:262,RO:40,RU:7,RW:250,BL:590,SH:290,KN:1869,LC:1758,MF:590,PM:508,VC:1784,WS:685,SM:378,ST:239,SA:966,SN:221,RS:381,SC:248,SL:232,SG:65,SX:1721,SK:421,SI:386,SB:677,SO:252,ZA:27,KR:82,SS:211,ES:34,LK:94,SD:249,SR:597,SE:46,CH:41,SY:963,TW:886,TJ:992,TZ:255,TH:66,TL:670,TG:228,TK:690,TO:676,TT:1868,TN:216,TR:90,TM:993,TC:1649,TV:688,UG:256,UA:380,AE:971,GB:44,US:1,UY:598,VI:1340,UZ:998,VU:678,VA:39,VE:58,VN:84,WF:681,EH:212,YE:967,ZM:260,ZW:263';
const COUNTRIES = COUNTRY_DIAL_DATA.split(',').map(pair => pair.split(':'));
const DIAL_CODES = new Set(COUNTRIES.map(c => c[1]));

// پیش‌شماره‌هایی که بین چند کشور مشترکه؛ وقتی شماره‌ی بین‌المللی پیست می‌شه، همین کشورِ اصلی انتخاب می‌شه (مثلاً +۱ ← آمریکا)
const DIAL_MAIN_COUNTRY = { '1': 'US', '7': 'RU', '44': 'GB', '39': 'IT', '358': 'FI', '599': 'CW', '590': 'GP', '212': 'MA', '262': 'RE', '61': 'AU' };

// +۱ و پیش‌شماره‌های +۱ xxx (کشورهای کارائیب) رو جدا از هم نشون می‌ده: «+1 242»
function formatDial(dial) {
    return '+' + (dial.length > 1 && dial[0] === '1' ? '1 ' + dial.slice(1) : dial);
}

const regionNamesCache = {};
function regionName(iso, lang) {
    try {
        if (!regionNamesCache[lang]) regionNamesCache[lang] = new Intl.DisplayNames([lang], { type: 'region' });
        return regionNamesCache[lang].of(iso) || iso;
    } catch (e) {
        return iso;
    }
}

// لیست کشورها به زبان فعلی (ایران اول، بقیه الفبایی)؛ انتخاب فعلی حفظ می‌شه
function buildCountryOptions(select, lang) {
    const keep = select.value || 'IR';
    const rows = COUNTRIES.map(([iso, dial]) => ({ iso, dial, name: regionName(iso, lang) }));
    rows.sort((a, b) => (a.iso === 'IR' ? -1 : b.iso === 'IR' ? 1 : a.name.localeCompare(b.name, lang)));
    select.textContent = '';
    rows.forEach(row => {
        const option = new Option(row.name, row.iso);
        option.dataset.dial = row.dial;
        if (row.iso === 'IR') option.defaultSelected = true;
        select.add(option);
    });
    select.value = keep;
}

// بلندترین پیش‌شماره‌ی شناخته‌شده‌ای که ابتدای این رشته‌ی ارقام قرار داره (یا null)
function matchDialPrefix(digits) {
    for (let len = 4; len >= 1; len--) {
        const candidate = digits.slice(0, len);
        if (candidate.length === len && DIAL_CODES.has(candidate)) return candidate;
    }
    return null;
}

// ارقام فارسی/عربی رو به لاتین برمی‌گردونه (کاربر فارسی با کیبورد فارسی تایپ می‌کنه)
function normalizeDigits(value) {
    return String(value)
        .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
}

function normalizeSearch(value) {
    return normalizeDigits(value).toLowerCase().replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[ً-ٟ‌]/g, '');
}

/*==================== لیست کشویی سفارشی ====================*/
// select مرورگر نمی‌تونه انیمیشن بگیره؛ این کامپوننت ظاهرش رو جایگزین می‌کنه ولی خودِ select (مخفی) سر جاش می‌مونه
// تا مقدار فرم، ریست و مقداردهی برنامه‌ای (contactForm.elements.service.value) مثل قبل کار کنن
const customSelects = [];
let customSelectUid = 0;

function createSelect(select, config = {}) {
    const uid = ++customSelectUid;
    const root = document.createElement('div');
    root.className = 'cselect' + (config.className ? ' ' + config.className : '');
    select.parentNode.insertBefore(root, select);
    root.appendChild(select);
    select.classList.add('cselect__native');
    select.tabIndex = -1;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'cselect__trigger';
    trigger.id = 'cs-' + uid + '-trigger';
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const valueEl = document.createElement('span');
    valueEl.className = 'cselect__value';
    valueEl.id = 'cs-' + uid + '-value';
    const chevron = document.createElement('span');
    chevron.className = 'cselect__chevron';
    chevron.setAttribute('aria-hidden', 'true');
    trigger.append(valueEl, chevron);

    const panel = document.createElement('div');
    panel.className = 'cselect__panel';
    const list = document.createElement('ul');
    list.className = 'cselect__list';
    list.id = 'cs-' + uid + '-list';
    list.setAttribute('role', 'listbox');
    const empty = document.createElement('div');
    empty.className = 'cselect__empty';
    empty.hidden = true;

    let search = null;
    if (config.searchable) {
        search = document.createElement('input');
        search.type = 'text';
        search.className = 'cselect__search';
        search.autocomplete = 'off';
        search.spellcheck = false;
        search.setAttribute('aria-controls', list.id);
        panel.appendChild(search);
    }
    // لیست داخل یک پوشش می‌ره تا اسکرول‌بار سفارشی (همان اسکرول‌بار صفحه و پاپ‌آپ) زیر کادر جستجو و کنار خود لیست بشینه
    const scrollHost = document.createElement('div');
    scrollHost.className = 'cselect__scroll';
    scrollHost.appendChild(list);
    panel.append(scrollHost, empty);
    const scrollbar = createScrollbar(list, scrollHost);
    root.append(trigger, panel);
    trigger.setAttribute('aria-controls', list.id);

    // کلیک روی لیبل فیلد، فوکوس رو به دکمه‌ی جدید می‌ده (select اصلی مخفیه)
    const label = select.id ? document.querySelector('label[for="' + select.id + '"]') : null;
    if (label) {
        if (!label.id) label.id = 'cs-' + uid + '-label';
        trigger.setAttribute('aria-labelledby', label.id + ' ' + valueEl.id);
        label.addEventListener('click', () => trigger.focus());
    }

    const keyTarget = search || trigger;
    let items = [];
    let activeIndex = -1;
    let isOpen = false;

    function setActive(index, scroll) {
        if (items[activeIndex]) items[activeIndex].classList.remove('is-active');
        activeIndex = index;
        const item = items[index];
        if (!item) {
            keyTarget.removeAttribute('aria-activedescendant');
            return;
        }
        item.classList.add('is-active');
        keyTarget.setAttribute('aria-activedescendant', item.id);
        if (scroll) {
            const top = item.offsetTop;
            const bottom = top + item.offsetHeight;
            if (top < list.scrollTop) list.scrollTop = top;
            else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight;
        }
    }

    function visibleIndexes() {
        const result = [];
        items.forEach((item, i) => { if (!item.hidden) result.push(i); });
        return result;
    }

    function moveActive(delta) {
        const visible = visibleIndexes();
        if (!visible.length) return;
        const pos = visible.indexOf(activeIndex);
        const next = pos === -1 ? (delta > 0 ? 0 : visible.length - 1) : Math.min(visible.length - 1, Math.max(0, pos + delta));
        setActive(visible[next], true);
    }

    function filter() {
        const query = search ? normalizeSearch(search.value.trim()).replace(/^\+/, '') : '';
        let shown = 0;
        items.forEach(item => {
            const match = !query || item.dataset.search.includes(query);
            item.hidden = !match;
            if (match) shown++;
        });
        empty.hidden = shown !== 0;
        const selectedVisible = items[select.selectedIndex] && !items[select.selectedIndex].hidden;
        setActive(query ? items.findIndex(item => !item.hidden) : (selectedVisible ? select.selectedIndex : items.findIndex(item => !item.hidden)), true);
        scrollbar.update();
    }

    function syncSelected() {
        const options = select.options;
        items.forEach((item, i) => item.setAttribute('aria-selected', String(i === select.selectedIndex)));
        const selected = options[select.selectedIndex];
        valueEl.textContent = selected ? (config.triggerText ? config.triggerText(selected) : selected.textContent) : '';
    }

    // لیست گزینه‌ها رو از روی select اصلی (و متن ترجمه‌شده‌ی فعلی‌اش) از نو می‌سازه
    function render() {
        const t = translations[currentLang] || {};
        items = [...select.options].map((option, i) => {
            const item = document.createElement('li');
            item.className = 'cselect__option';
            item.id = 'cs-' + uid + '-opt-' + i;
            item.dataset.index = i;
            item.setAttribute('role', 'option');
            const text = document.createElement('span');
            text.className = 'cselect__option-text';
            text.textContent = option.textContent;
            item.appendChild(text);
            let extra = '';
            if (config.extraText) {
                extra = config.extraText(option);
                const extraEl = document.createElement('span');
                extraEl.className = 'cselect__option-extra';
                extraEl.textContent = extra;
                item.appendChild(extraEl);
            }
            item.dataset.search = normalizeSearch(option.textContent + ' ' + extra);
            return item;
        });
        list.textContent = '';
        list.append(...items);
        if (config.ariaLabel) trigger.setAttribute('aria-label', config.ariaLabel(t));
        if (search) {
            search.placeholder = t.country_search || '';
            search.setAttribute('aria-label', t.country_search || '');
        }
        empty.textContent = t.country_none || '';
        activeIndex = -1;
        syncSelected();
        if (search) search.value = '';
        filter();
    }

    function close(returnFocus) {
        if (!isOpen) return;
        isOpen = false;
        root.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        if (returnFocus) trigger.focus({ preventScroll: true });
    }

    function open() {
        if (isOpen) return;
        customSelects.forEach(other => { if (other.root !== root) other.close(false); });
        isOpen = true;
        if (search) search.value = '';
        filter();
        // اگه زیر دکمه جا نیست و بالاش بیشتره، لیست رو به سمت بالا باز کن
        const rect = trigger.getBoundingClientRect();
        const need = Math.min(panel.offsetHeight, 340) + 16;
        const below = window.innerHeight - rect.bottom;
        root.classList.toggle('cselect--up', below < need && rect.top > below);
        root.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        setActive(select.selectedIndex, true);
        scrollbar.update();
        if (search) search.focus({ preventScroll: true });
    }

    function choose(index) {
        if (!items[index]) return;
        const changed = select.selectedIndex !== index;
        select.selectedIndex = index;
        syncSelected();
        close(true);
        if (changed) select.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function onKey(e) {
        const key = e.key;
        if (!isOpen) {
            if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === ' ') {
                e.preventDefault();
                open();
            }
            return;
        }
        if (key === 'Escape') { e.preventDefault(); close(true); }
        else if (key === 'ArrowDown') { e.preventDefault(); moveActive(1); }
        else if (key === 'ArrowUp') { e.preventDefault(); moveActive(-1); }
        else if ((key === 'Home' || key === 'End') && !search) {
            e.preventDefault();
            const visible = visibleIndexes();
            setActive(key === 'Home' ? visible[0] : visible[visible.length - 1], true);
        }
        else if (key === 'Enter' || (key === ' ' && !search)) { e.preventDefault(); choose(activeIndex); }
        else if (key === 'Tab') close(false);
    }

    trigger.addEventListener('click', () => (isOpen ? close(false) : open()));
    trigger.addEventListener('keydown', onKey);
    if (search) {
        search.addEventListener('keydown', onKey);
        search.addEventListener('input', filter);
    }

    // موس روی گزینه ← فعال شدنش؛ کلیک ← انتخاب. mousedown جلوی از دست رفتن فوکوس (و بسته شدن لیست) رو می‌گیره
    list.addEventListener('mousemove', e => {
        const item = e.target.closest('.cselect__option');
        if (item && Number(item.dataset.index) !== activeIndex) setActive(Number(item.dataset.index), false);
    });
    list.addEventListener('click', e => {
        const item = e.target.closest('.cselect__option');
        if (item) choose(Number(item.dataset.index));
    });
    panel.addEventListener('mousedown', e => { if (e.target !== search) e.preventDefault(); });
    document.addEventListener('pointerdown', e => { if (isOpen && !root.contains(e.target)) close(false); });

    select.addEventListener('change', syncSelected);

    const api = { root, render, syncSelected, close };
    customSelects.push(api);
    render();
    return api;
}

function refreshCustomSelects() {
    customSelects.forEach(instance => instance.render());
}

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("01DP55z4IT14nN_aQ");

  const contactForm = document.getElementById('contactForm');
  const contactSubmit = document.getElementById('contactSubmit');
  const submitLabel = contactSubmit.querySelector('.btn-label');
  const inputs = contactForm.querySelectorAll('.contact__input');
  const consultFields = document.getElementById('consultFields');

  // لیست‌های کشویی سفارشی (ظاهر select های مرورگر جایگزین می‌شه؛ خودِ select ها مخفی سر جاشون می‌مونن)
  const countrySelect = contactForm.elements.country_code;
  buildCountryOptions(countrySelect, currentLang);
  createSelect(contactForm.elements.service);
  createSelect(contactForm.elements.pref_day);
  createSelect(contactForm.elements.pref_time);
  createSelect(countrySelect, {
    className: 'cselect--code',
    searchable: true,
    triggerText: option => formatDial(option.dataset.dial),
    extraText: option => formatDial(option.dataset.dial),
    ariaLabel: t => t.country_label
  });

  // ===== فیلد تماس: شماره‌ی تلفن (با پیش‌شماره‌ی کشور) یا آیدی تلگرام، بسته به «روش ارتباط ترجیحی» =====
  const contactInfo = document.getElementById('contactInfo');
  const infoInput = contactForm.elements.contact_info;
  const infoLabel = contactForm.querySelector('label[for="contact_info"]');
  const typedValues = { call: '', telegram: '' }; // مقدار هر حالت جدا نگه داشته می‌شه تا با برگشتن به همان حالت از بین نرفته باشه
  let contactMode = 'call';

  const currentDial = () => (countrySelect.selectedOptions[0] ? countrySelect.selectedOptions[0].dataset.dial : '98');
  // سقف طول شماره (بدون پیش‌شماره): ایران ۱۰ رقم، بقیه تا سقف ۱۵ رقمِ استاندارد با احتساب پیش‌شماره
  const maxNationalDigits = () => (currentDial() === '98' ? 10 : 15 - currentDial().length);

  function selectCountryByDial(dial) {
    if (currentDial() === dial) return;
    const options = [...countrySelect.options].filter(o => o.dataset.dial === dial);
    const option = options.find(o => o.value === DIAL_MAIN_COUNTRY[dial]) || options[0];
    if (!option) return;
    countrySelect.value = option.value;
    countrySelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // فقط رقم، بدون صفر اول؛ اگه شماره‌ی بین‌المللی (+98… یا 0098…) پیست بشه، کشورش انتخاب و پیش‌شماره‌اش حذف می‌شه
  function sanitizePhone() {
    let raw = normalizeDigits(infoInput.value).trim();
    let international = false;
    if (raw.startsWith('+')) { international = true; raw = raw.slice(1); }
    else if (raw.startsWith('00')) { international = true; raw = raw.slice(2); }
    let digits = raw.replace(/\D/g, '');
    if (international) {
      const dial = matchDialPrefix(digits);
      if (dial) { selectCountryByDial(dial); digits = digits.slice(dial.length); }
    }
    digits = digits.replace(/^0+/, '').slice(0, maxNationalDigits());
    if (infoInput.value !== digits) infoInput.value = digits;
  }

  // آیدی تلگرام همیشه با یک @ شروع می‌شه و فقط حروف انگلیسی/عدد/_ می‌گیره (لینک t.me/... هم به آیدی تبدیل می‌شه)
  function sanitizeHandle() {
    let raw = infoInput.value.trim();
    const link = /(?:t\.me|telegram\.me)\/(@?[A-Za-z0-9_]+)/i.exec(raw);
    if (link) raw = link[1];
    const next = '@' + raw.replace(/[^A-Za-z0-9_]/g, '').slice(0, 32);
    if (infoInput.value !== next) infoInput.value = next;
  }

  infoInput.addEventListener('input', () => (contactMode === 'call' ? sanitizePhone() : sanitizeHandle()));
  countrySelect.addEventListener('change', () => { if (contactMode === 'call') sanitizePhone(); });

  // کلیک روی باکسِ تلگرام ← @ خودکار؛ اگه چیزی ننوشت و بیرون کلیک کرد، برمی‌گرده به حالت خالی (لیبل دوباره پایین میاد)
  infoInput.addEventListener('focus', () => {
    if (contactMode !== 'telegram' || infoInput.value) return;
    infoInput.value = '@';
    setTimeout(() => infoInput.setSelectionRange(1, 1), 0); // مرورگر بعد از فوکوس نشانگر رو جابجا می‌کنه
  });
  infoInput.addEventListener('blur', () => {
    if (contactMode === 'telegram' && infoInput.value === '@') infoInput.value = '';
  });

  function applyContactMode(mode) {
    contactMode = mode;
    contactInfo.dataset.mode = mode;
    const isCall = mode === 'call';
    infoInput.inputMode = isCall ? 'numeric' : 'text';
    infoInput.autocomplete = isCall ? 'tel-national' : 'off';
    // با عوض شدن data-i18n، applyLanguage هم لیبل رو در تغییر زبان درست ترجمه می‌کنه
    const key = isCall ? 'contact_phone' : 'contact_telegram';
    infoLabel.setAttribute('data-i18n', key);
    infoLabel.textContent = translations[currentLang][key];
  }

  contactForm.querySelectorAll('input[name="channel"]').forEach(radio => {
    radio.addEventListener('change', () => {
      typedValues[contactMode] = infoInput.value;
      infoInput.value = typedValues[radio.value];
      infoInput.classList.remove('input-error');
      const errorMsg = infoInput.parentElement.querySelector('.error-message');
      if (errorMsg) errorMsg.classList.remove('show');
      applyContactMode(radio.value);
    });
  });

  function validateContact() {
    const value = infoInput.value.trim();
    if (contactMode === 'call') {
      if (!value) return 'err_phone_required';
      const valid = currentDial() === '98'
        ? /^[1-9]\d{9}$/.test(value)
        : /^\d+$/.test(value) && value.length >= 5 && value.length <= 15 - currentDial().length;
      return valid ? null : 'err_phone_invalid';
    }
    if (!value || value === '@') return 'err_telegram_required';
    return /^@[A-Za-z][A-Za-z0-9_]{4,31}$/.test(value) ? null : 'err_telegram_invalid';
  }

  const contactSummary = () => (contactMode === 'call'
    ? 'شماره تماس: ' + formatDial(currentDial()) + ' ' + infoInput.value.trim()
    : 'آیدی تلگرام: ' + infoInput.value.trim());

  // reset مقدارها رو بعد از خودِ رویداد برمی‌گردونه؛ پس همگام‌سازی ظاهر یک تیک عقب می‌افته
  contactForm.addEventListener('reset', () => {
    setTimeout(() => {
      typedValues.call = typedValues.telegram = '';
      applyContactMode(contactForm.elements.channel.value);
      refreshCustomSelects();
    }, 0);
  });

  // اسم کشورها و گزینه‌های لیست‌ها با تغییر زبان از نو ساخته می‌شن
  languageHooks.push(lang => {
    buildCountryOptions(countrySelect, lang);
    refreshCustomSelects();
  });

  applyContactMode(contactForm.elements.channel.value);

  // ایمیل اختیاریه؛ ولی قالب EmailJS یک user_email می‌خواد، پس اگه خالی بود یه آدرس ثابت و بی‌خطر می‌فرستیم
  const FALLBACK_EMAIL = 'no-reply@alirezaakhoondi.ir';

  // برچسب‌ها فارسی‌ان چون فقط برای متن ایمیلی هستن که به خودم می‌رسه (صرف‌نظر از زبان سایت)
  const OWNER_LABELS = {
    request: { consult: 'مشاوره رایگان', quote: 'دریافت قیمت' },
    service: { '': 'هنوز مطمئن نیست', website: 'سایت معرفی کسب‌وکار', store: 'فروشگاه اینترنتی', panel: 'پنل و سیستم اختصاصی' },
    channel: { call: 'تماس تلفنی', telegram: 'تلگرام' },
    day: { any: 'هر روز', sat: 'شنبه', sun: 'یکشنبه', mon: 'دوشنبه', tue: 'سه‌شنبه', wed: 'چهارشنبه', thu: 'پنجشنبه', fri: 'جمعه' },
    time: { any: 'هر ساعتی', morning: 'صبح (۹ تا ۱۲)', afternoon: 'بعدازظهر (۱۲ تا ۱۷)', evening: 'عصر (۱۷ تا ۲۱)' }
  };

  // روز/ساعت پیشنهادی فقط برای «مشاوره رایگان» معنی داره، نه «دریافت قیمت»
  function syncRequestType() {
    consultFields.hidden = contactForm.elements.request_type.value !== 'consult';
  }
  contactForm.querySelectorAll('input[name="request_type"]').forEach(radio => {
    radio.addEventListener('change', syncRequestType);
  });

  // دکمه‌های هیرو/خدمات/بنر قبل از رفتن به فرم، نوع درخواست و (در صورت وجود) خدمت رو از قبل انتخاب می‌کنن
  document.querySelectorAll('[data-request]').forEach(link => {
    link.addEventListener('click', () => {
      const radio = contactForm.querySelector('input[name="request_type"][value="' + link.dataset.request + '"]');
      if (radio) radio.checked = true;
      syncRequestType();
      if (link.dataset.service) {
        contactForm.elements.service.value = link.dataset.service;
        contactForm.elements.service.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  });

  // لرزوندن دوباره‌ی فیلد حتی اگه کلاس shake از قبل روش باشه (با remove + reflow + add)
  function triggerShake(el) {
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
  }

  // به محض شروع تایپ، حالت خطا (بوردر قرمز + پیام) از فیلد برداشته بشه
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('input-error');
      const errorMsg = input.parentElement.querySelector('.error-message');
      if (errorMsg) errorMsg.classList.remove('show');
    });
  });

  // پرواز هواپیمای دکمه‌ی ارسال: با شروع ارسال پرواز می‌کنه و تا پایان ارسال بالا-راست می‌مونه، بعد نرم برمی‌گرده
  function setPlaneFlying(flying) {
    contactSubmit.classList.remove('is-landing');
    if (flying) {
      contactSubmit.classList.add('is-flying');
      return;
    }
    if (!contactSubmit.classList.contains('is-flying')) return;
    contactSubmit.classList.remove('is-flying');
    contactSubmit.classList.add('is-landing');
    contactSubmit.addEventListener('animationend', () => contactSubmit.classList.remove('is-landing'), { once: true });
  }

  contactSubmit.addEventListener('click', function (e) {
    e.preventDefault();

    let isValid = true;
    const t = translations[currentLang];

    // پاک کردن خطاهای قبلی
    contactForm.querySelectorAll('.error-message').forEach(el => {
      el.textContent = '';
      el.classList.remove('show');
    });
    inputs.forEach(input => input.classList.remove('input-error'));

    function fail(input, key) {
      const errorMsg = input.parentElement.querySelector('.error-message');
      errorMsg.textContent = t[key];
      errorMsg.classList.add('show');
      input.classList.add('input-error');
      triggerShake(input);
      isValid = false;
    }

    // بررسی فیلدها (ایمیل اختیاریه و فقط اگه پر شده باشه فرمتش چک می‌شه)
    const f = contactForm.elements;
    const email = f.user_email.value.trim();
    const description = f.message.value.trim();

    if (!f.user_name.value.trim()) fail(f.user_name, 'err_name_required');
    // اگه HTML قدیمی (بدون فیلد نام خانوادگی) از کش بیاد، فرم همچنان کار می‌کنه
    if (f.user_lastname && !f.user_lastname.value.trim()) fail(f.user_lastname, 'err_lastname_required');
    const contactError = validateContact();
    if (contactError) fail(f.contact_info, contactError);
    if (email && !/^\S+@\S+\.\S+$/.test(email)) fail(f.user_email, 'err_email_invalid');
    if (!description) fail(f.message, 'err_message_required');
    else if (description.length < 10) fail(f.message, 'err_message_short');

    if (!isValid) return; // اگر فیلد ناقص بود، ارسال انجام نشود

    // همه‌ی جزئیات فرم (نوع درخواست، خدمت، روش و زمان تماس) داخل همون فیلد message می‌ره؛
    // تا قالب فعلی EmailJS (که فقط user_name/user_email/message رو می‌شناسه) بدون تغییر کار کنه
    const lines = [
      'نوع درخواست: ' + OWNER_LABELS.request[f.request_type.value],
      'خدمت مورد نظر: ' + OWNER_LABELS.service[f.service.value],
      'روش ارتباط ترجیحی: ' + OWNER_LABELS.channel[f.channel.value],
      contactSummary()
    ];
    if (f.request_type.value === 'consult') {
      lines.push('زمان پیشنهادی برای تماس: ' + OWNER_LABELS.day[f.pref_day.value] + '، ' + OWNER_LABELS.time[f.pref_time.value]);
    }
    if (email) lines.push('ایمیل: ' + email);
    lines.push('', 'توضیحات:', description);

    // شروع ارسال (فقط متن لیبل عوض می‌شه، آیکون‌ها دست‌نخورده می‌مونن)
    contactSubmit.classList.add('loading');
    contactSubmit.disabled = true;
    submitLabel.textContent = t.contact_submitting;
    setPlaneFlying(true);

    emailjs.send('service_19d6kpg', 'template_fruq6c6', {
      user_name: (f.user_name.value.trim() + ' ' + (f.user_lastname ? f.user_lastname.value.trim() : '')).trim(),
      user_email: email || FALLBACK_EMAIL,
      message: lines.join('\n')
    })
      .then(() => {
        showToast({
          type: 'success',
          title: translations[currentLang].alert_success_title,
          text: translations[currentLang].alert_success_text
        });

        setPlaneFlying(false);
        contactSubmit.classList.remove('loading');
        contactSubmit.disabled = false;
        submitLabel.textContent = translations[currentLang].contact_submit;
        contactForm.reset();
        syncRequestType();
      })
      .catch((error) => {
        showToast({
          type: 'error',
          title: translations[currentLang].alert_error_title,
          text: translations[currentLang].alert_error_text
        });

        setPlaneFlying(false);
        contactSubmit.classList.remove('loading');
        contactSubmit.disabled = false;
        submitLabel.textContent = translations[currentLang].contact_submit;
        console.error('EmailJS error:', error);
      });
  });
});