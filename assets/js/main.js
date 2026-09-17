/*===== زبان (فارسی/انگلیسی) =====*/
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_work: "Portfolio",
        nav_contact: "Contact",
        resume_download: "Download Resume",
        theme_tooltip_to_dark: "Switch to dark mode",
        theme_tooltip_to_light: "Switch to light mode",
        home_title: `Hi,<br>I'am <span class="home__title-color">Alireza</span><br> Web Designer`,
        home_call: "Call Me",
        about_title: "About",
        about_subtitle: "I'm Alireza",
        about_text: "I am a Front-End and Full-Stack developer with approximately four years of experience working with HTML, CSS, JavaScript, and React. For the past two years, I have been developing various projects—both independently and as part of a team—using the Next.js framework. One of my portfolio highlights is the end-to-end development of a large-scale online store, featuring an admin panel, an authentication system, and API integration. Additionally, I have two years of experience working with Vue.js and the Vuetify library, including participation in team-based projects built on these technologies. I also have two years of experience in website design using WordPress.",
        skills_title: "Skills",
        skills_subtitle: "Professional Skills",
        work_title: "Portfolio",
        proj1_title: "Lugx Gaming",
        proj2_title: "Online Game Shop",
        proj3_title: "Barista Cafe",
        proj4_title: "Vue SPA",
        proj5_title: "Orkideh Store",
        work_new_project: "New Project",
        work_coming_soon: "Coming Soon",
        contact_title: "Contact",
        contact_name: "Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_submit: "Send Message",
        contact_submitting: "Submitting...",
        footer_title: "Alireza",
        footer_copy: "© Alireza Akhoondi — All rights reserved",
        err_name_required: "Name is required.",
        err_email_required: "Email is required.",
        err_message_required: "Message is required.",
        alert_success_title: "Your message has been sent successfully!",
        alert_success_text: "Thank you for your feedback🙏. Your message will be responded to via email soon.",
        alert_error_title: "Error sending message!",
        alert_error_text: "Please try again.",
        page_title: "Alireza Akhoondi | Front-End Developer — Full-Stack Developer",
        page_description: "Portfolio of Alireza Akhoondi, a front-end and full-stack web developer working with HTML, CSS, JavaScript, React, Vue.js, Tailwind CSS, Vuetify and Next.js. Browse projects and get in touch."
    },
    fa: {
        nav_home: "خانه",
        nav_about: "درباره من",
        nav_skills: "مهارت‌ها",
        nav_work: "نمونه‌کارها",
        nav_contact: "تماس",
        resume_download: "دانلود رزومه",
        theme_tooltip_to_dark: "تغییر به حالت تاریک",
        theme_tooltip_to_light: "تغییر به حالت روشن",
        home_title: `سلام،<br><span class="home__title-color">علیرضا</span> هستم<br>توسعه‌دهنده وب`,
        home_call: "تماس با من",
        about_title: "درباره من",
        about_subtitle: "من علیرضا هستم",
        about_text: "برنامه‌نویس Front-End و Full-Stack هستم و حدود ۴ سال است که با HTML, CSS, Js و React کار می‌کنم و حدود ۲ سال نیز با فریمورک NextJs مشغول توسعه پروژه‌های مختلف به صورت تیمی و شخصی بوده‌ام. یکی از نمونه‌کارهای من، پیاده‌سازی کامل یک فروشگاه آنلاین بزرگ از صفر تا صد شامل پنل مدیریتی، سیستم احراز هویت و کار با APIها می‌باشد. همچنین حدود ۲ سال است که با VueJs و کتابخانه Vuetify کار می‌کنم و تجربه حضور در پروژه‌های تیمی مبتنی بر Vue و Vuetify را دارم. همچنین سابقه ۲ سال فعالیت در حوزه طراحی وبسایت با وردپرس را نیز دارا هستم.",
        skills_title: "مهارت‌ها",
        skills_subtitle: "مهارت‌های حرفه‌ای",
        work_title: "نمونه‌کارها",
        proj1_title: "Lugx Gaming",
        proj2_title: "فروشگاه آنلاین بازی",
        proj3_title: "کافه باریستا",
        proj4_title: "Vue SPA",
        proj5_title: "فروشگاه ارکیده",
        work_new_project: "پروژه‌ی جدید",
        work_coming_soon: "به‌زودی",
        contact_title: "تماس با من",
        contact_name: "نام",
        contact_email: "ایمیل",
        contact_message: "پیام",
        contact_submit: "ارسال پیام",
        contact_submitting: "در حال ارسال...",
        footer_title: "علیرضا",
        footer_copy: "© تمام حقوق برای علیرضا آخوندی محفوظ است",
        err_name_required: "نام الزامی است.",
        err_email_required: "ایمیل الزامی است.",
        err_message_required: "پیام الزامی است.",
        alert_success_title: "پیام شما با موفقیت ارسال شد!",
        alert_success_text: "با تشکر از بازخورد شما 🙏. به‌زودی از طریق ایمیل پاسخ داده می‌شود.",
        alert_error_title: "خطا در ارسال پیام!",
        alert_error_text: "لطفاً دوباره تلاش کنید.",
        page_title: "علیرضا آخوندی | توسعه‌دهنده فرانت‌اند و فول‌استک",
        page_description: "نمونه‌کارهای علیرضا آخوندی، توسعه‌دهنده‌ی فرانت‌اند و فول‌استک با تخصص در HTML، CSS، جاوااسکریپت، React، Vue.js، Tailwind CSS، Vuetify و Next.js."
    }
};

let currentLang = 'en';

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // فقط برای تجربه‌ی کاربری (عنوان تب و توضیح مرورگر) — نسخه‌ی ایندکس‌شده در گوگل همچنان انگلیسیه
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

    // درصد مهارت‌ها هم باید با تغییر زبان، رقم‌هاشون فارسی/انگلیسی بشه
    // (بر اساس مقداری که همین الآن روی هر نوار نمایش داده شده، نه لزوماً مقدار نهایی؛
    // چون ممکنه هنوز انیمیشنِ پر شدنش تموم نشده باشه)
    document.querySelectorAll('.skill__progress-value').forEach(valueLabel => {
        const current = parseInt(valueLabel.dataset.current, 10) || 0;
        valueLabel.textContent = formatSkillPercentage(current);
    });
}

function detectInitialLang() {
    try {
        const saved = localStorage.getItem('site-lang');
        if (saved === 'en' || saved === 'fa') return saved;
    } catch (e) {}
    // بدون تنظیم قبلی، زبان پیش‌فرض سایت فارسیه (صرف‌نظر از زبان مرورگر)
    return 'fa';
}

// تبدیل ارقام انگلیسی به فارسی (برای نمایش درصدهای مهارت‌ها در حالت زبان فارسی)
function toPersianDigits(num) {
    return String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

function formatSkillPercentage(value) {
    return currentLang === 'fa' ? toPersianDigits(value) + '٪' : value + '%';
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
    initSkillBars();

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
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

////////////////////////Skills///////////////////////////
// همه‌ی نوارها رو قبل از هر انیمیشنی رو صفر (و با رقم درست فارسی/انگلیسی) مقداردهی اولیه می‌کنه
function initSkillBars() {
    document.querySelectorAll('.skills__data').forEach(skillEl => {
        const progressBar = skillEl.querySelector('.skill__progress');
        const valueLabel = skillEl.querySelector('.skill__progress-value');
        if (progressBar) progressBar.style.width = '0%';
        if (valueLabel) {
            valueLabel.dataset.current = '0';
            valueLabel.textContent = formatSkillPercentage(0);
        }
    });
}

// نوار + عدد داخلش رو با هم از صفر تا مقدار هدف می‌شمره؛ جهت پر شدن (چپ‌به‌راست/راست‌به‌چپ)
// خودش با CSS (که به html[dir] وابسته‌ست) هماهنگ می‌شه، اینجا فقط عرض/درصد رو تغییر می‌دیم
function animateSkillBar(skillEl) {
    const target = parseInt(skillEl.getAttribute('data-skill'), 10) || 0;
    const progressBar = skillEl.querySelector('.skill__progress');
    const valueLabel = skillEl.querySelector('.skill__progress-value');
    if (!progressBar) return;

    const duration = 1200;
    const startTime = performance.now();

    function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        progressBar.style.width = current + '%';
        if (valueLabel) {
            valueLabel.dataset.current = String(current);
            valueLabel.textContent = formatSkillPercentage(current);
        }

        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});
sr.reveal('.skills__data, .work__img, .contact__input',{
    interval: 200,
    // همون لحظه‌ای که کارت وارد دید می‌شه و شروع به ظاهر شدن می‌کنه (نه بعد از تموم شدن انیمیشن ورودش)
    // نوار مهارتش هم بدون تاخیر از صفر شروع کنه به پر شدن
    beforeReveal: el => {
        if (el.classList.contains('skills__data')) animateSkillBar(el);
    },
    // بعد از تمام شدن انیمیشن ورود، یه کلاس اضافه می‌کنیم تا ترنزیشن سریع هاور
    // (رفتن و برگشتن) بدون تداخل با ترنزیشن کند ScrollReveal اعمال بشه
    afterReveal: el => el.classList.add('is-revealed')
});

// داده‌های پروژه‌ها (عنوان/توضیح دوزبانه)
const projects = {
    project1: {
        title: { en: "Lugx Gaming", fa: "Lugx Gaming" },
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A multi-page gaming e-commerce storefront covering the full shopping journey, from the homepage to product details, the shop listing, and sign-in.</p>
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
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A single-page e-commerce app for digital games and gaming consoles, built with a component-driven React architecture and a mock REST API for realistic client-server interaction.</p>
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
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A responsive marketing website for a coffee shop, built around full-screen imagery and atmosphere, plus an online table reservation page.</p>
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
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A single-page application demonstrating full CRUD workflows and client-side routing in Vue 3, built by consuming a public REST API for posts and users.</p>
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
        description: {
            en: `<div class="popup__desc-card">
                    <p class="popup__desc-label">Overview</p>
                    <div class="popup__desc-inner">
                        <p>A complete, end-to-end online store for buying, selling, and repairing sewing machines and accessories, designed and built solo from the database to the UI.</p>
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

// مدیریت پاپ‌آپ
const popup = document.getElementById('projectPopup');
const popupTitle = document.querySelector('.popup__title');
const popupGallery = document.querySelector('.popup__gallery');
const popupDescription = document.querySelector('.popup__description');
const closePopup = document.querySelector('.popup__close');
const workItems = document.querySelectorAll('.work__img');

workItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];

        if (project) {
            // تنظیم عنوان و توضیحات بر اساس زبان فعلی
            const localizedTitle = project.title[currentLang] || project.title.en;
            popupTitle.textContent = localizedTitle;
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
        }
    });
});

// بستن پاپ‌آپ — فقط با کلیک روی آیکون ضربدر (کلیک روی پس‌زمینه دیگه پاپ‌آپ رو نمی‌بنده)
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = '';
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("01DP55z4IT14nN_aQ");

  const contactForm = document.getElementById('contactForm');
  const contactSubmit = document.getElementById('contactSubmit');
  const submitLabel = contactSubmit.querySelector('.btn-label');
  const inputs = contactForm.querySelectorAll('.contact__input');

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

    // بررسی فیلدها
    inputs.forEach(input => {
      if (!input.value.trim()) {
        const errorMsg = input.parentElement.querySelector('.error-message');
        const key = input.name === "user_name" ? "err_name_required" : input.name === "user_email" ? "err_email_required" : "err_message_required";
        errorMsg.textContent = t[key];
        errorMsg.classList.add('show');
        input.classList.add('input-error');
        triggerShake(input);
        isValid = false;
      }
    });

    if (!isValid) return; // اگر فیلد ناقص بود، ارسال انجام نشود

    // شروع ارسال (فقط متن لیبل عوض می‌شه، آیکون‌ها دست‌نخورده می‌مونن)
    contactSubmit.classList.add('loading');
    contactSubmit.disabled = true;
    submitLabel.textContent = t.contact_submitting;

    emailjs.sendForm('service_19d6kpg', 'template_fruq6c6', contactForm)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: translations[currentLang].alert_success_title,
          text: translations[currentLang].alert_success_text,
          showConfirmButton: false,
          timer: 2000
        });

        contactSubmit.classList.remove('loading');
        contactSubmit.disabled = false;
        submitLabel.textContent = translations[currentLang].contact_submit;
        contactForm.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: translations[currentLang].alert_error_title,
          text: translations[currentLang].alert_error_text,
          showConfirmButton: false,
          timer: 2000
        });

        contactSubmit.classList.remove('loading');
        contactSubmit.disabled = false;
        submitLabel.textContent = translations[currentLang].contact_submit;
        console.error('EmailJS error:', error);
      });
  });
});