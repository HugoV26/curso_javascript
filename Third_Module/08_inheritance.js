//Se hereda desde el prototipo

let pokemon = {
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
//instancia
let pokemon1 = Object.create(pokemon);
let pokemon2 = Object.create(pokemon);

pokemon1.changeName('Pikachu');
pokemon1.showInfo();
pokemon1.type = "Lava"

pokemon2.changeName('Chicorita');
pokemon2.type = "Weed";

//pokemon.showType = function () {
//    console.log(this.type);
//}

pokemon.showType = () => {
    console.log(this.type);
};



pokemon1.showType();
pokemon2.showType();
/* ***************Empiezo por aquí***********
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

let pokemon2 = new myObject('Raichu', 'Electric');
*/

/* NO se solventa la herencia
myObject.showType = () => {
    console.log(this.type)
}

pokemon2.showType();
*/
