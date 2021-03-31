/*
Ejercicio 1
Se requiere calcular el precio de ida y vuelta en avión, conociendo tanto la distancia entre las dos ciudades como el tiempo de estancia en la ciudad destino.

Si el número de días de estancia es superior a 10 y la distancia total (ida y vuelta) a recorrer es superior a 500km, el precio del billete se reduce en 20%. El precio por km es de $0.19.
*/

let distance = prompt("Ingresa la distancia entre las dos ciudades: "); //km
let days = prompt("Ingresa los días de estancia: ");
let km = 0.19;
let total = distance * km;



if (days > 0 && distance > 0) {
    if (days > 10 && distance > 500) {
        total = total - (total * 0.2);
        console.log(`Se ha aplicado un descuento de 20% al precio final del viaje.\n Monto a pagar: $${total} MXN`);
    }else{
        console.log(`Monto a pagar: $${total} MXN`);
    }    
}
