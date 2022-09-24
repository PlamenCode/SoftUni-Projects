function histogram(input){
    const nums = Number(input[0]);
    let index = 1;
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for(let i = 1; i <= nums; i++){
        let num = Number(input[index]);
        index++;

        if(num < 200){
            p1Count++;
        } else if(num >= 200 && num < 400){
            p2Count++;
        } else if(num >= 400 && num < 600){
            p3Count++;
        } else if(num >= 600 && num < 800){
            p4Count++;
        } else {
            p5Count++;
        }
    }

    let p1 = p1Count / nums * 100;
    console.log(`${p1.toFixed(2)}%`)
    let p2 = p2Count / nums * 100;
    console.log(`${p2.toFixed(2)}%`)
    let p3 = p3Count / nums * 100;
    console.log(`${p3.toFixed(2)}%`)
    let p4 = p4Count / nums * 100;
    console.log(`${p4.toFixed(2)}%`)
    let p5 = p5Count / nums * 100;
    console.log(`${p5.toFixed(2)}%`)

}
histogram(["3",
"1",
"2",
"999"])

