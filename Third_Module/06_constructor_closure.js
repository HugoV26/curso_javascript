//Closure -> Nadie puede acceder, alv --> Propiedades y métodos privados
let constructor = (nameInit, typeInit) => {
    let name = nameInit;
    let type = typeInit;

    let object = {
        //Esto lo subo y ya se convierten en privadas
        //name: nameInit,
        //type: typeInit,
        nemesis: {
            name: 'Squartle'
        },

        showInfo: function() { 
            console.log(`Name: ${name}\r\nType: ${type}`);
        },
        changeName: function(newName){
            let before = name;
            name = newName;
            return before;
        }
    }
    return object;
}

//Dos instancias del mismo objeto pero sus propiedades son diferentes
let pokemon1 = constructor("Pikachu", "Electric");
let pokemon2 = constructor("Bulbasur", "Hierba");

console.log(pokemon1)
pokemon1.showInfo();

pokemon2.name = 'Charizard';
pokemon2.showInfo()
console.log(pokemon2)

