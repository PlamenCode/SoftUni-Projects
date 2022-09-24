function shopping(input){

    const budget = Number(input[0]);
    const gpuCount = Number(input[1]);
    const cpuCout = Number(input[2]);
    const ramCount =Number(input[3]);
    
    let gpuSum = gpuCount * 250; 
    let cpu =gpuSum * 0.35;
    const cpuSum = cpu * cpuCout
    let ram =  gpuSum * 0.1;
    const ramSum = ram * ramCount;

    let totalSum = gpuSum + cpuSum + ramSum; 

   if(gpuCount > cpuCout){
       totalSum *= 0.85;
   }
   if (budget >= totalSum){
       let differance = budget - totalSum;
       console.log(`You have ${differance.toFixed(2)} leva left!`)
   } else {
       let moneyNeeded = totalSum - budget;
       console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
   }
}
shopping(["900","2","1","3"])
