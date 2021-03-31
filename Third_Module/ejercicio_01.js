/*Reto 1: Objetos
Polígonos regulares
Un polígono regular es aquella figura que tiene todos sus lados iguales y sus ángulos congruentes (De igual medida).

Para determinar el área de un polígono regular se tiene la fórmula

A=P*a2

Donde: 

P: Perímetro del polígono

a: Apotema (Segmento que une el centro del polígono con el punto medio de cualquiera de sus lados)

Crea un programa que modele el objeto de un polígono regular. Debe calcular el perímetro de la figura, así como el área de la misma.

Datos: Lados, apotema

Donde:

Lados: Variable numérica que indica el número de lados del polígono

Apotema: Variable numérica que representa la distancia del centro al punto medio de cualquier lado*/

let constructor = (sidesInit, valueInit) =>  {
    let polygon = {
        sides: sidesInit,
        sidesValue: valueInit,
        //apothem: apothemInit,

        //Methods
        perimeter: function(){
            let total = this.sides * this.sidesValue;
            return total;
        },
        
        perimeterArrow: () => {
            console.log(this.sides);
        },

        calculateApothem:  function(){
            let angle = 360 / this.sides;
            let rad = angle * (Math.PI/180);
            let a = (this.sidesValue)/(2*Math.tan(rad/2));

            return a;

        },

        area: function() {
            let area = (this.sides * this.sidesValue * polygon.calculateApothem())/2;
            return area;
        }
    }
    return polygon;
}

let polygon1 = constructor(5, 16);

let p = polygon1.perimeter();
console.log(`El perímetro del polígono es: ${p}`)
console.log(`El área del polígono es: ${polygon1.area()}`);

polygon1.perimeterArrow();