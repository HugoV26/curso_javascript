//let value = new Number(3.1416);
let value = 24.26
console.log(value);

//Nos retorna el valor de PI
console.log(Math.PI);

//Constante de eular
console.log(Math.E);

//Toma nuestro valor y en caso de ser número decimal lo aproxima al entero más cercano hacia arriba
console.log(`Ceils: ${Math.ceil(value)}`);

//Toma nuestro valor y en caso de ser número decimal lo aproxima al entero más cercano hacia abajo
console.log(`Floor: ${Math.floor(value)}`);

//Detecta si lo más conveniente es redondear hacia abajo o arriba con base en los decimales
console.log(`Round: ${Math.round(value)}`);

//Nos quedamos únicamente con la parte entera
console.log(`Trunc: ${Math.trunc(value)}`);

//Generar números absolutos a partir de números negativos
console.log(`ABS: ${Math.abs(-50)}`);

//A partir de una serie de números separados por comas, deteecta cuál es el valor más grande --> No recibe un array
console.log(`MAX: ${Math.max(1, 2, 3, 4)}`);

//A partir de una serie de números separados por comas, deteecta cuál es el valor más pequeño --> No recibe un array
console.log(`MIN: ${Math.min(1, 2, 3, 4)}`);

//Números aleatorios
console.log(`Random: ${Math.random()}`);

let max_limit = 26;
let min_limit = 17;

let inter = Math.floor(Math.random() * (max_limit - min_limit ) + min_limit);

console.log(`Número aleatorio entre ${max_limit} y ${min_limit}: ${inter}`);

//Exponencial
console.log(`POW: ${Math.pow(2, 3)}`);

//Raíz
console.log(`Raiz(sqrt): ${Math.sqrt(36)}`);