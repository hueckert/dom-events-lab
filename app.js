//console.log('sanity check')

// USER STORIES
// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttonOperator = document.querySelector(".button operator");
/*-------------------------------- Variables --------------------------------*/

let firstIput = null;
let secondInput = null;
let operator = null;
let result = null;
// display.innerText = 0

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event) => {
   if (event.target.className === "button number") {
    if (!operator) {
      if (display.innerText.length < 8) {
        display.innerText += event.target.innerText;
        firstIput = +display.innerText;
      }
    } else {
      if (display.innerText.length < 8) {
        display.innerText += event.target.innerText;
        secondInput = +display.innerText;
      }
    }
    console.log({ firstIput, secondInput, operator });
  }

  if (event.target.className === "button operator") {
    operator = event.target.innerText;
    display.innerText = "";
    console.log(operator);
  }

  if (
    event.target.innerText === "=" &&
    (firstIput || firstIput === 0) &&
    (secondInput || secondInput === 0) &&
    operator
  ) {
    if (operator === "/") {
      result = firstIput / secondInput;
    }
    if (operator === "*") {
      result = firstIput * secondInput;
    }
    if (operator === "-") {
      result = firstIput - secondInput;
    }
    if (operator === "+") {
      result = firstIput + secondInput;
    }

    firstIput = result;
    if (result.toString().length < 15) {
      display.innerText = result;
    } else {
      display.innerText = result.toPrecision(11);
    }
    console.log(result);
  }

  if (event.target.innerText === "C") {
    // display.innerText = 0
    result = null;
    firstIput = null;
    secondInput = null;
    operator = null;
  }
});
/*-------------------------------- Functions --------------------------------*/
