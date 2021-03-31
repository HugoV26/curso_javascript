/*Reto 1: Objetos
Polígonos regulares
Un polígono regular es aquella figura que tiene todos sus lados iguales y sus ángulos congruentes (De igual medida).

Para determinar el área de un polígono regular se tiene la fórmula

A=P*a2

Donde: 

P: Perímetro del polígono

a: Apotema (Segmento que une el centro del polígono con el punto medio de cualquiera de sus lados)

Crea un programa que modele el objeto de un polígono regular. Debe calcular el perímetro de la figura, así como el área de la misma.

Datos: Lados, apotema

Donde:

Lados: Variable numérica que indica el número de lados del polígono

Apotema: Variable numérica que representa la distancia del centro al punto medio de cualquier lado

Reto 2: Objetos
La esfera
Una esfera es un conjunto de puntos en el espacio que están a una distancia dada r del centro.

El volumen de una esfera se obtiene mediante la siguiente fórmula

V= (4/3) * Pi * (r*r*r)

Crea un programa que modele el objeto esfera. El modelo debe tener un método que calcule el volumen de la esfera.

Si una esfera es cortada por la mitad, la base de este nuevo sólido es un círculo. Añade métodos que nos permitan calcular el perímetro y el área de este círculo.

Datos: Radio

Donde: Variable numérica que representa el valor del radio de la esfera

Considerar: Pi = 3.1415

Reto 3: Objetos
Bienes raíces

Una empresa de bienes raíces en Nueva York lleva la información sobre las propiedades que tiene disponibles tanto para venta como para renta.

La estructura de sus registros está modelada por el siguiente objeto

Clave de la propiedad (Numérico)
Superficie total (Numérico)
Características (Cadena de texto)
Ubicación Geográfica
Zona (Cadena de texto)
Calle (Cadena de texto)
Numero (Numérico)
Código postal (Numérico)
Precio en Dólares (Numérico)
Disponibilidad (Carácter. V= Venta y R= Renta)
Escribe un programa que realice lo siguiente:

Una función que enlista las propiedades disponibles para venta en la zona de Central Park cuyo valor oscile entre 500,000 y 2.8M USD
Al recibir una zona geográfica, un precio máximo y un precio mínimo, nos enlista todas las propiedades disponibles para rentar
Nota: El listado debe mostrar lo siguiente: Clave de la propiedad, superficie total, características, calle y número, código postal y precio.

Datos:

Propiedades: Variable de tipo array de objetos tipo Propiedad

Inmuebles: Variable numérica que representa el total de propiedades registradas
*/