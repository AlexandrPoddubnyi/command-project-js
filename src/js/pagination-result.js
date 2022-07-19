import { fetchTrendMovies, fetchBySearchMovies } from './api-fetch';
import createPagination from './pagination';
import { renderTrendCollection } from './render-trends';

const moviesList = document.querySelector('.cards-container');
const searchForm = document.getElementById('search-form');
const searchError = document.querySelector('.header__search-error');

window.addEventListener('load', onPageLoad);

//  Налаштування пагінації при завантаженні трендових фільмів (головної сторінки)
async function onPageLoad() {
  try {
    const movies = await fetchTrendMovies();
    console.log(movies);

    const instance = createPagination();
    instance.setItemsPerPage(20);
    instance.setTotalItems(movies.total_results);
    instance.movePageTo(movies.page);

    instance.on('afterMove', event => {
      const currentPage = event.page;
      window.scrollTo({ top: 220, behavior: 'smooth' });
      loadMoreTrendMovies(currentPage);
    });
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreTrendMovies(currentPage) {
  try {
    const movies = await fetchTrendMovies(currentPage);
    clearPreviousResults();
    renderTrendCollection(movies);
  } catch (error) {
    console.log(error);
  }
}

// Налаштування пагінації для пошуку фільмів та обробка сабміту форми пошуку

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();
  document.querySelector('.tui-pagination').innerHTML = '';

  const searchQuery = e.currentTarget.elements.searchQuery.value;

  checkQueryError(searchQuery);

  clearMoviesList();

  loadSearchMovies(searchQuery);
}

async function loadSearchMovies(searchQuery) {
  try {
    const movies = await fetchBySearchMovies(searchQuery, 1);
    console.log(movies);

    checkSearchError(movies);

    renderTrendCollection(movies);

    const instance = createPagination();
    instance.setItemsPerPage(20);
    instance.setTotalItems(movies.total_results);
    instance.movePageTo(movies.page);

    instance.on('afterMove', event => {
      const currentPage = event.page;
      window.scrollTo({ top: 220, behavior: 'smooth' });
      loadMoreSearchMovies(searchQuery, currentPage);
    });
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreSearchMovies(searchQuery, currentPage) {
  try {
    const searchMovies = await fetchBySearchMovies(searchQuery, currentPage);
    clearPreviousResults();
    renderTrendCollection(searchMovies);
    console.log(searchMovies);
  } catch (error) {
    console.log(error);
  }
}

function clearPreviousResults() {
  if (moviesList.hasChildNodes() === true) {
    moviesList.innerHTML = '';
  }
}
function clearMoviesList() {
  moviesList.innerHTML = '';
}

function checkSearchError(movies) {
  if (!movies.results.length) {
    searchError.classList.remove('is-hidden');
    document.querySelector('.tui-pagination').style.display = 'none';
  } else {
    document.querySelector('.tui-pagination').style.display = 'block';
  }
  setTimeout(() => {
    searchError.classList.add('is-hidden');
  }, 5000);
}

function checkQueryError(searchQuery) {
  if (searchQuery.trim() === '') {
    searchError.classList.remove('is-hidden');
    setTimeout(() => {
      searchError.classList.add('is-hidden');
    }, 5000);
  }
}
