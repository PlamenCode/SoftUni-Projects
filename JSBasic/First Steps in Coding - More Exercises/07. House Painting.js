function housePainting(input){
    const heightOfHouse = Number(input[0]);
    const lenghtOfSideWall = Number(input[1]);
    const heightOfTriangleWall = Number(input[2]);
    const windowSide = 1.5;
    const entrance = 1.2 * 2;
    const greenPaintPerLiter = 3.4;
    const redPaintPerLiter = 4.3;

    //Side Walls
    let sideWallArea = heightOfHouse * lenghtOfSideWall;
    let windowArea = windowSide * windowSide;
    let bothSideWallsArea = (2 * sideWallArea) - (2 * windowArea);

    //Back/Front Wall
    let backWallArea = heightOfHouse * heightOfHouse;
    let backFrontWallArea = (2 * backWallArea) - entrance;
    
    //Total Hause Area
    let totalHouseArea = backFrontWallArea + bothSideWallsArea;
    let greenPaintNeeded = totalHouseArea / greenPaintPerLiter;

    //Seiling Rectanguler area
    let bothSeilingRect = 2 * (heightOfHouse * lenghtOfSideWall);

    //Seiling Triangeler Area
    let bothTriangArea = 2 * (heightOfHouse * heightOfTriangleWall / 2);
    
    //Total Seiling Area
    let totalSeilingArea = bothSeilingRect + bothTriangArea;
    let redPaintNeeded = totalSeilingArea / redPaintPerLiter;

    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));

}
housePainting(['6','10','5.2'])