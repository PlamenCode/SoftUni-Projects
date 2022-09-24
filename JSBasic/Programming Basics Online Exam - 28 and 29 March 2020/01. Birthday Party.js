function party(input){
    const rent = Number(input[0]);
    const cake = rent * 0.2;
    const drinks = cake - (cake * 0.45);
    const aimator = rent / 3;

    let total = rent + cake + drinks + aimator;
    console.log(total.toFixed(1));

}
party(['3720 '])