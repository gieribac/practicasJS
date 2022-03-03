/*Escribe un programa que pueda calcular el área de 3 figuras geométricas, 
triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, 
después solicita los datos que necesites para calcularlo. 
triángulo = b * h / 2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado) */
let fig = parseInt(prompt("¿De qué figura se quiere calcular el área? \n Seleccione: \n Triangulo[1], rectángulo[2], círculo[3], cuadrado[4] "),10);
let base;
let altura;
let area=0;
let diametro;

switch (fig) {
    case 1://triángulo
        base = parseInt(prompt("Escriba medida de la base: "), 10); 
        altura = parseInt(prompt("Escriba medida de la altura: "), 10);
        area = base*altura/2;
        break;
    case 2: //rectángulo
        base = parseInt(prompt("Escriba medida de la base: "), 10); 
        altura = parseInt(prompt("Escriba medida de la altura: "), 10);
        area = base*altura;
        break;
    case 4: //cuadrado
        base = parseInt(prompt("Escriba medida de la base: "), 10); 
        area = base*base;
        break;
    case 3: //círculo       
        let diametro = parseInt(prompt("Escriba medida del diametro: "), 10); 
        area = Math.PI*diametro*diametro/4;
        break;
    default:
        console.log(`Error`); 
        area=0;     
        break;
  }
  console.log(`El área es de ${area} unidades cuadradas`);     

