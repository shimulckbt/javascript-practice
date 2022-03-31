const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
   event.target.disabled = true;
   console.log(event);
};

