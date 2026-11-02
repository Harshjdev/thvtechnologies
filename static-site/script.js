// sticky nav + mobile menu
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 20));
document.getElementById('burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// typing headline word
const words = ['websites', 'web apps', 'mobile apps', 'brands', 'UI/UX designs'];
const el = document.getElementById('typed');
let w = 0, c = 0, del = false;
(function tick() {
  const word = words[w];
  el.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(tick, del ? 45 : 90);
})();

// reveal on scroll + counters
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(n => io.observe(n));

document.querySelectorAll('[data-count]').forEach(n => {
  const t = +n.dataset.count; let v = 0;
  const step = () => { v += Math.ceil(t / 60); n.textContent = Math.min(v, t); if (v < t) requestAnimationFrame(step); };
  step();
});

// portfolio filter
const filters = document.getElementById('filters');
filters.onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  filters.querySelector('.on').classList.remove('on'); b.classList.add('on');
  document.querySelectorAll('.work').forEach(w =>
    w.classList.toggle('hide', b.dataset.f !== 'all' && w.dataset.c !== b.dataset.f));
};

// contact form (front-end only: connect to your backend / email service)
document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  const f = e.target, note = document.getElementById('note');
  if (!f.name.value.trim() || !/\S+@\S+\.\S+/.test(f.email.value) || !f.msg.value.trim()) {
    note.style.color = '#f87171'; note.textContent = 'Please fill in all fields with a valid email.'; return;
  }
  note.style.color = '#4ade80'; note.textContent = 'Thanks! We will contact you within 24 hours.'; f.reset();
};

document.getElementById('yr').textContent = new Date().getFullYear();
