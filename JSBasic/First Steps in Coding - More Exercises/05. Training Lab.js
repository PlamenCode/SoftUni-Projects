function trainingLab(input){
    const lenght = Number(input[0])*100;//за да са в см
    const width = Number(input[1])*100;//за да са в см
    const deskWidth = 70;//по условие
    const deskLenght = 120;//по условие
    const spacesOccupied = 3;//катедра + врата

    let freeWidth = width - 100;//заради коридора
    let desksInRow = Math.floor(freeWidth / deskWidth);//закръгляма до по-малкото (остатъка не ни интересува)
    let numOfColums = Math.floor(lenght / deskLenght);
    let numberOfSpaces = (desksInRow * numOfColums) - spacesOccupied;

    console.log(numberOfSpaces);
}
trainingLab(['8.4','5.2'])