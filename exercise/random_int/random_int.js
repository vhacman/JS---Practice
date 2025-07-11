
/*  
** Restituisce la somma di due numeri.
**  Calcola la somma di num1 e num2, la memorizza in sum e ritorna il valore di sum
*/
function	returnSum(num1, num2){
	let sum = num1 + num2;
	return sum;
}

/*
** Restituire un numero intero casuale compreso tra min e max, inclusi
** Calcola il numero totale di valori possibili: numOfValues = max - min + 1
** Genera un numero casuale decimale tra 0 e 1 incluso: Math.random()
** Arrotonda per difetto: Math.floor() -> per ottenere un intero
** Somma il valore minimo per ottenere il risultato finale tra min e max
*/
function	randomInt(min, max){
	let	numOfValues = max - min + 1;
	let	randomNum = Math.random();
	let	randomVal = randomNum * numOfValues;
	let	roundedRandomValue = Math.floor(randomVal);
	let finalNum = min + roundedRandomValue;
	return(finalNum);
}

let random = randomInt(0, 100);
console.log(random);


/*
compressa:

function	randomInt(min, max){
	return (Math.floor( (max - min + a) * Math.random()) + min);
}

*/