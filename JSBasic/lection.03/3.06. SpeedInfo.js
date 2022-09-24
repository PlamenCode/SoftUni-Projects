function speedInfo(input){
    const speedNumber = Number(input[0]);
    
    if(speedNumber <= 10){
        console.log('slow');
    } else if(speedNumber > 10 & speedNumber <= 50){
        console.log('average');
    } else if (speedNumber > 50 & speedNumber <= 150){
        console.log('fast');
    } else if (speedNumber > 150 & speedNumber <= 1000){
        console.log('ultra fast');
    } else if (speedNumber > 1000){
    console.log('extremely fast');
    }
}
speedInfo(['-10'])