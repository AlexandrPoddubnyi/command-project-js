import { fetchTrendMovies } from './api-fetch';
import createPagination from './pagination';

window.addEventListener('load', onPageLoad);

async function onPageLoad() {
  try {
    const movies = await fetchTrendMovies();
    console.log(movies);

    // pagination
    const totalMovies = movies.total_results;
    let currentPage = movies.page;

    const instance = createPagination();
    instance.setItemsPerPage(20);
    instance.setTotalItems(totalMovies);
    instance.movePageTo(currentPage);

    instance.on('afterMove', event => {
      const currentPage = event.page;
      window.scrollTo({ top: 240, behavior: 'smooth' });
      // onTrendyMore(currentPage);
    });
  }
  catch (error) { console.log(error); };
}