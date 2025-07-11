
// Esercizio 7
// Scrivi un programma che prenda un array di stringhe
// e un elemento di ricerca, e restituisca l'indice
// della prima occorrenza dell'elemento nell'array.


let array;
let toFind;
let result;

array = ['a', 'b', 'c', 'd'];
toFind = 'b';

result = array.indexOf(toFind);

console.log(result)


//oppure senza indexOf

let i;
let newResult;
let newToFind;

newToFind = 'c';
newResult = -1;

for(i = 0; i < array.length; i++){
	if (array[i] === newToFind){
		newResult = i;
		break;
	}
}

console.log(newResult)
