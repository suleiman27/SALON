// ============================
// BM BEAUTY BUZZ
// script.js
// ============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change menu icon
    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


// ============================
// Scroll To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ============================
// Navbar Effect
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(255,215,0,0.15)";
    } else {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "none";
    }

});


// ============================
// Fade In Animation
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ============================
// Image Hover Animation
// ============================

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.08)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });

});


// ============================
// Active Navigation Link
// ============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});


// ============================
// Welcome Message
// ============================

window.addEventListener("load", () => {

    console.log("✨ BM Beauty Buzz Website Loaded Successfully");

});
