// Esercizio 4
// Scrivi un programma che prenda un array di numeri
// e restituisca un nuovo array contenente solo i numeri pari.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = [];

for (let numero of numbers) {
	if (numero % 2 == 0){
		even.push(numero);
	}
}

console.log(even);

// il metodo per “inserire” un valore in un array --> PUSH
