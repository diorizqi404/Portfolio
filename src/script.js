const typed = new Typed('#typed', {
  strings: ['Student Software Engineering', 'Junior Developer', 'Cyber Enthusiast'],
  typeSpeed: 50,
  loop: true,
  delaySpeed : 150,
});

const button = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

button.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
})

// WHEN ON HOME SECTION, REMOVE BUTTON GO TO TOP
window.onscroll = function() {
  const header = document.querySelector('#home');
  const fixNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');
  
  if(window.pageYOffset > fixNav){
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  }else {
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  };
};

// FORMSPREE
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}