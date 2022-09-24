function trekkingMania(input){
    const numOfGroups = Number(input[0]);
    let index = 1;
    let totalNumOfPeople = 0;

    let musalaCount = 0;
    let monblanCount = 0;
    let kalimadzaroCunt = 0;
    let k2Count = 0;
    let everestCount = 0;

    for(let i = 1; i <= numOfGroups; i++){
        let numOfPeopeInGroup = Number(input[index]);
        index++;
        totalNumOfPeople += numOfPeopeInGroup;

        if(numOfPeopeInGroup <= 5){
            musalaCount += numOfPeopeInGroup;
        } else if( numOfPeopeInGroup >= 6 && numOfPeopeInGroup <= 12){
            monblanCount += numOfPeopeInGroup;
        } else if(numOfPeopeInGroup >= 13 && numOfPeopeInGroup <= 25){
            kalimadzaroCunt += numOfPeopeInGroup;
        } else if(numOfPeopeInGroup >= 26 && numOfPeopeInGroup<= 40){
            k2Count += numOfPeopeInGroup;
        } else if(numOfPeopeInGroup >= 41){
            everestCount += numOfPeopeInGroup;
        }
    }

    let musalaPercent = (musalaCount / totalNumOfPeople) * 100;
    console.log(`${musalaPercent.toFixed(2)}%`);
    let monblanPercent = (monblanCount / totalNumOfPeople) * 100;
    console.log(`${monblanPercent.toFixed(2)}%`);
    let kalimadzaroPercet = (kalimadzaroCunt / totalNumOfPeople) * 100;
    console.log(`${kalimadzaroPercet.toFixed(2)}%`);
    let k2Percent = (k2Count / totalNumOfPeople) * 100;
    console.log(`${k2Percent.toFixed(2)}%`);
    let everestPercent = (everestCount / totalNumOfPeople) * 100;
    console.log(`${everestPercent.toFixed(2)}%`)

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
