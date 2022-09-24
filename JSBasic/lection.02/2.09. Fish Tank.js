function fishTnak(input){
    const tankLenght = Number(input[0]);
    const tankWidth = Number(input[1]);
    const tankHeight = Number(input[2]);
    const occupiedSpacePercent =Number(input[3]) / 100;

    const aquariumVolume = tankHeight * tankLenght * tankWidth;
    const volumeIniters = aquariumVolume / 1000;
    const litersNeeded = volumeIniters * (1- occupiedSpacePercent);
    console.log(litersNeeded); 
}
fishTnak(['85', '75', '47', '17'])