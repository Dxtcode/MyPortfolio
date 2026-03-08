const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector('.overlay');
const sections = document.querySelectorAll('section');
const closeBtn = document.querySelector('.bx-x');
const arrow = document.querySelector(".bx-up-arrow-alt");
const profileSection  = document.querySelector("#profile");
const navLinks = document.querySelectorAll(".nav-links li a");

function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  closeBtn.addEventListener("click", toggleMenu);
  closeBtn.classList.add("close");
  overlay.classList.toggle('open');
  window.addEventListener("resize", updateOverlay);
  document.body.classList.toggle("no-scroll");
  updateOverlay();
}

function updateOverlay() {
  if (window.innerWidth >= 1200) {
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll"); // allow scroll on desktop
  } else if (menu.classList.contains("open")) {
    overlay.classList.add("open");
     document.body.classList.add("no-scroll"); // disable scroll
  } else {
    overlay.classList.remove("open");
      document.body.classList.remove("no-scroll"); // allow scroll
  }
}
arrow.addEventListener("click", () => {
  profileSection .scrollIntoView({
    behavior: "smooth"
  });
});

function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("myBtn");

  // Toggle a CSS class to show/hide the extra text
  moreText.classList.toggle("show");
  dots.style.display = moreText.classList.contains("show") ? "none" : "inline";
  btn.textContent = moreText.classList.contains("show") ? "Read less" : "Read more";
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  if (scrollTop + windowHeight >= documentHeight - 5) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }

});

let isClickScrolling = false; 
function removeActive() {
  navLinks.forEach(l => l.classList.remove("active"));
}
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    removeActive();
    link.classList.add("active");
    isClickScrolling = true;
    setTimeout(() => {
      isClickScrolling = false;
    }, 500);
  });
});

window.addEventListener("scroll", () => {
  if (isClickScrolling) return; 
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-links li a[href="#${id}"]`);
    if (scrollPos >= top && scrollPos < bottom) {
      removeActive();
      link.classList.add("active");
    }
  });
});

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 1
});

ScrollReveal().reveal('.title, .section__text > *', { origin: 'top' });
ScrollReveal().reveal('.section__pic-container', {origin: 'bottom'});
ScrollReveal().reveal('.about-details-container', {origin: 'bottom'});
ScrollReveal().reveal('.experience-details-container', {origin: 'bottom'});
ScrollReveal().reveal('.contact-info-container', {origin: 'bottom'});



let public_key = "AYj9_qieVeCWBybGn";
let service_id = "default_service";
let template_id = "template_f4u6bj1";

emailjs.init(public_key);

document.getElementById("form").addEventListener("submit",function(e) {
  e.preventDefault();

let formdata = document.getElementById("form");

console.log(formdata)

  emailjs.sendForm(service_id, template_id, formdata).then(
        ()=>{
           console.log(formdata)
            alert("Email sent successfully!");
            formdata.reset();
        },
        (error)=>{
            alert(`Something Went Wrong Try Again : ${JSON.stringify(error)}`);
        }
    );

});

