function vacation(input){
    const vacationCost = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let index = 2;
    let dayCounter = 0;
    let spendDayCounter = 0;
    let isPossible = true;

    while(moneyAvailable < vacationCost){
        dayCounter++
        let choice = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;

        if(choice === 'spend'){
            moneyAvailable -= tempMoney;
            spendDayCounter++;
        } else if(choice === 'save'){
            moneyAvailable += tempMoney;
            spendDayCounter = 0;
        }
        if(moneyAvailable < 0){
            moneyAvailable = 0;
        }
        if(spendDayCounter == 5){
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            isPossible = false;
            break;
        }
    }
    if(isPossible){
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
