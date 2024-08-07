const menu = document.querySelector('#header #nav #menu');
const btnMenu = document.querySelector('#header #nav #btn-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
