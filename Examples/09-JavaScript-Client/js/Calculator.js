//When the document is loaded in the browser then listen to btnCompute click event
document.addEventListener("DOMContentLoaded", () => {
    console.log("js-DOM fully loaded and parsed");
    document.querySelector('#btnCompute').addEventListener("click", computeResult);
})

function computeResult() {
    const num1 = document.querySelector("#num1").value
    const num2 = document.querySelector("#num2").value
    const operation = document.querySelector("#operation").value
    const resultDiv = document.querySelector("#result")

    const calculator = new Calculator()
    let result
    switch(operation) {
        case '+' :
            result = calculator.add(num1, num2)
            break
        case '-' :
            result = calculator.subtract(num1, num2)
            break
        case '*' :
            result = calculator.mutiply(num1, num2)
            break
        case '/' :
            result = calculator.divide(num1, num2)
            break
    }
    resultDiv.innerHTML = `${num1}  ${operation}  ${num2}  = ${result}`
    console.log(result)
}

//Calculator class
class Calculator {
    add (a, b) {
        return Number(a) + Number(b)
    }
    
    subtract (a, b) {
        return Number(a) - Number(b)
    }
    
    mutiply (a, b) {
        return Number(a) * Number(b)
    }
    
    divide (a, b) {
        return Number(a) / Number(b)
    }
}

//Student class
class Student {
    constructor(firstName, lastName, gpa) {
        this.firstName = firstName
        this.lastName = lastName
        this.gpa = gpa
    }

    getName() {
        return this.firstName + ' ' + this.lastName
    }
}

