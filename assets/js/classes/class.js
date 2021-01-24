class Persona{
    //Nota 1
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spriderman = new Persona('Petter Parker', 'Spidy', 'Soy tu amigable vecino spiderman');
// const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(ironman);

spriderman.miFrase();
spriderman.setComidaFavorita = 'el pastel de Mary Jane';
// spriderman.nemesis = 'Baigon'; //Nota 2

console.log(spriderman);
console.log(spriderman.getComidaFavorita);



/*
Nota 1
Declarar los atributos en una clase cuando se inicializan en el contructor
es opcional ya que si se quitan tienen el mismo efecto, pero hay una dife-
rencia marcada, cuando se declara un atributo extra que no está en el
constructor, a la hora de crear una instancia aparecera este atributo como
undefined

Nota 2
en este caso al no estar declarado 'nemesis' en la clase persona se creara
esta propiedad pero solo existira dentro de dicho objeto que la creo


*/