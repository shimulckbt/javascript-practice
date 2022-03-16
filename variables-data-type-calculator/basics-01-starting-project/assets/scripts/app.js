const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumber() {
   return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
}

function add() {
   const enteredNumber = getUserNumber();
   const initialResult = currentResult;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult + +(enteredNumber);
   createAndWriteOutput('+', initialResult, enteredNumber);
   const logEntry = {
      operation: 'Add',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
   }
   logEntries.push(logEntry);
   console.log(logEntries);
}

function subtract() {
   const enteredNumber = getUserNumber();
   const initialResult = currentResult;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult - +(enteredNumber);
   createAndWriteOutput('-', initialResult, enteredNumber);
   const logEntry = {
      operation: 'SUBTRACT',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
   }
   logEntries.push(logEntry);
   console.log(logEntries);
}

function multiply() {
   const enteredNumber = getUserNumber();
   const initialResult = currentResult;
   // currentResult = currentResult + parseInt(enteredNumber);//work as below line but specify only integer
   currentResult = currentResult * +(enteredNumber);
   createAndWriteOutput('*', initialResult, enteredNumber);
   const logEntry = {
      operation: 'MULTIPLY',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
   }
   logEntries.push(logEntry);
   console.log(logEntries);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);
