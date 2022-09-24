function accBalance(input){
    let index = 0;
    let command = input[index];
    index++; 
    let acc = 0;

    while(command !== 'NoMoreMoney'){
     let money = Number(command);
     if(money < 0){
         console.log('Invalid operation!'); break;
     }
     acc += money;
     console.log(`Increase: ${money.toFixed(2)}`);
     command = input[index];
     index++
    }
    console.log(`Total: ${acc.toFixed(2)}`);
}
accBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])

