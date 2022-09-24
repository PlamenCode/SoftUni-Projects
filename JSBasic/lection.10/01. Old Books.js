function oldBooks(input){
    let searchedBook = input[0]
    let index = 1;
    let command = input[index];
    index++;
    
    let bookCount = 0;
    let isFound = false;

    while(command !== 'No More Books'){
        let book = command;

        if(book === searchedBook){
            console.log(`You checked ${bookCount} books and found it.`)
            isFound = true;
            break;
        }
        bookCount++;
        command = input[index];
        index++;
    }

    if(!isFound){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
