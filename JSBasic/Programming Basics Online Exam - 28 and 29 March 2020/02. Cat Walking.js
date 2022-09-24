function catWalk(input){
    const caloriesBurnedPerMin = 5;

    const minDailyWalk = Number(input[0]);
    const numOfWalks = Number(input[1]);
    const caloriesEaten = Number(input[2]);

    const caloriesBurned = (minDailyWalk * numOfWalks) * caloriesBurnedPerMin;
    const persentOfCaloriesEaten = caloriesEaten / 2;

    if(caloriesBurned >= persentOfCaloriesEaten){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}
catWalk(["15",
"2",
"500"])