// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 60);
});

// Page navigation
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile menu if open
  const navLinks = document.getElementById('navLinks');
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }
}

// Mobile nav
const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
  });
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// Close mobile menu on window resize (if screen becomes desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  }
});

// Form submit
function submitForm() {
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const message = document.getElementById('formMessage').value.trim();
  const service = document.getElementById('formService').value;

  if (!name || !email || !message || !service) {
    const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(i => {
      if (!i.value.trim()) {
        i.style.borderColor = 'var(--red)';
        setTimeout(() => i.style.borderColor = '', 2000);
      }
    });
    return;
  }

  const submitBtn = document.getElementById('formSubmit');
  const success = document.getElementById('formSuccess');
  
  submitBtn.style.display = 'none';
  success.style.display = 'flex';
  
  // Reset form
  document.getElementById('formName').value = '';
  document.getElementById('formEmail').value = '';
  document.getElementById('formPhone').value = '';
  document.getElementById('formService').value = '';
  document.getElementById('formMessage').value = '';

  setTimeout(() => {
    success.style.display = 'none';
    submitBtn.style.display = 'flex';
  }, 5000);
}

// Add visible class to fade-in elements when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Ensure all fade-in elements are visible after page load
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});