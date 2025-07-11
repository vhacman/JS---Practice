//Scrivi una funzione 
//che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.

function calculateAreaRectangular(){
    return (base * height);
}

const base = 5;
const height = 3;
const area = calculateAreaRectangular(base, height);

console.log("The area is: ", area);