/*
Reto 2: Objetos
La esfera
Una esfera es un conjunto de puntos en el espacio que están a una distancia dada r del centro.

El volumen de una esfera se obtiene mediante la siguiente fórmula

V= (4/3) * Pi * (r*r*r)

Crea un programa que modele el objeto esfera. El modelo debe tener un método que calcule el volumen de la esfera.

Si una esfera es cortada por la mitad, la base de este nuevo sólido es un círculo. Añade métodos que nos permitan calcular el perímetro y el área de este círculo.

Datos: Radio

Donde: Variable numérica que representa el valor del radio de la esfera

Considerar: Pi = 3.1415
*/

let constructor = (radioInit) => {
    let radio = radioInit;
    let pi = Math.PI;

    let sphere = {
        volume: function() {
            let volume = ((4/3 * pi) *  (radio ** 3));
            return volume;
        },

        perimeter: function() {
            let perimeter = (2 * pi) * radio;
            return perimeter;
        },

        area: function(){
            let area = (4 * pi) * (radio ** 2);
            return area;
        }
    }
    return sphere;
}

let figure = constructor(10);
console.log(`El volumen de la esfera es: ${figure.volume()} u3`);
console.log(`El área del círculo es: ${figure.area()} u2`);
console.log(`El perímetro del círculo es: ${figure.perimeter()} u`);
