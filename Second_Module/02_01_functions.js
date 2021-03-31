function showMessage()
{
    //alert('Hello world');
    console.log('Hola mundo');
}

showMessage();

let myVariable = 5;

function multiplicador()
{
    myVariable *= 2;
}

multiplicador();
console.log(myVariable)

for(let i=0; i<10; i++)
{
    multiplicador();
}

console.log(myVariable)