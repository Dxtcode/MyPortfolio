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
  updateOverlay();
}

function updateOverlay() {
  if (window.innerWidth >= 1200) {
    overlay.classList.remove("open");
  } else if (menu.classList.contains("open")) {
    overlay.classList.add("open");
  } else {
    overlay.classList.remove("open");
  }
}

arrow.addEventListener("click", () => {
  profileSection .scrollIntoView({
    behavior: "smooth"
  });
});

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