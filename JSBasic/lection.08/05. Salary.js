function salary(input){
    const numOfTabsOpen = Number(input[0]);
    const salary = Number(input[1]);
    let index = 2;
    let moneyTaken = 0;

    for(let i = 1; i <= numOfTabsOpen; i++){
        let site = input[index];
        index++

        if(site === 'Facebook'){
            moneyTaken += 150;
        } else if(site === 'Instagram'){
            moneyTaken += 100;
        } else if(site === 'Reddit'){
            moneyTaken += 50;
        }
    }
    if(salary <= moneyTaken){
        console.log(`You have lost your salary.`);
    } else {
        let moneyLeft = salary - moneyTaken;
        console.log(moneyLeft.toFixed(2));
    }

}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


