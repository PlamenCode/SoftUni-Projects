function repainting(input){
    const meterNylonPrice = 1.5;
    const literPaintPice = 14.5;
    const literPaintThinnerPrice = 5.0;
    const bagPrice = 0.4;
    const extraNylon = 2;
    const extraPaintPercent = 0.1;
    const oneHourOfWorkPercent = 0.3;

    const nylonNeeded = Number(input[0]);
    const paintNeeded = Number(input[1]);
    const thinnerNeeded = Number(input[2]);
    const hoursNeeded = Number(input[3]); 

    const extraPaint = paintNeeded * extraPaintPercent;
    const nylonCost = (nylonNeeded + extraNylon) * meterNylonPrice;
    const paintCost = (paintNeeded + extraPaint) * literPaintPice;
    const thinnerCost = thinnerNeeded * literPaintThinnerPrice;

    const allMaterialsCost = nylonCost + paintCost + thinnerCost + bagPrice;
    const workCost = (allMaterialsCost * oneHourOfWorkPercent) * hoursNeeded;
    const totalCost = allMaterialsCost + workCost;
    console.log(totalCost);
}
repainting(["10 ","11 ","4 ","8 "])