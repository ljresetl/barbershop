document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('buttonlogo');
  const closeBtn = document.getElementById('burgerCloseBtn');
  const burgerMenu = document.getElementById('burgerMenu');

  // Відкриття бургер-меню
  openBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    burgerMenu.classList.add('open');
  });

  // Закриття по кнопці
  closeBtn.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
  });

  // Закриття при кліку поза меню
  document.addEventListener('click', function (e) {
    const isClickInside = burgerMenu.contains(e.target) || openBtn.contains(e.target);
    if (!isClickInside) {
      burgerMenu.classList.remove('open');
    }
  });
});
