const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman'];

console.warn('For Tradiciona');

for(let i = 0 ; i < heroes.length ; i++ ){
    console.log(heroes[i]);
}

//El for in es basicamente lo anterior pero se encarga de controlar la concicion y s
console.warn('For in');

for(let i in heroes){
    console.log(heroes[i]);
}

//el ciclo for off es bastante utilizado para obtener referencias a valores de objetos
//o arreglos de una manera mas sencilla
//generalmente no se acostrumbra en el ciclo for off a llamar a la variable iteradora 'i'
//generalmente se le coloca el singular del nombre del arreglo o lista de objetos
//en este caso como el arreglo son heroes la variable iteradora seria heroe
//El for off extrae el valor que se encuentra dentro del arreglo y lo regresa a la variable heore
//y cada iteracion vamos a tener cada una de las posiciones del arreglo o posiciones del objeto que
//estemos variando.

console.warn('For off');
for (let heroe of heroes){
    console.log(heroe);
}


