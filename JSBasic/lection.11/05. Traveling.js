function traveling(input){
    let index = 0;
    let destination = '';
    let cost = 0;
    let savings = 0;

    let command = input[index];
    index++

    while(command !== 'End'){
        destination = command;
        cost = Number(input[index]);
        index++;
        savings = Number(input[index]);
        index++;
        while(cost > savings){
            let currentSavings = Number(input[index]);
            index++;
            savings += currentSavings;
        } 
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
