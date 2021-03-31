//Notación literal
let pokemon = {
    name: 'Charmander',
    type: 'fire',
    nemesis: {
        name: 'Squartle'
    },

    showInfo: function() {
        console.log(`Name: ${pokemon.name}\r\nType: ${pokemon.type}`);
    },
    changeName: function(newName){
        let before = pokemon.name;
        pokemon.name = newName;
        return before;
    }
}

pokemon.showInfo();
let before = pokemon.changeName('Charizard');
pokemon.showInfo();

console.log(`El nombre anterior es: ${before}`);

