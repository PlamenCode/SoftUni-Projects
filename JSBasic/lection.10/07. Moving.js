function moving(input){
    const freeSpaceWidth = Number(input[0]);
    const freeSpaceLenght = Number(input[1]);
    const freeSpaceHeight = Number(input[2]);
    const freeSpace = freeSpaceHeight * freeSpaceLenght * freeSpaceWidth;

    let index = 3;
    let command = input[index];
    index++;
    let isEnough = true;

    let OccupiedSpace = 0;

    while(command !== 'Done'){
        let numOfBoxes = Number(command);
        OccupiedSpace += numOfBoxes;

        if(OccupiedSpace > freeSpace){
            let spaceNeeded = OccupiedSpace - freeSpace;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
            isEnough = false;
            break;
        }
        command = input[index];
        index++;
    }
    
    if(isEnough){
        let spaceLeft = Math.abs(OccupiedSpace - freeSpace);
        console.log(`${spaceLeft} Cubic meters left.`)
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

