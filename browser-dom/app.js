const h1 = document.getElementById('main-title');

h1.textContent = 'Some New Text';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const liLast = document.querySelector('li:last-of-type');
liLast.textContent = liLast.textContent + ' (last changed!)';
const liFirst = document.querySelector('li:first-of-type');
liFirst.textContent = liFirst.textContent + ' (first changed!)';

