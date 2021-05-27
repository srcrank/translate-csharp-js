// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------")

const diceRoll = () => {

for( let i = 0; i <= 10; i++) {
    let diceOne = Math.floor(Math.random() * 6) + 1
    let diceTwo = Math.floor(Math.random() * 6) + 1
    if (diceOne === diceTwo) {
        console.log(`${diceOne} + ${diceTwo} == ${diceOne + diceTwo} DOUBLES!`)
    }
    else {
        console.log(`${diceOne} + ${diceTwo} == ${diceOne + diceTwo}`)
    }
}}

diceRoll();