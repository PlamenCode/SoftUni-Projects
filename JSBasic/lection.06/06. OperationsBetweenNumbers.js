function operationsBetweenNubers(input){
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operation = input[2];
    let result = 0;

    switch(operation){
        case '+':
             result = n1 + n2;
            if(result % 2 ===0){
                console.log(`${n1} ${operation} ${n2} = ${result} - even`);
            } else {console.log(`${n1} ${operation} ${n2} = ${result} - odd`)}; break;

        case '-':
            result = n1 - n2;
            if(result % 2 ===0){
                console.log(`${n1} ${operation} ${n2} = ${result} - even`);
            } else {console.log(`${n1} ${operation} ${n2} = ${result} - odd`)}; break;

        case '*':
            result = n1 * n2;
            if(result % 2 ===0){
                console.log(`${n1} ${operation} ${n2} = ${result} - even`);
            } else {console.log(`${n1} ${operation} ${n2} = ${result} - odd`)}; break;

        case '/':
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 / n2;
                 console.log(`${n1} ${operation} ${n2} = ${result.toFixed(2)}`);
            }; break;

                 
        case '%':
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 % n2;
                console.log(`${n1} ${operation} ${n2} = ${result}`);
            }; break;
    }
}
operationsBetweenNubers(["10",
"12",
"+"])
