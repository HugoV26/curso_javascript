//Enero comienza con 0
let date = new Date(2021, 0, 07);
let today = new Date();
console.log(date);
console.log(today);

let year = date.getFullYear();
console.log(year);

console.log(`El mes es ${date.getMonth()}`);
console.log(`El mes es ${date.getMinutes()}`);

//Toma la fecha que ya definimos y aumenta sus días
date.setDate(date.getDate() + 15);

console.log(date);

let date1 = new Date(2021, 1, 1, 12, 30);
let date2 = new Date(2021, 5, 1, 12, 15);


date1.setHours(0, 0, 0)
date2.setHours(0, 0, 0);

if (date1.getTime() == date2.getTime()) {
    console.log('Las fechas son iguales');
}else{
    console.log('Las fechas difieren');
}

//Cuántos días hay entre un intervalo de fechas
let inter = date2 - date1;
let days = inter/(24*60*60*1000); //Horas, minutos, segundos, milésimas 
console.log(inter); //Respuesta en milisegundos
console.log(days);