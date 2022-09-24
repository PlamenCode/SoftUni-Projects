function safePasswordsGenerator(input) {
 
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxQualityPassword = Number(input[2]);
 
    let combination = 0;
    let combinationPrint = "";
 
    let isFlag = false;
    let sumNewA = 35;
    let sumNewB = 64;
 
    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            sumNewA += 1
            sumNewB += 1
            for (let A = 35; A <= sumNewA; A++) {
                for (let B = 64; B <= sumNewB; B++) {
                    let newsA = String.fromCharCode(A);
                    let newsB = String.fromCharCode(B);
                    combination++;
                    combinationPrint += (`${newsA}${newsB}${x}${y}${newsB}${newsA}|`)
                }
            }
        }
    }
    console.log(combinationPrint)
}
 
safePasswordsGenerator(["2", "3", "10"])