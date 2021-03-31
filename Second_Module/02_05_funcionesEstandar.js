//Funciones que nos proveé de forma nativa

// isNaN -> toma una variable, la examina y determina si NO es numérica.

let myValue = 'Paco';
myValue = 69;
myValue = '69Paco'
myValue = '10';
myValue = '30.2';

if(isNaN(myValue))
{
    console.log(`${myValue} me la pela y no es un número`);
} else {
    //let myNum = parseInt(myValue); //Intenta convertir una cadena de texto a un entero
    let myNum = parseFloat(myValue); //Intenta convertir una cadena de texto a un flotante
    console.log(`El paco me la sigue pelando y ahora sí es un número: ${myNum}`);
}

let name = 'Paco Gerte'; //El navegador no entiende espacios
name = 'Paco Gerte, C@chondo*'
let codificado = encodeURIComponent(name); //Busca la representación en caracteres
let decodificado = decodeURIComponent(codificado);
let url = `http://onlyfans/perfil/${codificado}`;


console.log(url);
console.log(decodificado);