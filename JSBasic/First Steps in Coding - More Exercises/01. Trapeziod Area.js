function areaTrapezoid(input){
    const sideA = Number(input[0]);
    const sideB = Number(input[1]);
    const height = Number(input[2]);

    const area = (sideA + sideB) * height / 2;
    console.log(area.toFixed(2));
}
areaTrapezoid(['8','13','7'])