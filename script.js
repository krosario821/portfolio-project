// ===== Smooth Scroll for Anchor Links ===== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Highlight Active Navigation Link Based on URL ===== //
window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage.includes('index'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ===== Optional: Console Welcome Message ===== //
window.addEventListener('load', () => {
  console.log('%cWelcome to Kailey Rosario\'s Galaxy Portfolio 🌌', 'color: #a29bfe; font-size: 14px; font-weight: bold;');
});