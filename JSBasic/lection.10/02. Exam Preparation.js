function exam(input){
    let numOfBadGradesAllowed = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    
    let badGradesCount = 0;
    let numOfProblems = 0;
    let gradeTotal = 0;
    let isEnough = false;
    let taskName = '';

    while(command !== 'Enough'){
        taskName = command;
        let grade = Number(input[index]);
        index++;

        if(grade <= 4){
            badGradesCount++;
        }
        if(badGradesCount >= numOfBadGradesAllowed){
            console.log(`You need a break, ${badGradesCount} poor grades.`)
            isEnough = true;
            break;
        }

        numOfProblems++;
        gradeTotal += grade;
        command = input[index];
        index++
    }
    if(!isEnough){
        let avgScore = gradeTotal / numOfProblems;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${numOfProblems}`);
        console.log(`Last problem: ${taskName}`);
    }
}
exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

