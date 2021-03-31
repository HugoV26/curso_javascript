const addEvent = () => {
    const element = document.querySelector('section > button');
   // element.onclick =showMessage;+
    element.addEventListener('click', showMessage);
}

const showMessage = () => {
    alert('Presionó el botón');
}

//onload = addEvent;

//El objeto windows también tiene addEventListener

addEventListener('load', addEvent);