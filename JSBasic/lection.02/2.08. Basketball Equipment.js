function basketballEquipment(input){
    const taxPerYear = Number(input[0]);
    const priceOfTrainers = taxPerYear - 0.4 * taxPerYear;
    const siutPrice = priceOfTrainers - 0.2 * priceOfTrainers;
    const priceOfBalls = siutPrice / 4;
    const accsessoriesPrice = priceOfBalls /5;

    const allCost = taxPerYear + priceOfTrainers + siutPrice + priceOfBalls + accsessoriesPrice;
    console.log(allCost);
}
basketballEquipment(['365'])