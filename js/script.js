
const userKm = prompt("Inserisci i kilometri da percorrere");
const userAge = prompt("Inserisci la tua età");
document.getElementById("userKm").innerHTML = (userKm);
document.getElementById("userAge").innerHTML = (userAge);

let basePrice = (userKm * 0.276)
let discountPrice = 0;

document.getElementById("basePrice").innerHTML = (basePrice.toFixed(2));

if (userAge < 18) {
    discountPrice = basePrice - (basePrice / 100 * 21);
} else if(userAge > 65){
    discountPrice = basePrice - (basePrice / 100 * 42) ;
}else basePrice;

document.getElementById("discountPrice").innerHTML = (discountPrice.toFixed(2));
