function sumOfNum(input){
    let textNum = '' + input[0];
    let sum = 0;
    for(let i=0; i < textNum.length; i++){
        let num = Number(textNum[i]);
        sum += num
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNum(['12345'])