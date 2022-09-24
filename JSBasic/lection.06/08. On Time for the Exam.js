function onTimeForExa(input){
    const examHour = Number(input[0]);
    const examMinutes = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinutes = Number(input[3]);

    const examTimeMinutes = examHour * 60 + examMinutes;
    const arrivalTimeMinutes = arrivalHour * 60 + arrivalMinutes;
    const diff = Math.abs(examTimeMinutes - arrivalTimeMinutes);
    const hoursDiff = Math.floor(diff / 60);
    let minDiff = diff % 60;

    if(minDiff === 0 || (minDiff < 10 && hoursDiff > 0 )){
        minDiff = `0${minDiff}`;
    }
    
    if(arrivalTimeMinutes === examTimeMinutes){
        console.log('On time');
    } else if(arrivalTimeMinutes > examTimeMinutes && diff < 60){
        console.log('Late');
        console.log(`${minDiff} minutes after the start`);
    } else if(arrivalTimeMinutes > examTimeMinutes && diff >= 60){
        console.log('Late');
        console.log(`${hoursDiff}:${minDiff} hours after the start`);
    } else if(diff <= 30){
        console.log('On time');
        console.log(`${minDiff} minutes before the start`);
    } else if(diff > 30 && diff < 60){
        console.log('Early');
        console.log(`${minDiff} minutes before the start`);
    } else {
        console.log('Early');
        console.log(`${hoursDiff}:${minDiff} hours before the start`);
    }
}
onTimeForExa(["9",
"30",
"9",
"50"])
