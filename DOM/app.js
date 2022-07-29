let rmvFalsy = [0, null, false, 'good', NaN, 'ha ha', 'ok', undefined, ''];

let exactValue = rmvFalsy.filter(Boolean);

// console.log(exactValue);

exactValue.length = 2;

// console.log(exactValue);

let quote = "React is a js framework and this framework ist popular right now";

// console.log(quote.replace(/framework/g, "library"));

let a = 5;
let b = 10;
a = b;
console.log(a);