function task3(input){
    let numDancers = Number(input[0]);
    let numPoints = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let money = 0

    if(place === 'Bulgaria'){
        money = numDancers * numPoints;
        switch(season){
            case 'summer': money *= 0.95; break;
            case 'winter': money *= 0.92; break;
        }
    } else if(place === 'Abroad'){
        money = numDancers * numPoints +((numDancers * numPoints) / 2)
        switch(season){
            case 'summer': money *= 0.9; break;
            case 'winter': money *= 0.85; break;
        }
    }
    let charity = money * 0.75;
    let moneyLeft = money - charity;
    let moneyPerDance = moneyLeft / numDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDance.toFixed(2)}`)
}
task3(["1",
"89.5",
"summer",
"Abroad"])
