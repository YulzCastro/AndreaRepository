/* EJERCICIO 1
1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. 
Mostrar en consola el resultado del array. 

const array = [];

for (let index = 0; index < 10; index++) { 

    let number = Math.floor((Math.random() * 10) + 1);
    array.push(number)
    
}
console.log(array)

*/



/*EJERCICIO 2
El usuario deberá ingresar un string con varias palabras separadas por coma en un popup 
y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). 
Mostrar en consola dicho resultado. 

let userInput = prompt("Ingrese diferentes palabras separadas por coma.")

const array = userInput.split(",")

console.log(array)
*/

/*EJERCICIO 3
De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 
Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const array = [10,40,30,20,15,5]

array.sort(function(a, b){return a-b});

console.log(array)

var min = Math.min(...array);
var max = Math.max(...array);

console.log("El número menor es "+min+".");
console.log("El número mayor es "+max+".")
*/