function personalTitles(input){
    const age = Number(input[0]);
    const gender = input[1];

    if(age >= 16){
       switch(gender){
           case 'f': console.log('Ms.'); break;
           case 'm': console.log('Mr.'); break;
       }
    } else {
        switch(gender){
            case 'f': console.log('Miss'); break;
            case 'm': console.log('Master'); break;
        }
    }
}