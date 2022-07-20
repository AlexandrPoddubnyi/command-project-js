import LocalStorageInstance from './localstorage';
import { fetchByID } from './api-fetch';

const LocalStorage = new LocalStorageInstance();
const watchedList = document.querySelector('.watched-movies__list');
const watchedEmpty = document.querySelector('.watched-movies__title');
const watchedButton = document.querySelector('.button--watched');

watchedButton.addEventListener('click', renderWatchedList);
// window.addEventListener('load', renderWatchedList);

function renderWatchedList() {
  clearWatchedList();
  const watchedMovies = LocalStorage.getItems();

  if (watchedMovies.length === 0) {
    emptyWatched();
  } else {
    clearWatchedList();
    watchedMovies.map(movieID => {
      const movies = fetchByID(movieID);
      watchedEmpty.classList.add('is-hidden');
      renderTrendCollection(movies);
    });
  }
}

function clearWatchedList() {
  watchedList.innerHTML = '';
}
function emptyWatched() {
  watchedEmpty.classList.remove('is-hidden');
  watchedList.innerHTML = '';
}