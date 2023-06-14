/* let nombre = ""
console.log(`El valor de nombre antes del prompt: ${nombre}.`);
nombre = prompt("Ingresa tu nombre");
console.log(`El nombre ingresado es: ${nombre}.`);

prompt("Ingresa tu nombre")*/

/* EJERCICIO 1
Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.

let respuesta = prompt("¿Eres bellísim@?");

if (respuesta ==="si" || respuesta ==="SI") {
    console.log("Ciertamente.");
} else if(respuesta ==="no" || respuestaEjercicio1 ==="NO") {
    console.log("No te creo.");
}
*/

/*EJERCICIO 2
Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
número no es divisible entre 2”.

let número = prompt("Escribe un número")
if (número % 2 === 0) {
    console.log(" "+número+" Es divisible entre 2");
} else {
    console.log(" "+número+" No es divisible entre 2");
}
*/

/*EJERCICIO 3
Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert.

let número = prompt("Escribe un número.")
if (número % 2 == 0) {
    alert(" "+número+" es par.")
} else {
    alert(" "+número+" no es par.")
}
*/

/*EJERCICIO 4
Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.

let número = prompt("Número de cliente:")
if (número == 1000) {
    console.log("¡Ganaste un premio!");
} else if ("número != 1000") {
    console.log("Lo sentimos, sigue participando.")
}
*/

/*EJERCICIO 5
Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.

let numero1 = prompt("Ingresa un número.")
let numero2 = prompt("Ingresa otro número.")

if (numero1 < numero2) {
    console.log(" "+numero1+" es menor que "+numero2+".")
} else {
    console.log(" "+numero2+" es menor que "+numero1+".")
}
*/

/*EJERCICIO 6
Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.

alert("Ingrese tres números para determinar cuál es el mayor.")
let numero1 = prompt("Número 1:")
let numero2 = prompt("Número 2:")
let numero3 = prompt("Número 3:")

if (numero1 == numero2) {
    console.log("Número 1 y Número 2 son iguales.")
}
if (numero1 == numero3)  {
    console.log("Número 1 y Número 3 son iguales.")
}
if (numero2 == numero3) {
    console.log("Número 2 y Número 3 son iguales.")

}else if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log(" " + numero1 + " es mayor.")
    } else {
        console.log(" " + numero3 + " es mayor.")
    }
} else if (numero2 > numero3) {
    console.log(" " + numero2 + " es mayor.")
} else {
    console.log(" "+numero3+" es mayor.")
}
*/

/*EJERCICIO 7
Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("Ingrese un día de la semana:")

if(dia === "lunes" || dia === "viernes" || dia === "sábado" || dia === "domingo") {

if (dia == "lunes") {
  console.log("Feliz inicio de semana.");
}
if (dia == "viernes") {
  console.log("Es viernes y el cuerpo lo sabe.");
}
if (dia == "sábado" || dia == "domingo") {
  console.log("Es un buen día para salir al parque o descansar."); 
} 

}
else {
    console.log("Ponte a estudiar, vago.")
}
*/

/*EJERCICIO 8
Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10.

let nota = prompt("Ingrese una calificación entre 1 y 10:")

if (nota < 1 || nota > 10) {
    console.warn("La calificación está fuera del rango.")
}
else if (nota < 6) {
    console.log("Reprobado.");
}
else if (nota >= 6 && nota <= 8) {
    console.log("Regular.");
}
else if (nota == 9) {
    console.log("Bien.");
}
else if (nota == 10) {
    console.log("¡Excelente!")
}
*/

/*EJERCICIO 9
Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping.

alert("TIENDA DE HELADOS ANDY \n Toppings disponibles: \n - Oreo. \n - KitKat. \n - Brownie.")
let topping = prompt("Escribe el nombre del topping deseado. \n *Si no deseas ningún topping, deja el espacio y continúa.")
let total = 0;
if (topping === 'oreo' || topping === 'kitkat' || topping === 'brownie' || topping === '') {
    if (topping === 'oreo') {
        total = 50 + 10;
        console.log("El precio del helado es " +total+" MXN.")
    }
    else if (topping === 'kitkat') {
        total = 50 + 15;
        console.log("El precio del helado es " +total+" MXN.")
    }
    else if (topping === 'brownie') {
        total = 50 + 20;
        console.log("El precio del helado es " +total+" MXN.")
    }
    else if (topping === '') {
        console.log("El precio del helado es 50 MXN.")
    }
    
} else {
    console.log("No tenemos el topping seleccionado, lo sentimos. \n El precio del helado es 50 MXN.")
}
*/

/* EJERCICIO 10
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar 
aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente 
de acuerdo a la opción elegida.

El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: 
$4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el 
curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

/* EJERCICIO 11
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un 
vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si 
es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad 
de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */