/*
Operadores Logicos
== compara si el valor es igual
!= Compara si el valor es diferente
=== compara si el valor y el tipo son iguales
!== compara si el valor y el tipo son diferentes
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
https://developer.mozilla.org/es/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

// && = and
// || = or
// true && true = true
// true && false = false
// false && true = false
// false && false = false
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// Contruir un codicional con las siguientes consignas para un registro de usuarios:
// Si la edad es >= 18 y < 21 entonces puede entrar con supervision de un adulto
// Si es >= 21 entonces puede entrar sin supervision 
// Si es < de 18 no puede entrar
const age = 30;
if (age >= 18 && age < 21) {
    console.log('Puede entrar con supervision de un adulto');
} else if (age >= 21) {
    console.log('Puede entrar sin supervision');
} else {
    console.log('No puede entrar');
}

const role = 'supervisor';
if (role === 'admin' || role === 'supervisor') {
    console.log('Puede crear un usuario');
} else {
    console.log('No tiene los permisos para crear un usuario');
}

const isAdmin = role === 'admin';
// let isAdmin;
// if (role === 'admin') {
//     isAdmin = true;
// } else {
//     isAdmin = false;
// }
console.log(isAdmin);

const messageAdmin = isAdmin ? 'Hola Admin' : 'No sos admin';
// let messageAdmin;
// if (isAdmin === true) {
//     messageAdmin = 'Hola Admin';
// } else {
//     messageAdmin = 'No sos un admin';
// }
console.log(messageAdmin);

const messageAdmin2 = !isAdmin ? 'No sos admin' : 'Hola Admin';
console.log(messageAdmin2);
