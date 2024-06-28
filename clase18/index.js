////////// Calculadora
function sum(numA, numB) {
    const total = numA + numB;
    return total;
}

const rest = function(numA, numB) {
    return numA - numB;
}

const getRandom = (min = 0, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomLetter() {
    const letters = 'abcdefghij';
    const index = getRandom(0, letters.length - 1);
    return letters[index];
}

console.log(getRandom());

console.log(getRandomLetter());

const totalRest = rest(4, 2);

const total = sum(2, 4);

const total2 = sum(3, 5);

const random = getRandom(1);
console.log(random);
////////// End Calculadora

////////// Usuario
let name = 'Erik';
let lastName = '';
let age = '';

console.log(name);

function setName(firstName) {
    name = firstName;
}

setName('Andrey');
console.log(name);

////////// End Usuario

