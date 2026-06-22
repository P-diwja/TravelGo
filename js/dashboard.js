/* ============================================================
   TravelGo — Dashboard JS
   ============================================================ */

// ── Sidebar navigation ────────────────────────────────────
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ── Activity toggle (Year / Month) ───────────────────────
function setToggle(btn, period) {
  document.querySelectorAll('.toggle').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const monthHeights = [60, 45, 80, 35, 90, 55, 75, 40, 65, 100, 50, 30];
  const yearHeights  = [40, 60, 80, 55, 70, 90, 65, 45, 85, 100, 50, 35];
  const heights = period === 'Year' ? yearHeights : monthHeights;

  document.querySelectorAll('.bar-val').forEach((bar, i) => {
    bar.style.height = heights[i] + '%';
  });
}

// ── Rewards progress bar animation ───────────────────────
window.addEventListener('load', () => {
  const fill = document.querySelector('.prog-fill');
  if (fill) {
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.transition = 'width 1.2s ease';
      fill.style.width = '75%';
    }, 400);
  }
});

// ── Chat bubble pulse ─────────────────────────────────────
const chat = document.querySelector('.chat-bubble');
if (chat) {
  setInterval(() => {
    chat.style.boxShadow = '0 4px 20px rgba(30,63,216,.7)';
    setTimeout(() => {
      chat.style.boxShadow = '0 4px 20px rgba(30,63,216,.4)';
    }, 600);
  }, 3000);
}
