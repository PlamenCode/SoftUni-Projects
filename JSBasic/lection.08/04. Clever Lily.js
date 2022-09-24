function cleverLily(input){
    const lilyAge = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const singleToyPrice = Number(input[2]);

    let money = 0;
    let moneyGiven = 10;
    let toyCount = 0;

    for(let i = 1; i <= lilyAge; i++){
        let currentAge = i;

        if(currentAge % 2 === 0){
            money += moneyGiven;
            moneyGiven += 10;
            money--;
        } else {
            toyCount++;
        }
    }

    let toysMoney = toyCount * singleToyPrice;
    let totalMoney = toysMoney + money;

    if(totalMoney >= washingMachinePrice){
        let moneyLeft = totalMoney - washingMachinePrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingMachinePrice - totalMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["10",
"170.00",
"6"])
