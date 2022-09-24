function coins(input){
    let change = Math.floor(Number(input[0]) * 100);
    let coinCount = 0;

    while(change > 0){
        if(change >= 200){
            coinCount++;
            change -= 200;
        } else if(change >= 100){
            coinCount++;
            change -= 100;
        } else if(change >= 50){
            coinCount++;
            change -= 50;
        } else if(change >= 20){
            coinCount++;
            change -= 20;
        } else if( change >= 10){
            coinCount++;
            change -= 10;
        } else if(change >= 5){
            coinCount++;
            change -= 5;
        } else if(change >= 2){
            coinCount++;
            change -= 2;
        } else {
            coinCount++;
            change -= 1;
        }
    }
    console.log(coinCount)
}
coins(["2.73"])