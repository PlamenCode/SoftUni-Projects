function task4(input){
    let numStudents = Number(input[0]);
    let index = 1;

    let avgGrade = 0;
    let topStudent = 0;
    let between4And5 = 0;
    let between3And4 = 0;
    let fail = 0;

    for(let i = 1 ; i <= numStudents; i++){
        let temGrade = Number(input[index++]);
        avgGrade += temGrade;

        if(temGrade >= 5.00){
            topStudent++;
        } else if( temGrade >= 4.00 && temGrade <= 4.99){
            between4And5++;
        } else if( temGrade >= 3.00 && temGrade <= 3.99){
            between3And4++;
        } else if(temGrade >= 2.00 && temGrade <= 2.99){
            fail++;
        }
    }
    let topPercent = (topStudent / numStudents) *100;
    console.log(`Top students: ${topPercent.toFixed(2)}%`);

    let from4To5 = (between4And5 / numStudents) *100;
    console.log(`Between 4.00 and 4.99: ${from4To5.toFixed(2)}%`);

    let from3To4 = (between3And4 / numStudents) * 100;
    console.log(`Between 3.00 and 3.99: ${from3To4.toFixed(2)}%`);

    let failed = (fail / numStudents) * 100;
    console.log(`Fail: ${failed.toFixed(2)}%`);
    
    let avg = avgGrade / numStudents;
    console.log(`Average: ${avg.toFixed(2)}`)
}
task4(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
