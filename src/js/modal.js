import { fetchByID } from './api-fetch'
import { cards,renderOneFilm } from './render-trends;'
let movieId;

cards.addEventListener('click', oneCardRender)


function(oneCardRender) {

  fetchByID().then(data => {
    renderOneFilm(data)
    console.log("byID", data);
  });
}