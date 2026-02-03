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

document.querySelectorAll('.skill__progress').forEach(el => {
  let percent = el.getAttribute('data-skill');
  el.style.width = percent + '%';
});

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
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

////////////////////////Skills///////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skills__data");

    skillBars.forEach(skill => {
      const percentage = skill.getAttribute("data-skill");
      const progressBar = skill.querySelector(".skill__progress");
      progressBar.style.width = percentage + "%";
    });
});

// داده‌های پروژه‌ها
const projects = {
    project1: {
        title: "Lugx Gaming",
        description: "A professional gaming store template built with modern web technologies.",
        media: [
            "assets/img/g1.png",
            "assets/img/gm1.mp4"
        ]
    },
    project2: {
        title: "Online Game Shop",
        description: "Complete e-commerce solution for digital game assets.",
        media: [
            "assets/img/og1.png",
            "assets/img/ogm1.mp4"
        ]
    },
    project3: {
        title: "Barista Cafe",
        description: "A beautiful cafe website design.",
        media: [
            "assets/img/cafe.png",
            "assets/img/mcafe.mp4",
        ]
    },
    project4: {
        title: "Vue SPA",
        description: "Single Page Application using Vue.js.",
        media: [
            "assets/img/vue.png",
            "assets/img/mvue.mp4"
        ]
    },
    project5: {
        title: "Orkideh Sewing Machine Store",
        description: "Online store for buying, selling and repairing sewing machines and their accessories",
        media: [
            "assets/img/sewing.png",
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
            // تنظیم عنوان و توضیحات
            popupTitle.textContent = project.title;
            popupDescription.textContent = project.description;

            // پاک کردن گالری قبلی
            popupGallery.innerHTML = '';

            // افزودن رسانه‌ها (تصاویر یا ویدیوها) به گالری
            project.media.forEach(media => {
                const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg');
                if (isVideo) {
                    const video = document.createElement('video');
                    video.src = media;
                    video.alt = project.title;
                    video.controls = true;
                    video.className = 'popup__media';
                    popupGallery.appendChild(video);
                } else {
                    const img = document.createElement('img');
                    img.src = media;
                    img.alt = project.title;
                    img.className = 'popup__media';
                    popupGallery.appendChild(img);
                }
            });

            // نمایش پاپ‌آپ
            popup.style.display = 'flex';
        }
    });
});

// بستن پاپ‌آپ
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// بستن پاپ‌آپ با کلیک روی پس‌زمینه
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("01DP55z4IT14nN_aQ");

  const contactForm = document.getElementById('contactForm');
  const contactSubmit = document.getElementById('contactSubmit');
  const inputs = contactForm.querySelectorAll('.contact__input');

  contactSubmit.addEventListener('click', function (e) {
    e.preventDefault();

    let isValid = true;

    // پاک کردن خطاهای قبلی
    contactForm.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // بررسی فیلدها
    inputs.forEach(input => {
      if (!input.value.trim()) {
        const errorMsg = input.parentElement.querySelector('.error-message');
        errorMsg.textContent = `${input.name === "user_name" ? "Name" : input.name === "user_email" ? "Email" : "Message"} is required.`;
        isValid = false;
      }
    });

    if (!isValid) return; // اگر فیلد ناقص بود، ارسال انجام نشود

    // شروع ارسال
    contactSubmit.classList.add('loading');
    contactSubmit.disabled = true;
    contactSubmit.textContent = "Submitting...";

    emailjs.sendForm('service_19d6kpg', 'template_fruq6c6', contactForm)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Your message has been sent successfully!',
          text: 'Thank you for your feedback🙏. Your message will be responded to via email soon.',
          showConfirmButton: false,
          timer: 2000
        });

        contactSubmit.classList.remove('loading');
        contactSubmit.disabled = false;
        contactSubmit.textContent = "Submit";
        contactForm.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error sending message!',
          text: 'Please try again.',
          showConfirmButton: false,
          timer: 2000
        });

        contactSubmit.classList.remove('loading');
        contactSubmit.disabled = false;
        contactSubmit.textContent = "Submit";
        console.error('EmailJS error:', error);
      });
  });
});