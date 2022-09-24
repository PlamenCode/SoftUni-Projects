function oscars(input){
    const actorName = input[0];
    const pointFomAcademy = Number(input[1]);
    const numOfJudges = Number(input[2]);
    let index = 3;
    let point = pointFomAcademy;

    for(let i = 1 ; i <= numOfJudges; i++){
        let judgeName = input[index];
        index++;
        let pointFromJudge = Number(input[index]);
        index++;
        let totalPointFromJudge = (judgeName.length * pointFromJudge ) / 2;
        point += totalPointFromJudge;

        if(point >= 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${point.toFixed(1)}!`); 
            break;
        }
    }

    if(point < 1250.5){
        let pointsNeeded = 1250.5 - point;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

