function sleepyTomCat (input){
    const daysOff = Number(input[0]);

    let workDays = 365 - daysOff;
    let totalPlayTime = workDays * 63 + daysOff * 127;

    if(totalPlayTime < 30000){
        let diff = 30000 - totalPlayTime;
        let diffHours = Math.round(diff / 60);
        let diffMin = diff % 60;
        console.log(`Tom sleeps well`);
        console.log(`${diffHours.toFixed(0)} hours and ${diffMin.toFixed(0)} minutes less for play`);
    } else{
        let diff = totalPlayTime - 30000;
        let diffHours = Math.round(diff / 60);
        let diffMin = diff % 60;
        console.log(`Tom will run away`);
        console.log(`${diffHours.toFixed(0)} hours and ${diffMin.toFixed(0)} minutes more for play`);
    }
}
sleepyTomCat([20])