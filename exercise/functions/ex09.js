function	returnSum(num1, num2){
	let sum = num1 + num2;
	return sum;
}

function	randomInt(min, max){
	let	numOfValues = max - min + 1;
	// console.log(numOfValues);
	let	randomNum = Math.random();
	let	randomVal = randomNum * numOfValues;
	let	roundedRandomValue = Math.floor(randomVal);
	// console.log(randomVal);
	// console.log(roundedRandomValue);
	let finalNum = min + roundedRandomValue;

	// console.log(finalNum);
	return(finalNum);
}


let foods = ["cheese", "chicken", "grapes", "hambuergers"];

console.log(foods[randomInt(0, 3)]);
randomInt(5, 10);