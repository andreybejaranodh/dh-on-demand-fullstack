/* le va a pedir al usuario q ingrese un numero, y si el numero es igual a un numero randon q 
se genera imprime en pantalla avanzaste 1, 2, 3, hasta el numero ingresado
*/
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Ingresa un numero del 1 al 3: ', (number) => {
    const random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (random == number) {
        for (let index = 1; index <= number; index++) {
            console.log('Avanzaste: ' + index);
        }
    } else {
        console.log('No avanzaste!');
    }
    rl.close();
});