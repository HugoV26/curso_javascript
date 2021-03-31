let i = 'global';

function myFunction() {
    i = 'local';
    console.log(i);
}

myFunction();
console.log(i);


// LET -> evita sobreescribir o reasignar valores

let value1 = 10;
value1 = 20;

console.log(value1);

// CONST

const paco = 'me la pela';
paco = "Me la re pela"

console.log(`El paco ${paco}`)