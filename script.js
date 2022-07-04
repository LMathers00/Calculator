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
 

//Gonna try and use reduce so that i have a continuous equation - so that results are used as the first number in the equation
const getAnswer = () => {
    let answer = 0;
        switch (operatorUse) {
            case "+":
            answer = equationArray.reduce(additionEqn);
            //console.log(answer)
            return output.innerHTML = answer;
            break;
            case "-":
            answer = equationArray.reduce(subtractionEqn);
            return output.innerHTML = answer;
            break;
            case "*":
            answer = equationArray.reduce(multiplicationEqn);
            return output.innerHTML = answer;
            break;
            case "/":
            answer = equationArray.reduce(dividsionSum);
            return output.innerHTML = answer;
            break;
            default:
            return output.innerHTML = "error"
        }
    }
    //the breaks say they are unreachable code but the switch case works 


//When i press an operator symbol i want the latest value to become the precursor value so that a second number can become the latest value
//So that after an operator the screen is wiped and i can start writing a new number
//But also that i can immediately use the answer in a new calculation 
calculatorOperators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
    precursorValue = output.innerHTML;
    equationArray.push(parseFloat(precursorValue));
    operatorUse = event.target.value;
    //console.log(equationArray);
//Below is to ensure that the latest number 'disappears' after an operator is clicked 
    latestValue = "";
    output.innerHTML = latestValue;
    });
});

//despite the value 'disappearing' we need to save it even when we add a new value to the array
//Not running perfectly so maybe i need to add a function to see if there is a precursor and operator in order to get an answer 
equals.addEventListener("click", () => {
    //console.log(equationArray);
    //console.log(operatorUse)
    latestValue = output.innerHTML;
    equationArray.push(parseFloat(latestValue));
    getAnswer();
    equationArray = [];
    precursorValue = 0;
});
//still an issue regarding decimal multiplication and i think the solution may be to do with parsefloat and then .toFixed but havent tested it


//I am aware there is probably a lack of commit history for the javascript itself 
// so i have tried to make up for that by having a detailed commentry throughout