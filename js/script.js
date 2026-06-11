// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
  }, 1000);
});

// Navbar scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
function closeMobile() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '1';
  spans[2].style.transform = '';
}

// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Form handling
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Message Sent! ✓';
  btn.style.background = '#155c38';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}
