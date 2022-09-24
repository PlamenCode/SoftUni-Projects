function toyShop(input){
    const puzzelPrice = 2.6;
    const dollPrice = 3;
    const bearPrice = 4.1;
    const minionPrice =  8.2;
    const truckPrice = 2;

    const vacationCost = Number(input[0]);
    const puzzleCount = Number(input[1]);
    const dollCount =  Number(input[2]);
    const bearCount = Number(input[3]);
    const minionCount = Number(input[4]);
    const truckCount = Number(input[5]);

    const toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let totalCost = puzzleCount * puzzelPrice + dollCount * dollPrice +
    bearCount * bearPrice + minionCount * minionPrice + truckCount * truckPrice;

   if(toysCount >= 50){
    totalCost *= 0.75;
   }
   let moneyafterrent = totalCost * 0.9;
   difference = Math.abs(moneyafterrent - vacationCost);
   if(moneyafterrent >= vacationCost){
       console.log(`Yes! ${difference.toFixed(2)} lv left.`)
   }else {
       console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
   }
}
toyShop(["320","8","2","5","5","1"])
