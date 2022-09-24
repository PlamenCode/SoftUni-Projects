function NumberPyramid(input){
    let num = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let buff = '';

    for(let rows = 1; rows <= num; rows++){
        for(let coll = 1; coll <= rows; coll++){
            if(current > num){
                isBigger = true;
                break;
        }
        buff += current + ' ';
        current++;
    }
    console.log(buff);
    buff = '';
    if(isBigger){
        break;;
    }
}
}
NumberPyramid(['7'])