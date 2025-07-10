
// Esercizio 3
// Scrivi un programma che prenda un array di numeri
// e trovi il valore minimo.

let numeri = [1, 2, 3, 4, 5, 6, 64, 98, 453];
let minimo = numeri[0];

for(let numero of numeri){
    if(numero < minimo)
    {
        minimo = numero;
    }
}

console.log("Il valore minimo e':", minimo);