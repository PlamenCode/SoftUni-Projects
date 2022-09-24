function amazingNumbers(num){
    let textNum = num + '';
    let sum = 0;
    let isAazing = false;

    for(let i = 0; i < textNum.length; i++){
        let currentDigit = Number(textNum[i]);
        sum += currentDigit;
    }
    let sumText = sum.toString();
    for(let i = 0; i < sumText.length; i++){
        let currentDigit = Number(sumText[i]);
        if(currentDigit == 9){
            isAazing = true
            break;
        }
    }
    let trueOrFalse = isAazing ? 'True' : 'False';
    console.log(`${num} Amazing? ${trueOrFalse}`);
    // if(isAazing){
    //     console.log(`${num} Amazing? True`);
    // } else {
    //     console.log(`${num} Amazing? False`);
    // }
}
amazingNumbers(1233)