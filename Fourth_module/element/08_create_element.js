function addElement() {
    //Voy a añadir nuevos elementos
    let element = document.querySelector('section');

    //El objeto documento nos provee de un método llamado createElement
    let new_element = document.createElement('h4');
    new_element.innerHTML = 'Este es un título creado con JS';
    element.appendChild(new_element);
}

function deleteElement(){
    let element = document.querySelector('section');

    let delete_element = document.getElementById('subtitle');

    element.removeChild(delete_element);
}