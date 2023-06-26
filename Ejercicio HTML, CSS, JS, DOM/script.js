/* const form = document.getElementById("form")
console.log(form);

const datosFormulario = [];

form.addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    datosFormulario.push(data)
    console.log(datosFormulario)
}) */

const precios = {
	aqua: 200,
	emocion: 180,
	alegria: 160,
	frescura: 150
};

const ventasForm = document.getElementById("ventas-form");
const juanaVentas = document.getElementById("juana-ventas").getElementsByTagName("tbody")[0];
const juanaTotal = document.getElementById("juana-total");
const pedroVentas = document.getElementById("pedro-ventas").getElementsByTagName("tbody")[0];
const pedroTotal = document.getElementById("pedro-total");
const empleadoMes = document.getElementById("empleado-mes");
const resultado = document.getElementById("resultado");

const ventas = {
	juana: {
		aqua: 0,
		emocion: 0,
		alegria: 0,
		frescura: 0
	},
	pedro: {
		aqua: 0,
		emocion: 0,
		alegria: 0,
		frescura: 0
	}
};

function agregarVenta(event) {
	
	event.preventDefault();
	const vendedor = document.getElementById("vendedor").value;
	const producto = document.getElementById("producto").value;
	const cantidad = parseInt(document.getElementById("cantidad").value);
	if (!cantidad || cantidad < 1) {
		alert("La cantidad debe ser un número mayor a cero.");
		return;
	}
	ventas[vendedor][producto] += cantidad;
	const total = precios[producto] * cantidad;
	const tablaVentas = vendedor === "juana" ? juanaVentas : pedroVentas;

	
	let fila = tablaVentas.querySelector(`tr[data-producto="${producto}"]`);
	if (!fila) {
		fila = document.createElement("tr");
		fila.dataset.producto = producto;
		fila.innerHTML = `
			<td>${producto}</td>
			<td>${ventas[vendedor][producto]}</td>
			<td>${total}</td>
		`;
		tablaVentas.appendChild(fila);
	} else {
		fila.cells[1].textContent = ventas[vendedor][producto];
		fila.cells[2].textContent = parseInt(fila.cells[2].textContent) + total;
	} 
	actualizarTotalVentas(vendedor);
}

function actualizarTotalVentas(vendedor) {

	console.log(vendedor)
	const totalVentas = Object.values(ventas[vendedor]).reduce((total, cantidad) => {
		return total + (precios[cantidad] * cantidad);
	}, 0);
	const totalElement = vendedor === "juana" ? juanaTotal : pedroTotal;
	totalElement.textContent = `${totalVentas} USD`;
}

function calcularEmpleadoMes() {
	const juanaTotalVentas = Object.values(ventas.juana).reduce((total, cantidad) => {
		return total + (precios[cantidad] * cantidad);
	}, 0);
	const pedroTotalVentas = Object.values(ventas.pedro).reduce((total, cantidad) => {
		return total + (precios[cantidad] * cantidad);
	}, 0);
	if (juanaTotalVentas > pedroTotalVentas) {
		resultado.innerHTML = "El empleado del mes es Juana";
	} else if (pedroTotalVentas > juanaTotalVentas) {
		resultado.innerHTML = "El empleado del mes es Pedro";
	} else {
		resultado.innerHTML = "Hubo un empate en ventas";
	}
}

ventasForm.addEventListener("submit", agregarVenta);

empleadoMes.addEventListener("click", function() {
	calcularEmpleadoMes();
});