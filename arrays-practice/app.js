const numbers = [10, 4.44, 7.92, 8.12, 2.39, 4.64, 5.44,];

const sum = numbers.reduce((prevValue, curValue, curIndex, numbers) => { return prevValue + curValue }, 0);

// console.log(sum);

const data = 'shimul ckbt;67.56;1994';

const transFormData = data.split(';');

// console.log(transFormData);

const person = ['shimul', 'ckbt', 1994];
const personString = person.join(' ');
// console.log(personString);

console.log(numbers);
const copiedPerson = [...numbers];
copiedPerson.push(12);
console.log(copiedPerson);
