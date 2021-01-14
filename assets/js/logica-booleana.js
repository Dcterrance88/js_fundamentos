const regresaTrue = () =>{
    console.log('Regresa True')
    return true;
}
const regresaFalse = () =>{
    console.log('Regresa False')
    return false;
}

console.warn('Not o la negacion');
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And'); // True si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log('==========');
//cuando se usa && pero la primera instruccion ya regresa falso js no evalua lo demas
//ya que js sabe que el resultado va a regresar falso, por consecuencia en este caso
//no ejecuta la funcion regresaTrue(), caso contrario si se colocara al contrario
console.log(regresaFalse() && regresaTrue());
console.log('==========');
console.log(regresaTrue() && regresaFalse());

console.warn('OR') // Por lo menos una condiciond debe estar en true para que todo sea true de lo contrario será false
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

console.log('4 Condiciones ', true && true && true && false);

console.log('==========');
console.log(regresaFalse() || regresaTrue());
console.log('==========');
//En el caso del OR es parecido al AND cuando sabe que la primera evaluacion en true no tiene necesidad
//de ejecutar el resto ya que js sabe que el resultado es verdadero por eso no se ejecuta la funcion
//regresaFalse()
console.log(regresaTrue() || regresaFalse());
console.log('4 Condiciones ', true || true || true || false);

//Pro tip
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

