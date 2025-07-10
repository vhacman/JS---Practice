// Esercizio 2
// Scrivi un programma che prenda un array di numeri
// e trovi il valore massimo.

const  nums = [1, 4, 7, 6, 3, 9];
let max = nums[0];

for(let numero of nums){
    if (numero > max)
    {
        max = numero;
    }
}

console.log("Il valore massimo e':", max);
