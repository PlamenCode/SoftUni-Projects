function equalSums(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let print = '';
    for(let i = startNum; i <= endNum; i++){
        let currentNum = '' + i;
        let sumEven = 0;
        let sumOdd = 0;
        for(let a = 0; a <= currentNum.length; a++){
            let currentDigit = Number(currentNum.charAt(a));
            if(a % 2 === 0){
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if(sumEven === sumOdd){
            print += `${i} `;
        }
    }
    console.log(print);
}
equalSums(["100000",
"100050"])
