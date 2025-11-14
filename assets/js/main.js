/* Minimal JS for form handling and small UX touches */
document.addEventListener('DOMContentLoaded', function () {
  // Subscribe form — constructs a mailto with email
  const subscribe = document.getElementById('lead-subscribe');
  if (subscribe) {
    subscribe.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('subscribe-email').value.trim();
      if (!email) return;
      const subject = encodeURIComponent('Subscribe to Revival Fit');
      const body = encodeURIComponent('Please subscribe ' + email + ' to the Revival Fit list.');
      window.location.href = `mailto:join@revival.fit?subject=${subject}&body=${body}`;
    });
  }

  // Contact form — open mail client populated with message
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('contact-name').value.trim());
      const email = encodeURIComponent(document.getElementById('contact-email').value.trim());
      const message = encodeURIComponent(document.getElementById('contact-message').value.trim());

      const subject = encodeURIComponent('Contact from Revival Fit site: ' + (name || 'New message'));
      const body = encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`);
      window.location.href = `mailto:info@revival.fit?subject=${subject}&body=${body}`;
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});