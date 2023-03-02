// variable that stores the constant kelvin
const kelvin = 0
// variable that stores celcius
let celcius = kelvin - 273
// variable to store fahrenheit
let fahrenheit = celcius * (9 / 5) + 32
// rounding fahrenheit to largest whole number smaller that it
fahrenheit = Math.floor(fahrenheit)
// displaying the value of fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// converting to newton
let newton = Math.floor(celcius * (33 / 100))
// displaying temperature in newton
console.log(`The temperature is ${newton} degrees Newton.`)
