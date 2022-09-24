function fishland(input){
    const shellsPerKilo = 7.50;//Цена за Миди за Килограм
    const SkumriilPerKilo = Number(input[0]);//Цена за Скумрии за Килограм
    const cacaPerKilo = Number(input[1]);//Цена за Цаца за Килограм
    const palamudKilos = Number(input[2]);//Килограми Паламуд
    const safridKilos = Number(input[3]);//Килограми Сафрид
    const shellsKilos = Number(input[4]);//Килограми миди
    
    let palamudPrice = SkumriilPerKilo + SkumriilPerKilo * 0.6;//Цена на Паламуда
    let PalamudCost = palamudKilos * palamudPrice;
    let safridPrice =  cacaPerKilo + cacaPerKilo * 0.8;//Цена на Сафрида
    let safridCost = safridKilos * safridPrice;
    let shellsCost = shellsKilos * shellsPerKilo;
    let totalCost = shellsCost + safridCost + PalamudCost;
    console.log(totalCost.toFixed(2));

}
fishland(['6.90','4.20','1.5','2.5','1'])