function pipesInPool(input){
    const volumeOfPool = Number(input[0]);
    const firstPipeDebitPerHour = Number(input[1]);
    const secondPipeDebitPerHour = Number(input[2]);
    const hoursPiperOn = Number(input[3]);

    const firstPipeFilled = hoursPiperOn * firstPipeDebitPerHour;
    const secondPipeFilled = hoursPiperOn * secondPipeDebitPerHour;
    const pipesFilled = firstPipeFilled + secondPipeFilled;
    let poolFillPercent = ((pipesFilled / volumeOfPool) * 100).toFixed(2);
    let firsPipePercent = ((firstPipeFilled / pipesFilled) * 100).toFixed(2);
    let secondPipePercent = ((secondPipeFilled / pipesFilled) * 100).toFixed(2);

    if(volumeOfPool >= pipesFilled){
        console.log(`The pool is ${poolFillPercent}% full. Pipe 1: ${firsPipePercent}%. Pipe 2: ${secondPipePercent}%.`)
    } else if(volumeOfPool < pipesFilled){
        let diff = (pipesFilled - volumeOfPool).toFixed(2);
        console.log(`For ${hoursPiperOn} hours the pool overflows with ${diff} liters.`)
    }
}
pipesInPool(['1000','100','120','3'])