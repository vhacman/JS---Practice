let	greeting = "first test!";
let	greeting1 = "second test";
let	greeting2 = "third test";

function	capitalizeFunction(anyString){
	anyString = anyString.toUpperCase();
	return anyString;
}

let	capitalizeExpression = function(anyString){
	anyString = anyString.toUpperCase();
	return (anyString);
}

let	capitalizeArrow = anyString => anyString.toUpperCase();

console.log(capitalizeExpression(greeting));
console.log(capitalizeFunction(greeting1));
console.log(capitalizeArrow(greeting2));