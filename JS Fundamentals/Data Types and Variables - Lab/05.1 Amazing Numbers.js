function amazingNumbers(num){
    let textNum = num + '';
    let sum = 0;

    for(let i = 0; i < textNum.length; i++){
        let currentDigit = Number(textNum[i]);
        sum += currentDigit;
    }
    let result = sum.toString().includes('9');
    console.log(result ? 
                `${num} Amazing? True` :
                `${num} Amazing? False`);
}
amazingNumbers(1233)