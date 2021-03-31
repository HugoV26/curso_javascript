/*
Reto 5: Funciones
Inverso de un número
Escribe un programa que, al recibir un número entero de 4 dígitos, lo imprima de forma inversa. Ejemplo:

Numero = 1234 – – – > Inversa= 4531

Datos: Numero

Donde:

Numero: Variable de tipo numérica de 4 dígitos al que se le aplicará una función que lo transforme en su inversa.
*/


let inverse = (number) => {
    let array = [];
    let array_two = [];
    let parse = number.toString();

    for (const iterator of parse) {
        array.push(iterator);
    }

    let l = array.length - 1;
    for (let j = l; j >= 0; j--) {
        array_two.push(array[j]);
    }
    
    let e = '';
    array_two.forEach(element => {
        e += element;
    });
    
    let res = parseInt(e);
    return res;
}

let number = 3651232147;
let res = inverse(number);
console.log(`El inverso del número que ingresaste es: ${res}`);