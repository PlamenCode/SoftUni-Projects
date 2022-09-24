function lunchBreak(input){
    const serialName = input[0];
    const episodeTime = Number(input[1]);
    const breakTime = Number(input[2]);
    
    let timeLeftInBreak = 0;

    const eatTime = breakTime / 8;
    const restTime = breakTime / 4;
    const timeLeft = breakTime - eatTime - restTime;
    
    if(timeLeft >= episodeTime){
        let timeLeftInBreak = timeLeft - episodeTime;
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeftInBreak)} minutes free time.`);
    } else {
        let timeNeeded = episodeTime - timeLeft;
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf","48","60"])

