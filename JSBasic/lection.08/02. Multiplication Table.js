function multiplicationTable(input){
    const table = Number(input[0]);

    for(let i = 1 ; i <= 10; i++){
        let num = i * table;
        console.log(`${i} * ${table} = ${num}`);
    }
}
multiplicationTable(['5'])