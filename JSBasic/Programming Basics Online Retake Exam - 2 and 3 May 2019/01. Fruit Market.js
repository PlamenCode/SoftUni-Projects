function fruitMarket(input1,input2,input3,input4,input5){
let strawberriesPrice = Number(input1);
let quantityBananas = Number(input2);
let quantityOranges = Number(input3);
let quantityRaspberries = Number(input4);
let quantityStrawberries = Number(input5);

let raspberiesPrice = strawberriesPrice * 0.5;
let orangesPrice = raspberiesPrice * 0.6;
let bananasPrice = raspberiesPrice * 0.2;

let strawberriesCost = strawberriesPrice * quantityStrawberries;
let bananasCost = bananasPrice * quantityBananas;
let orangesCost = orangesPrice * quantityOranges;
let raspberiesCost = raspberiesPrice * quantityRaspberries;

let totalCost = strawberriesCost + bananasCost + orangesCost + raspberiesCost;

console.log(totalCost.toFixed(2));

}
fruitMarket