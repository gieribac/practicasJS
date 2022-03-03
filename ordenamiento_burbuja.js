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
  const unaLista = [['a', 'c'], ['c', 'a'],['b', 'd','c', 'a'],];
  const lumberstList = [4,7,5,2,3,0] 
  console.log(ordenamiento(lumberstList,0))
  console.log(ordenamiento(unaLista,0))