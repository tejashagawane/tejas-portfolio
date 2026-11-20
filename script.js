const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
const photo = document.getElementById('profilePhoto');
photo.addEventListener('load', () => { document.getElementById('profilePlaceholder').style.display = 'none'; });
