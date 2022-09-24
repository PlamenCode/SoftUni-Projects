function radiansToDegree(input){
    const radian = Number(input[0]);
    const degrees = radian * 180 / Math.PI;
    console.log(degrees);
}
radiansToDegree(['3.1416'])