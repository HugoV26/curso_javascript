//Crea un objeto que modele un triángulo-rectángulo
//Las propiedades iniciales son la base y su altura
//El objeto debe tener los métodos para calcular el área y perímetro del triángulo

let triangle = {
    base: 0,
    height: 0,

    //Methods

    init: function(b, h){
        triangle.base = b;
        triangle.height = h;
    },
    showData: function(){
        console.log(`Base: ${triangle.base}\r\nAltura: ${triangle.height}`);
    },
    area: () => {
        //area = (b*h)/2
        let area = (triangle.base * triangle.height)/2;
        return area;
    },
    hypotenusa: () => {
        //c^2 = a^2 + b^2 -> c = raiz(a^2 + b^2)
        let hypotenusa = Math.sqrt((triangle.base ** 2) + (triangle.height ** 2));
        return hypotenusa;
        //Math es un objeto que trae métodos definidos

    },
    //Llamar a un método dentro de otro método
    perimeter: () => {
        let perimeter = triangle.base + triangle.height + triangle.hypotenusa();
        return perimeter;
    }

}

triangle.init(50, 70);
triangle.showData();

let areaTriangle = triangle.area();
console.log(`El área del triángulo es: ${areaTriangle}`);

console.log(`La hipotenusa del triángulo es: ${triangle.hypotenusa()}`);

console.log(`El perímetro es: ${triangle.perimeter()}`);