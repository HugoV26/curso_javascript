/*
 En un hospital de la Ciudad de México se creó un esquema para determinar los gastos médicos que un paciente tendrá que pagar por concepto de servicio hospitalario solicitado.

Crea un programa que permita calcular el costo de internación de un cliente según los datos en la siguiente tabla:

Tratamiento     Costo por persona por día (MXN)
    1               2800
    2               1950
    3               2500
    4               1150

El hospital tiene la política de otorgar un descuento del 25% sobre el total de los gastos a los pacientes mayores de 60 años y a los clientes menores de 25 años se les otorga un 15% de descuento.
*/

let patient_age = parseInt(prompt("Ingresa la edad del paciente: "));
let treatment = parseInt(prompt("Ingresa el número del tratamiento: "));
let days = parseInt(prompt("Ingresa el número de días que estará internado el paciente: "));
let total = 0;
let cost = 0;

if (patient_age < 0 || treatment <= 0 || treatment > 4 || days < 1) {
    console.log("Ingresaste un dato erróneo, vuelve a intentarlo");
}else{
    switch (treatment) {
        case 1:
            console.log(treatment);
            cost = 2800;
            if (patient_age > 60) {
                total = days * (cost - (cost * 0.25));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else if (patient_age < 25) {
                total = days * (cost - (cost * 0.15));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else{
                total = days * cost;
                console.log(`El costo total de internación es de $${total} MXN`);
            }
            break;
        case 2:
            cost = 1950;
            if (patient_age > 60) {
                total = days * (cost - (cost * 0.25));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else if (patient_age < 25) {
                total = days * (cost - (cost * 0.15));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else{
                total = days * cost;
                console.log(`El costo total de internación es de $${total} MXN`);
            }
            break;

        case 3:
            cost = 2500;
            if (patient_age > 60) {
                total = days * (cost - (cost * 0.25));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else if (patient_age < 25) {
                total = days * (cost - (cost * 0.15));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else{
                total = days * cost;
                console.log(`El costo total de internación es de $${total} MXN`);
            }
            break;

        case 4:
            cost = 2800;
            if (patient_age > 60) {
                total = days * (cost - (cost * 0.25));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else if (patient_age < 25) {
                total = days * (cost - (cost * 0.15));
                console.log(`El costo total de internación es de $${total} MXN`);
            }else{
                total = days * cost;
                console.log(`El costo total de internación es de $${total} MXN`);
            }
            break;

        default:
            console.log(`No contamos con ese tratamiento, lo sentimos`);
            console.log(treatment);
            break;
    }
}
