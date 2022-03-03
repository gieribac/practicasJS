/*
Escriba un programa que pida un número entero mayor que cero
 y calcule su factorial. El factorial es el resultado de 
 multiplicar ese número por sus anteriores hasta la unidad.
*/
let fact = 1;
let num = parseInt(prompt("ingrese número entero mayor que 0 "),10);
for (let i=1 ; i <= num ; i++){
    fact=fact*i;
}
console.log(`El factorial de ${num} es ${fact}`);