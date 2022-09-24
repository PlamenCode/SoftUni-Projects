function godzillaVsKong(input){
    const budget = Number(input[0]);
    const stuntManNumber = Number(input[1]);
    const clothesPricePerMan = Number(input[2]);

    const decor = budget * 0.1;
    let clothingCost = stuntManNumber * clothesPricePerMan;

    if(stuntManNumber > 150){
        clothingCost *= 0.9;
    }

    const totalCost = clothingCost + decor;
    
    if(totalCost > budget){
        let moneyNeeded = totalCost - budget;
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else if(totalCost <= budget){
        let MoneyLeft = budget - totalCost;
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${MoneyLeft.toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["20000","120","55.5"])
