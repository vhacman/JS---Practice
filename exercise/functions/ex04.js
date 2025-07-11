/*Scrivi una funzione che prenda un parametro numero e restituisca il suo fattoriale.*/

function isFactorial(num){
	let factorial = 1;

	for (let i = 1; i <= num; i++){
		factorial *= i;
	}
	return factorial;
}

let num = 5;
let factorial = isFactorial(num);

console.log("Il fattoriale di", num, "e':", factorial);