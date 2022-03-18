const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];

const toggleBackdrop = () => {
   backdrop.classList.toggle('visible');
}
const clearUserInputs = () => {
   for (const userInput of userInputs) {
      userInput.value = '';
   }
}

const toggleMovieModal = () => {
   addMovieModal.classList.toggle('visible');
   toggleBackdrop();
};

const backdropClickHandler = () => {
   toggleMovieModal();
};

const addMovieHandler = () => {
   const titleValue = userInputs[0].value;
   const imageUrlValue = userInputs[1].value;
   const ratingValue = userInputs[2].value;

   if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || parseInt(ratingValue) < 1 || parseInt(ratingValue) > 5) {
      alert('Please enter valid values (rating value should in range of 1 to 5');
      return;
   }

   const newMovie = {
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue,
   };
   movies.push(newMovie);
   console.log(movies);
   toggleMovieModal();
   clearUserInputs();
}

const cancelAddMovie = () => {
   toggleMovieModal();
   clearUserInputs();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler);