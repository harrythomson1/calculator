//Calculator functionality
function add(num1, num2) {
    num1 = parseInt(num1, 10)
    num2 = parseInt(num2, 10)
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    if (operator == "+") {
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

//Calculator display and function to update it
let displayValue = ""
function updateDisplayValue() {
    displayValue = document.querySelector("#display").innerHTML
}

let firstNum = ""
let operator = ""

// Button functionality
// I hate this and it NEEDS to be improved.
// Maybe loop backwards through the forEach. Start at the last buttons and end at the first?
document.querySelector("#num1").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 1
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num2").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 2 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num3").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 3 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num4").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 4 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num5").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 5 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num6").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 6 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num7").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 7 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num8").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 8 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num9").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 9 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#num0").addEventListener("click", function() {
    document.querySelector("#display").innerHTML += 0 
    displayValue = document.querySelector("#display").innerHTML})
document.querySelector("#clear").addEventListener("click", function() {
    document.querySelector("#display").innerHTML = ""
    displayValue = 0
    firstNum = 0})
document.querySelector("#divide").addEventListener("click", function() {
    operator = "/"
    firstNum = displayValue
    document.querySelector("#display").innerHTML = ""})
document.querySelector("#multiply").addEventListener("click", function() {
    operator = "*"
    firstNum = displayValue
    document.querySelector("#display").innerHTML = ""})
document.querySelector("#add").addEventListener("click", function() {
    operator = "+"
    firstNum = displayValue
    document.querySelector("#display").innerHTML = ""})
document.querySelector("#subtract").addEventListener("click", function() {
    operator = "-"
    firstNum = displayValue
    document.querySelector("#display").innerHTML = ""})
document.querySelector("#equals").addEventListener("click", function() {
    document.querySelector("#display").innerHTML = operate(operator, firstNum, displayValue)
    displayValue = document.querySelector("#display").innerHTML
    })

