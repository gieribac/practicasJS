const person = {
    name: 'Juan',
    age: 33,
    operators: ['Claro','Avantel']
}
// acceder a atributos
// console.log(person.name);
// console.log(person['age']);
// console.log(person["operators"][1]);
// console.log(person.operators[0]);
// console.log(person);
// for (const key in person) { //imprir claves
//     console.log(key);
// }
// for (const key in person) { //imprimir valores
//     console.log(person[key]);
// }
// for (const op in person.operators){ //imprimir indices del array interno del objeto persona
//     console.log(op);
// }
// imprimir indices del array interno del objeto personam tener en cuenta que for of solo funciona con iterables (no objetos)
// for (const op of person.operators){ 
//     console.log(op);
// }
// metodo join une y devuelve elementos del array como string
// console.log(`Hola ${person.name}. Tienes ${person.age} años y tus operadores son ${person.operators.join(' y ')}`) 

variable =undefined;
if (variable===undefined){
    variable = '';
}
    
console.log(variable)