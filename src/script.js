const typed = new Typed('#typed', {
  strings: ['Student Software Engineering', 'OSINT Analyst','Junior Developer',],
  typeSpeed: 50,
  loop: true,
  delaySpeed : 150,
});

const button = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

button.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
})