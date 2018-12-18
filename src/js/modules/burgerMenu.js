const header = document.querySelector('.header');
const button = header.querySelector('.btn-menu');

button.addEventListener('click', () => {
  if (!header.className.includes('open-nav')) {
    header.classList.add('open-nav');
  } else {
    header.classList.remove('open-nav');
  }
});
