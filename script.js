// =======================================
// BM BEAUTY BUZZ - script.js
// =======================================


// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");


    if(navLinks.classList.contains("active")){

        icon.classList.replace("fa-bars","fa-times");

    }else{

        icon.classList.replace("fa-times","fa-bars");

    }

});

}



// Close menu

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");


const icon = menuBtn.querySelector("i");

icon.classList.replace("fa-times","fa-bars");


});

});





// ================= BACK TO TOP =================


const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}


});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});







// ================= SCROLL ANIMATION =================


// ONLY animate sections that are not prices

const animatedSections=document.querySelectorAll(
".about,.services,.gallery,.offer,.contact"
);



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{threshold:0.15});



animatedSections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});





// ================= ACTIVE NAV =================


const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop=section.offsetTop-150;


if(scrollY>=sectionTop){

current=section.id;

}


});



navItems.forEach(link=>{


link.classList.remove("active-link");


if(link.getAttribute("href")=="#"+current){

link.classList.add("active-link");

}


});


});







// ================= DARK / LIGHT MODE =================


const themeBtn=document.getElementById("theme-toggle");


if(themeBtn){


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");



if(document.body.classList.contains("light-mode")){


themeBtn.innerHTML='<i class="fas fa-moon"></i>';


localStorage.setItem("theme","light");


}else{


themeBtn.innerHTML='<i class="fas fa-sun"></i>';


localStorage.setItem("theme","dark");


}


});


}



// Remember theme

window.addEventListener("load",()=>{


if(localStorage.getItem("theme")==="light"){


document.body.classList.add("light-mode");


themeBtn.innerHTML='<i class="fas fa-moon"></i>';


}


console.log("✨ BM Beauty Buzz Website Loaded Successfully");


});
