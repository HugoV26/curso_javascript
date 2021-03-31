/*

Las instrucciones que están fuera de una función, se encuentran en un ámbito global.
Pueden ser ejecutadas desde cualquier parte de nuestro código.

Las instrucciones qu están dentro de una función, se encuentran en un ámbito local.


*/

let globalVariable = 26;

function kirby()
{
    let localVariable = 24;
    console.log(`Local Variable: ${localVariable} \nGlobal Variable: ${globalVariable}`);
}

//console.log(localVariable);
kirby();

let time = 60;

function showMessage(time)
{
    console.log(time);
}

showMessage(time);

function areaTriangulo(base, altura)
{
    let area = (base * altura) / 2;
    return area;
}

//Tengo que atrapar el valor
let res = areaTriangulo(20, 35);

console.log(res);

let a = -100;
let b = -2;

function comparador(value1, value2)
{
    let total = value1 + value2;

    if (total > 100) {
        return total;
    } else {
        return 0;
    }
}

let resultado = comparador(a, b);
console.log(resultado);