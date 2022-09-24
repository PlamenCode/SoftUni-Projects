function transport(input){
    let km = Number(input[0]);
    let time = input[1];

    let startTaxi = 0.7;
    let busPrice = 0.09;
    let trainPrice = 0.06;
    let taxiPrice = 0;
    
    let trainCost = Number.MAX_SAFE_INTEGER
    let taxiCost = Number.MAX_SAFE_INTEGER
    let busCost = Number.MAX_SAFE_INTEGER

    if(time == 'day'){
        taxiPrice = 0.79;
    } else {
        taxiPrice = 0.9;
    }

    if(km >= 20){
        busCost = busPrice * km;
    }
    if(km >= 100){
        trainCost = trainPrice * km;
    }
        taxiCost = taxiPrice * km + startTaxi;

    if(taxiCost < trainCost && taxiCost < busCost){
        console.log(taxiCost.toFixed(2));
    } else if( busCost < taxiCost && busCost < trainCost){
        console.log(busCost.toFixed(2));
    } else {
        console.log(trainCost.toFixed(2));
    }
}
transport(['25','day'])