function cake(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let totalPicesAvailable = lenght * width;
    let picesTaken = 0;
    let index = 2;
    let command = input[index];
    index++;

    while(command !== 'STOP'){
        let piaces = Number(command);
        picesTaken += piaces;

        if(picesTaken >= totalPicesAvailable){
            let picesNeeded = Math.abs(picesTaken - totalPicesAvailable)
            console.log(`No more cake left! You need ${picesNeeded} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if(command === 'STOP' ){
        let picesLeft = totalPicesAvailable - picesTaken;
        console.log(`${picesLeft} pieces are left.`)
    }

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])



