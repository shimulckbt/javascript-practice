const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
   // event.target.disabled = true;
   console.log(event);
};

const anotherButtonClickHandler = () => {
   console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
   event.preventDefault();
   console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
   console.log('CLICKED DIV');
   console.log(event);
});

/// for capturing phase
// div.addEventListener('click', event => {
//    console.log('CLICKED DIV');
//    console.log(event);
// }, true)

button.addEventListener('click', event => {
   event.stopPropagation();//it will prevent ther evnt trigger from it's ancestor
   console.log('CLICKED BUTTON');
   console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//    listItem.addEventListener('click', event => {
//       event.target.classList.toggle('highlight');
//    });
// });

list.addEventListener('click', event => {

   // event.target.classList.toggle('highlight');
   event.target.closest('li').classList.toggle('highlight');
});
