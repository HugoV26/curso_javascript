/*
Se puede aproximar el valor de π mediante la siguiente serie:
π= 4/1 – 4/3 + 4/5 – 4/7 + 4/9 . . .

La diferencia entre la serie y π debe ser menor a 0.0005. Determina el número de términos que se requieren para obtener esta precisión.

res = 3.141

pi - res = 0.0005

*/





var denominador = 1;
var pi = 3.1415
var contador2 = 0;
var serie = 0;
var bandera = true;
var resultado = 1;

while(resultado > 0.0005){

    if(bandera){
        serie += (4/denominador);
        resultado = Math.abs(serie - pi);
        bandera = false;
    }else{
        serie -= (4/denominador);
        resultado = Math.abs(serie - pi);
        bandera = true;
    }
    
    denominador += 2;
    contador2++;
}
console.log(serie);
console.log(resultado);
console.log(`El número de pasos requeridos es: ${contador2}`);