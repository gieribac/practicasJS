/*
Escribe un programa que permita ir introduciendo una serie indeterminada de
 números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar 
 el total acumulado y el contador de cuantos números se han introducido
*/
let suma=0;
let cont=0;
do {
    let num = parseInt(prompt("ingrese número: "),10);
    cont++;
    suma=suma+num;
} while (suma<=50);
console.log(`total acumulado: ${suma} \ncantidad de números introducidos: ${cont}`);