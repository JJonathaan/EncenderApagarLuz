
// ENCENDER Y APAGAR LUZ CON FUNCIONES Y EVENTOS

// BOTONES
const boton1= document.querySelector("button");
boton1.addEventListener("click", enciende);

document.querySelector(".button2").addEventListener("click", apagar)

// FUNCIONES
function enciende() {
  document.getElementById('luz').src="images/encendida.gif";
}

function apagar() {
  document.getElementById('luz').src="images/apagada.gif"
}