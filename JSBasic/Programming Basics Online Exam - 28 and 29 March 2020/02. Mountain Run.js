function mountain(input){
    const recordInSec = Number(input[0]);
    const distnceInMeters = Number(input[1]);
    const timeInSecForOneMeter = Number(input[2]);

    const time = distnceInMeters * timeInSecForOneMeter;
    const addedTime = Math.floor(distnceInMeters / 50)
    const timeAdded = addedTime * 30;
    const totalTime = time + timeAdded;
    let diff = 0;

    if(totalTime < recordInSec){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        diff = totalTime - recordInSec
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
mountain(['5554.36',
    '1340',
    '3.23'])
