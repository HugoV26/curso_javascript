//Document Object Mode
function init(){
    let element = document.getElementById('subtitle');
    //Internamente tiene un objeto llamado style
    element.style.width = '300px';
    element.style.border = '5px solid purple';
    element.style.padding = '20px';
}

function modifyProperties() {
    let element = document.getElementById('subtitle');
    let w = element.clientWidth;
    w += 100;

    element.style.width = `${w}px`;
}

function changeColor(){
    let element = document.getElementById('subtitle');
    element.className = 'blackColor';
}

function switchColor(){
    let element = document.getElementById('subtitle');
    let color = 'blueColor';

    //Lstado de clases que estan siendo referenciadas dentro de nuestro elemento
    if(element.classList.contains(color)){
        element.classList.remove(color);
    }else{
        element.classList.add(color);
    }

    //Lo anterior se resume en lo anterior
    //Si encuentra la clase la retira, si no, la añade
    //element.classList.toggle(color);
}

function changeText(){
    let element = document.getElementById('subtitle');
    //Contiene todo el contenido de nuestro elemento
    //element.innerHTML = 'Este es un texto nuevo';
    
    let text = `${element.innerHTML} Bienvenidos`
    element.innerHTML = text;

}

function addElement() {
    //Borra todo, alv
    let element = document.querySelector('section');
    //element.innerHTML = "<p>Este es un párrafo nuevo con ayuda de JS</p>";

    //Añadimos sin borrar       CTRL + SPACE
    element.insertAdjacentHTML("beforeend", "<p class='whiteColor'>Este es un párrafo agregado con Javascript</p>");
}