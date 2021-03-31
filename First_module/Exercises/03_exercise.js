/*
Escribe un programa que, al recibir un listado de números enteros positivos, obtenga la suma de los números pares y su promedio, la suma de los números impares y su promedio.
*/


let array = [0, 2, 5, 10, 16, 32, 25, 9]
let array_par = []
let array_impar = []
let prom= 0

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 == 0) {
        array_par.push(element);
    }else{
        array_impar.push(element);
     }
}

for (let index = 0; index < array_par.length; index++) {
    prom += array_par[index];
}

console.log(`Array con los números pares ${array_par}`);
console.log(`El promedio de los números pares es: ${prom/array_par.length}`)

for (let index = 0; index < array_impar.length; index++) {
    prom += array_par[index];
}
console.log(`Array con los números impares ${array_impar}`);
console.log(`El promedio de los números impares es: ${prom/array_impar.length}`)


