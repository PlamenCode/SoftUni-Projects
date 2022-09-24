function sumNum(input){
const number = Number(input[0]);
let index = 1;
let sum = 0;
let tempNumber = Number(input[index]);

while(sum < number){
sum += tempNumber;
index++
tempNumber = Number(input[index]);
}
console.log(sum)
}

sumNum(["100",
"10",
"20",
"30",
"40"])
