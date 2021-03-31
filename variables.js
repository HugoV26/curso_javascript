/*
function ejemplo(periodo){
    let suma = 0;
    for (let i = 0; i < periodo.length; i++) {
        let mes = periodo[i];
        suma += suma + mes;
    }
    return suma
}

let sara = function cantidadDeMesesConGanancia(unPeriodo){ // [50, 0, 150, 0, 600]
    let count = 0;
    let element;
    for (let i = 0; i < unPeriodo.length; i++) {
        element = unPeriodo[i];
        if (element > 0) {
            count = count + 1;
        }
    }

    return count;
}([5, 20, 0]);

//console.log(sara);
*/
/*
let ganancia = function saldosDeMesesConGanancia(unPeriodo){
    let meses = [];
    let element;

    for (let i = 0; i < unPeriodo.length; i++) {
        element = unPeriodo[i];
        if (element > 0) {
            meses.push(element);
        }
    }

    return meses;
};
*/

//console.log(ganancia([100, 20, 0, -10, 10]));


function naipes(string){
    let arrayEspadas = [];

    if (string == "espadas" || string == "bastos" || string == "copas" || string == "oros") {
        for (let i = 1; i <= 12; i++) {
            arrayEspadas.push(i + " de " + string)
            if (i == 8 || i == 9) {
                arrayEspadas.pop()
            }
        }
    return arrayEspadas;
    }
}

//console.log(naipes("oros"));


function productoria(array){
    let producto = 1;

    for (let i = 0; i < array.length; i++) {
        producto *= array[i]; //producto = producto * array[i]
    }

    return producto;
}

//console.log(productoria([1, 4, 7]));

    

function laClaveSecreta(clave){
    let clv  = clave.reverse()
    let str = '';
    let element;
    for (let i = 0; i < clv.length; i++) {
        element = clv[i];
        if (element != '*')
            str = str + element;
    }
    return str;     
}

let test = ['Sara', 'es', 'mi', 'princesa'];

console.log(laClaveSecreta(test));

console.log(laClaveSecreta( [ "s", "", "e", "n", "u", "l", " ", "s", "", "e", " ", "a", "í", "", "d", " ", "l", "", "E", "*"]));

console.log(laClaveSecreta( ["a", "", "d", "a", "r", "f", "", "i", "c", "", "s", "e", "d", " ", "e", "", "v", "a", "l", "C"] ));