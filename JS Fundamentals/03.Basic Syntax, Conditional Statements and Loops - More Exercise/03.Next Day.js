function nextDay(year, month, day) {
    let nextDay = new Date(year, month , day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() ;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2002, 7 , 12)