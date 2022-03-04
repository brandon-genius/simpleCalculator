console.log("Script")
//display the numbers 0 to 100, 10x10


//create function
function calculatingTotal(price, qty){
    let total=price*qty;
    return total;
}
function calculatingTaxes(subtotalParam){
    let taxes=subtotalParam*0.16;
    let total=subtotalParam+taxes;
    return total;
}
//use the function
let speakers = calculatingTotal(1000,3);
let laptop = calculatingTotal(200,2);

console.log(speakers, laptop);

console.log(calculatingTaxes(speakers));
console.log(calculatingTaxes(laptop));
