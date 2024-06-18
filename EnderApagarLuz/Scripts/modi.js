
// //Variables
// let nombre = prompt("Introduce tu nombre");
// let nota = parseInt(prompt("Introduce tu nota"));
// let minimo = 5;
// //Condicion
// if (nota >= 5 ){
//     const nota1 = document.querySelector(".alumno")
//     nota1.textContent = nombre + " " + "usted esta aprobado porque su nota ha sido un " + " " + nota +" "+"porque es mayor o igual que "+ minimo;
// }else{
//     const nota2 = document.querySelector(".alumno")
//     nota2.textContent = nombre + " " + "usted esta suspenso porque su nota ha sido un " + " " + nota +" "+"porque es menor que "+ minimo;;
// };
// console.log(5 + nota);

//********************************** */

// PAR O IMPAR

// let numero1 = parseInt(prompt("Introduce  número"));
// const par = document.querySelector(".alumno")
// if (numero1 % 2 === 0) {
//     par.textContent = "Tu numero es"+" " + numero1 +" " + "PAR";
    
// } else {
//     par.textContent = "Tu numero es " +" "+ numero1 +" " + "IMPAR";
    
// }

//CONTRASEÑA CORRECTA O INCORRECTA

//Variables
let usuario = prompt("Introduce el usuario");
let password = prompt("Introduce la password");
let password2 = prompt("Introduce otra vez la password");

//Constante
const comparacion = document.querySelector(".alumno");

//Condiccion
if (password === password2) {
    comparacion.textContent = "La contraseña es correcta";   
} else {
    location.href ="error.html"  
}
