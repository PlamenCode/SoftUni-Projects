function sumOfPrimeNonPrime(input){
    let index = 0;
    let command = input[index];
    index++;


    let primeNumSum = 0;
    let nonPrimeNumSum = 0;
    while(command !== 'stop'){
        let currentNum = Number(command);

        if(currentNum < 0){
            console.log('Number is negative.');
            currentNum = input[index];
            index++
            continue;
        }
        if(currentNum === 1){
            primeNumSum += currentNum;
            currentNum = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for(let i = 2; i < currentNum; i++){
            if(currentNum % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeNumSum += currentNum;
        } else {
            nonPrimeNumSum += currentNum;
        }
        command = input[index]
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`)
}
sumOfPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
