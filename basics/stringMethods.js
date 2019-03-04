let name = 'Meg Saxena'

// Length property
console.log(name.length) //10

// Uppercase property
console.log(name.toUpperCase())

// Lowercase property
console.log(name.toLowerCase())

// Includes method 
//returns true/false if given string is present in another string
let code = `asdhjlskja23234password25323!`
console.log(code.includes('password')) //true


// Trim
// removes extra white space from left and right side of the string
let newName = '  Meg Srivastava  '
console.log(newName.trim())


//Challenge

// let isValidPassword = function (password) {
//     if (password.length > 8 && !password.includes('password')) { //this line itself returns if true
//         return true
//     } else {
//         return false
//     }
// }

/* Refactor */
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdsd')) //false
console.log(isValidPassword('asdsd112321dskd#@#$#sa!')) //true
console.log(isValidPassword('asdspassworddqw2121')) //false