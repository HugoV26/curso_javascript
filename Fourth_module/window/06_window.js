//El objeto window está en un ámbito global
//Alert viene dentro del objeto window

function showUrl() {
    window.alert(window.location);
}
showUrl();

function redirect() {
    window.location = 'https://google.com';
}

function refresh() {
    //No hacemos referencia directamente ya que es un objeto global
    location.reload();
}

function newPage() {
    open('https://google.com');
}