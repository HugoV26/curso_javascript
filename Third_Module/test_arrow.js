let constructor = (value1, value2, value3) => {
    let x = value1;

    let object = {

        y: value2,
        z: value3,
        methodFunction: function(){
            console.log("Función anónima function()")
            console.log(`El valor de x es: ${x}`);
            console.log(`El valor de y es: ${this.y}`);
            console.log(`El valor de z es: ${object.z}`);


        },

        methodArrow: () => {
            console.log("\nFunción anónima () =>")
            console.log(`El valor de x es: ${x}`);
            console.log(`El valor de y es: ${this.y}`);  //Su valor es undefined, ¿Por qué?
            console.log(`El valor de z es: ${object.z}`);
        }
    }

    return object;
}

let test = constructor(4 ,8, 10);

test.methodFunction();
test.methodArrow();