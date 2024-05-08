
const userKm = prompt("Inserisci i kilometri da percorrere");
const userAge = prompt("Inserisci la tua età");
document.getElementById("userKm").innerHTML = (userKm);
document.getElementById("userAge").innerHTML = (userAge);

let basePrice = (userKm * 0.276)
let finalPrice;

document.getElementById("basePrice").innerHTML = (basePrice.toFixed(2));

if (userAge < 18) {
    finalPrice = basePrice - (basePrice / 100 * 21);
} else if(userAge > 65){
    finalPrice = basePrice - (basePrice / 100 * 42) ;
}else basePrice;

document.getElementById("finalPrice").innerHTML = (finalPrice.toFixed(2));
