// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yenes
    let valueInEuro = valueInDollar / 1.07;
    // Retornamos el valor en dólares
    return valueInEuro * 156.5;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Pounds
    let valueInEuro = valueInYen / 156.5;
    // Retornamos el valor en Pounds
    return valueInEuro * 0.87;
    
}



// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
