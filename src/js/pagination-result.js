import { fetchTrendMovies, fetchBySearchMovies } from './api-fetch';
import createPagination from './pagination';
import { renderTrendCollection, gallery } from './render-trends';

const moviesList = document.querySelector('.cards');

window.addEventListener('load', onPageLoad);

// Пагінація і налаштування при завантаженні головної сторінки
async function onPageLoad() {
  try {
    const movies = await fetchTrendMovies();
    console.log(movies);
//     renderCollection(movies);

    const instance = createPagination();
    instance.setItemsPerPage(20);
    instance.setTotalItems(movies.total_results);
    instance.movePageTo(movies.page);

    instance.on('afterMove', event => {
      const currentPage = event.page;
      window.scrollTo({ top: 240, behavior: 'smooth' });
      loadMoreTrendMovies(currentPage);
    });
  }
  catch (error) { console.log(error); };
}

async function loadMoreTrendMovies(currentPage) {
  try {
    const movies = await fetchTrendMovies(currentPage);
    clearPreviousResults();
    renderTrendCollection(movies);
    console.log(movies);
  }
  catch (error) { console.log(error); }
}

// Пагінація і налаштування для пошуку фільмів 
// (потрібно налаштований пошук, щоб взяти searchQuery)
async function loadSearchMovies() {
  try {
    const movies = await fetchBySearchMovies(searchQuery, page = 1);
    console.log(movies);
    renderTrendCollection(movies);

    const instance = createPagination();
    instance.setItemsPerPage(20);
    instance.setTotalItems(movies.total_results);
    instance.movePageTo(movies.page);

    instance.on('afterMove', event => {
      const currentPage = event.page;
      window.scrollTo({ top: 240, behavior: 'smooth' });
      loadMoreSearchMovies(currentPage);
    });
  }
  catch (error) { console.log(error); };
}

async function loadMoreSearchMovies(currentPage) {
  try {
    const searchMovies = await fetchBySearchMovies(searchQuery, currentPage);
    clearPreviousResults();
    renderTrendCollection(searchMovies);
    console.log(searchMovies);
  }
  catch (error) { console.log(error); }
}

function clearPreviousResults() {
  if (moviesList.hasChildNodes() === true) {
    moviesList.innerHTML = "";
    return;
  }
}
