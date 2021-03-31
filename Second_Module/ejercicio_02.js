/*
Reto 2:  Funciones
Temperatura local
En la ciudad de Gotham se llevó a cabo un registro de la temperatura alcanzada en verano cada hora durante un día. Encuentra la temperatura promedio registrada, así como la temperatura máxima y la temperatura mínima con el horario en el cual se registraron.

Datos: Temperaturas

Donde:

Temperaturas: Variable de tipo array numérico de 24 calificationos que representa la temperatura registrada cada hora por espacio de un día. Para determinar la hora se considera que, por ejemplo Temperatura[0] representa las 0:00 hrs, Temperatura[13] es igual a 13:00hrs, etc.
*/

let temperature = (array) => {
    let temp_count = 0;
    let maximum_sample = array[0];
    let minimum_sample = array[0];

    array.forEach(element => {
        temp_count += element;

        if(element > maximum_sample){
            maximum_sample = element;
        } else if (element < minimum_sample) {
            minimum_sample = element;
        }
    });

    let average_temp = (temp_count / array.length)    
    console.log(`La temperatura promedio es: ${average_temp}`);
    console.log(`La temperatura máxima es: ${maximum_sample}°C y se registro a las ${array.indexOf(maximum_sample)}:00hrs`);
    console.log(`La temperatura miníma es: ${minimum_sample}°C y se registro a las ${array.indexOf(minimum_sample)}:00hrs`);
    
}

let array = [10, 24.3, -3, 15, 10.4, -1, 24.3, 30.1, 8.2, 26, 24.2, 13.5, -6.2, 25.4, 31, 40, 3.2, 12.3, 14.68, 20, 34, 17.5, 11.4, 27.6];

//console.log(array.length)

temperature(array)