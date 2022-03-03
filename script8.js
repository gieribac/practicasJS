/*
Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser 
negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
*/
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const _DNI=prompt(`Ingresa DNI: `);
const indice=_DNI % 23;
console.log(_DNI.length)
console.log(indice)
_DNI.length<9 & _DNI>-1? console.log(`la letra correspondiente el indice ${indice} es ${letras[indice]}`):
console.log(`el DNI ingresado es incorrecto`);
