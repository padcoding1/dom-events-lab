/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/
let numClicks = 0,
  firstOperand = 0,
  secondOperand = 0,
  joinedDigits = 0,
  total = 0;
let operatorClicked = false,
  readyToEquate = false;
let firstOperandArray = [],
  secondOperandArray = [],
  firstDigitInfo = [],
  secondDigitInfo = [],
  digitArray = [];

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
/*buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    digit = event.target.innerText;

    // Future logic to capture the button's value would go here...
  });
});
*/
calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    document.getElementById("field").innerHTML = event.target.innerText;
    if (operatorClicked == true) {
      secondOperandArray[numClicks] = Number(event.target.innerText);
      numClicks += 1;
    } else {
      firstOperandArray[numClicks] = Number(event.target.innerText);
      numClicks += 1;
    }
  }

  if (event.target.classList.contains("operator")) {
    if (operatorClicked != true) {
      firstDigitInfo = joinDigits(firstOperandArray);
      console.log(firstDigitInfo);
      firstOperand = firstDigitInfo[3];
      (document.getElementById("field").innerHTML = firstOperand),
        " ",
        event.target.innerText;
    }
  }

  if (event.target.innerText === "/") {
    operator = "divide";
  } else if (event.target.innerText === "*") {
    operator = "multiply";
  } else if (event.target.innerText === "-") {
    operator = "subtract";
  } else if (event.target.innerText === "+") {
    operator = "add";
  } else if (event.target.innerText === "=") {
    secondDigitInfo = joinDigits(secondOperandArray);
    secondOperand = secondDigitInfo[3];
    (document.getElementById("field").innerHTML = firstOperand),
      " ",
      event.target.innerText;
    completeEquation(operator, firstOperand, secondOperand);
    document.getElementById("field").innerHTML = total;
  } else if (event.target.innerText === "C") {
    document.getElementById("field").innerHTML = 0;
    numClicks = 0;
    firstOperand = 0;
    secondOperand = 0;
    joinedDigits = 0;
    total = 0;
    operatorClicked = false;
    readyToEquate = false;
    firstOperandArray = [];
    secondOperandArray = [];
    firstDigitInfo = [];
    secondDigitInfo = [];
    digitArray = [];
  }
});

/*-------------------------------- Functions --------------------------------*/
function joinDigits(array) {
  if (operatorClicked != true) {
    operatorClicked = true;
    numClicks = 0;
  }
  joinedDigits = Number(array.join(""));
  digitArray = [readyToEquate, operatorClicked, numClicks, joinedDigits];
  return digitArray;
}
function completeEquation(doThis, num1, num2) {
  if (doThis === "divide") {
    total = num1 / num2;
  } else if (doThis === "multiply") {
    total = num1 * num2;
  } else if (doThis === "subtract") {
    total = num1 - num2;
  } else if (doThis === "add") {
    total = num1 + num2;
  }
  return total;
}
