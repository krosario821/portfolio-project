// ===== Smooth Scroll for Anchor Links ===== //
// Adds a smooth scroll effect when users click on any anchor links (e.g. "#section")
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
// Automatically highlights the nav link that matches the current page (so users know where they are!)
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

// ===== Personal Console Welcome Message ===== //
// This is like a digital "hello" from me, Kailey ☺️🌸
window.addEventListener('load', () => {
  console.log('%cHey there 👋 Welcome to my galaxy-themed portfolio! 🚀✨', 'color: #ffd1f7; font-size: 14px; font-weight: bold;');
  console.log('%cBuilt with 💻, passion 💖, and dreams bigger than the universe 🌌 - xoxo, Kailey 💫', 'color: #b39ddb; font-size: 12px; font-style: italic;');
});
window.Kailey = {
  help: () => {
    console.log("💡 You found my secret dev console! Here’s a digital high-five 🖐️");
    console.log("🔗 Check out my GitHub: https://github.com/your-github");
    console.log("📬 Email me anytime: kaileyrosario11@gmail.com");
  }
};
