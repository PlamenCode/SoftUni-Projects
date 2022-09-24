function printAndSum(start , end){
    let numbers = '';
    let sum = 0;

    for(start ; start <= end; start++){
        numbers += `${start} `;
        sum += start;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`)
}