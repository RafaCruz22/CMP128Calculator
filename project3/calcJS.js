//adds digits and decimal point to display when clicked
function addNumberToDisplay(element) {
    document.getElementById("display").innerHTML += element.innerHTML;
}

// adds an operator to the display when the user clicks an operator
function addOperatorToDisplay(element) {
    document.getElementById("display").innerHTML += " " + element.innerHTML + " ";
}

// clear out the display box when user clicks C 
function clearDisplay(element) {
    document.getElementById("display").innerHTML = "";
}
//using the JS function eval, evaluates the math expression the user creates 
//since all operators are special characters they must be replaced inorder for
//eval to work correctly. 
function evaluateDisplay(element) {
    let expression = document.getElementById("display").innerHTML; 
    let expressEval = expression;
    
    for(let i =0; i< expressEval.length; i++) {
        if(expressEval[i] === "×") {
            expressEval = expressEval.replace("×", "*");
        }

        if(expressEval[i] === "÷") {
            expressEval = expressEval.replace("÷", "/");
        }

        if(expressEval[i] === "−") {
            expressEval = expressEval.replace("−", "-");
        }
    }

    let displayResult = expression + " = " + eval(expressEval);
    document.getElementById("display").innerHTML = displayResult;
}