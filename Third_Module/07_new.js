function myObject(nameInit, typeInit) {
    //this.name = 'Pikachu';
    //this.type = 'Electric';
    this.name = nameInit;
    this.type = typeInit;
    this['main enemy'] = 'Mewtwo';
    this.power = {
        first: 'Impactrueno',
        second: 'Cabezazo alv'
    }

    this.showInfo = function() {
        console.log(`Name: ${this.name}\r\nType: ${this.type}`);
    },
    this.changeName = function(newName){
        let before = this.name;
        this.name = newName;
        return before;
    }
}

let pokemon1 = new myObject('Mew', 'Mago');
pokemon1.showInfo();
console.log(pokemon1);

/*
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

*/