const person = {
    age: 27
}

//person = {} // ERROR -> cant reassign a constant value

// But we're still able to manipulate the object
person.age = 28
// ^ This is valid, becase here we are changing object's properties
console.log(person)


// CHALLENGE

const getPercentage = function (score, totalScore) {
    const percentage = (score / totalScore) * 100
    let grade = ''

    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'B'
    } else if (percentage >= 60) {
        grade = 'C'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percentage}%)!`
}

const result = getPercentage(18, 20)
console.log(result)