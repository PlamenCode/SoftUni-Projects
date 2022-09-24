function cinema(input){
    const premierPrice = 12;
    const normalPrice = 7.5;
    const discauntedPrice = 5;
    let income = 0.0;

    const typeProjection = input[0];
    const rows = Number(input[1]);
    const colums = Number(input[2]);

    const numOfSeats = rows * colums;

    if(typeProjection ==='Premiere'){
        income = numOfSeats * premierPrice;
    } else if(typeProjection === 'Normal'){
        income = numOfSeats * normalPrice;
    } else if(typeProjection === 'Discount'){
        income = numOfSeats * discauntedPrice;
    }
    console.log(`${income.toFixed(2)} leva`);
}