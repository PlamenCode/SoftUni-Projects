function skiTrip(input){
    const roomForOnePerNightPrice = 18;
    const apartmentPerNightPrice = 25;
    const presidentApartmentPerNightPrice = 35;
    let finalPrice = 0;
    
    const days = Number(input[0]);
    const roomType = input[1];
    const grade = input[2];
    const nights = days - 1;

    if(days < 10){
        switch(roomType){
            case 'room for one person':
                finalPrice = nights * roomForOnePerNightPrice; break;
            case 'apartment':
                finalPrice = (nights * apartmentPerNightPrice) * 0.7; break;
            case 'president apartment':
                finalPrice = (nights * presidentApartmentPerNightPrice) * 0.9; break;
        }
    } else if(days >= 10 && days <= 15){
        switch(roomType){
            case 'room for one person':
                finalPrice = nights * roomForOnePerNightPrice; break;
            case 'apartment':
                finalPrice = (nights * apartmentPerNightPrice) * 0.65; break;
            case 'president apartment':
                finalPrice = (nights * presidentApartmentPerNightPrice) * 0.85; break;
        }
    } else if(days > 15){
        switch(roomType){
            case 'room for one person':
                finalPrice = nights * roomForOnePerNightPrice; break;
            case 'apartment':
                finalPrice = (nights * apartmentPerNightPrice) * 0.5; break;
            case 'president apartment':
                finalPrice = (nights * presidentApartmentPerNightPrice) * 0.8; break;
        }
    }
    switch(grade){
        case 'positive': finalPrice *= 1.25; break;
        case 'negative': finalPrice *= 0.9; break;
    }
    console.log(finalPrice.toFixed(2));
}
skiTrip(["14",
"apartment",
"positive"])
