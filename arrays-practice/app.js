const numbers = [10, 4.44, 7.92, 8.12, 2.39, 4.64, 5.44,];

const sum = numbers.reduce((prevValue, curValue, curIndex, numbers) => { return prevValue + curValue }, 0);

console.log(sum);