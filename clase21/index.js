const fs = require('fs');
const path = require('path');

// writeFile y writeFileSync si el archivo no existe lo crea, si existe lo sobreescribe
fs.writeFile(path.resolve('writeFile.txt'), "Hola mundo writeFile!", (err) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    console.log('Se creo el archivo correctamente');
});

fs.writeFileSync(path.resolve('writeFileSync.txt'), "Hola mundo writeFileSync!");
// appendFile y appendFileSync si el archivo no existe lo crea, si existe le agrega un nuevo contenido
fs.appendFile(path.resolve('appendFile.txt'), 'Hola mundo appendFile\n', (err) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    console.log('Se edito el archivo correctamente');
});

fs.appendFileSync(path.resolve('appendFileSync.txt'), 'Hola mundo appendFileSync\n');

fs.readFile(path.resolve('writeFile.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    console.log(data);
});

const data = fs.readFileSync(path.resolve('appendFile.txt'), 'utf-8');
console.log(data);

// Date.now() obtiene la fecha UTC que es la cantidad de segundos desde 01/01/1970 hasta ahora
fs.appendFileSync(path.resolve('access.log'), `Time: ${Date.now()}\n`)
