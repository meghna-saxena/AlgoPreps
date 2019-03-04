let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temperature = convertFahrenheit(74)
console.log(temperature)

// {
//     fahrenheit: 74,
//     kelvin: 296.4833333333334,
//     celsius: 23.333333333333336
// }