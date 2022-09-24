function trangleArea(input){
    const sideA = Number(input[0]);
    const height = Number(input[1]);

    const area = sideA * height / 2;
    console.log(area.toFixed(2));

}
trangleArea(['20','30'])