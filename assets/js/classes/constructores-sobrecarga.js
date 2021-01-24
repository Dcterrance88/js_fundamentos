class Persona {

    static porObjeto({nombre, apelido, pais}){
        return new Persona(nombre, apelido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

const fher = {
    nombre: 'fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica',
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);
persona1.getInfo();
persona2.getInfo();