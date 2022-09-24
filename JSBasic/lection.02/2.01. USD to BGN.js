function usdToBgn(input){
    const usd = Number(input[0]);
    const course = 1.79549;
    const bgn = usd * course;
    console.log(bgn);
}

usdToBgn(['1'])