function numWars(input){
    let index = 0;
    let firstPayer = input[index++];
    let secondPlayer = input[index++];
    let command = input[index++];

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while(command != 'End of game'){
        let firsPlayerCard = Number(command);
        let secondPlayerCard = Number(input[index++]);

        if(firsPlayerCard > secondPlayerCard){
            let points = firsPlayerCard - secondPlayerCard;
            firstPlayerPoints += points;
        } else if(secondPlayerCard > firsPlayerCard){
            let points = secondPlayerCard - firsPlayerCard;
            secondPlayerPoints += points;

        } else if( firsPlayerCard == secondPlayerCard){
            console.log('Number wars!');
            command = input[index++];

            let firsPlayerCard = Number(command);
            let secondPlayerCard = Number(input[index++]);

            if(firsPlayerCard > secondPlayerCard){
                console.log(`${firstPayer} is winner with ${firstPlayerPoints} points`);

            } else if(secondPlayerCard > firsPlayerCard){
                console.log(`${secondPlayer} is winner with ${secondPlayerPoints} points`);
                }           
            break;
        }
        command = input[index++];
    }

    if(command == 'End of game'){
        console.log(`${firstPayer} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayer} has ${secondPlayerPoints} points`);
    }
}
// numWars(['Elena','Simeon','6','3','2','5','8','9','End of game'])
// numWars(['Desi','Niki','7','5','3','4','3','3','5','3'])
numWars(['Alex','Georgi','4','5','3','2','4','3','4','4','5','2'])