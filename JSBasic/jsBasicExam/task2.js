function task2(input){
    let numDays = Number(input[0]);
    let foodKg = Number(input[1]);
    let firstDeerDay = Number(input[2]);
    let secondDeerDay = Number(input[3]);
    let thirdDeerDay = Number(input[4]);

    let firstDeerNeed = firstDeerDay * numDays;
    let secondDeerNeed = secondDeerDay * numDays;
    let thirdDeerNeed = thirdDeerDay * numDays;

    let totalNeeded = firstDeerNeed + secondDeerNeed + thirdDeerNeed;

    if(foodKg >= totalNeeded){
        let foodLeft = Math.floor(foodKg - totalNeeded)
        console.log(`${foodLeft} kilos of food left.`);
    } else if(foodKg < totalNeeded){
        let foodNeeded = Math.ceil(totalNeeded - foodKg);
        console.log(`${foodNeeded} more kilos of food are needed.`)
    }
}
task2(["2",
"10",
"1",
"1",
"2"])