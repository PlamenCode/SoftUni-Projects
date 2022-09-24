function vacantion(numOfPeople , typeOfPeople , Day){
    let price = 0;
    let total = 0;
    
    switch(Day){
        case 'Friday':
            if(typeOfPeople === 'Students'){
                price = 8.45;
                total = numOfPeople * price;
                if(numOfPeople >= 30){
                    total *= 0.85;
                }
            } else if(typeOfPeople === 'Business'){
                price = 10.90;
                total = numOfPeople * price;
                if(numOfPeople >= 100){
                    total = (numOfPeople - 10) * price;
                }
            } else if(typeOfPeople === 'Regular'){
                price = 15;
                total = numOfPeople * price;
                if(numOfPeople >= 10 && numOfPeople <= 20){
                    total *= 0.95
                }
            } break;

        case 'Saturday':
            if(typeOfPeople === 'Students'){
                price = 9.80;
                total = numOfPeople * price;
                if(numOfPeople >= 30){
                    total *= 0.85;
                }
            } else if(typeOfPeople === 'Business'){
                price = 15.60;
                total = numOfPeople * price;
                if(numOfPeople >= 100){
                    total = (numOfPeople - 10) * price;
                }
            } else if(typeOfPeople === 'Regular'){
                price = 20;
                total = numOfPeople * price;
                if(numOfPeople >= 10 && numOfPeople <= 20){
                    total *= 0.95
                }
            } break;

        case 'Sunday':
            if(typeOfPeople === 'Students'){
                price = 10.46;
                total = numOfPeople * price;
                if(numOfPeople >= 30){
                    total *= 0.85;
                }
            } else if(typeOfPeople === 'Business'){
                price = 16;
                total = numOfPeople * price;
                if(numOfPeople >= 100){
                    total = (numOfPeople - 10) * price;
                }
            } else if(typeOfPeople === 'Regular'){
                price = 22.50;
                total = numOfPeople * price;
                if(numOfPeople >= 10 && numOfPeople <= 20){
                    total *= 0.95
                }
            } break;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}