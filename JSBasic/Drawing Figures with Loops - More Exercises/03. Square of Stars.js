function square(input){
    let num = Number(input[0])
    for(let i = 1; i <= num; i++){
        let buff = '';
        for(let x = 1; x <= num; x++){
            let star = '* ';
            buff += star;
            }
        console.log(buff);
        buff = '';
        }
    }
    square([5])