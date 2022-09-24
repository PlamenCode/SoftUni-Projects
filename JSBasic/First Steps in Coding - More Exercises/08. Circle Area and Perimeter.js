function circleAreaAndPerimeter(input){
    const radius = Number(input[0]);

    let area = Math.PI * radius * radius;
    console.log(area.toFixed(2));

    let perimeter = 2 * Math.PI * radius;
    console.log(perimeter.toFixed(2));
}
circleAreaAndPerimeter(['3'])