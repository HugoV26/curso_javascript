//let chain = new String('Hola mundo);
let chain = 'Hola mundo';

let message = `Nuestro texto tiene ${chain.length} caracteres`;
console.log(message);

//Está compuesto de un listado de caracteres
console.log(chain[0]);

let text = '';

for (let i = 0; i < chain.length; i++) {
    text += chain[i] + '.'    
}

console.log(text);


//Convierte las cadenas de texto a mayúsculas
console.log(chain.toUpperCase());

//Convierte las cadenas de texto a minúsculas
console.log(chain.toLocaleLowerCase());

//Seccionar nuestra cadena de texto
console.log(chain.substr(0, 6));

//Comienzo desde la posición 5
console.log(chain.substr(3));

//Se coloca de atrás hacia adelante
console.log(chain.substr(-3))

//Regresa un booleano y verifica si nuestra cadena de caracteres comienza con cierto caracter o caracteres
console.log(chain.startsWith('Ho'));

//Regresa un booleano y verifica si nuestra cadena de caracteres termina con cierto caracter o caracteres
console.log(chain.endsWith('doa'));

//Revisa toda la cadena de texto y encuentra la primera coincidencia, retorna un booleano
console.log(chain.includes('l'))

//Encuentra la posición
console.log(chain.indexOf('mundo'));

//Toma como primer valor una cadena de texto, y como segundo valor una cadena de texto que va a reemplazar a la primer cadena
console.log(chain.replace('mundo', 'tierra'))