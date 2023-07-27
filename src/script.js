const button = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

button.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
})