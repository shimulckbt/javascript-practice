const ids = new Set([1, 2, 3]);
// console.log(ids.entries());

const person1 = { name: 'shimul' };
const person2 = { name: 'saimun' };

const personData = new Map([[person1, [{ date: 'Today', price: 1000 }]]]);

personData.set(person2, [{ date: 'Today', price: 10 }]);

for (const [key, value] of personData.entries()) {
   // console.log(key, value);
}

for (const key of personData.keys()) {
   // console.log(key);
}

for (const value of personData.values()) {
   // console.log(value);
}
// console.log(personData.size);

let person = { name: 'shimul' };
const persons = new WeakSet();

// person = null;
persons.add(person);

console.log(persons);

//WeakMap() works as same logic, it dont stop garbage collector of browser to remove unused data