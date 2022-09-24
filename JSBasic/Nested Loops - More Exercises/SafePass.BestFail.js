function safePass(input){
    let xMax = Number(input[0]);
    let yMax = Number(input[1]);
    let maxCombinations = Number(input[2]);

    let startA = 35;
    let endA = 55;
    let startB = 64;
    let endB = 96;
    let tempStartA = startA;
    let tempStartB = startB;

    let CombinationCount = 0;
    let finalString = '';

    loop1:
    for(let x = 1; x <= xMax; x++){
        for (let y = 1; y <= yMax; y++){
            if(CombinationCount >= maxCombinations) { break loop1; }
            let tempCharA = '';
            let tempCharB = '';

            let A = tempStartA;
            if(A > endA){ 
                A = startA; 
                tempStartA = startA;
            }
            if(A <= endA){
                tempCharA = String.fromCharCode(A);
                tempStartA++;
            }
            let B = tempStartB;
            if(B > endB){
                B = startB; 
                tempStartB = startB;
            }
            if(B <= endB) {
                tempCharB = String.fromCharCode(B);
                tempStartB++; 
            }
            finalString += (`${tempCharA}${tempCharB}${x}${y}${tempCharB}${tempCharA}|`);
            CombinationCount++;
        }
    }
    console.log(finalString);
}
safePass(["99999", "99999", "99999"])