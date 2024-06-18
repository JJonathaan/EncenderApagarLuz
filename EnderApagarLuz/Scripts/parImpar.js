//PAR o IMPAR

//Variables
let numero3 = parseInt(prompt("Introduce tu número:"));
const parimpar = document.querySelector(".par");

//Condicción
if( numero3 % 2 === 0 ){
    parimpar.textContent = "El número"+ " "+ numero3 + " "+ "Par";
}else{
    parimpar.textContent = "El número"+ " "+ numero3 + " "+ "Impar";
}

 