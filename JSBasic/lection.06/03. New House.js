function newHouse(input){
    const rosesPrice = 5;
    const dahlianPrice = 3.8;
    const tulipsPrice = 2.8;
    const narcissusPrice = 3;
    const gladiolusPrice = 2.5;

    const flowerType = input[0];
    const flowerCount = Number(input[1]);
    const budget = Number(input[2]);

    let finalPrice = 0;

    switch(flowerType){
        case 'Roses':
            if(flowerCount > 80){
                finalPrice = (rosesPrice * flowerCount);
                finalPrice -= finalPrice * 0.9;
            }
             finalPrice += rosesPrice * flowerCount; break;
        case 'Dahlias':
            if(flowerCount > 90){
                finalPrice -= dahlianPrice * flowerCount * 0.15;
            }
            finalPrice += dahlianPrice * flowerCount; break;
        case 'Tulips':
            if(flowerCount > 80){
                finalPrice -= tulipsPrice * flowerCount * 0.15;
            } 
            finalPrice += tulipsPrice * flowerCount; break;
        case 'Narcissus':
            if(flowerCount < 120){
                finalPrice += narcissusPrice * flowerCount * 0.15;
            }
            finalPrice += narcissusPrice * flowerCount; break;
        case 'Gladiolus':
            if(flowerCount <  80){
                finalPrice += gladiolusPrice * flowerCount * 0.2
            }
            finalPrice += gladiolusPrice * flowerCount; break;
    }
    if(budget >= finalPrice){
        let moneyLeft = budget - finalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = Math.abs(budget - finalPrice);
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}
newHouse(['Narcissus','119' ,'360'])

