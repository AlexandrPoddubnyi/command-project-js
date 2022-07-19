import axios from 'axios';
import {
  KEY,
  DEFAULT_URL,
  BY_TRENDS,
  BY_SEARCH,
  BY_ID,
  renderPoster,
} from './api-keys';
import { renderTrendCollection, renderOneFilm } from './render-trends';
export { fetchTrendMovies, fetchBySearchMovies, fetchByID };

// Fetch полной инф-ы по трендам
async function fetchTrendMovies(page = 1) {
  try {
    const { data } = await axios.get(
      `${BY_TRENDS}?api_key=${KEY}&page=${page}`
    );
    return data;
  } catch (error) {}
}

//Fetch by Search
async function fetchBySearchMovies(formInput, page = 1) {
  try {
    const { data } = await axios.get(
      `${BY_SEARCH}?api_key=${KEY}&query=${formInput}&page=${page}`
    );
    return data;
  } catch (error) {}
}

async function fetchByID(id) {
  try {
    const { data } = await axios.get(`${BY_ID}${id}?api_key=${KEY}`);
    return data;
  } catch (error) {}
}

// Проверка работаспособности рендера

fetchTrendMovies().then(data => {
  renderTrendCollection(data);
  console.log('byTrends', data);
});
