const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumber() {
   return parseInt(userInput.value);
}

function add() {
   const enteredNumber = getUserNumber();
   const calcDescription = `${currentResult} + ${enteredNumber}`;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult + +(enteredNumber);
   outputResult(currentResult, calcDescription);
}

function subtract() {
   const enteredNumber = getUserNumber();
   const calcDescription = `${currentResult} - ${enteredNumber}`;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult - +(enteredNumber);
   outputResult(currentResult, calcDescription);
}

function multiply() {
   const enteredNumber = getUserNumber();
   const calcDescription = `${currentResult} * ${enteredNumber}`;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult * +(enteredNumber);
   outputResult(currentResult, calcDescription);
}

function devide() {
   const enteredNumber = getUserNumber();
   const calcDescription = `${currentResult} / ${enteredNumber}`;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult / +(enteredNumber);
   outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);
