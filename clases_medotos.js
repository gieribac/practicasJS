//creacion de clase
class Persona { // por convencion se escribe el nombre de clase con mayuscula inicial
    constructor (nombre, apellido, edad){ //constructor
        this.nombre = nombre; //this indica que se refiere al parametro
        this.apellido = apellido;
        this.edad = edad;
        this.datos = `hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
    saludar(){
        return `hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}
//creacion de instancia de clase (objeto)
personas = [];
const juan = new Persona(`Juan`,`Garcia`,23);
personas.push(juan)
const gio = new Persona(`Giovanni`,`Ibanez`,33);
personas.push(gio)
console.log(gio);
console.log(gio.edad);
console.log(juan.saludar());
//guardando los objetos en un arreglo
personas = [];
personas.push(juan)
personas.push(gio)
console.log(personas)