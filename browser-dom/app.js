const h1 = document.getElementById('main-title');

h1.textContent = 'Some New Text';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const liLast = document.querySelector('li:last-of-type');
liLast.textContent = liLast.textContent + ' (last changed!)';
const liFirst = document.querySelector('li:first-of-type');
liFirst.textContent = liFirst.textContent + ' (first changed!)';

ulID = document.querySelector("#asd");
ulID.style.color = "blue";

const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroundColor = 'green';
section.className = 'red-bg';

button.addEventListener('click', () => {
   // if (section.className === 'red-bg visible') {
   //    section.className = 'red-bg invisible';
   // } else {
   //    section.className = 'red-bg visible';
   // }
   // section.classList.toggle('visible');
   section.classList.toggle('invisible');

})

