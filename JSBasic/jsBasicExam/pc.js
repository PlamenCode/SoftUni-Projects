function pc(input){
    let cpuDolar = Number(input[0]);
    let gpuDolar = Number(input[1]);
    let ramDolar = Number(input[2]);
    let numRam = Number(input[3]);
    let percentOff = Number(input[4]);

    let dolarToLv = 1.57;

    let cpuPrice = (cpuDolar * dolarToLv) - ((cpuDolar * dolarToLv) * percentOff);
    let gpuPrice = (gpuDolar * dolarToLv) -((gpuDolar * dolarToLv)* percentOff);
    let ramPrice = ramDolar * dolarToLv * numRam;

    let total = cpuPrice + gpuPrice + ramPrice

    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}
pc(["500",
"200",
"80",
"2",
"0.05"])