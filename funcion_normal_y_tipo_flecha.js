//forma tradicional de la funcion
function saludar(){
    console.log('hola');
}

// forma tipo flecha
const saludarf = () => console.log('Holaf'); //no usar corchetes si es una sola sentencia, si se usa, va return

// el return en js detiene la ejecucion de las siguientes lineas de la funcion
saludarf()
const suma = (num1,num2) => {
    if (num1 == 2){
        return num1+num2;
    }
    console.log('Esto no se ejecuta si entra el if')
    return num1;
}
console.log(suma(3,3));