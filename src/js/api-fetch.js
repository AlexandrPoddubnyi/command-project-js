import axios from 'axios';
import { KEY, DEFAULT_URL, BY_TRENDS, BY_SEARCH, BY_ID, renderPoster } from './api-keys';
import { renderTrendCollection, renderOneFilm } from './render-trends';
export { fetchTrendMovies, fetchBySearchMovies, fetchByID };




// Fetch полной инф-ы по трендам
async function fetchTrendMovies( page = 1) {
  try {
    const { data } = await axios.get(
      `${BY_TRENDS}?api_key=${KEY}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error('ERROR');
  }
}


  //Fetch by Search
  async function fetchBySearchMovies(formInput, page = 1) {
    try {
      const { data } = await axios.get(
        `${BY_SEARCH}?api_key=${KEY}&query=${formInput}&page=${page}`
      );
      return data;
    } catch (error) {
      console.error('ERROR');
    }
  }

  async function fetchByID(id) {
    try {
      const { data } = await axios.get(`${BY_ID}${507086}?api_key=${KEY}`);
      return data;
    } catch (error) {
      console.error('ERROR');
    }
  }


// Проверка работаспособности рендера
// fetchByID().then(data => {
//   renderOneFilm(data)
//   console.log("byID",data);
// });
fetchTrendMovies().then(data => {
  renderTrendCollection(data);
  console.log('byTrends', data);
});
// // Проверка пагинации 
// function more() {
//   page += 1;
//   fetchTrendMovies().then(data => {
//     renderCollection(data);
//     console.log(data);
//   });
// }
