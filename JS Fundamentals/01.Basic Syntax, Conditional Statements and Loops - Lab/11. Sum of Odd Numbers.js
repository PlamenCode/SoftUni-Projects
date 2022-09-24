function sumOfOddNum(NumOfOddNums){
    let sum = 0;
    let counter = 0;

    for(let i = 1; i <= 100 ; i++){
        if(i % 2 !== 0){
            counter++;
            console.log(i);
            sum += i;
        }
        if(counter == NumOfOddNums){
            console.log((`Sum: ${sum}`));
            break;
        }
    }
}
sumOfOddNum(12)