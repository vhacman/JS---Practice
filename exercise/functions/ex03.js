/*Scrivi una funzione che prenda due parametri di tipo stringa 
e restituisca la loro concatenazione.*/

function concatenateStrings(str1, str2){
    return str1 + " " + str2;
}

let str1 = "Hello";
let str2 = "World!";
let result = concatenateStrings(str1, str2);
console.log("The new result is: " ,result)