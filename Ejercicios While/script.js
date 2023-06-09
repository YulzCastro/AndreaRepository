/*EJERCICIO 1
var numero_user = 50;
var contador = 0;

while(contador <= numero_user){
  if (contador % 5 === 0 ){
    console.log("el numero "+contador+" es multiplo de 5")
  }
  contador ++;
}
*/

/* EJERCICIO 2
Crea un programa que solicite al usuario 2 números entre 1 y 50. 
Posteriormente mostrar en consola los números del 1 hasta el 50, 
pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero1 = 5
let numero2 = 30
var contador = 0
if(numero1 > 1 && numero2 < 50) {
  while(contador < 50) {
    contador++
    console.log(contador)
    if(numero1 == contador || numero2 == contador) {
      console.log("Lotería")
    }
  } 
} else {
  console.log("El número debe estar entre 1 y 50.")
}
*/

/*EJERCICIO 3
Crea un programa que solicite al usuario números, si lo que este introduce es un número, guardarlo en un arreglo.
Para terminar la captura, el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en 
pantalla o en la consola.

let numberUser = prompt("Ingrese un número");
var array = []
while (numberUser != 0) {
  if (isNaN(numberUser)) {
    console.log("No es un número")
  } else {
    array.push(numberUser)
  }
  numberUser = prompt("Ingrese un número");
} 
console.log(array)
*/