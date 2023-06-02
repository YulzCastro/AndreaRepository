//CICLO WHILE

/*let contador = 0

while (contador <=5) {
    console.log("El contador es:" + contador)
    contador ++
}
*/

/*EJEMPLO 1
let index = 0;
while (index < 11) {
    console.log()
    
}
*/

 /*let index = 0;
while (index <= 5) {
    // alert(`Te toqué la puerta ${index} veces.`);
    index++; // index = index + 1;
}
*/

/*EJEMPLO 2
//Guarda un arreglo de valores introducidos
// Si el usuario no introduce un valor, termina el ciclo.
const arreglo = [];

let userInput; // undefined
while (!(userInput=="")) {
  userInput = prompt("Ingresa cualquier carácter"); // ""
  if (userInput !== "") arreglo.push(userInput);
  console.log(typeof userInput);
}
console.log("Introduciste estos valores: " + arreglo);
console.log(arreglo);

*/

/*EJEMPLO 3
// Preguntar a los alumnos que problema observan en el código:
//Problema: Este código introduce el valor vacío al arreglo, se puede solucionar con una validación dentro del while, o preguntando una primera vez el valor del prompt antes de iterar.
const arregloDo = [];
do {
    let userInputDo = prompt("Ingresa cualquier carácter"); // ""
    if (userInputDo !== "") arregloDo.push(userInputDo);
} while (!(userInputDo==""));

console.log("Introduciste estos valores: " + arregloDo);
console.log(arregloDo);
*/

//CICLO FOR


