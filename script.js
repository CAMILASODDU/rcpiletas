// =============================
// 📱 Menú responsive
// =============================
const menuBtn = document.querySelector('.navbar-toggler');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
});
