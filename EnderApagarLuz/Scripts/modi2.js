
//Variables 
let nombre = prompt("Introduce tu nombre");//charAt()
let nota = parseInt(prompt("Introduce tu nota")) ;
 
//Constante
const notas = document.querySelector(".alumno");

//Condicion
if (nota >= 5) {

  notas.textContent = "Estás aprobador" + " " + nombre  + " "+  "porque tu no es" + " "+ nota;
    
} else {
  notas.textContent = "Estás suspenso" + " "+ nombre + " "+ "porque tu no es" + " "+ nota;   
}

//Consola
console.log(5 + nota);


