let employee = {
    name: 'Hugo',
    age: 25,
    //country origin:  'Germany'
    'country origin':  'Germany',
    pokemon: {
        name: 'Charmander',
        type:  'Fire',
        enemy: {
            name: 'Squartle'
        }
    }
}

console.log(employee);
console.log(`Name: ${employee.name}`);
console.log(`Edad: ${employee.age}`);

let property =  'name';
console.log(employee[property]);  // employee.name
console.log(employee['country origin']);

let country = 'country origin'
console.log(employee[country]);


console.log(employee.pokemon.name);
console.log(employee.pokemon.enemy.name);

employee.name =  'Huguito';
console.log(employee.name)

employee.girlfriend = 'Sara';
console.log(employee.girlfriend);