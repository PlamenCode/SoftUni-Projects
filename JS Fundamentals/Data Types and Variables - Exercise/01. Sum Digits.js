function sumDigist(num){
    let numText = num.toString();
    let sum = 0;

    for(let i = 0; i < numText.length; i++){
        let currentDigit = Number(numText[i]);
        sum += currentDigit;
    }
    console.log(sum)
}