let juegos = ['Zelda', 'Mario', 'Metroid', 'Super Turrican'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
primero = juegos[2 - 2];
let ultimo = juegos[ juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach((juego, indice, arr) => {
    console.log('juego: ' + juego);
    console.log('indice : ' + indice);
    console.log('arr: ' + arr)
})

//insertar nuevo elemento en la ultima posicion
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

//insertar nuevo elemento en la primera posicion
nuevaLongitud = juegos.unshift('Fire Embled');
console.log({nuevaLongitud, juegos});

//borrar ultimo elemento
let ultimoElementoEliminado = juegos.pop();
console.log(ultimoElementoEliminado);

//borrar elementos en posicion especifica, el primer parametro especifica la posicion
//el segundo el numero de elementos que eliminara a partir de la posicion indicada
//este devuelve un array con los elementos eliminados
let posicion = 1;
let cantidadElementos = 2
let JuegosEliminados = juegos.splice(posicion, cantidadElementos);
console.log({JuegosEliminados, juegos});

//Devuelve el indice con respecto al valor del elemento de un arreglo
//cuando no lo encuentra devuelve un -1
let superTurricanIndex = juegos.indexOf('Super Turrican');
console.log(superTurricanIndex);