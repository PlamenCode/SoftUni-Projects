function login(input){
    let index = 0
    let username = input[index++]
    let command = input[index++];

    let counter = 0;
    let isBreaked = false;

    let password = '';
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    while(command !== password){
        counter++;
        if(counter < 4){
        console.log('Incorrect password. Try again.');
        } else if(counter == 4){
            isBreaked = true;
            break;
        }
        command = input[index++]
    }
    if(isBreaked){
        console.log(`User ${username} blocked!`);
    }
    if(!(isBreaked)){
        console.log(`User ${username} logged in.`);
    }
}
login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])