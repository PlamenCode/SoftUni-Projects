function combinations(input){
    let num = Number(input[0]);
    let numOfComb = 0;

    for(let fNum = 0; fNum <= num; fNum++){
        for(let sNum = 0; sNum <= num; sNum++){
            for(let tNum = 0; tNum <= num; tNum++){
                let sum = fNum + sNum + tNum;
                if(sum === num){
                    numOfComb++
                }
            }
        }
    }
    console.log(numOfComb);
}
combinations(['25'])