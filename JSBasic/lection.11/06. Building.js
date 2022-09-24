function building(input){
    const floors = Number(input[0]);
    const roomsPerFloor = Number(input[1]);

    for(let i = floors; i > 0; i--){
        let buff = '';
        for(let a = 0; a < roomsPerFloor; a++){
            if(i === floors){
                let currentBuff = `L${i}${a} `
                buff += currentBuff
            } else if(i % 2 === 0){
                buff += `O${i}${a} `
            } else {
                buff +=`A${i}${a} `;
            }
        }
        console.log(buff)
    }
}
building(['6','4'])