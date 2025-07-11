
// Esercizio 3
// Scrivi un programma che prenda un array di num
// e trovi il valore min.

let numbers = [1, 2, 3, 4, 5, 6, 64, 98, 453];
let num;
let min = numbers[0];

for(num of numbers){
    if(num < min)
    {
        min = num;
    }
}

console.log("min value is:", min);