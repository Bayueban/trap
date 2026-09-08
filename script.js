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

const contactTrigger = document.querySelector('.contact-trigger');
const contactPopover = document.querySelector('.contact-popover');

const closeContactPopover = () => {
  contactTrigger.setAttribute('aria-expanded', 'false');
  contactPopover.setAttribute('aria-hidden', 'true');
  contactPopover.classList.remove('is-open');
};

contactTrigger.addEventListener('click', () => {
  const isOpen = contactTrigger.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    closeContactPopover();
    return;
  }

  contactTrigger.setAttribute('aria-expanded', 'true');
  contactPopover.setAttribute('aria-hidden', 'false');
  contactPopover.classList.add('is-open');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.contact-float')) {
    closeContactPopover();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeContactPopover();
  }
});

window.setTimeout(() => {
  contactTrigger.classList.add('is-nudging');
  contactTrigger.addEventListener('animationend', () => {
    contactTrigger.classList.remove('is-nudging');
  }, { once: true });
}, 4000);
