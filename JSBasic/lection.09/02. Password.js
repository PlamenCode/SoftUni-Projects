function password(input){
    const name = input[0];
    const pass = input[1];
    let index = 2;
    let password = input[index];

    while(pass != password){
        index++;
        password = input[index];
    }
    console.log(`Welcome ${name}!`);
}
password(["Gosho",
"secret",
"secret"])
