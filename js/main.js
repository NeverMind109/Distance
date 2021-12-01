const menuButton = document.querySelector('.header__mobile-left-sidebar');
const menu = document.querySelector('.left-sidebar');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('left-sidebar--active');
})