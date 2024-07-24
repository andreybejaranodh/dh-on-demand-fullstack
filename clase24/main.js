// document.querySelector() obtiene el primer elemento que cumpla el selector
const header = document.querySelector('header');
const footer = document.querySelector('footer');
// document.querySelectorAll() obtiene todos los elementos q cumplem el selector
const boxes = document.querySelectorAll('.box');
// document.getElementById() obtiene el primer elemento con el id especificado
// const box1 = document.querySelector('#box1');
const box1 = document.getElementById('box1');
const title = document.getElementById('title');

header.style.fontSize = '36px';

const userName = prompt('Ingresa tu nombre:');

title.innerText = userName
    ? `Bienvenido ${userName}`
    : `Bienvenido Invitado`;

const isDark = confirm('Desea el modo oscuro?');

if (isDark) {
    document.body.classList.add('dark');
}

header.classList.add('header-dark');
header.classList.remove('header');
boxes.forEach((box, index) => {
    if (index % 2 === 0) {
        box.style.background = 'gray';
    } else {
        box.style.background = '#d9d6d6';
    }
});
box1.classList.toggle('big-box');
footer.innerText = 'Nuevo Footer';

alert('Todo cambio con JS!');


