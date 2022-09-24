function tenisRnakList(input){
    const numOfTornament = Number(input[0]);
    const startPoints = Number(input[1]);
    let index = 2;
    let point = startPoints;
    let winCounter = 0;

    for(let i = 1 ; i <= numOfTornament; i++){
        let tournamentState = input[index];
        index++;

        switch(tournamentState){
            case 'W': point += 2000; winCounter++; break;
            case 'F': point += 1200; break;
            case 'SF': point += 720; break;
        }
    }
    let avgPoint = Math.floor((point - startPoints) / numOfTornament);
    let winRate = winCounter / numOfTornament * 100;

    console.log(`Final points: ${point}`);
    console.log(`Average points: ${avgPoint}`);
    console.log(`${winRate.toFixed(2)}%`)
}
tenisRnakList(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


