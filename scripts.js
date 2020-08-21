//Calculator functionality
function add(num1, num2) {
    num1 = parseFloat(num1, 10)
    num2 = parseFloat(num2, 10)
    return num1 + num2
}

function subtract(num1, num2) {
    num1 = parseFloat(num1, 10)
    num2 = parseFloat(num2, 10)
    return num1 - num2
}

function multiply(num1, num2) {
    num1 = parseFloat(num1, 10)
    num2 = parseFloat(num2, 10)
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "You cannot divide by 0"
    }
    else {
        num1 = parseFloat(num1, 10)
        num2 = parseFloat(num2, 10)
        return num1 / num2
    }
}

function operate(operator, num1, num2) {
    if (num1 == "" || num1 == undefined) {
        return num2
    }
    else if (num2 == "" || num2 == undefined) {
        return num1
    }
    else if (operator == "") {
        return num2
    }
    else if (operator == "+") {
        return add(num1, num2)
    }
    else if (operator == "-") {
        return subtract(num1, num2)
    }
    else if (operator == "*") {
        return multiply(num1, num2)
    }
    else if (operator == "/") {
        return divide(num1, num2)
    }
}

// Tracking variables
let displayValue = ""
let firstNum = ""
let operator = ""
let result = ""
let storedResult = ""

// Function to check for a keypress
window.addEventListener("keydown", checkKeyPress, false);



// Keyboard functionality. There has to be a better way to write this!
function checkKeyPress(key){
        if (key.keyCode == "97" || key.keyCode == "49") {
            result = ""
            document.querySelector("#display").innerHTML += 1
            displayValue += "1"
        }
        else if (key.keyCode == "98" || key.keyCode == "50") {
            result = ""
            document.querySelector("#display").innerHTML += 2
            displayValue += "2"
        }
        else if (key.keyCode == "99" || key.keyCode == "51") {
            result = ""
            document.querySelector("#display").innerHTML += 3
            displayValue += "3"
        }
        else if (key.keyCode == "100" || key.keyCode == "52") {
            result = ""
            document.querySelector("#display").innerHTML += 4
            displayValue += "4"
        }
        else if (key.keyCode == "101" || key.keyCode == "53") {
            result = ""
            document.querySelector("#display").innerHTML += 5
            displayValue += "5"
        }
        else if (key.keyCode == "102" || key.keyCode == "54") {
            result = ""
            document.querySelector("#display").innerHTML += 6
            displayValue += "6"
        }
        else if (key.keyCode == "103" || key.keyCode == "55") {
            result = ""
            document.querySelector("#display").innerHTML += 7
            displayValue += "7"
        }
        else if (key.keyCode == "104" || key.keyCode == "56") {
            result = ""
            document.querySelector("#display").innerHTML += 8
            displayValue += "8"
        }
        else if (key.keyCode == "105" || key.keyCode == "57") {
            result = ""
            document.querySelector("#display").innerHTML += 9
            displayValue += "9"
        }
        else if (key.keyCode == "96" || key.keyCode == "48") {
            if (document.querySelector("#display").innerHTML != 0) {
                result = ""
                document.querySelector("#display").innerHTML += 0
                displayValue += "0"
            }
        }
        else if (key.keyCode == "110" || key.keyCode == "190") {
                if (!displayValue.includes(".")) {
                    result = ""
                    document.querySelector("#display").innerHTML += "."
                    displayValue += "."
                }
        }
        else if (key.keyCode == "46") {
            document.querySelector("#displayResult").innerHTML = ""
            document.querySelector("#display").innerHTML = ""
            displayValue = ""
            firstNum = ""
            operator = ""
            result = ""
            storedResult = ""
        }
        else if (key.keyCode == "8") {
            document.querySelector("#display").innerHTML = document.querySelector("#display").innerHTML.slice(0, -1)
            displayValue = document.querySelector("#display").innerHTML
        }
        else if (key.keyCode == "111" || key.keyCode == "191") {
            if (operator == "") {
                operator = "/"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "/"
                displayValue = ""
            }
        }
        else if (key.keyCode == "106") {
            if (operator == "") { 
                operator = "*"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "*"
                displayValue = ""
            }
        }
        else if (key.keyCode == "107") {
            if (operator == "") {
                operator = "+"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "+"
                displayValue = ""
            }
        }
        else if (key.keyCode == "109" || key.keyCode == "189") {
            if (operator == "") {
                operator = "-"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "-"
                displayValue = ""
            }
        }
        else if (key.keyCode == "13" || key.keyCode == "187") {
            if (storedResult == "") {
                result = operate(operator, firstNum, displayValue)
                document.querySelector("#displayResult").innerHTML = `= ${result}`
                document.querySelector("#display").innerHTML = ""
                operator = ""
                storedResult = result
                result = ""
                displayValue = ""
            }
            else if (result == "") {
                result = operate(operator, storedResult, displayValue)
                document.querySelector("#displayResult").innerHTML = `= ${result}`
                document.querySelector("#display").innerHTML = ""
                operator = ""
                storedResult = result
                result = ""
                displayValue = ""
            }
        }
    }


//Click button functionality. This is almost identical to the keyboard functionality.
//I believe both of these could be trimmed by a lot.
document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("click", event => {
        if (element.innerHTML == 1) {
            document.querySelector("#display").innerHTML += 1
            displayValue += "1"
        }
        else if (element.innerHTML == 2) {
            document.querySelector("#display").innerHTML += 2
            displayValue += "2"
        }
        else if (element.innerHTML == 3) {
            document.querySelector("#display").innerHTML += 3
            displayValue += "3"
        }
        else if (element.innerHTML == 4) {
            document.querySelector("#display").innerHTML += 4
            displayValue += "4"
        }
        else if (element.innerHTML == 5) {
            document.querySelector("#display").innerHTML += 5
            displayValue += "5"
        }
        else if (element.innerHTML == 6) {
            document.querySelector("#display").innerHTML += 6
            displayValue += "6"
        }
        else if (element.innerHTML == 7) {
            document.querySelector("#display").innerHTML += 7
            displayValue += "7"
        }
        else if (element.innerHTML == 8) {
            document.querySelector("#display").innerHTML += 8
            displayValue += "8"
        }
        else if (element.innerHTML == 9) {
            document.querySelector("#display").innerHTML += 9
            displayValue += "9"
        }
        else if (element.innerHTML == 0) {
            if (document.querySelector("#display").innerHTML != 0) {
                document.querySelector("#display").innerHTML += 0
                displayValue += "0"
            }
        }
        else if (element.innerHTML == ".") {
                if (!displayValue.includes(".")) {
                    document.querySelector("#display").innerHTML += "."
                    displayValue += "."
                }
        }
        else if (element.innerHTML == "Clear") {
            document.querySelector("#displayResult").innerHTML = ""
            document.querySelector("#display").innerHTML = ""
            displayValue = ""
            firstNum = ""
            operator = ""
            result = ""
            storedResult = ""
        }
        else if (element.innerHTML == "Back") {
            document.querySelector("#display").innerHTML = document.querySelector("#display").innerHTML.slice(0, -1)
            displayValue = document.querySelector("#display").innerHTML
        }
        else if (element.innerHTML == "/") {
            if (operator == "") {
                operator = "/"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "/"
                displayValue = ""
            }
        }
        else if (element.innerHTML == "*") {
            if (operator == "") { 
                operator = "*"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "*"
                displayValue = ""
            }
        }
        else if (element.innerHTML == "+") {
            if (operator == "") {
                operator = "+"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "+"
                displayValue = ""
            }
        }
        else if (element.innerHTML == "-") {
            if (operator == "") {
                operator = "-"
                firstNum = displayValue
                document.querySelector("#display").innerHTML += "-"
                displayValue = ""
            }
        }
        else if (element.innerHTML == "=") {
            if (storedResult == "") {
                result = operate(operator, firstNum, displayValue)
                document.querySelector("#displayResult").innerHTML = `= ${result}`
                document.querySelector("#display").innerHTML = ""
                operator = ""
                storedResult = result
                result = ""
                displayValue = ""
            }
            else if (result == "") {
                result = operate(operator, storedResult, displayValue)
                document.querySelector("#displayResult").innerHTML = `= ${result}`
                document.querySelector("#display").innerHTML = ""
                operator = ""
                storedResult = result
                result = ""
                displayValue = ""
            }
        }
    })
})