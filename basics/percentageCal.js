let getPercentage = function (score, totalScore) {
    let percentage = (score / totalScore) * 100
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

let result = getPercentage(18, 20)
console.log(result)