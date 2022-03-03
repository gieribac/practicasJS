class Car {
    constructor (make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const car1 = new Car ('cuervo','Mustang',1969);
const car2 = new Car ();
car2.make = 'bmw';
car2.model = 'litr';
car2.year = 1970;
const car3 = new Car ('aFord','Mustang',1969);

const arr=[car1,car2,car3];

const ordenamiento_arr_obj = (unaLista,indice) => {
    intercambios = true;
    numPasada = unaLista.length-1;
    while ((numPasada > 0) && intercambios){
      intercambios = false
      for (i=0;i<numPasada;i++){
        if (unaLista[i][indice] > unaLista[i+1][indice]){
          intercambios = true;
          aux = unaLista[i];
          unaLista[i] = unaLista[i+1];
          unaLista[i+1] = aux;
        }
      }
      numPasada -= 1;
    }
    return unaLista;
}
ordenados_make=ordenamiento_arr_obj(arr,'make');
for (const key in ordenados_make) { //imprimir valores
    console.log(ordenados_make[key]['make']);
}
