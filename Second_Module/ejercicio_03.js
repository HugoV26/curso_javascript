/*
Reto 3: Funciones
Contador números pares e impares
Escribe un programa que, al recibir una lista de números enteros, determine cuántos de estos números son pares y cuántos son impares y los imprima

Datos: Listado

Donde: 

Listado: Variable de tipo array numérico que contiene números a evaluar
*/
let numbers = ((array) => {

    let pair_numbers = 0;
    let odd_numbers = 0;
    let i = [];
    let j = [];
    let s = [];

    let checkNumber = (number) => {
        if (number % 2 == 0) {
            pair_numbers += 1;
            i.push(number);
        }else{
            odd_numbers += 1
            j.push(number);
        }
    }

    array.forEach(element => {

        if (typeof(element) == 'string')
        {
            if (isNaN(parseFloat(element)))
            {
                s.push(element);
            }
            else
            {
                let value = Math.round(element);
                checkNumber(value);
            }
        }else{
            let value = Math.round(element);
            checkNumber(value);
        }
    });
    console.log(`El total de números pares que se ingreso fue de: ${pair_numbers}`);
    console.log(`Los números pares que se ingresaron fueron: ${i}`);
    console.log('\r');
    console.log(`El total de números impares que se ingreso fue de: ${odd_numbers}`);
    console.log(`Los números impares que se ingresaron fueron: ${j}`);
    console.log('\r');
    console.log(`Se detectaron los siguientes textos como entrada: ${s}`);
})([2.2, 3.6, 5, 6.8, 9, 0, '9.6', 'Azul', 'School']);

numbers;
