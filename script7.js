/*
Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. 
Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, 
si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
 -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares
*/
let numbers=[11, 50, 33, 41, 100];
let pares=[];
let impares=[];
let aleatorio;
producto=[];
for (let i in numbers) {
    // Math.random()*10 + 1;
    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    // Math.random() * (max - min) + min;
    aleatorio=Math.round(Math.random()*9 + 1);
    console.log(`aleatorio: ${aleatorio}`)
    producto=aleatorio*numbers[i];
    producto % 2 == 0 ? pares.push(producto): impares.push(producto) ;
    console.log(`${numbers[i]} x ${aleatorio} = ${producto}`);
}
console.log(`pares: [${pares}] \nimpares: [${impares}]`);
