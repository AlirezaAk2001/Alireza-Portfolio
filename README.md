# Alireza Akhoondi — Portfolio

**[فارسی](#فارسی)** | **[English](#english)** | **Live:** [alirezaakhoondi.ir](https://alirezaakhoondi.ir)

---

<div dir="rtl" align="right">

## فارسی

### معرفی

این ریپازیتوری، وب‌سایت شخصی و نمونه‌کارهای **علیرضا آخوندی** است؛ توسعه‌دهنده‌ی Front-end و Full-stack. سایت کاملاً دوزبانه (فارسی و انگلیسی) و واکنش‌گرا (موبایل، تبلت و دسکتاپ) است و فقط با HTML، CSS و JavaScript ساخته شده — بدون فریم‌ورک و بدون مرحله‌ی build.

**آدرس زنده:** [alirezaakhoondi.ir](https://alirezaakhoondi.ir)

### ویژگی‌ها

- **دوزبانگی:** تغییر بین فارسی (راست‌به‌چپ) و انگلیسی (چپ‌به‌راست) بدون رفرش صفحه؛ انتخاب کاربر ذخیره می‌شود.
- **تم روشن و تاریک:** با انیمیشن دایره‌ای (View Transitions API)، ذخیره‌ی انتخاب کاربر و پیروی از تنظیمات سیستم در بازدید اول.
- **بخش‌ها:** معرفی، درباره‌ی من، مهارت‌ها، نمونه‌کارها، تماس و فوتر.
- **حلقه‌ی مهارت‌ها:** آیکون مهارت‌ها به‌صورت چرخشی دور عکس پروفایل، در دسکتاپ و موبایل.
- **نوار پیشرفت مهارت‌ها:** نمایش انیمیشنی درصد هر مهارت.
- **نمونه‌کارها:** پنج نمونه‌کار که با کلیک روی هر کارت، پاپ‌آپ جزئیات (معرفی، تکنولوژی‌ها، ویژگی‌های کلیدی) و گالری تصاویر/ویدیو را نشان می‌دهد.
- **فرم تماس:** ارسال پیام با [EmailJS](https://www.emailjs.com/) بدون نیاز به سرور اختصاصی.
- **دانلود رزومه:** از بخش هدر.
- **سال کپی‌رایت به‌صورت خودکار:** در حالت فارسی تقویم شمسی و در حالت انگلیسی میلادی.
- **سئو:** متاتگ‌های توضیحات، Open Graph و Twitter Card، داده‌ی ساختاریافته‌ی JSON-LD (Person)، `sitemap.xml` و `robots.txt`.
- **دسترس‌پذیری:** HTML معنایی، `aria-label` برای لینک‌ها و آیکون‌های بدون متن، و احترام به تنظیم «کاهش حرکت» سیستم (`prefers-reduced-motion`).

### فناوری‌ها

- **زبان‌ها:** HTML5، CSS3 (Custom Properties و Media Queries) و JavaScript (ES6+) — بدون فریم‌ورک
- **فونت‌ها:** Vazirmatn (فارسی) و Poppins (انگلیسی)، به‌صورت self-hosted
- **آیکون‌ها:** Boxicons و Font Awesome (self-hosted) و لوگوهای Simple Icons
- **کتابخانه‌ها:** [ScrollReveal](https://scrollrevealjs.org/) برای انیمیشن ورود المان‌ها و [EmailJS](https://www.emailjs.com/) برای فرم تماس

### ساختار پروژه

```text
.
├── index.html            ساختار و محتوای اصلی صفحه
├── robots.txt
├── sitemap.xml
├── CNAME                 دامنه‌ی سفارشی برای GitHub Pages
└── assets/
    ├── css/              styles.css و فایل‌های آیکون
    ├── js/
    │   ├── main.js       زبان، تم، انیمیشن‌ها، پاپ‌آپ و فرم تماس
    │   └── vendor/       ScrollReveal و EmailJS
    ├── fonts/            Poppins، Vazirmatn و Boxicons
    ├── webfonts/         فونت‌های Font Awesome
    ├── img/              تصاویر، ویدیوها، لوگوها و فاوآیکون‌ها
    ├── docs/             فایل رزومه (PDF)
    └── site.webmanifest
```

### اجرای محلی

این پروژه به نصب یا build نیاز ندارد. کافی است آن را با یک سرور ساده اجرا کنید:

- **با VS Code:** افزونه‌ی **Live Server** را نصب کنید، سپس روی `index.html` کلیک راست کرده و گزینه‌ی *Open with Live Server* را بزنید.
- **با Python:** در پوشه‌ی پروژه این دستور را اجرا کنید و سپس `http://localhost:8000` را باز کنید:

```bash
python -m http.server 8000
```

> **نکته:** توصیه می‌شود سایت را از طریق سرور محلی باز کنید (نه با `file://`) تا رفتار آن با نسخه‌ی منتشرشده یکسان باشد.

### شخصی‌سازی

برای استفاده‌ی شخصی از این قالب:

1. **متن‌ها و ترجمه‌ها:** محتوای HTML را در `index.html` و ترجمه‌های فارسی و انگلیسی را در آبجکت `translations` داخل `assets/js/main.js` ویرایش کنید. این دو باید با هم هماهنگ باشند.
2. **شبکه‌های اجتماعی:** لینک‌ها را در بلوک `home__social` و در فوتر داخل `index.html` تغییر دهید.
3. **عکس‌ها:** فایل‌های `assets/img/perfil.jpg` (بخش معرفی) و `assets/img/profile(1).jpg` (بخش درباره‌ی من) را با عکس خودتان جایگزین کنید.
4. **رزومه:** فایل PDF را در `assets/docs/` قرار دهید و نام و مسیر آن را در لینک `resume-download` داخل `index.html` به‌روز کنید.
5. **مهارت‌ها:** بخش `skills` در `index.html` را ویرایش کنید؛ مقدار `data-skill` درصد پیشرفت هر نوار را مشخص می‌کند. آیکون‌های حلقه‌ی معرفی در بلوک `home__orbit` قرار دارند.
6. **نمونه‌کارها:** کارت‌های بخش `work` را در `index.html` و محتوای پاپ‌آپ‌ها را در `main.js` (بر اساس `data-project`) ویرایش کنید.
7. **فرم تماس:** در `assets/js/main.js` کلید عمومی EmailJS (در `emailjs.init`) و شناسه‌ی سرویس و قالب (در `emailjs.sendForm`) را با مقادیر حساب خودتان جایگزین کنید.
8. **رنگ‌ها:** متغیر `--hue-color` در بخش `:root` فایل `assets/css/styles.css` رنگ اصلی سایت را تعیین می‌کند.
9. **دامنه و سئو:** فایل `CNAME`، `sitemap.xml`، `robots.txt` و آدرس‌های canonical و Open Graph داخل `index.html` را با دامنه‌ی خودتان هماهنگ کنید.

### استقرار (Deployment)

سایت استاتیک است و روی **GitHub Pages** میزبانی می‌شود:

1. ریپازیتوری را در گیت‌هاب بسازید و کدها را push کنید.
2. در مسیر **Settings → Pages** گزینه‌ی **Deploy from a branch** را انتخاب کنید، برنچ مورد نظر را بگذارید و پوشه را `/ (root)` انتخاب کنید.
3. اگر دامنه‌ی سفارشی دارید، آن را در همین بخش وارد کنید (فایل `CNAME` ساخته می‌شود) و رکوردهای DNS را طبق [راهنمای رسمی GitHub Pages](https://docs.github.com/en/pages) تنظیم کنید.
4. پس از صدور گواهی SSL، گزینه‌ی **Enforce HTTPS** را فعال کنید. اگر سایت پشت CDN قرار دارد، ممکن است این گزینه در GitHub در دسترس نباشد؛ در این صورت HTTPS را از تنظیمات CDN فعال کنید.

### بهینه‌سازی عملکرد

- فونت‌ها، آیکون‌ها و کتابخانه‌های جانبی به‌صورت محلی بارگذاری می‌شوند تا وابستگی به CDNهای خارجی کم شود.
- تصاویر و ویدیوها فشرده‌سازی شده‌اند، ابعاد تصاویر به‌صورت صریح مشخص شده و تصاویر پایین صفحه با `loading="lazy"` بارگذاری می‌شوند.
- CSS و JavaScript سبک و بدون فریم‌ورک هستند.

### مجوز و استفاده

این پروژه شخصی است و برای نمایش نمونه‌کارها ساخته شده است. پیش از استفاده‌ی مجدد از کد یا محتوا (به‌ویژه عکس‌ها، رزومه و متن‌ها) لطفاً با نویسنده تماس بگیرید.

### ارتباط

- LinkedIn: [alireza-akhoondi-dev](https://www.linkedin.com/in/alireza-akhoondi-dev)
- Telegram: [@alireza_egn](https://t.me/alireza_egn)
- Instagram: [@alireza_egn](https://instagram.com/alireza_egn)
- GitHub: [AlirezaAk2001](https://github.com/AlirezaAk2001)

</div>

---

<div dir="ltr" align="left">

## English

### Overview

This repository contains the personal portfolio website of **Alireza Akhoondi**, a Front-end and Full-stack developer. The site is fully **bilingual (Persian and English)** and **responsive** across mobile, tablet and desktop. It is built with plain HTML, CSS and JavaScript, with no framework and no build step.

**Live site:** [alirezaakhoondi.ir](https://alirezaakhoondi.ir)

### Features

- **Bilingual:** switch between Persian (RTL) and English (LTR) without reloading. The choice is remembered.
- **Light and dark themes:** circular transition animation (View Transitions API), a saved preference, and the system preference on the first visit.
- **Sections:** Home, About, Skills, Portfolio, Contact and Footer.
- **Orbiting skill icons:** skill icons rotate around the profile photo on desktop and mobile.
- **Skill bars:** animated progress bars that show each skill's level.
- **Portfolio:** five project cards. Clicking a card opens a popup with an overview, tech stack, key features and an image/video gallery. A placeholder card is reserved for upcoming projects.
- **Contact form:** messages are sent with [EmailJS](https://www.emailjs.com/), so no dedicated backend server is needed.
- **Resume download:** available from the header.
- **Automatic copyright year:** Persian (Jalali) calendar in Persian mode and Gregorian calendar in English mode.
- **SEO:** meta descriptions, Open Graph and Twitter Card tags, JSON-LD structured data (Person), `sitemap.xml` and `robots.txt`.
- **Accessibility:** semantic HTML, `aria-label` on icon-only links, and respect for the `prefers-reduced-motion` setting.

### Tech Stack

- **Languages:** HTML5, CSS3 (custom properties and media queries) and vanilla JavaScript (ES6+)
- **Fonts:** Vazirmatn (Persian) and Poppins (English), self-hosted
- **Icons:** Boxicons and Font Awesome (self-hosted), plus Simple Icons logos
- **Libraries:** [ScrollReveal](https://scrollrevealjs.org/) for scroll animations and [EmailJS](https://www.emailjs.com/) for the contact form

### Project Structure

```text
.
├── index.html            Main page structure and content
├── robots.txt
├── sitemap.xml
├── CNAME                 Custom domain for GitHub Pages
└── assets/
    ├── css/              styles.css and icon font styles
    ├── js/
    │   ├── main.js       Language, theme, animations, popup and contact form
    │   └── vendor/       ScrollReveal and EmailJS
    ├── fonts/            Poppins, Vazirmatn and Boxicons
    ├── webfonts/         Font Awesome font files
    ├── img/              Images, videos, logos and favicons
    ├── docs/             Resume (PDF)
    └── site.webmanifest
```

### Running Locally

No installation or build step is required. Serve the folder with any static server:

- **VS Code:** install the **Live Server** extension, right-click `index.html`, and choose *Open with Live Server*.
- **Python:** run the command below in the project folder, then open `http://localhost:8000`:

```bash
python -m http.server 8000
```

> **Note:** Serving the site over HTTP (rather than `file://`) keeps its behavior consistent with the published version.

### Customization

1. **Text and translations:** edit the content in `index.html` and the Persian and English strings in the `translations` object in `assets/js/main.js`. Keep both in sync.
2. **Social links:** update the links in the `home__social` block and the footer in `index.html`.
3. **Photos:** replace `assets/img/perfil.jpg` (hero section) and `assets/img/profile(1).jpg` (About section).
4. **Resume:** place your PDF in `assets/docs/` and update the `resume-download` link in `index.html`.
5. **Skills:** edit the `skills` section in `index.html`. The `data-skill` value sets each bar's percentage. The orbiting icons live in the `home__orbit` block.
6. **Portfolio:** edit the cards in the `work` section of `index.html` and the popup content in `main.js` (matched by `data-project`).
7. **Contact form:** in `assets/js/main.js`, replace the EmailJS public key (in `emailjs.init`) and the service and template IDs (in `emailjs.sendForm`) with your own.
8. **Colors:** the `--hue-color` variable in `:root` of `assets/css/styles.css` sets the main accent color.
9. **Domain and SEO:** update `CNAME`, `sitemap.xml`, `robots.txt`, and the canonical and Open Graph URLs in `index.html`.

### Deployment

The site is static and is hosted on **GitHub Pages**:

1. Create a repository on GitHub and push the code.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select your branch, and set the folder to `/ (root)`.
3. To use a custom domain, enter it in the same section (this creates the `CNAME` file), then configure your DNS records following the [official GitHub Pages documentation](https://docs.github.com/en/pages).
4. Once the SSL certificate is issued, enable **Enforce HTTPS**. If the site sits behind a CDN, this option may be unavailable in GitHub; in that case, enable HTTPS in the CDN settings instead.

### Performance

- Fonts, icons and third-party libraries are self-hosted to reduce dependencies on external CDNs.
- Images and videos are compressed, image dimensions are set explicitly, and below-the-fold images use `loading="lazy"`.
- The CSS and JavaScript are lightweight and framework-free.

### License and Usage

This is a personal project built to showcase my work. Please contact the author before reusing the code or content, especially the photos, resume and texts.

### Contact

- LinkedIn: [alireza-akhoondi-dev](https://www.linkedin.com/in/alireza-akhoondi-dev)
- Telegram: [@alireza_egn](https://t.me/alireza_egn)
- Instagram: [@alireza_egn](https://instagram.com/alireza_egn)
- GitHub: [AlirezaAk2001](https://github.com/AlirezaAk2001)

</div>
