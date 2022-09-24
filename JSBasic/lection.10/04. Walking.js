function walking(input){
    const goal = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let steps = 0;

    while(command !== 'Going home'){
        let tempSteps = Number(command);
        steps += tempSteps;

        if(steps >= goal){
            break;
        }
        command = input[index];
        index++;
    }
    
    if(command === 'Going home'){
        let tempSteps = Number(input[index]);
        steps += tempSteps;
    }
    if(steps >= goal){
        let diff = Math.abs(goal - steps);
        console.log('Goal reached! Good job!');
        console.log(`${diff} steps over the goal!`);
    } else {
        let diff = Math.abs(goal - steps);
        console.log(`${diff} more steps to reach goal.`)
    }
}

walking(["1000",
"1500",
"2000",
"6500"])



