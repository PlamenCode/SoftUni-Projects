function worldSwimmingRecord(input){
const recodrInSec = Number(input[0]);
const distanceInMeter = Number(input[1]);
const timeInSecFor1Meter = Number(input[2]);

const addedTime = Math.floor(distanceInMeter / 15) * 12.5;
const totaTime = addedTime + distanceInMeter * timeInSecFor1Meter;

if(totaTime >= recodrInSec){
    let secondsSlower = totaTime - recodrInSec;
    console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
} else{
    console.log(`Yes, he succeeded! The new world record is ${totaTime.toFixed(2)} seconds.`)
}
}
worldSwimmingRecord(["10464","1500","20"])
