function task5(input){
    let target = Number(input[0]);
    let index = 1;
    let command = input[index++];

    let total = 0;
    let isTargetReached = false;

    while(command !== 'closed'){
        let process = command;
        let thing = input[index++];
        let price = 0;

        if(process === 'haircut'){
            switch(thing){
                case 'mens':
                    price = 15;
                    total += price; break;
                case 'ladies':
                    price = 20;
                    total += price; break;
                case 'kids':
                    price = 10;
                    total += price; break;
            }
        } else if( process === 'color'){
            switch(thing){
                case 'touch up':
                    price = 20;
                    total += price; break;
                case 'full color':
                    price = 30;
                    total += price; break;
            }
        }
        if(total >= target){
            console.log(`You have reached your target for the day!`);
            isTargetReached = true;
            break;
        }
        command = input[index++];
    }

    if(!isTargetReached){
        let moneyNeeded = target - total;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`)
    }

    console.log(`Earned money: ${total}lv.`);
    
}
task5(["50",
"color",
"full color",
"haircut",
"ladies"])
