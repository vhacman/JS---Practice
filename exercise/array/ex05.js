
// Esercizio 6
// Scrivi un programma che prenda un array con elementi duplicati
// e restituisca un nuovo array con i duplicati rimossi.


let duplicated = [1, 2, 3, 5, 5, 4, 3, 6, 7, 9];

let unique = [];
let number;

for (number of duplicated)
{
	if(!unique.includes(number))
		unique.push(number);
}

console.log("con ciclo for", unique);

//altrimenti con un ciclo while:

let i = 0;

while(i < duplicated.lenght){
	number = duplicated[i];
	if(!unique.includes(number)){
		unique.push(number);
	}
	i++;
}

console.log("con ciclo while", unique)
