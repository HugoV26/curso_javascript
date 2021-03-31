function sumatoria(a, b)
{
    let total = a + b;
    return total;
}

console.log(sumatoria(5, 5));

//Función sin nombre que está almacenada dentro de la variable sumatoriaAnonima
let sumatoriaAnonima = function(a, b){
    let total = a + b;
    return total;
}

console.log(sumatoriaAnonima(7, 7));


//Puede ser enviada a otras funciones
let ejecutarFunction = function(f, value1, value2){
    let res = f(value1, value2);
    return res;
}

console.log(ejecutarFunction(sumatoriaAnonima, 8, 8));

//Función autoejecutable -> En el momento en que se declara, se ejecuta

let sumatoriaAnonimaAuto = (function(a, b){
    let total = a + b;
    return total;
})(10, 10);

console.log(sumatoriaAnonimaAuto);

//Función flecha

let sumatoriaAnonimaFlecha = (a, b) => {
    let total = a + b;
    return total;
}

console.log(sumatoriaAnonimaFlecha(200, 2));

let sumatoriaAnonimaFlechaAuto = ((a, b) => {
    let total = a + b;
    return total;
})(300, 2);

console.log(sumatoriaAnonimaFlechaAuto);

//No existe ventajas, depende del desarrollador