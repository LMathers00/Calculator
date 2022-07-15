//declaring the variables that affect the whole thing that I'll need later
let calculatorNumber = document.querySelectorAll(".calculator__number");
let calculatorOperators = document.querySelectorAll(".calculator__operator");
let allClear = document.querySelector("#calculator__all-clear");
let equals = document.querySelector("#calculator__equals");
let output = document.querySelector("#calculator__output");

// declaring the more number specific variables 
let latestValue = output.innerHTML; 
let precursorValue = "";
let equationArray  = [];
let operatorUse = "";

// function so that when a number is pressed it is hence dispalyed
calculatorNumber.forEach((number) => {
    number.addEventListener("click", (event) => {
    let number = event.target.value;
    console.dir(number);
    output.innerHTML += number;
    });
});

//'all-clear' function
let clearValues = () => {
    equationArray = [];
    latestValue = "";
    precursorValue = "";
    output.innerHTML = "";
}

//Coding the calculator so that each operator does it designated function
const additionEqn = (A, B) => {
    return A += B;
    };
const subtractionEqn = (A, B) => {
    return A -= B;
    };
const multiplicationEqn = (A, B) => {
    return A * B;
    };
const dividsionSum = (A, B) => {
    return A / B;
    };
const signFlip =(A) => {
    return -1 * A
}
 

//Gonna try and use reduce so that i have a continuous equation - so that results are used as the first number in the equation
const getAnswer = () => {
    let answer = 0;
        switch (operatorUse) {
            case "+":
            answer = equationArray.reduce(additionEqn);
            return output.innerHTML = answer;
            case "-":
            answer = equationArray.reduce(subtractionEqn);
            return output.innerHTML = answer;
            case "*":
            answer = equationArray.reduce(multiplicationEqn);
            return output.innerHTML = answer;
            case "/":
            answer = equationArray.reduce(dividsionSum);
            return output.innerHTML = answer;
            case "+/-":
            answer = equationArray.reduce(signFlip);
            return output.innerHTML = answer;
            default:
            return output.innerHTML = "error"
        }
    }


//When i press an operator symbol i want the latest value to become the precursor value so that a second number can become the latest value
//So that after an operator the screen is wiped and i can start writing a new number
//But also that i can immediately use the answer in a new calculation 
calculatorOperators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
    precursorValue = output.innerHTML;
    equationArray.push(parseFloat(precursorValue));
    operatorUse = event.target.value;
//Below is to ensure that the latest number 'disappears' after an operator is clicked 
    latestValue = "";
    output.innerHTML = latestValue;
    });
});

//despite the value 'disappearing' we need to save it even when we add a new value to the array
//Not running perfectly so maybe i need to add a function to see if there is a precursor and operator in order to get an answer 
equals.addEventListener("click", () => {
    latestValue = output.innerHTML;
    equationArray.push(parseFloat(latestValue));
    getAnswer();
    equationArray = [];
    precursorValue = 0;
});
//still an issue regarding decimal multiplication and i think the solution may be to do with parsefloat and then .toFixed but havent tested it

