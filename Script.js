/* ==================================================
   CORTIS OFFICIAL ARTIST HUB
   script.js
================================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1200);

});


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    }
    else {
        navbar.classList.remove("scrolled");
    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages =
document.querySelectorAll(".gallery-image");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = img.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

if(lightbox){

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }

    });

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
document.querySelectorAll(
".member-card, .media-card, .news-card, .stat-box"
);

const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.classList.add("fade-up");

    revealObserver.observe(el);

});


/* ==========================================
   LANGUAGE SWITCHER
========================================== */

const languageSelect =
document.getElementById("languageSelect");

const translations = {

    en: {

        about: "ABOUT",
        members: "MEMBERS",
        music: "MUSIC",
        gallery: "GALLERY",
        media: "MEDIA",
        awards: "AWARDS",
        schedule: "SCHEDULE",
        news: "NEWS"

    },

    ko: {

        about: "소개",
        members: "멤버",
        music: "음악",
        gallery: "갤러리",
        media: "미디어",
        awards: "수상",
        schedule: "일정",
        news: "뉴스"

    },

    ja: {

        about: "紹介",
        members: "メンバー",
        music: "音楽",
        gallery: "ギャラリー",
        media: "メディア",
        awards: "受賞",
        schedule: "スケジュール",
        news: "ニュース"

    }

};

if(languageSelect){

    languageSelect.addEventListener("change", () => {

        const lang = languageSelect.value;

        const navLinks =
        document.querySelectorAll(".nav-link");

        if(navLinks.length >= 8){

            navLinks[0].textContent =
            translations[lang].about;

            navLinks[1].textContent =
            translations[lang].members;

            navLinks[2].textContent =
            translations[lang].music;

            navLinks[3].textContent =
            translations[lang].gallery;

            navLinks[4].textContent =
            translations[lang].media;

            navLinks[5].textContent =
            translations[lang].awards;

            navLinks[6].textContent =
            translations[lang].schedule;

            navLinks[7].textContent =
            translations[lang].news;

        }

    });

}


/* ==========================================
   MEMBER DATA
========================================== */

const memberData = {

    martin: {
        name: "MARTIN",
        role: "Leader"
    },

    james: {
        name: "JAMES",
        role: "Main Dancer"
    },

    juhoon: {
        name: "JUHOON",
        role: "Vocalist"
    },

    seonghyeon: {
        name: "SEONGHYEON",
        role: "Vocalist"
    },

    keonho: {
        name: "KEONHO",
        role: "Rapper"
    }

};


/* ==========================================
   NEWS DATA
========================================== */

const latestNews = [

    {
        date: "2026.05.01",
        title: "World Tour Announced"
    },

    {
        date: "2026.03.20",
        title: "New Album Released"
    },

    {
        date: "2026.01.10",
        title: "100M Streams Achieved"
    }

];

console.log("News Loaded:", latestNews);


/* ==========================================
   SCHEDULE DATA
========================================== */

const schedules = [

    {
        date: "2026-07-18",
        event: "Fan Meeting",
        location: "Seoul"
    },

    {
        date: "2026-08-12",
        event: "Concert",
        location: "Tokyo"
    },

    {
        date: "2026-09-01",
        event: "Showcase",
        location: "Los Angeles"
    }

];

console.log("Schedule Loaded:", schedules);


/* ==========================================
   COUNTER ANIMATION
========================================== */

function animateCounter(element, target) {

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if(count < target){

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }
        else{

            element.innerText =
            target;

        }

    };

    update();

}

const statNumbers =
document.querySelectorAll(".stat-box h3");

const counterObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const value =
            entry.target.innerText.replace("+","");

            const numeric =
            parseInt(value);

            if(!isNaN(numeric)){

                animateCounter(
                    entry.target,
                    numeric
                );

            }

            counterObserver.unobserve(
                entry.target
            );

        }

    });

});

statNumbers.forEach(item => {

    counterObserver.observe(item);

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){
            link.classList.add("active");
        }

    });

});


/* ==========================================
   KEYBOARD LIGHTBOX CLOSE
========================================== */

document.addEventListener("keydown", (e) => {

    if(
        e.key === "Escape" &&
        lightbox.classList.contains("active")
    ){

        lightbox.classList.remove("active");

    }

});


/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero-content");

    if(hero){

        hero.style.transform =
        `translateY(${window.scrollY * 0.2}px)`;

    }

});


/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(
"%cCORTIS OFFICIAL ARTIST HUB",
"font-size:20px;font-weight:bold;color:#ccff00;"
);

console.log(
"Website Loaded Successfully."
);