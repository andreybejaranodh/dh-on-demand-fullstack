const btnMenu = document.querySelector('.header div.btn-menu');
const menu = document.querySelector('.header .nav .menu');
const loginForm = document.querySelector('main.login-page form.login-form');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const txtEmailError = document.querySelector('.login-form #txtEmailError');
    const txtPasswordError = document.querySelector('.login-form #txtPasswordError');
    const errors = [];

    txtEmailError.innerText = '';
    txtPasswordError.innerText = '';
    
    if (!loginForm.email.value) {
        txtEmailError.innerText = 'El email es requerido!';
        errors.push('El email es requerido!');
    }

    if (!loginForm.password.value) {
        txtPasswordError.innerText = 'El password es requerido!';
        errors.push('El password es requerido!');
    }

    if (errors.length === 0) {
        loginForm.submit();
    }
});


loginForm.password.addEventListener('keydown', (event) => {
    const txtPasswordError = document.querySelector('.login-form #txtPasswordError');
    txtPasswordError.innerText = '';
    if (event.target.value?.length < 8) {
        txtPasswordError.innerText = 'El password debe tener mas de ocho caracteres!';
    }
})