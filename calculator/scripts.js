let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(character) {
    currentInput += character;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '';
}

function removeLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
