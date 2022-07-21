import { renderPoster } from './api-keys';
import { genres } from './genres.json';
export const cards = document.querySelector('.cards-container');
const btnWatched = document.querySelector('.watched');
const btnQueue = document.querySelector('.queue');
const watchedListFromStorage = localStorage.getItem('watchedList');
const arrayWatchedListFromStorage = JSON.parse(watchedListFromStorage);
const queueListFromStorage = localStorage.getItem('queueList');
const arrayQueueListFromStorage = JSON.parse(queueListFromStorage);

preStepsBeforeWatched()
btnWatched.addEventListener('click', preStepsBeforeWatched);
btnQueue.addEventListener('click', preStepsBeforeQueue);

function preStepsBeforeWatched() {
    btnWatched.classList.add("header-library__btn__is-active");
    btnQueue.classList.remove("header-library__btn__is-active");
    cards.innerHTML = '';
    if (watchedListFromStorage === '[]' || watchedListFromStorage === null) {
        const name = '<div class="card-text-no-film"><p>No watched movies added</p></div>';
        cards.innerHTML = name;
    } else {
        createCardsList(arrayWatchedListFromStorage);
    }
}

function preStepsBeforeQueue() {
    btnWatched.classList.remove("header-library__btn__is-active");
    btnQueue.classList.add("header-library__btn__is-active");
    cards.innerHTML = '';
    if (queueListFromStorage === '[]' || queueListFromStorage === null) {
        const name = '<p class="card-text-no-film">No movie added to queue</p>';
        cards.innerHTML = name;
    } else {
        createCardsList(arrayQueueListFromStorage);
    }
}

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
            if (typeof release_date !== 'undefined') {
                realeaseYear = release_date.slice(0, 4);
            };
            const movieGenresListArray = getMovieGenresListArray(genres);
            const movieGenresList = getMovieGenresList(movieGenresListArray).join(', ');
            return `<ul class="card-list">
            <li class="card-item">
            <img  class="card-item__img" src="${renderPoster}${poster_path}"
            alt="${title}" loading="lazy" data-id="${id}"
            onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'"
            "/>
            <h2 class="card-item__tittle"  data-id="${id}">${title}</h2>
            <p class="card-item__desc"> ${movieGenresList} | ${realeaseYear} | ${vote_average} </p>
            </li>
            </ul>`;
        })
        .join('');

    cards.insertAdjacentHTML('beforeend', markup);
}

function getMovieGenresList(genresIdsList) {
    let movieGenres = genres.reduce((acc, { id, name }) => {
        if (genresIdsList.includes(id)) {
            acc.push(name);
        }
        return acc;
    }, []);
    if (movieGenres.length > 3) {
        movieGenres = movieGenres.slice(0, 2);
        movieGenres.push('Other');
    };
    return movieGenres;
}

function getMovieGenresListArray(genresIdsListArray) {
    let array = [];
    for (let i = 0; i < genresIdsListArray.length; i += 1) {
        array.push(genresIdsListArray[i].id);
    };
    return array;
};
