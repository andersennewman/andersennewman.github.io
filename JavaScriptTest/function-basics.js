window.onload = () => {
    const functionCalls = document.getElementById('function-calls');
    const callUserInput = document.getElementById('call-user-input');

    functionCalls.onclick = () => {
        simpleFunction();
        functionParameters("Many functions take parameters.");
        const returnValue = functionReturn();
        console.log(returnValue);
    }

    callUserInput.onclick = () => {
        const userInputText = document.getElementById('show-user-input');
        const userInput = document.getElementById('user-input');
        userInputText.textContent = userInput.value;
    }
}

function simpleFunction() {
    const displayText = "functions should consist of statements designed to perform a single task.";
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}

function add(a, b) {
    console.log(a + b);
}

function adder() {
    console.log(2 + 3);
}

function functionParameters(value) {
    const functionParametersParagraph = document.getElementById("function-parameters");
    console.log(value);
    functionParametersParagraph.textContent = value;
}

function functionReturn() {
    const textTwo = "Many functions return values.";
    const functionReturnParagraph = document.getElementById("function-return");
    functionReturnParagraph.textContent = textTwo;
    return textTwo;
}

