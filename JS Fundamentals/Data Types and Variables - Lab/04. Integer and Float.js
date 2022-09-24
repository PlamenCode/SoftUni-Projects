function intOrFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let type = '';
    if(Number.isInteger(sum)){
        type = 'Integer'
    } else {
        type = 'Float'
    }
    console.log(`${sum} - ${type}`);
}
intOrFloat(1 , 4 , 1.1)