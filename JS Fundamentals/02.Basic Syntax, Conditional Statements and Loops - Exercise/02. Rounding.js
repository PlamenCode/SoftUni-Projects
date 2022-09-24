function rounding(num , precisionNum){

    if(precisionNum > 15){
        precisionNum = 15;
    }
    num = num.toFixed(precisionNum)
    console.log(parseFloat(num))
}
rounding(10.5 , 3)