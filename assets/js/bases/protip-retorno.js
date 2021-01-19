function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}
const persona = crearPersona('Valerie', 'Ocean');
console.log(persona);

//Pro-tip
//Desde el ECMAScript 6 cuando se quiere retornar algo de un objeto y el nombre
//de la propiedad es el mismo que el nombre de la variable de la cual se quiere
//hacer uso o impresion, no hace falta que se especifique dicho nombre 2 veces,
//es suficiente colocando el nombre de la propiedad si es la misma que la variable
//JS sabra que lo que se quiere usar o imprimir una propiedad que en este caso del ejemplo
//tenga un nombre cuyo valor va a ser el valor de la variable nombre y lo mismo pasara con el apellido
const crearPersonaProTip = (nombre, apellido) =>({ nombre, apellido });

const personaProTip = crearPersonaProTip('Diana', 'Prince');
console.log(personaProTip);

//----------------------------------------------------------------------------------------------------

function imprimeArgumentos(){
    console.log(arguments);
}
//una funcion de flecha no crea el objeto arguments cosa que si hacen las funciones tradicionales
//para poder usar el objeto arguments se define de la siguiente manera colocando el parametro rest, osea
// ... seguido del nombre que se le dara al atributo el cual recibira los argumentos,en pocas palabras
//le dice, crea args con un arreglo de cada uno de los argumentos
//nota:
//1- Despues del parametro rest o ... no puede venir ningun argumento
//2- Si se necesitara extraer una variable antes del paraemtro rest, dicha variaable tendra un valor
//independiente
const imprimeArgumentos2 = (edad,...args) => {
    //console.log({edad, args});
    return args;
}

imprimeArgumentos(10, true, false, 'Remy', 'Hi');
const argumentos = imprimeArgumentos2(11, false, true, 'Franchesca', 'Bye');
console.log({argumentos});

//Para almacenar varios valores a varias variables de forma mas directa se puede hacer de la siguiente
//manera

const[casada, viva, nombre, saludo] = imprimeArgumentos2(11, false, true, 'Sholpie', 'Hello');
console.log({casada, viva, nombre, saludo});

//Objetos literales
//En este caso se almacena la varible con el mismo nombre que atributo del objeto o si se desea colocar
//otro nombre se coloca el nombre del atributo del objeto seguido de : y el nuevo nombre
const {apellido: nuevoApellido} = crearPersona('Valerie', 'Ocean');
console.log({nuevoApellido});

//desescructuracion de argumentos

let tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark1', 'Mark V', 'HulkBuster'],
};

//const imprimePropiedades = (personaje) => {
//    console.log('nombre: ', personaje.nombre);
//    console.log('codeName: ', personaje.codeName);
//    console.log('vivo: ', personaje.vivo);
//    console.log('edad: ', personaje.edad);
//    console.log('trajes: ', personaje.trajes);
//}

console.log('');

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);
}

imprimePropiedades(tony);