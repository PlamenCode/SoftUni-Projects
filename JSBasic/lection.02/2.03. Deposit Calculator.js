function depositCalculator(input){
    const depositSum = Number(input[0]);
    const depositTermMonth = Number(input[1]);
    const interestPerYear= Number(input[2])/100;

    const accuredInterest = depositSum * interestPerYear;
    const interestPerMonth = accuredInterest / 12;
    const total = depositSum + depositTermMonth * interestPerMonth;
    console.log(total);
}
depositCalculator(["200 ", "3 ", "5.7 "])
