function foodDelivery(input){
    const chikenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const veganMenuPrice = 8.15;
    const deliveryPrice = 2.5;
    const desertPrice = 0.2

    const chikenMenuNumber = Number(input[0]);
    const fishMenuNumber = Number(input[1]);
    const veganMenuNumber = Number(input[2]);

    const chikenMenuCost = chikenMenuNumber * chikenMenuPrice;
    const fishMenuCost = fishMenuNumber * fishMenuPrice;
    const veganMenuCost = veganMenuNumber * veganMenuPrice;
    const priceOfAllMenus = chikenMenuCost + fishMenuCost + veganMenuCost;
    const desertCost = priceOfAllMenus * desertPrice;
    
    const totalCost = priceOfAllMenus + desertCost + deliveryPrice;
    console.log(totalCost);
}
foodDelivery(["9 ","2 ","6 "])