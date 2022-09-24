function theatrePromotion (typeOfDay , age){

    let price = 0;
    let isError = true

    switch(typeOfDay){
        case 'Weekday':
            if(age >= 0 && age <= 18){
                price = 12;
            } else if( age > 18 && age <= 64){
                price = 18;
            } else if( age > 64 && age <= 122){
                price = 12;
            } else {
                isError = false
                console.log('Error!')
            }
            break;

        case 'Weekend':
            if(age >= 0 && age <= 18){
                price = 15;
            } else if( age > 18 && age <= 64){
                price = 20;
            } else if( age > 64 && age <= 122){
                price = 15;
            } else {
                isError = false
                console.log('Error!')
            }
            break;

            case 'Holiday':
                if(age >= 0 && age <= 18){
                    price = 5;
                } else if( age > 18 && age <= 64){
                    price = 12;
                } else if( age > 64 && age <= 122){
                    price = 10;
                } else {
                    isError = false
                    console.log('Error!')
                }
                break;
    }
    if(isError){
        console.log(`${price}$`);
    }
}