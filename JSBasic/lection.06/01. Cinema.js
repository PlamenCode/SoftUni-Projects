function cinema(input){
    const premierePrice = 12;
    const normalPrice = 7.5;
    const discauntPrice = 5;

    const projectionType = input[0];
    const rows = Number(input[1]);
    const coll = Number(input[2]);

    let income = rows * coll;

    switch(projectionType){
        case 'Premiere': income *= premierePrice; break;
        case 'Normal': income *= normalPrice; break;
        case 'Discount': income *= discauntPrice; break;
    }
    console.log(`${income.toFixed(2)} leva`)
}