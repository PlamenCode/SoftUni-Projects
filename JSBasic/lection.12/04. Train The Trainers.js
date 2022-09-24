function trainTheTrainers(input){
    let index = 0;
    let numOfJudges = Number(input[index++]);
    let command = input[index++];

    let totalAvg = 0
    let taskCounter = 0;
    while(command !== 'Finish'){
        let taskName = command;
        taskCounter++;
        let sumGrade = 0;

        for(let i = 1; i <= numOfJudges; i++){
            let currentGrade = Number(input[index++]);
            sumGrade += currentGrade;
        }
        let avgGrade = sumGrade / numOfJudges;
        totalAvg += avgGrade;
        console.log(`${taskName} - ${avgGrade.toFixed(2)}.`);

        command = input[index++];
    }

    totalAvg = totalAvg / taskCounter;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`)
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

