function trangleOfDollars(input){
    let num = Number(input[0]);
    let buff = ''
    for(let i = 1; i <= num; i++){
        let dollar ='$ ';
        buff += dollar;
        console.log(buff);
    }
}
trangleOfDollars([5])