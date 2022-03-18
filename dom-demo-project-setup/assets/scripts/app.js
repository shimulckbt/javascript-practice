const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];
const entryText = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const updateUi = () => {
   if (movies.length === 0) {
      entryText.style.display = 'block';
   } else {
      entryText.style.display = 'none';
   }
};

const cancelMovieDeletion = () => {
   toggleBackdrop();
   deleteMovieModal.classList.remove('visible');
}

const deleteMovie = (movieId) => {
   movieIndex = 0;
   for (const movie of movies) {
      if (movie.id === movieId) {

         break;
      }
      movieIndex++;
   }
   movies.splice(movieIndex, 1);
   const listRoot = document.getElementById('movie-list');
   listRoot.children[movieIndex].remove();
   cancelMovieDeletion();
}

const deleteMovieHandler = (movieId) => {
   deleteMovieModal.classList.add('visible');
   toggleBackdrop();

   const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
   let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

   confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
   confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

   cancelDeletionButton.removeEventListener('click', cancelMovieDeletion)
   // confirmDeletionButton.removeEventListener('click', deleteMovie.bind(null, movieId));

   cancelDeletionButton.addEventListener('click', cancelMovieDeletion);
   confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, image, rating) => {
   const newMovieElement = document.createElement('li');
   newMovieElement.className = 'movie-element';
   newMovieElement.innerHTML = `
      <div class = "movie-element__image">
         <img src = "${image}" alt = "${title}">
      </div>
      <div class = "movie-element__info">
         <h2>${title}</h2>
         <p>${rating}/5 stars</p>
      </div>
   `;

   newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
   const listRoot = document.getElementById('movie-list');
   listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
   backdrop.classList.toggle('visible');
}
const clearUserInputs = () => {
   for (const userInput of userInputs) {
      userInput.value = '';
   }
}

const closeMovieModal = () => {
   addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
   addMovieModal.classList.add('visible');
   toggleBackdrop();
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
      id: Math.random().toString(),
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue,
   };
   movies.push(newMovie);
   console.log(movies);
   closeMovieModal();
   toggleBackdrop();
   clearUserInputs();
   renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
   updateUi();
}

const cancelAddMovie = () => {
   closeMovieModal();
   toggleBackdrop();
   clearUserInputs();
};

const backdropClickHandler = () => {
   closeMovieModal();
   cancelMovieDeletion();
   clearUserInputs();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler);