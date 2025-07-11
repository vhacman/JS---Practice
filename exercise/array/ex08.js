
// Esercizio 9
// Scrivi un programma che prenda un array di stringhe
// e calcoli la lunghezza media delle stringhe presenti.

let array;
let sumOfLength;
let i;
let average;

sumOfLength = 0;
array = ["apple", "banana", "pear", "cherry"];
for(i = 0; i < array.length; i++){
    sumOfLength += array[i].length;
}
average = sumOfLength / array.length;
console.log("The average is:", average);