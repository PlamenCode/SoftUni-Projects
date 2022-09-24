function areaOfFigures(input){
    const figureType = input[0];

    if (figureType === 'square'){
        const side = Number(input[1]);
        let area = side * side;
        console.log(area.toFixed(3));
    } else if (figureType === 'rectangle'){
        const sideALength = Number(input[1]);
        const sideBlength = Number(input[2]);
        let area = sideALength * sideBlength;
        console.log(area.toFixed(3));
    } else if(figureType === 'circle'){
        const radius = Number(input[1]);
        let area= Math.pow(radius,2) * Math.PI;
        console.log(area.toFixed(3));
    } else if(figureType === 'triangle'){
        let sideA = Number(input[1]);
        let height = Number(input[2]);
        const area = 0.5 * sideA * height;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["rectangle","7","2.5"])
