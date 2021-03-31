/*
let digimon = {
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

digimon.showInfo();
*/

let digimon = {
    name: 'Charmander',
    type: 'fire',
    nemesis: {
        name: 'Squartle'
    },

    showInfo: function() { //No me importa cómo se llama el objeto, dentro de este objeto (de si mismo) existe una propiedad llamada 'name'
        console.log(`Name: ${this.name}\r\nType: ${this.type}`);
    },
    changeName: function(newName){
        let before = this.name;
        this.name = newName;
        return before;
    }
}

digimon.showInfo();