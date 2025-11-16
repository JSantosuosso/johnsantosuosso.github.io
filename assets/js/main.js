<!-- ================= assets/js/main.js ================= -->
// small interactive behaviors: mobile nav, dark mode, smooth scroll
(function(){
const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');


if(menuBtn){
menuBtn.addEventListener('click', ()=>{
siteNav.classList.toggle('open');
siteNav.style.display = siteNav.classList.contains('open') ? 'flex' : '';
});
}


// Dark mode: check localStorage
const darkPref = localStorage.getItem('dark');
if(darkPref === 'true') body.classList.add('dark-mode');


// Attach dark toggle if present
const darkToggle = document.getElementById('darkToggle');
if(darkToggle){
darkToggle.addEventListener('click', ()=>{
body.classList.toggle('dark-mode');
const isDark = body.classList.contains('dark-mode');
localStorage.setItem('dark', isDark);
darkToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});
// Set initial label
darkToggle.textContent = body.classList.contains('dark-mode') ? '☀️ Light' : '🌙 Dark';
}


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', e=>{
e.preventDefault();
const id = a.getAttribute('href');
const el = document.querySelector(id);
if(el) el.scrollIntoView({behavior:'smooth'});
});
});


})();
