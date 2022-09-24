function smallShop(input){
    const product = input[0];
    const city = input[1];
    const quantity = Number(input[2]);

    if (city == 'Sofia'){
        switch(product){
            case 'coffee': console.log(quantity * 0.5 ); break;
            case 'water': console.log(quantity * 0.8); break;
            case 'beer': console.log(quantity * 1.2); break;
            case 'sweets': console.log(quantity * 1.45); break;
            case 'peanuts': console.log(quantity * 1.6); break;
        }
    } else if(city == 'Plovdiv'){
        switch(product){
            case 'coffee': console.log(quantity * 0.4); break;
            case 'water': console.log(quantity * 0.7); break;
            case 'beer': console.log(quantity * 1.15); break;
            case 'sweets': console.log(quantity * 1.3); break;
            case 'peanuts': console.log(quantity * 1.5); break;
        }
    } else if(city == 'Varna'){
        switch(product){
            case 'coffee': console.log(quantity * 0.45); break;
            case 'water': console.log(quantity * 0.7); break;
            case 'beer': console.log(quantity * 1.1); break;
            case 'sweets': console.log(quantity * 1.35); break;
            case 'peanuts': console.log(quantity * 1.55); break;
        } 
    }
}