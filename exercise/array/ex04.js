
// Esercizio 5
// Scrivi un programma che prenda due array
// e restituisca un nuovo array che contenga tutti
// gli elementi dei due array concatenati.

let	array1 = [1, 2, 3, 4];
let	array2 = [5, 6, 7, 8];

let	united = array1.concat(array2);

console.log("new array: ", united);


let convoy1 = ['A', 'B'];
let convoy2 = ['C', 'D'];
let newTrain = convoy1
.concat(convoy2, 'E');
console.log("new train:", newTrain);
