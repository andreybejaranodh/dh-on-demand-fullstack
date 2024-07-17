const colors = ['black', 'red', 'blue', 'white'];

// array.length obtiene el total de elementos de un array
console.log(colors.length);
// El primer elemento del array siempre es el indice 0
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// El ultimo indice es el total de elementos del array menos 1
console.log(colors[colors.length - 1]);

// agregar un elemento al final del array
colors.push('yellow');
console.log(colors);

// agregar un elemento al inicio del array
colors.unshift('gray');
console.log(colors);

// eliminar el ultimo elemento del array(yellow)
colors.pop();
console.log(colors);

// colocar el ultimo elemento del array al inicio(White)
colors.unshift(colors.pop());
console.log(colors);

// eliminar el primer elemento del array(white)
colors.shift();
console.log(colors);

// poner el primer elemento al final del array(gray)
colors.push(colors.shift());
console.log(colors);

// agregar un elemento en el indice 2
colors.splice(2, 0, 'white');
console.log(colors);

// replazar el valor del indice 2 por yellow sin usar colors[2] = 'yellow'
colors.splice(2, 1, 'yellow');
console.log(colors);

// eliminar el elemento con indice 3
colors.splice(3, 1);
console.log(colors);

// buscar el elemento con valor red y almacenar en una variable llamada colorFound si no lo encuentra el valor va a ser undefined
const colorFound = colors.find((color) => color === 'red');
console.log(colorFound);

const numbers = [3, 9, 1, 14, 24, 16, 4, 8, 2, 5, 6];

// filtrar todos los numeros pares
const numbersFiltered = numbers.filter((number) => number % 2 === 0);
console.log(numbersFiltered);

// ordenar los numeros filtrados
const numbersFilteredSorted = numbersFiltered.sort((a, b) => a - b);
console.log(numbersFilteredSorted);

// crear un nuevo array con los numeros multiplicados por dos si es par
const newNumbers = numbers.map((number) => number % 2 === 0 ? number * 2 : number);
console.log(newNumbers);

// imprimir todos los colores
colors.forEach((color) => {
    console.log(color);
});

// for (let index = 0; index < colors.length; index++) {
//     console.log(colors[index]);
// }

const user = {
    name: 'andrey',
    age: 35,
    country: 'Colombia'
};

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    year: 2012,
    getFullName: function() {
        return this.brand + ' ' + this.model;
    }
}

user.lastName = 'Bejarano';

console.log(car.getFullName());

const users = [
    {
        id: 1,
        name: 'Andrey'
    },
    {
        id: 2,
        name: 'Carlos'
    },
    {
        id: 3,
        name: 'Maria'
    }
];

// buscar el usuario con el id 2
const userFound = users.find((user) => user.id === 2);
console.log(userFound);

// agregar la propiedad roles con valor user a todos los usuarios
users.forEach((user) => {
        user.role = user.id === 1 ? 'admin' : 'user'; 
});
console.log(users);