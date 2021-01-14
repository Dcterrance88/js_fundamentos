const elMayor = (a, b) => (a > b) ? a : b;

//cuando la condicion es solo una variable generalmente en un ternario tienden a omitir los parentesis
const tieneMembresia = (miembro) => miembro ? '2 Dólares' : '10 Dólares';


console.log(elMayor(20, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(), //Funcion anonima auto-invocada
    elMayor(10, 12)
];

console.log(amigosArr);

const nota = 86;
const grado =
nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 80 ? 'B+' :
            nota >= 85 ? 'B' :
                nota >= 70 ? 'C+' :
                    nota >= 75 ? 'C' : 'F';

console.log({nota, grado})


