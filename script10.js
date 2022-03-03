/*
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar 
si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/
let colores=["azul", "amarillo", "rojo", "verde", "rosa"];
let word = prompt("ingrese palabra: ");
let c=word.toLowerCase();
let n=0;
for (let color of colores){
    color==c ? n++:n=n+0;
}
n == 0 ? console.log(`el color ${word} NO se encuentra dentro del array`) : console.log(`el color ${word} se encuentra dentro del array` ) ;

