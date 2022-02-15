const defaultResult = 0;
let currentResult = defaultResult;


function add(a, b) {
   const result = a + b;
   alert('The result is : ' + result);
}

add();

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

