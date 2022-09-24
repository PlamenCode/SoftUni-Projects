function cToF(input){
    const celsius = Number(input[0]);
    const fahrenheit = celsius * 1.8 + 32;

    console.log(fahrenheit.toFixed(2));
}
cToF(['25'])