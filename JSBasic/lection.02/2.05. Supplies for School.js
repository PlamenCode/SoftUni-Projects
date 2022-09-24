function suppliesForSchool(input){
    const penPackPrice = 5.8;
    const markerPackPrice = 7.2;
    const chemicalsPricePerLiter = 1.2;

    const numberOfPenPacks = Number(input[0]);
    const numberOfMarkerPacks = Number(input[1]);
    const littersOfChemicals = Number(input[2]);
    const percentDiscaunt = Number(input[3])/100;

    const penPacksCost = penPackPrice * numberOfPenPacks;
    const markerPacksCost = markerPackPrice * numberOfMarkerPacks;
    const chemicalsCost = chemicalsPricePerLiter * littersOfChemicals;
    const allMaterialsCost = penPacksCost + markerPacksCost + chemicalsCost;
    const costAfterDiscaunt = allMaterialsCost - (allMaterialsCost * percentDiscaunt);
    console.log(costAfterDiscaunt);
}
suppliesForSchool(["2 ","3 ","4 ","25 "])