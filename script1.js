/*1 - Solicita un nombre, la edad y muestra por consola el mensaje 
"Hola ____, tienes ____ años y el año que viene ____ años" 
Realiza el con ejercicio prompt (mensaje) y haz uso de los template strings*/ 
function PrimeraLetraMayuscula(str){
    
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    //hace mayuscula al caracter correspondiente al indice 0 de la cadena y lo concatena  
    //con el resto de la cadena menos el primer elemento convertida a minuscula.
  }

let name1 = prompt("What's your name?");
let age = parseInt(prompt("How old are you?"), 10);

console.log(`Hola ${PrimeraLetraMayuscula(name1)}, tienes ${age} años y el año que viene ${age+1} años`);


