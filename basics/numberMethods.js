let num = 103.703

console.log(num.toFixed(2)) //103.20
// allows to specify the no. of decimal places we would like to preserve

//There's also `Math` object available which allows other things to do with numbers

// Math.round()
console.log(Math.round(num))
console.log(Math.floor(num)) //round down the nearest integer
console.log(Math.ceil(num)) //round up even if are out of numberl like 1.1

//Math.random()
// generates random no. 0 inclusive and 1 exclusive

let min = 10
let max = 20
// let randomNum = Math.random() // 0 - .99999

// Math.floor() converts decimal no. to whole no.
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min //gives random no. between 10-20
console.log(randomNum)


// CHALLENGE
// 1-5 - true if correct - false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log('randomNum', randomNum)
    
    return guess === randomNum
}

console.log(makeGuess(1))