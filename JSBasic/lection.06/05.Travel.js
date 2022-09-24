function travel(input){
    const budget = Number(input[0]);
    const season =input[1];
    let moneySpend = 0;

    switch(season){
        case 'summer':
            if(budget <= 100){
                console.log('Somewhere in Bulgaria');
                moneySpend = budget * 0.3;
                console.log(`Camp - ${moneySpend.toFixed(2)}`);
            } else if(budget <= 1000){
                console.log('Somewhere in Balkans');
                moneySpend = budget * 0.4;
                console.log(`Camp - ${moneySpend.toFixed(2)}`);
            } else {
                console.log('Somewhere in Europe');
                moneySpend = budget * 0.9;
                console.log(`Hotel - ${moneySpend.toFixed(2)}`);
            }; break;
        case 'winter':
            if(budget <= 100){
                console.log('Somewhere in Bulgaria');
                moneySpend = budget * 0.7;
                console.log(`Hotel - ${moneySpend.toFixed(2)}`);
            } else if(budget <= 1000){
                console.log('Somewhere in Balkans');
                moneySpend = budget * 0.8;
                console.log(`Hotel - ${moneySpend.toFixed(2)}`);
            } else {
                console.log('Somewhere in Europe');
                moneySpend = budget * 0.9;
                console.log(`Hotel - ${moneySpend.toFixed(2)}`);
            }; break;
        }
    }
    travel(["1500", "summer"])