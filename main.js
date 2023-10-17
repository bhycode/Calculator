let outputEdt = document.getElementById("calc-display");


function displayDigit(num) {
    outputEdt.value += num;
}


function clearScreen() {
    outputEdt.value = "";
}

function deleteDigit() {
    outputEdt.value = outputEdt.value.slice(0, -1);
}


function displayResult() {
    try {
        outputEdt.value = eval(outputEdt.value);
    } catch(ex) {
        outputEdt.value = "Error! ";
    }
}