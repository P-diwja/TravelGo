/* ============================================================
   TravelGo — Booking Page JS
   ============================================================ */

// ── Insurance option selection ────────────────────────────
function selectIns(type) {
  document.querySelectorAll('.ins-option').forEach(o => o.classList.remove('selected'));
  const el = document.getElementById('ins-' + type);
  if (el) el.classList.add('selected');

  const row = document.getElementById('assurance-row');
  const total = document.getElementById('total-price');

  if (type === 'plus') {
    row.style.display = '';
    total.textContent = '$3,592.00';
  } else {
    row.innerHTML = '<span style="color:var(--blue)">Standard Protection</span><span style="color:var(--blue)">+$22.00</span>';
    total.textContent = '$3,569.00';
  }
}

// ── Payment method tabs ───────────────────────────────────
function setPay(btn) {
  document.querySelectorAll('.pay-btn').forEach(b => {
    b.classList.remove('active', 'pay-apple');
    b.style.background = '';
    b.style.color = '';
    b.style.borderColor = '';
  });
  if (btn.textContent.includes('Apple')) {
    btn.classList.add('active', 'pay-apple');
  } else {
    btn.style.background = '#4285F4';
    btn.style.color = 'white';
    btn.style.borderColor = '#4285F4';
  }
}

// ── Card number formatting ────────────────────────────────
function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

// ── Expiry date formatting ────────────────────────────────
function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
  input.value = v;
}

// ── Promo code ────────────────────────────────────────────
function applyPromo() {
  const input = document.getElementById('promoInput');
  const code = input.value.trim().toUpperCase();
  const total = document.getElementById('total-price');

  const promos = { 'TRAVEL10': 0.10, 'VIP20': 0.20, 'SUMMER15': 0.15 };

  if (promos[code]) {
    const base = 3592;
    const disc = Math.round(base * promos[code]);
    total.textContent = `$${(base - disc).toLocaleString()}.00`;
    input.style.borderColor = '#16A34A';
    input.value = `${code} applied (-${promos[code] * 100}%)`;
    input.disabled = true;
  } else if (code) {
    input.style.borderColor = '#EF4444';
    input.placeholder = 'Invalid code';
    input.value = '';
    setTimeout(() => { input.style.borderColor = ''; input.placeholder = 'PROMO CODE'; }, 2000);
  }
}

// ── Save card checkbox ─────────────────────────────────────
const saveCard = document.getElementById('saveCard');
if (saveCard) {
  saveCard.addEventListener('change', function() {
    const check = this.nextElementSibling;
    if (check) check.style.background = this.checked ? 'var(--blue)' : 'var(--border)';
  });
}
