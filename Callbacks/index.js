/* const saludar = nombre => {
    console.log("Hola "+ nombre);
};
const despedirse = nombre => {
    console.log("Adiós "+ nombre);
};
function nombreFunction(){
    console.log("Soy una función");
}

const elAdministrador =  (callback, numero, nombre) => {
    console.log(callback, numero);
    callback(`${nombre} - ${numero}`);
};

elAdministrador(despedirse, 5, "Helado");

saludar("mali"); */

/* const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */

/* const funcionMaestra = (callback) => {
    console.log("hola");
    setTimeout(callback, 2000);
    callback("Hola");
}

funcionMaestra((parametro) => console.log("Función Anónima" + parametro)); */

const sumar = (a, b) => {
    return a + b;
}

const sumarASYNC = (a, b, callback) => {
    const resultado = a+b;
    if(resultado > 0){
        callback(resultado);
    }
    
}

console.log("Antes de la suma");

sumarASYNC(4, 3, function(resultado){
    console.log(resultado);
    sumarASYNC(resultado, 5, function(resultado1){
        console.log(resultado1);
        sumarASYNC(resultado1, 10, function(resultado2){
            console.log(resultado2);
            sumarASYNC(resultado2, 10, function(resultado3){
                console.log(resultado3);
            });
        });
    });
}); //callback hell;

console.log("Después de la suma");
