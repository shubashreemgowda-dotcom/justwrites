const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();
const toast = document.getElementById('toast');
let toastTimer;
document.querySelectorAll('.add-to-list').forEach(button => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('is-saved');
    button.textContent = saved ? '♥' : '♡';
    const name = button.dataset.product;
    toast.textContent = saved ? `${name} saved to your favourites ♡` : `${name} removed from favourites`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  });
});
