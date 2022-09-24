function greatNumber(input){
    const numberOne = Number(input[0]);
    const numberTwo = Number(input[1]);

    if(numberOne > numberTwo){
        console.log(numberOne);
    } else if(numberOne < numberTwo){
        console.log(numberTwo);
    } else {
        console.log(numberTwo);
    }
}
greatNumber(["5","3"])