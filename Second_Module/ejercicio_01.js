/*
Reto 1: Funciones
Registro de calificaciones
Escribe un programa que, al recibir un listado de calificaciones de un grupo de becarios inscritos a la capacitación de Tu Nerd, calcule y escriba el número de calificaciones que hay en cada uno de los siguientes rangos.

Rangos
0 a 3.99
4 a 5.99
6 a 7.99
8 a 8.99
9 a 10
El programa debe, además, calcular el promedio de calificación del grupo.

Datos: Calificaciones

Donde:

Calificaciones: Variable de tipo array numérico que representa la lista de calificaciones obtenidas por los estudiantes del curso
*/
let count = 0;
let average = 0;
let range1 = 0;
let range2 = 0;
let range3 = 0;
let range4 = 0;
let range5 = 0;

let califications = (array) => {
    let count_index = array.length;
    for (let i = 0; i < array.length; i++) {
       
        let calification = array[i];

        if (parseFloat(calification) >= 0 && parseFloat(calification) <= 3.99) {
            range1 += 1;
            count += calification;
        } else if (parseFloat(calification) >= 4 && parseFloat(calification) <= 5.99) {
            range2 += 1;
            count += calification;
        } else if (parseFloat(calification) >= 6 && parseFloat(calification) <= 7.99) {
            range3 += 1;
            count += calification;
        }else if (parseFloat(calification) >= 8 && parseFloat(calification) <= 8.99) {
            range4 += 1;
            count += calification;
        }else if (parseFloat(calification) >= 9 && parseFloat(calification) <= 10) {
            range5 += 1;
            count += calification;
        } else {
           console.log(`La calificación ${calification} no entra en ningún rango`);
           count_index -= 1; 
        }
    }

    average = (count / count_index);
}

let array = [10, 9, 8.5, 8, 3.3, 0, 96, 3.2, -5, 8, 7.96, 6.445];
califications(array)

console.log(`Número de calificaciones que se encuentran en el primer rango (0-3.99): ${range1}`);
console.log(`Número de calificaciones que se encuentran en el segundo rango (4-5.99): ${range2}`);
console.log(`Número de calificaciones que se encuentran en el tercer rango (6-7.99): ${range3}`);
console.log(`Número de calificaciones que se encuentran en el cuarto rango (8-8.99): ${range4}`);
console.log(`Número de calificaciones que se encuentran en el quinto rango (9-10): ${range5}`);

console.log(`El promedio de las calificaciones es: ${average}`);