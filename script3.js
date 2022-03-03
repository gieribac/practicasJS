/*
Solicita un número e imprime todos los números pares e impares 
desde 1 hasta ese número con el mensaje "es par" o "es impar" si 
el número es 5 el resultado será: 1 - es impar 2 - es par 3 - 
es impar 4 - es par 5 - es impar 
*/
let num = parseInt(prompt("ingrese número entero positivo: "),10);
n = 0;
while (n < num) {
  n++;
  n % 2 == 0 ? console.log(`${n} - es par `) : console.log(`${n} - es impar `) ;
}