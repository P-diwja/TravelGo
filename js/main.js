/* ============================================================
   TravelGo — Main JS (home + shared)
   ============================================================ */

// ── Category filter tabs ──────────────────────────────────
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Destination wishlist toggle ───────────────────────────
document.querySelectorAll('.dest-fav').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.classList.toggle('liked');
    const svg = btn.querySelector('svg');
    if (btn.classList.contains('liked')) {
      svg.setAttribute('fill', '#EF4444');
      svg.setAttribute('stroke', '#EF4444');
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
    }
  });
});

// ── Newsletter subscribe ──────────────────────────────────
const subForms = document.querySelectorAll('.cta-form, .footer-newsletter');
subForms.forEach(form => {
  const btn = form.querySelector('button, .sub-btn');
  const input = form.querySelector('input[type="email"]');
  if (btn && input) {
    btn.addEventListener('click', () => {
      if (input.value.trim()) {
        btn.textContent = '✓ Subscribed!';
        btn.style.opacity = '0.8';
        input.value = '';
        setTimeout(() => {
          btn.textContent = btn.classList.contains('sub-btn') ? 'Subscribe' : '→';
          btn.style.opacity = '1';
        }, 2500);
      }
    });
  }
});

// ── Smooth scroll for anchor links ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
