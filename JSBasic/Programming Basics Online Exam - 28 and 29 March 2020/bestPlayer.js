function bestPlayer(input){
    let index = 0;
    let command = input[index++];
    let name = '';
    let goals = -9999999;

    while(command !== 'END'){
        let tempName = command;
        let temapGoals = Number(input[index++]);

        if(temapGoals > goals){
            goals = temapGoals;
            name = tempName;
        }
        if(temapGoals >= 10){
            break;
        }
        command = input[index++]
    }
    console.log(`${name} is the best player!`);
    if(goals >= 3){
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`)
    }
}
 bestPlayer(["Silva",
 "5",
 "Harry Kane",
 "10"])
