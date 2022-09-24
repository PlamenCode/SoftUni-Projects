function triangleOfNums(number){
    for(let row = 1 ; row <= number ; row++){
        let line = '';
        for(let coll = 1; coll <= row ; coll++){
            line += `${row} `;
        }
        console.log(line)
    }
}
triangleOfNums(3)