function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector('.overlay');

  menu.classList.toggle("open");
  icon.classList.toggle("open");
  overlay.classList.toggle('open');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
      let stop = window.scrollY;
      let offset = sec.offsetTop -  150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

    });
}