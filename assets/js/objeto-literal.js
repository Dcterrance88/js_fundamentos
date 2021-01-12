//Los objetos literales son variables que tiene pares de valores
//cuando se usan llaves {} se asocia con un objeto literal
//cuando se imprime las propiedades de un objeto literal se imprimen de forma alfabetica
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark1', 'Mark V', 'HulkBuster'],
    direccion: {
        zip:'1080 , 0949',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity war',
};
console.log('Nombre: ',  personaje.nombre);
console.log('');
console.log(personaje);
console.log('');
console.log('Nombre ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coordenadas: ', personaje.coords);
console.log('Coordenadas: ', personaje.coords.lat);
console.log('No. Trajes: ', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);
console.log('')
const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula:', personaje['ultima pelicula']);

//Eliminar un atributo del objeto literal
delete personaje.edad;
console.log(personaje);

console.log('');

//convertir un objeto literal en pares de valores
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

console.log('');

//un objeto literal cuando se declara como una constante sus atributos pueden
//ser eliminados o se pueden agregar nuevos valores, lo que no se puede hacer es
//cambiar todo el objeto literal por otro
//recordar que solo congela las asignaciones directas pero no a los objetos que estan
//dentro de las asignaciones primarias
//por ejemplo, direccion no se puede cambiar pero si se pueden modificar sus atributos...

//Para evitar modificar, agregar o eliminar cualquier atributo de un objeto literal
//se usa lo siguiente

Object.freeze(personaje);

personaje.dinero = 100000000;
console.log(personaje);

personaje.direccion.ubicacion = 'Costa Rica';
console.log('');

//este metodo convierte los nombres de los atributos del objeto literal a un array
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

console.log('');

//Este metodo convierte los valores del objeto literal a un array
const valores = Object.values(personaje);
console.log({propiedades, valores});




