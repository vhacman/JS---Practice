
let myString = "I am really hungry";
console.log(myString);
let myUpperString = myString.toUpperCase();
console.log(myUpperString);

let reallyLocation = myString.search('really');
console.log(reallyLocation);

//funzione substr e' considerata obsoleta dagli standard ECMAScript. 
// si usa invece substring
let specialWord = myString.substring(reallyLocation, reallyLocation + 6);
console.log(specialWord);
