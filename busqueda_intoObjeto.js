class Librito {
    constructor (title, author, year, genre){
        this.title=title;
        this.author=author;
        this.year=year;
        this.genre=genre;
    }
}
const libro1 = new Librito('la iliada', 'homero', '1000', 'terror');
const libro2 = new Librito('la odisea', 'bart', '1000', 'accion');
const libro3 = new Librito('100 años', 'quijote', '1000', 'fantasia');
const libro4 = new Librito('10000 años', 'mancha', '1000', 'fantasia');
biblioteca = [libro1,libro2,libro3,libro4];
//Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando un metodo que devuelve la informacion */
// for (const key in person) { //imprir claves- libros_[key]['author']
//     console.log(key);
// }
// genre_p==prompt('Ingrese un genero para filtrar libros correspondientes. ')
// (function(genre_p){
//     for (const key in biblioteca) { //imprimir valores
//         if (biblioteca[key]['genre']==genre_p){
//             console.log(biblioteca[key]);
//         }
//     }
// })(genre_p)

const ordenamiento = (unaLista,indice) => {
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
console.log(biblioteca[1]['author']); 
(function(libros){ //imprimir autores ordenados alfabeticamente
    libros_ = ordenamiento(libros,'author');
    console.log('lista de libros ordenados por autor');
    for (const key in libros_) { 
        //console.log(libros_[key]['author']); 
    };
})(biblioteca);