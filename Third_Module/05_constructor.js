//Constructor --> función anónima que me regresa un nuevo objeto

let constructor = (nameInit, typeInit) => {
    let object = {
        name: nameInit,
        type: typeInit,
        nemesis: {
            name: 'Squartle'
        },

        showInfo: function() { 
            console.log(`Name: ${this.name}\r\nType: ${this.type}`);
        },
        changeName: function(newName){
            let before = this.name;
            this.name = newName;
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

//pokemon2.name = 'Charizard';
pokemon2.showInfo()

/*
let pokemon = {
    name: 'Charmander',
    type: 'fire',
    nemesis: {
        name: 'Squartle'
    },

    showInfo: function() { 
        console.log(`Name: ${this.name}\r\nType: ${this.type}`);
    },
    changeName: function(newName){
        let before = this.name;
        this.name = newName;
        return before;
    }
}
*/

//pokemon.showInfo();
