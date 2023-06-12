
var contador = 0;

var colores = ['Verde', 'Amarillo', 'Rojo'];
const semaforoImg = document.querySelector('#semaforo-img')

const tiempoLuz = setInterval(cambioLuz, 3000);


function cambioLuz() {
    console.log(colores[contador])
    semaforoImg.src = "img/Semáforo "+colores[contador]+".jpg"
    if(contador >=2)
    {
        contador=0
    }else
    {
        contador++;
    }
}



