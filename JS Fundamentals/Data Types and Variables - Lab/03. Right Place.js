function rightPlace(firstString, char, secondString){
    let finalFirstString = firstString.replace('_', char);

    let result = finalFirstString === secondString ? 'Matched' : 'Not Matched';
    console.log(result)

    // if(finalFirstString === secondString){
    //     console.log('Matched');
    // } else {
    //     console.log('Not Matched');
    // }
}
rightPlace('Str_ng', 'i','String')