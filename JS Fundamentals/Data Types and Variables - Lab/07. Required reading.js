function reading(numOfPages, pagesPerHour, numOfDays){
    let hoursNeeded = numOfPages / pagesPerHour
    let hoursPerDay = hoursNeeded / numOfDays
    console.log(hoursPerDay)
}
reading(432,15,4)