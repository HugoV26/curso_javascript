let properties = [

    propertyOne = {
        key: 001,
        area: 70.4,
        features: 'Departamento con 1 recámara y un baño',
        geographicLocation: {
            zone: 'Financial District',
            street: '150 Nassau',
            number:  3,
            zip_code: 1044
        },
        price: 888000,
        availability: 'V'
    },
    propertyTwo = {
        key: 002,
        area: 138.5,
        features: 'Departamento con 2 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Central Park',
            street: '32 East',
            number:  702,
            zip_code: 1067
        },
        price: 2400000,
        availability: 'V'
    },
    propertyThree = {
        key: 003,
        area: 125.4,
        features: 'Departamento con 2 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Upper West Side',
            street: '255 West',
            number:  21,
            zip_code: 1104
        },
        price: 6500,
        availability: 'R'
    },
    propertyFour = {
        key: 004,
        area: 100.4,
        features: 'Departamento con 2 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Upper West Side',
            street: '25 West',
            number:  69,
            zip_code: 1104
        },
        price: 6500,
        availability: 'R'
    },
    propertyFive = {
        key: 005,
        area: 110.2,
        features: 'Departamento con 3 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Central Park',
            street: '124 East',
            number:  6,
            zip_code: 1068
        },
        price: 6100,
        availability: 'R'
    },
    propertySix = {
        key: 006,
        area: 130,
        features: 'Departamento con 2 recámaras y 2.5 baños',
        geographicLocation: {
            zone: 'Central Park',
            street: '51 West',
            number:  32,
            zip_code: 2426
        },
        price: 750000,
        availability: 'V'
    }
]

let constructor = (array) => {
    let properties = array;

    let object = {
        propertiesCentralPark: function() {
            for (let i = 0; i < properties.length; i++) {
                let element = properties[i];
                
                if (element.geographicLocation.zone == 'Central Park' && element.price >= 500000 && element.price <= 2800000 && element.availability == 'V') {
                    //console.log(element);
                    console.log(`\r\nClave de la propiedad: ${element.key}\r\nSuperficie: ${element.area}\r\nCaracterísticas: ${element.features}\r\nCalle: ${element.geographicLocation.street}\r\nNúmero: ${element.geographicLocation.number}\r\nCódigo Postal: ${element.geographicLocation.zip_code}\r\nPrecio: ${element.price}`);
                }
            }
        },
        propertiesAvailable: function(zone, max_price, min_price){
            for (let i = 0; i < properties.length; i++) {
                let property = properties[i] 
                let check_zone = properties[i].geographicLocation.zone;

                if (check_zone == zone) {
                    if (property.availability == 'R' && (min_price >= property.price || max_price <= property.price)){
                        console.log(`\r\nClave de la propiedad: ${property.key}\r\nSuperficie: ${property.area}\r\nCaracterísticas: ${property.features}\r\nCalle: ${property.geographicLocation.street}\r\nNúmero: ${property.geographicLocation.number}\r\nCódigo Postal: ${property.geographicLocation.zip_code}\r\nPrecio: ${property.price}`);   
                    }
                }
            }
        },
        countProperties: function(){
            let num_properties = properties.length;
            console.log(`\r\n--> El número de propiedades registradas fue de ${num_properties}`);
        }

    }
    return object;
}

let test = constructor(properties);
console.log('\r\n*** Propiedades en venta disponibles en Central Park ***');
test.propertiesCentralPark();

console.log("\r\n*** Propiedades en renta disponibles para una determinada zona ***");
test.propertiesAvailable('Upper West Side', 6500, 5000);

test.countProperties();