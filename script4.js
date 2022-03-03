/*
Escribe un programa que pida un número entero
mayor que 1 y que escriba si el número primo o no. 
Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

let num = parseInt(prompt("ingrese número entero mayor que 1 "),10);
let k=1,n=0;
while (k < num){
    num % k == 0 ? n++ : n=n+0;
    k++;
}
n==1 ? console.log(`${num} - es primo `) : console.log(`${num} - no es primo `) ;
