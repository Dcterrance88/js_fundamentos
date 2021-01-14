let a = 10;
let b = a;
a = 30;

console.log({a, b});

//En js todos los objetos son pasados por referencia (Los primitivos
//se pasan por valor y los objetos por referencia)

let juan = {
    nombre:'Juan'
};
let ana = juan;
ana.nombre = 'Ana';

console.log({juan,ana});

const cambiaNombre = (persona) =>{
    persona.nombre = 'Tony';
    return persona;
}

let petter = { nombre:'Petter'};
let tony = cambiaNombre(petter);

//En este caso se mando el objeto de petter a la funcion asi que
//se altera el nombre de Petter a tony y este resultado se iguala a tony

console.log({petter, tony});

//para crear una capia del objeto sin alterarlo se realiza lo siguiente
//cuando hacemos referencia de un objeto a otro lo encerramos entre {} con el
//operador ... de esta manera el objeto que almacena por referencia no 
//afecta al inicial
let pedro = {
    nombre:'pedro'
};
let oscar = { ...pedro };
oscar.nombre = 'oscar';

console.log({pedro, oscar})

//en el caso de las funciones el objeto al cual se quiere romper con esa
//relacion en el parametro de la funcion cuando se hace referencia a dicho
//objeto se encierra entre {} y se coloca el operador ...

const cambiaApellido = ({...alumno})=>{
    alumno.nombre = 'Carlos';
    return alumno;
}

let marcos = { nombre: 'Marcos'};
let carlos = cambiaApellido(marcos);

console.log({marcos, carlos});

//Arreglos

//En este caso para no alterar la referencia del arreglo principal y crear un nuevo arreglo,
//la constante otrasFrutas debe encerrar el objeto literal al cual quiere hacer referencia entre[]
//para asi no alterarlo y crear un nuevo array a partir de dicha referencia usando antes de llamar a
//la referencia el operador ... para separar cada uno de los elementos que están dentro del arreglo
//y asi retornarlo de manera diferente rompiendo dicha relacion.
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

//otra forma es usando la funcion slice() sin ningun argumento, es un metodo que viene de los arreglos
//el cual corta un arreglo y regresa los elementos que uno especifica, pero si no se manda ningun argumetno
//retorna un nuevo arreglo, rompiendo dicha relacion.

console.time('slice');
const masFrutas = frutas.slice();
console.timeEnd('slice');

masFrutas.push('Mora');

console.table({frutas, masFrutas});