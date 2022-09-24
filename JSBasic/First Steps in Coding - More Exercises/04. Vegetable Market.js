function vegetableMarket(input){
    const euroBgnCours = 1.94;
    const vegiesPricePerKilo = Number(input[0]);
    const fruitsPricePerKilo = Number(input[1]);
    const vegiesKilos = Number(input[2]);
    const fruitsKilos = Number(input[3]);

    let vegiesCost = vegiesPricePerKilo * vegiesKilos;
    let fruitsCost = fruitsPricePerKilo * fruitsKilos;
    let totalCost = (vegiesCost + fruitsCost) / euroBgnCours;

    console.log(totalCost.toFixed(2));
}
vegetableMarket(['0.194','19.4','10','10'])