function task6(input){
    let firstNumUp = Number(input[0]);
    let secNumUp = Number(input[1]);
    let thirdNumUp = Number(input[2]);

    let buff = '';

    for(let i = 1 ; i <= firstNumUp; i++){
        for(j = 1 ; j <= secNumUp; j++){
            for(k = 1 ; k <= thirdNumUp; k++){
                if(i % 2 === 0 && k % 2 === 0 ){
                    if( j === 2 || j === 3 || j === 5 || j === 7){
                        buff += `${i} ${j} ${k}\n`
                    }
                }
            }
        }
    }
    console.log(buff);
}
task6(["8",
"2",
"8"])