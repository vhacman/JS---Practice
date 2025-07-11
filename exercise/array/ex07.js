
// Esercizio 8
// Scrivi un programma che prenda un array
// e inverta l'ordine degli elementi.

let array;
let i;
let invertedArray;

invertedArray = [];
i = 0;
array = [1, 2, 3, 4, 5];

for(i = array.length - 1; i >= 0; i--){
    invertedArray.push(array[i]);
}

console.log(invertedArray);