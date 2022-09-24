function fishingBoat(input){
    const springPrice = 3000;
    const summerAndAutumnPrice = 4200;
    const winterPrice = 2600;

    const budget = Number(input[0]);
    const season =input[1];
    const numberFisherman = Number(input[2]);
    let finalCost = 0;

    switch(season){
        case 'Spring':
            if(numberFisherman <= 6){
                finalCost = springPrice - springPrice * 0.1;
            } else if( numberFisherman > 6 && numberFisherman <= 11){
                finalCost = springPrice - springPrice * 0.15;
            } else if(numberFisherman > 11){
                finalCost = springPrice - springPrice * 0.25;
            }; break;
        case 'Summer':
        case 'Autumn':
            if(numberFisherman <= 6){
                finalCost = summerAndAutumnPrice - summerAndAutumnPrice * 0.1;
            } else if( numberFisherman >= 7 && numberFisherman <= 11){
                finalCost = summerAndAutumnPrice - summerAndAutumnPrice * 0.15;
            } else if(numberFisherman > 11){
                finalCost = summerAndAutumnPrice - summerAndAutumnPrice * 0.25;
            }; break;
        case 'Winter':
            if(numberFisherman <= 6){
                finalCost = winterPrice - winterPrice * 0.1;
            } else if( numberFisherman >= 7 && numberFisherman <= 11){
                finalCost = winterPrice - winterPrice * 0.15;
            } else if(numberFisherman > 11){
                finalCost = winterPrice - winterPrice * 0.25;
            }; break;
    }
    if(season != 'Autumn' && numberFisherman % 2 === 0){
            finalCost -= finalCost * 0.05;
        }
    if(budget >= finalCost){
        let moneyLeft = budget - finalCost;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = finalCost - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}
fishingBoat(["3600",
"Autumn",
"6"])

