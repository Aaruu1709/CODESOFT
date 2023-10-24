
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstValue = '';
let showingResult = false;

function appendNumber(number) {
    if (showingResult) {
        clearDisplay();
        showingResult = false;
    }
    currentInput += number;
    display.value = firstValue + ' ' + operator + ' ' + currentInput;
}

function setOperator(op) {
    if (!showingResult) {
        if (firstValue === '') {
            firstValue = currentInput;
        } else if (operator && currentInput !== '') {
            calculateResult();
        }
        operator = op;
        display.value = firstValue + ' ' + operator;
        currentInput = '';
    }
}

function calculateResult() {
    if (operator && currentInput !== '') {
        let secondValue = currentInput;
        let result = '';
        switch (operator) {
            case '+':
                result = (parseFloat(firstValue) + parseFloat(secondValue)).toString();
                break;
            case '-':
                result = (parseFloat(firstValue) - parseFloat(secondValue)).toString();
                break;
            case '*':
                result = (parseFloat(firstValue) * parseFloat(secondValue)).toString();
                break;
            case '/':
                if (parseFloat(secondValue) === 0) {
                    result = "Error";
                } else {
                    result = (parseFloat(firstValue) / parseFloat(secondValue)).toString();
                }
                break;
        }
        display.value = firstValue + ' ' + operator + ' ' + secondValue + ' = ' + result;
        firstValue = result;
        currentInput = '';
        operator = '';
        showingResult = true;
    }
}

function clearDisplay() {
    firstValue = '';
    currentInput = '';
    operator = '';
    display.value = '';
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.value = firstValue + ' ' + operator + ' ' + currentInput;
}