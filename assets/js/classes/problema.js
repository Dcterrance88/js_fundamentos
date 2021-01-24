const terr = {
    nombre: 'Terrance',
    edad: 30,
    imprimir(){
        console.log(`${this.nombre} - edad: ${this.edad}`)
    }
}

const arnol = {
    nombre: 'Arnold',
    edad: 35,
    imprimir(){
        console.log(`${this.nombre} - edad: ${this.edad}`)
    }
}

// terr.imprimir();

function Persona(nombre, edad){
    console.log('Se ejecuto este línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`${this.nombre} - edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 18);
const marco = new Persona('Marco', 25);

console.log(maria);
maria.imprimir();
marco.imprimir();