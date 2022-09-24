function energy(input){
    const fruit = input[0];
    const size = input[1];
    const setNum = Number(input[2]);
    let packPrice = 0
    let price = 0
    let priceSet = 0

    switch(fruit){
        case 'Watermelon':
            if(size === 'small'){
                packPrice = 2 * 56;
                price = packPrice * setNum;
            } else if(size === 'big'){
                packPrice = 5 * 28.7;
                price = packPrice * setNum;
            }; break;
        case 'Mango':
            if(size === 'small'){
                packPrice = 2 * 36.66;
                price = packPrice * setNum
            } else if(size === 'big'){
                packPrice = 5 * 19.6;
                price = packPrice * setNum
            }; break;
        case 'Pineapple':
            if(size === 'small'){
                packPrice = 2 * 42.10;
                price = packPrice * setNum
            } else if(size === 'big'){
                packPrice = 5 * 24.8;
                price = packPrice * setNum;
            }; break;
        case 'Raspberry':
            if(size === 'small'){
                packPrice = 2 * 20;
                price = packPrice * setNum
            } else if(size === 'big'){
                packPrice = 5 * 15.2;
                price = packPrice * setNum
            }; break;
    }
    if(price >= 400 && price <= 1000){
        price = price - (price * 0.15);
    } else if( price > 1000){
        price = price - (price * 0.5);
    }
    console.log(`${price.toFixed(2)} lv.`)
}
energy(["Mango",
"big",
"8"])
