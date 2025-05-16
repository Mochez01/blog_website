// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Newsletter subscription
const newsletterForm = document.getElementById('newsletter-form');
const subscriptionSuccess = document.getElementById('subscription-success');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate API call with timeout
    setTimeout(() => {
      newsletterForm.style.display = 'none';
      subscriptionSuccess.classList.remove('hidden');
    }, 1000);
  });
}

// Footer newsletter form
const footerForm = document.querySelector('.footer-form');
if (footerForm) {
  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    footerForm.reset();
  });
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add animation to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
  card.classList.add('animate-fade-in');
  card.style.animationDelay = `${index * 0.1}s`;
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});