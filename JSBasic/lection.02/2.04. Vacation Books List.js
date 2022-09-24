function vacationBooks(input){
    const numberOfPages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const numberOfDays = Number(input[2]);

    const timeForBook = numberOfPages / pagesPerHour;
    const neededHoursPerDay = timeForBook / numberOfDays;
    console.log(neededHoursPerDay);
}
vacationBooks(["212 ","20 ","2 "])
