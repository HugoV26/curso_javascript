//Cada función que responde a un evento recibe un objeto que contiene información acerca del evento que lo desencadenó.

const addEvents = () => {
    const button = document.getElementById('boton');
    button.addEventListener('click', showEvent);

    let list = document.querySelectorAll('section > p ');

    for (let i = 0; i < list.length; i++) {
        let element = list[i];
        const random = Math.random();
        element.addEventListener('click', changeColor);
        //element.addEventListener('click', changeContent);
        element.addEventListener('click', (event) => {
            changeContent(event, random, i);
        });

        
    }
}

const changeColor = (event) => {
    event.target.style.backgroundColor = 'blue';
}

const changeContent = (event, value, indice) => {
    //event.target.innerHTML = 'Holis';
    event.target.innerHTML = `Valor ${indice} ${value}`;
}


//Cada una de estas llamadas a funciones que responden a eventos reciben un objecto llamado 'event', no es necesario pasarlo como parámetro -> showEvent(event) --> event = e
const showEvent = (event) => {
    //alert('Ha dado click');  //quito event descomento esto
    alert(`Evento: ${event}\r\nTarget: ${event.target}\r\nTipo: ${event.type}`);
    //Target -> Contiene la información el elemento que desencadeno esta acción
    //Type -> ¿Qué tipo de evento se desencadeno?
}

addEventListener('load', addEvents);