function change(input){
    const bitcoinInLeva = 1168;
    const chineseInDolar = 0.15;
    const dolarInLeva = 1.76;
    const euroInLeva = 1.95;

    const numBitkoins = Number(input[0]);
    const cjinese = Number(input[1]);
    const comisionPercent = Number(input[2])/100;

    const levaFromBitcoin = numBitkoins * bitcoinInLeva;
    const chineseInDolars = cjinese * chineseInDolar;
    const dolars = chineseInDolars * dolarInLeva;
    const total = levaFromBitcoin + dolars;
    const totalInEuro = total / euroInLeva
    const totalEarned = totalInEuro- ( totalInEuro * comisionPercent);
    console.log(totalEarned.toFixed(2)); 
}
change(["1",
"5",
"5"])