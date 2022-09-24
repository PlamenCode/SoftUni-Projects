function hotelRoom(input){
    const mayOctStudioPrice = 50;
    const mayOctApartmentPrice = 65;
    const juneSepStudioPrice = 75.20;
    const juneSepApartmentPrice = 68.70;
    const julyAugStudioPrice = 76;
    const julyAugApartmentPrice = 77;

    const month = input[0];
    const numberOfNights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    switch(month){
        case 'May':
        case 'October':
        if(numberOfNights > 14){
            priceStudio = numberOfNights * mayOctStudioPrice * 0.7;
            priceApartment = numberOfNights * mayOctApartmentPrice * 0.9;
        } else if(numberOfNights > 7){
            priceStudio = numberOfNights * mayOctStudioPrice * 0.95;
            priceApartment = numberOfNights * mayOctApartmentPrice;
        } else {
            priceStudio = numberOfNights * mayOctStudioPrice;
            priceApartment = numberOfNights * mayOctApartmentPrice;
        }; break;
        case 'June':
        case 'September':
        if(numberOfNights > 14){
            priceStudio = numberOfNights * juneSepStudioPrice * 0.8;
            priceApartment = numberOfNights * juneSepApartmentPrice * 0.9;
        } else {
            priceStudio = numberOfNights * juneSepStudioPrice;
            priceApartment = numberOfNights * juneSepApartmentPrice;
        }; break; 
        case 'July':
        case 'August':
            if(numberOfNights > 14){
                priceApartment = numberOfNights * julyAugApartmentPrice * 0.9;
            }else {
                priceApartment = numberOfNights * julyAugApartmentPrice;
            } 
            priceStudio = numberOfNights * julyAugStudioPrice; break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May",
"8"])
