// Erstelle eine function, der 3 Parameter übergeben werden sollen. Zwei Zahlen und ein Zeichen (+, -, /, *)
// je nachdem, was für ein Zeichen übergeben wird, soll die function addieren, subtrahieren, dividieren oder multiplizieren
// importiere diese function in deiner index.js und teste sie.
function myMath(num1, num2, operator) {
    let result = `${num1} ${operator} ${num2} = `;
    try {
        if ("+-*/".includes(operator))
            result += eval(`${num1} ${operator} ${num2}`);
        else
            result += `invalid operator: '${operator}'`;
    } catch (error) {
        result = error;
    }
    return result;
}

module.exports = myMath;