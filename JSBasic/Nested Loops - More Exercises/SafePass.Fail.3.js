function safePasswordsGenerator(input) {
 
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxQualityPassword = Number(input[2]);
 
    let combination = 0;
    let combinationPrint = "";
 
    let startA = 35;
    let endA = 55;
    let startB = 64;
    let endB = 94;
 
    loop1:
    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            for (let A = 35; A <= endA; A++) {
                if(A >= endA) { A = startA }
                for (let B = 64; B <= endB; B++) {
                    let newsA = String.fromCharCode(A);
                    let newsB = String.fromCharCode(B);
                    if(B >= endB) { B = startB; }
                    combination++;
                    combinationPrint += (`${newsA}${newsB}${x}${y}${newsB}${newsA}|`);
                    if(combination >= maxQualityPassword){
                        break loop1;
                    }
                }
            }
        }
    }
    console.log(combinationPrint)
}
 
safePasswordsGenerator(["2", "3", "10"])