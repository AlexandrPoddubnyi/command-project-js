// | <span class="card-item__rating">${vote_average.toFixed(
//          1
//        )}
import { renderPoster } from './api-keys';
import { genres } from './genres.json';
export const cards = document.querySelector('.cards-container');

export function renderTrendCollection(movie) {
  const markup = movie.results
    .map(movie => {
      const {
        id,
        title,
        poster_path,
        genre_ids,
        overview,
        vote_average,
        release_date,
      } = movie;
      let realeaseYear = '';
      if (typeof release_date !== 'undefined') {
        realeaseYear = release_date.slice(0, 4);
      }
      const movieGenresList = getMovieGenresList(genre_ids).join(', ');
       return `<ul class="card-list">
      <li class="card-item">
       <img  class="card-item__img" src="${renderPoster}${poster_path}"
        alt="${title}" loading="lazy" data-id="${id}"
       onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'"
        
   "/>
         <h2 class="card-item__tittle"  data-id="${id}">${title}</h2>
          <p class="card-item__desc"> ${movieGenresList} | ${realeaseYear} </p>
      </li>
      </ul>`;
    })
    .join('');

  cards.insertAdjacentHTML('beforeend', markup);
}



export function renderOneFilm(...movie) {
  const markupOneFilm = movie.map(movie => {
    const {
      id,
      title,
      poster_path,
      genres,
      overview,
      backdrop_path,
      budget,
      homepage,
      vote_average,
      vote_count,
      original_title,
      popularity,
      release_date,
    } = movie;
     return `<div class="backdrop">
<div class="modal-window__film">
  <div class="modal-window__image">
    <img src="${renderPoster}${poster_path}" 
  onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'" alt="${title}" loading="lazy" data-id="${id}" >
  </div>
  <div class="modal-window__content">
  <h2 class="modal-window__film--title" data-id="${id}">${title}</h2>
  <div class="modal-window__info">
    <ul class="modal-window__info--review">
      <li class="modal-window__review">
        <p class="modal-window__review--text">Vote / Votes</p>
      </li>
      <li class="modal-window__review">
        <p class="modal-window__review--text">Popularity</p>
      </li>
      <li class="modal-window__review">
        <p class="modal-window__review--text">Original Title</p>
      </li>
      <li class="modal-window__review">
        <p class="modal-window__review--text">Genre</p>
      </li>
    </ul>
    <ul class="modal-window__info--data">
      <li class="modal-window__data">
        <p class="modal-window__data--vote">${vote_average}</p>
        <span class="modal-window__info--span">/</span>
        <p class="modal-window__data--votes">${vote_count}</p>
      </li>
      <li class="modal-window__data">
        <p class="modal-window__data--popul">${popularity
        .toString()
        .slice(0, -4)}</p>
      </li>
      <li class="modal-window__data">
        <h3 class="modal-window__data--title">${original_title}</h3>
      </li>
      <li class="modal-window__data">
        <p class="modal-window__data--genre">${genres.map(gen => gen.name)}</p>
      </li>
    </ul>
  </div>
  <h3 class="modal-window__about-film">ABOUT</h3>
  <p class="modal-window__film--overview">${overview}</p>
  <div class="modal-window__buttons">
  <button class="modal-window__btn--watched" type="button">ADD TO WATCHED</button>
  <button class="modal-window__btn--queue" type="button">ADD TO QUEUE</button>
  </div>
  </div>
  <button class="modal-window__btn--close" type="button">
    <svg class="modal-window__close-icon" width="20" height="20">
      <use href="./images/sprite.svg#close-button"></use>
    </svg></button>
</div>
</div>`;
  }).join('');

  cards.insertAdjacentHTML('beforebegin', markupOneFilm);
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
  }
  return movieGenres;
}


