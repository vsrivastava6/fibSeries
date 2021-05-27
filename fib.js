
const num = parseInt(prompt('How many Fibonacci terms would you like to see? ')); //prompt user for number of terms
let n1 = 0, n2 = 1, nextNum;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; ++i) { //for loop that stops at users nth time
    console.log(n1); //saves each number as part of the sequence
    nextNum = n1 + n2;//adding previous two terms
    n1 = n2; //changing values of n1 and n2
    n2 = nextNum;
}
