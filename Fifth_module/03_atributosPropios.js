//Evento Click

//Identifica la posición de nuestro cursor de nuesto navegador

const showPosition = (e) => {
    alert(`Position: ${e.clientX} / ${e.clientY}`);
}

addEventListener('click', showPosition);

//2° Parte
//Evento MouseMove
const movement = () => {
    const contenedor = document.getElementById('contenedor');
    contenedor.addEventListener('mousemove', moverBarra);
}

//Recibe el evento que se desdencadeno al hacer mousemove
const moverBarra = (e) => {
    //Posición relativa de un elemento HTML
    let barra = e.offsetX - 10;
    if (barra < 0) {
        barra = 0; //Límite inferior
    } else if (barra > 500) { //500px, límite superior
        barra = 500;
    }

    const elementBarra = document.getElementById('barraProgreso');
    elementBarra.style.width = `${barra}px`;
}

addEventListener('load', movement)

//3° Parte
//Recibe el evento acerca de qué tecla fue presionada

const detectarTecla = (e) => {
    const tecla = e.key;
    const bloque = document.getElementById('bloque');

    switch (tecla) {
        case '0':
            bloque.style.backgroundColor = 'red';
            break;
            
        case '1':
            bloque.style.backgroundColor = 'red';
            break;
            
        case '2':
            bloque.style.backgroundColor = 'pink';
            break;
    
        default:
            bloque.style.backgroundColor = 'yellow';

            break;
    }
}

addEventListener('keydown', detectarTecla);