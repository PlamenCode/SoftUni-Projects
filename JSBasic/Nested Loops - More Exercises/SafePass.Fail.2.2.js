function safePass(input){
    let a = Number(input[0])
    let b = Number(input[1]);
    let maxCombinations = Number(input[2]);

    let startA = 35;
    let endA = 55;
    let startB = 64;
    let endB = 94;

    let CombinationCount = 0;
    let finalString = '';

    let A = startA;
    let B = startB;
    
    loop1:
    for(let x = 1; x <= a; x++){
        for(let y = 1; y <= b; y++){
            if(CombinationCount >= maxCombinations) { break loop1; }

            let symA = '';
            let symB = '';

            let tempEndA = A + 1;
            if(tempEndA > endA) { tempEndA = startA + 1; }     ////// IF CHECK //////

            for(A; A <= tempEndA; A++){

                if(A > endA) { A = startA; }                   ////// IF CHECK //////
                symA = String.fromCharCode(A);
                break;
            }

            let tempEndB = B + 1;
            if(tempEndB > endB) { tempEndB = startB + 1; }     ////// IF CHECK //////

            for(B; B <= tempEndB; B++){

                if(B > endB) { B = startB; }                   ////// IF CHECK //////
                symB = String.fromCharCode(B);
                break;
            }
            finalString += (`${symA}${symB}${x}${y}${symB}${symA}|`);
            CombinationCount++;
            A++;
            B++;
        }  
    }
    console.log(finalString);
}
safePass(["20", "50", "10"])