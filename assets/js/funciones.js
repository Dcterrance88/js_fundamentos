//una funcion centraliza la logica de un procedimiento que se puede re-utilizar varias veces
//Funcion tradicional
function saludar(){
    console.log('Hola mundo desde una funcion');
}

function espacio(){
    console.log('');
}

//Funcion anonima
const saludar2 = function (){
    console.log('Hola mundo desde una funcion anonima ');
}

//funcion tradicional con argumentos
function saludarConArgumento(nombre){
    console.log('Hola ' + nombre + ' desde una funcion con argumento');
    console.log(arguments);
}

const saludarLamnda = () =>{
    console.log('Hola desde una funcion lamnda');
}

const saludarLamndaConArgumeno = ( nombre ) =>{
    console.log('Hola '+ nombre +' desde una funcion lamnda con argumentos');
}

const saludarConRetorno = (nombre)=>{
    console.log('Hola ' + nombre + ' desde una funcion con argumento y return');
    return 57;
    console.log('Soy un código que está después del return'); // Nunca se ejecuta
}

const saludarSinRetorno = (nombre)=>{
    console.log('Hola ' + nombre + ' desde una funcion con argumento y return');
}

function sumar(a, b){
    return a + b;
}

const sumarReducido = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorioRecucido = () => Math.random();



saludar();
espacio();

saludar2();
espacio();

saludarConArgumento('Froilan');
espacio();
//cuando se enviar una funcion con mas argumentos de los declarados, estos se almacenan
//se almacenan en un objeto implicito llamado arguments
saludarConArgumento('terrance', 10, 'm');
espacio();

saludarLamnda();
espacio();

saludarLamndaConArgumeno('arnold');
espacio();

const retornoDeSaludar = saludarConRetorno('Daniels', 18, 69);
console.log({retornoDeSaludar});

const retornoDeSaludar2 = saludarSinRetorno('Marco');
console.log({retornoDeSaludar2});

espacio();
console.log(sumar(1,2));
console.log(sumarReducido(1,2));

espacio();
console.log(getAleatorio());

espacio
console.log(getAleatorioRecucido());

