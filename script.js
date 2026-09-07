const menuButton = document.querySelector('.menu-button');
const primaryNav = document.querySelector('.primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  primaryNav.classList.toggle('is-open', !isOpen);
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  });
});
