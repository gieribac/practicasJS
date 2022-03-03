/*
Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/
let p = prompt("ingrese palabra: ");
let word=p.toLowerCase();
let vowels=0;
let consonants=0;
for (let i in p){
    let letter=word.charAt(i);
    letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u" ? vowels++ : consonants++;
}
console.log(`número de consonantes: ${consonants}\nnúmero de vocales: ${vowels}\nlongitud de la palabra "${p}": ${p.length}`)
