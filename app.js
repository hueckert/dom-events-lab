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
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const buttonOperator = document.querySelector('.button operator');
/*-------------------------------- Variables --------------------------------*/

let firstIput = null
let secondInput = null
let operator = null
let result = null

/*------------------------ Cached Element References ------------------------*/

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//      // console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });
  
//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });

// ABOVE WAS ALL FOR TESTING PURPOSES
  
/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event)=>{

    if (event.target.className === "button number") {
        if(!operator) {
            if(display.innerText.length < 15) {
                display.innerText += event.target.innerText
                firstIput = +display.innerText
            }
        } else {
            if(display.innerText.length < 15) {
                display.innerText += event.target.innerText
                secondInput = +display.innerText
            }
        }
        console.log({firstIput, secondInput, operator})
    }

    if (event.target.className === "button operator") {
        operator = event.target.innerText
        display.innerText = ""
        console.log(operator)
    }

    if (event.target.innerText === "=" && (firstIput || firstIput === 0) && (secondInput || secondInput === 0) && operator) {
        if (operator === "/") {
            result = firstIput / secondInput
        }
        if (operator === "*") {
            result = firstIput * secondInput
        }
        if(operator === "-") {
            result = firstIput - secondInput
        }
        if (operator === "+") {
            result = firstIput + secondInput
        }

        firstIput = result
        if (result.toString().length < 15) {
            display.innerText = result
        } else {
            display.innerText = result.toPrecision(11)
        }
        console.log(result)
    }

    if (event.target.innerText === "C") {
        result = null
        firstIput = null
        secondInput = null
        operator = null
    }

})
/*-------------------------------- Functions --------------------------------*/
