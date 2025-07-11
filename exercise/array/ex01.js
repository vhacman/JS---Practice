// Esercizio 2
// Scrivi un programma che prenda un array di numeri
// e trovi il valore massimo.

const  nums = [1, 4, 7, 6, 3, 9];
let max = nums[0];

for(let numbers of nums){
    if (numbers > max)
    {
        max = numbers;
    }
}

console.log("Max value is:", max);
