import { renderPoster } from './api-keys';
import { getGenres, textSlicer } from './utils';
export const cards = document.querySelector('.card-list');
const btnWatched = document.querySelector('.watched');
const btnQueue = document.querySelector('.queue');

preStepsBeforeWatched()
btnWatched.addEventListener('click', preStepsBeforeWatched);
btnQueue.addEventListener('click', preStepsBeforeQueue);

function preStepsBeforeWatched() {
  const watchedListFromStorage = localStorage.getItem('watchedList');
  const arrayWatchedListFromStorage = JSON.parse(watchedListFromStorage);
  btnWatched.classList.add("header-library__btn__is-active");
  btnQueue.classList.remove("header-library__btn__is-active");
  cards.innerHTML = '';
  if (watchedListFromStorage === '[]' || watchedListFromStorage === null) {
    const name = '<div class="card-text-no-film"><p>No watched movies added</p></div>';
    cards.innerHTML = name;
  } else {
    createCardsList(arrayWatchedListFromStorage);
  };
};

function preStepsBeforeQueue() {
  const queueListFromStorage = localStorage.getItem('queueList');
  const arrayQueueListFromStorage = JSON.parse(queueListFromStorage);
  btnWatched.classList.remove("header-library__btn__is-active");
  btnQueue.classList.add("header-library__btn__is-active");
  cards.innerHTML = '';
  if (queueListFromStorage === '[]' || queueListFromStorage === null) {
    const name = '<p class="card-text-no-film">No movie added to queue</p>';
    cards.innerHTML = name;
  } else {
    createCardsList(arrayQueueListFromStorage);
  };
};

function createCardsList(movie) {
    const markup = movie
        .map(movie => {
          const {
            id,
            title,
            poster_path,
            genres,
            overview,
            vote_average,
            release_date,
            } = movie;
          let realeaseYear = '';
          let imgUrl = renderPoster + poster_path;
          if (typeof release_date !== 'undefined') {
            realeaseYear = release_date.slice(0, 4);
          }
          if (poster_path === null) {
            imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
            }
            const slicedTitle = textSlicer(title, 30);
          const movieGenresListArray = getMovieGenresListArray(genres);
          const movieGenresList = getGenres(movieGenresListArray).join(', ');
          return `
            <li class="card-item" tabindex="0">
            <img  class="card-item__img" src="${imgUrl}"
            alt="${title}" loading="lazy" data-id="${id}"/>
            <h2 class="card-item__title"  data-id="${id}">${slicedTitle}</h2>
            <p class="card-item__desc"> ${movieGenresList.slice(0,27)} | ${realeaseYear} | <span class="vote-library">${vote_average.toFixed(
            1
          )}</span> </p>
            </li>
            `;
        })
        .join('');
    
  cards.insertAdjacentHTML('beforeend', markup);
}

function getMovieGenresListArray(genresIdsListArray) {
    let array = [];
    for (let i = 0; i < genresIdsListArray.length; i += 1) {
        array.push(genresIdsListArray[i].id);
    };
    return array;
};

// ------------------ Функція рендеру сторінки при зміні додаванні/видаленні фільмів у Модальному вікні фільму --------------------- 

const modal = document.querySelector('.modal-film-backdrop');
modal.addEventListener('click', reloadAfterModalClose)

function reloadAfterModalClose() {
  const watchedListFromStorageModal = localStorage.getItem('watchedList');
  const arrayWatchedListFromStorageModal = JSON.parse(watchedListFromStorageModal);
  const queueListFromStorageModal = localStorage.getItem('queueList');
  const arrayQueueListFromStorageModal = JSON.parse(queueListFromStorageModal);
  
  if (btnWatched.classList.value.includes(`header-library__btn__is-active`) && arrayWatchedListFromStorageModal.length !== cards.children.length) {
    preStepsBeforeWatched();
  } else if (btnQueue.classList.value.includes(`header-library__btn__is-active`) && arrayQueueListFromStorageModal.length !== cards.children.length) {
    preStepsBeforeQueue();
  };
};