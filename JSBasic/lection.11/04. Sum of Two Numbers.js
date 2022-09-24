function sumOfTwoNums(input){
    const startNum = Number(input[0]);
    const endNum = Number(input[1]);
    const magicNum = Number(input[2]);

    let numOfComb = 0;
    let notFound = true;

    for(let fNum = startNum; fNum <= endNum; fNum++){
        if(!notFound){
            break;
        }
        for(let sNum = startNum; sNum <= endNum; sNum++){
            let sum = fNum + sNum;
            numOfComb++;

            if(sum === magicNum){
                console.log(`Combination N:${numOfComb} (${fNum} + ${sNum} = ${sum})`);
                notFound = false;
                break;
            }

        }
    }
    if(notFound){
        console.log(`${numOfComb} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNums(["23",
"24",
"20"])

