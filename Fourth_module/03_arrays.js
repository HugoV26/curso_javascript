//let list = new Array(10, 43, 56, 27)

let list = [10, 43, 56, 27, 12, 56]

//Número de elementos que tiene nuestro array
console.log(`Nuestro listado tiene ${list.length} elementos`);

let suma = 0;
for(let i=0; i < list.length; i++)
{
    suma += list[i]
}

console.log(`El total de la suma es ${suma}`);

//Obtener un determinado número de elementos
let sub_list = list.slice(0, 4);
console.log(sub_list)

//Determina si un valor lo satisface o no, lo retorna
let pair_list = list.filter( (item) =>{
    return item % 2 == 0; //Regresa un true
})

console.log(`El listado de pares es: ${pair_list}`);

//Concatenar nuestros elementos --> por default, los separa con una coma
let chainArray = list.join('*');
console.log(chainArray);

//Encuentra la primera coincidencia
let value = 56;
let index = list.indexOf(value);

console.log(`El valor de ${list[index]} se encuentra en el indice ${index}`);

let indice = 0;
let count = 0;
while (indice >= 0) {           //a partir de que posición vamos a buscar
    indice = list.indexOf(value, indice);
    if(indice >= 0){ //Si encontramos el valor
        indice++;
        count++;
    }
}

console.log(`Existen ${count} elementos con el valor ${value}`);

//Push -> agrega valores al final de nuestro listado

list.push(24, 1000);
console.log(list)

//Agrupación de list con newList
let newList = [1, 2, 3, 4 , 5];
let group = list.concat(newList);

console.log(group);

//Eliminar el primer elemento
group.shift();
console.log(group)

//Eliminar el último elemento
group.pop()
console.log(group);

//Splice -> toma los elementos de una lista, los elimina y pueden ser utilizados para almacenarse en una variable
let sub_list_two = group.slice(0, 3);
let removes = group.splice(0, 3); //Altera la lista original
console.log(sub_list_two);
console.log(group);
console.log(removes);
console.log(group)


//Reverse

group.reverse();
console.log(group);

//sort --> ordena nuestro listado, alfabetico por default
let paco = [1, 2, 3, 4, 5];
//paco.sort((a, b) => {
//    return a < b;
//});

paco.sort((a, b) => a < b);
console.log(paco);

//map

let newPaco = paco.map((item) => {
    return item * 10;
})

console.log(newPaco);