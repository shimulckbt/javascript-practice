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

addBtn.addEventListener('click', add);
