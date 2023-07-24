/* // Funciones flecha
const restar = (a,b) => a - b
function sumar(a,b) {
    //this.nombre = 'Sebas' return a + b}

console.log(sumar(2,3))
console.log(restar(10,3))

// Destructuración de objetos y arreglos

const persona1 = {
    nombre: 'Jonathan',
    edad: 32
}
//const { nombre } = persona1

const perrito = {
    nombre: 'Firulais',
    estaVivo: true
}

function hacerAlgo({nombre}){
    console.log(nombre)
}

hacerAlgo(persona1)
hacerAlgo(perrito) */


/* // Las clases son plantillas para objetos
class Persona{
      constructor(nombre, cedula) {
           this.nombre = nombre
           this.cedula = cedula
          }
saludar(){
    console.log('Hola, soy '+this.nombre)
 }

despedirse(){
    console.log('Adiís'+this.nombre)
}
}

// Aquí crear objetos, una instancia de la clase
const persona2 = new Persona('Sandra',123)
const persona3 = new Persona('Jefry',123)
persona2.saludar()
persona3.saludar()

persona2.despedirse() */

/* const identificador = Symbol('devf')

const perro = { [identificador]: 'Firulais' }

console.log(perro.nombre)
console.log(perro[identificador])
console.log(identificador)
console.log(Symbol('devf') === identificador) */

//Map y Set
