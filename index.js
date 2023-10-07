let input = '';

function appendToScreen(value) {
    input += value;
    document.getElementById('result').value = input;
}

function clearScreen() {
    input = '';
    document.getElementById('result').value = input;
}

function calculate() {
    try {
        input = eval(input).toString();
        document.getElementById('result').value = input;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        input = '';
    }
}
