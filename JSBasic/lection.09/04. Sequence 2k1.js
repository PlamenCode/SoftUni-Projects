function sequance2k(input){
    const number = Number(input[0]);
    let tempNum = 1;

    while(number >= tempNum ){
        console.log(tempNum);
        tempNum = tempNum * 2 + 1;
    }
}
sequance2k(['8'])