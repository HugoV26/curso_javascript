
/*
Reto 4: Funciones
Fondo de inversión
Un individuo invierte en un banco un capital específico y quiere saber cuánto obtendrá al cabo de cierto tiempo, si el dinero se coloca a una determinada tasa de interés mensual. Escribe un programa correspondiente.

Datos: Mes, Capital, Tasa

Donde:

Mes: Variable de tipo numérica que indica a cuantos meses se colocará la inversión

Capital: Variable de tipo numérica que indica el capital inicial

Tasa: Variable de tipo numérica que indica la tasa de interés mensual
*/

let month = 12;
let capital = 14000;
let rate = 0.5;

let investment = (month, capital, rate) => {
       let profit = 0;

       for (let s = 1; s <= month; s++) {
        profit += (((capital * rate) / 365) * 30);    
       }
       return profit;
}

let res = investment(month, capital, rate);
console.log(`Tu ganancia después de ${month} meses será de ${res}`);