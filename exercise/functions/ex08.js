/*Scrivi una funzione che prenda una parola come parametro e restituisca 
true se la parola è palindroma, altrimenti restituisca false.*/

function	isPalindrome(word){
	let reversed;

	//divide la parola con .split(''), li inverte con .reverse(), e li riunisce con .join()
	reversed = word.split('').reverse().join('');
	return word === reversed;
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("casa"));

///Una palindroma è una parola che si legge uguale da sinistra a destra e da destra a sinistra.

 