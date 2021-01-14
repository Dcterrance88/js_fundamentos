let a = 1;

if( a >= 10){ // excepciones: undefined, null, una asignacion
    console.log('a es mayor o igual a 10');
} else {
    console.log('A es menor a 10')
}

console.log('Fin del programa');

const hoy = new Date();

console.log( hoy );
let dia = hoy.getDay(); //0: Domingo, 1: Lunes, 2: Martes...

console.log({dia});
// = es una asignacion
// == evalua una condicion ignorando el tipo de dato.
// === evalua una condicion teniendo el cuenta que el tipo de dato sea el mismo.

if( dia === 5){
    console.log('Jueves');
}else if(dia === 1) {
    console.log('Lunes');
    // if(dia === 1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if( dia === 2){
    console.log('Martes')
} else{
    console.log('No es lunes, martes o domingo');
}

//Sin usar If Else, o Switch, únicamente objetos
dia = 5;
// dia de la semana
let diaSemana = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sabado - 6',
    dias: ['Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',],
};
console.log( diaSemana[dia]() || 'Dia no definido');
console.log( diaSemana[dia] || 'Dia no definido');
console.log( diaSemana.dias[dia] || 'Dia no definido');
