// 8-script.js - Hamburger menu for mobile nav
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', function () {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
// Optional: close when a nav link is clicked (mobile-only)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 480) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
// Optional: close if clicking outside
window.addEventListener('click', function(e) {
  if (window.innerWidth <= 480 && !mainNav.contains(e.target) && e.target !== menuToggle) {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
