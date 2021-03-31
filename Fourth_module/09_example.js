let circle = (r) => {
    let radio = r;
    return {
        getRadio: function(){
            return radio;
        },
        perimeter: function(){
            return 2 * Math.PI * radio;
        },
        area: function() {
            return Math.PI * Math.pow(radio, 2);
        },
    };
};

let test = circle(10);
console.log(test);
let radio = test.getRadio();
console.log(radio);

function calculate() {
    const resultados = document.getElementById('resultados');
    let radio = document.getElementById('radio').value; //Value accede al contenido

    if (isNaN(radio)) { //No es número
        alert('Ingrese un número válido');
        resultados.style.display = 'none';
    } else { //Es un número
        resultados.style.display = 'block';
        radio = new Number(radio); //Lo convierto a valor numérico
        const objCirculo = circle(radio);

        document.getElementById('radioActual').innerHTML = `Radio ${objCirculo.getRadio()}cm;`

        document.getElementById('perimetro').innerHTML = `Perímetro ${objCirculo.perimeter()}cm`;

        document.getElementById('area').innerHTML = `El área es de: ${objCirculo.area()}cm<sup>2</sup>`;
    }
}