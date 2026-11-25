// ----- Edit your events here -----
const events = [
  { date: 'Date to be announced', title: 'Art & Environment Workshop', meta: 'Oujda · Paint something inspired by protecting our environment' },
  { date: 'Date to be announced', title: 'Environmental Volunteering Day', meta: 'Oujda · Join hands-on volunteering for a cleaner city' }
];

// ----- Render events -----
const list = document.getElementById('events-list');
events.forEach((e) => {
  const li = document.createElement('li');
  li.className = 'event';
  li.innerHTML =
    '<div class="event-date"></div>' +
    '<div class="event-info"><span class="event-title"></span><span class="event-meta"></span></div>' +
    '<a class="btn btn-outline" href="#join">Register</a>';
  li.querySelector('.event-date').textContent = e.date;
  li.querySelector('.event-title').textContent = e.title;
  li.querySelector('.event-meta').textContent = e.meta;
  list.appendChild(li);
});

// ----- Logo -----
const logo = document.getElementById('logo');
if (logo) logo.addEventListener('error', () => { logo.style.display = 'none'; });

// ----- Mobile menu -----
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    const details = a.closest('.nav-more');
    if (details) details.open = false;
  })
);
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-more')) document.querySelector('.nav-more').open = false;
});

// ----- Highlight the current section in the nav -----
const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
const sections = links.map((l) => document.querySelector(l.getAttribute('href')));
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => s && observer.observe(s));

// ----- Join form -----
const form = document.getElementById('join-form');
const status = document.getElementById('form-status');
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

form.addEventListener('submit', (ev) => {
  const name = form.elements.namedItem('name').value.trim();
  const email = form.elements.namedItem('email').value.trim();
  const nameError = document.getElementById('err-name');
  const emailError = document.getElementById('err-email');
  nameError.textContent = name ? '' : 'Please enter your name.';
  emailError.textContent = emailOk(email) ? '' : 'Please enter a valid email address.';
  status.className = 'form-status';

  if (!name || !emailOk(email)) {
    ev.preventDefault();
    status.textContent = 'Please check the fields above.';
    return;
  }

  const formUrl = document.getElementById('form-url');
  if (formUrl) formUrl.value = location.href;

  const nextUrl = document.getElementById('next-url');
  if (nextUrl) nextUrl.value = new URL('thanks.html', location.href).href;

  const button = form.querySelector('button[type="submit"]');
  if (button) {
    button.disabled = true;
    button.textContent = 'Sending…';
  }
  status.classList.add('ok');
  status.textContent = 'Sending your application…';
});

// ----- Footer year -----
document.getElementById('year').textContent = new Date().getFullYear();
