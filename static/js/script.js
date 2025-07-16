// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in and slide-in animations on scroll
function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in, .slide-in');
  const windowHeight = window.innerHeight;
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  // Add fade-in/slide-in classes to sections
  document.querySelectorAll('.about-section, .services-section, .portfolio-section, .testimonials-section, .contact-section').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'fade-in' : 'slide-in');
  });
  revealOnScroll();
});

// Parallax effect for hero background
const heroBg = document.querySelector('.hero-bg-parallax');
window.addEventListener('mousemove', e => {
  if (!heroBg) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  heroBg.style.transform = `translate(${x}px, ${y}px)`;
});

// // Testimonial slider
// const slides = document.querySelectorAll('.testimonial-slide');
// const prevBtn = document.querySelector('.testimonial-controls .prev');
// const nextBtn = document.querySelector('.testimonial-controls .next');
// let currentSlide = 0;
// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle('active', i === index);
//   });
// }
// if (prevBtn && nextBtn) {
//   prevBtn.addEventListener('click', () => {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
//   });
//   nextBtn.addEventListener('click', () => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
//   });
// }
// showSlide(currentSlide);


// Testimonial slider updated by farooq hussain gpt

const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.testimonial-controls .prev');
const nextBtn = document.querySelector('.testimonial-controls .next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// Ripple effect for CTA button
const ctaBtns = document.querySelectorAll('.cta-btn');
ctaBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinksMenu = document.querySelector('.nav-links');
if (hamburger && navLinksMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksMenu.classList.toggle('active');
  });
  navLinksMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinksMenu.classList.remove('active');
    });
  });
} 