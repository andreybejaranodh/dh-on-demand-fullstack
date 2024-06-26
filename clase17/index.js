// un ciclo es una instruccion que me permite ejecutar un bloque de codigo n cantidad de veces mientras se cumpla una condicion
// for, while, do while ---- Ciclos primitivos
// - iniciador/Contador
// - condicion de ejecucion 
// - modificador del iniciador/contador 
// - Bloque de codigo q se va a ejecutar mientras se cumpla la condicion

// While
let counter = 0; // Iniciador/contador
while (counter < 5) { // Condicion
    // Bloque de codigo q se va a ejecutar mientras se cumpla la condicion
    console.log('Ejemplo While: #', counter);
    counter++; // Modificador del iniciador/contador
}
// End While

// Do While
let counter2 = 0;
do {
     // Bloque de codigo q se va a ejecutar mientras se cumpla la condicion
     // Se ejecutar el bloque por lo menos una vez asi la condicion no se cumpla desde el inicio
     console.log('Ejemplo Do While: #', counter2);
     counter2++; // Modificador del iniciador/contador
} while (counter2 < 5); // Condicion
// End Do While

// For
for (let index = 0; index < 5; index++) { // Se encuentra el inicador/contador; la condicion; modificador
    // Bloque de codigo q se va a ejecutar mientras se cumpla la condicion
    console.log('Ejemplo For: #', index);
}
// End For