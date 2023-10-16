let outputEdt = document.getElementById("calc-display");


function displayDigit(num) {
    document.getElementById("calc-display").value += num;
}


function clearScreen() {
    document.getElementById("calc-display").value = "";
}

function deleteDigit() {
    document.getElementById("calc-display").value = document.getElementById("calc-display").value.slice(0, -1);
}


function displayResult() {
    try {
        document.getElementById("calc-display").value = eval(document.getElementById("calc-display").value);
    } catch(ex) {
        document.getElementById("calc-display").value = "Error!"
    }
}