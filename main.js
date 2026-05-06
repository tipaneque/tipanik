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
  }

  // Mobile nav
  document.getElementById('mobileToggle').addEventListener('click', () => {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
  });

  // Close nav on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
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

    document.getElementById('formSubmit').style.display = 'none';
    const success = document.getElementById('formSuccess');
    success.style.display = 'flex';
    
    // Reset form
    document.getElementById('formName').value = '';
    document.getElementById('formEmail').value = '';
    document.getElementById('formPhone').value = '';
    document.getElementById('formService').value = '';
    document.getElementById('formMessage').value = '';

    setTimeout(() => {
      success.style.display = 'none';
      document.getElementById('formSubmit').style.display = 'flex';
    }, 5000);
  }

  // Animated orbit dots
  function positionOrbitDot(dot, ring, angle) {
    const rect = ring.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const r = cx;
    const rad = (angle * Math.PI) / 180;
    dot.style.left = (cx + r * Math.cos(rad)) + 'px';
    dot.style.top = (cy + r * Math.sin(rad)) + 'px';
  }