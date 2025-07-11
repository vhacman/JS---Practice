/*Scrivi una funzione che 
prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.*/

function    isEven(){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let num = 2;

let result = isEven(num);
console.log(result);