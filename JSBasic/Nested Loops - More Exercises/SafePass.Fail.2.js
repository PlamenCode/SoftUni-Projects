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
    let isChecked = true;

    loop1:
        for (let x = 1; x <= a; x++){
        loop2:
            for (let y = 1; y <= b; y++){
            loop3:
                for(startA; startA <= endA; startA++){
                loop4:
                if(isChecked){
                    for(startB; startB <= endB; startB++){
                        let aSign = String.fromCharCode(a);
                        let bSign = String.fromCharCode(b);
                        let tempString = `${aSign}${bSign}${x}${y}${bSign}${aSign}|`;
                        finalString += tempString;
                        console.log(tempString)
                        if(a >= endA){ a = startA; }
                        if(b >= endB){ b = startB; }
                        CombinationCount++;
                        if(CombinationCount >= maxCombinations){
                            isChecked = false;
                            break loop1;
                        }    
                    }
                }
                }
            }
        }
        console.log(finalString)
    }
safePass(["2", "3", "10"])