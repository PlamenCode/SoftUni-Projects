function oddOrEven(input){
    const numberToCheck = Number(input[0]);

    if(numberToCheck % 2 === 0){
        console.log('even');
    } else {
        console.log('odd');
    }
}
oddOrEven(['5'])