// | <span class="card-item__rating">${vote_average.toFixed(1)}</span>
import { renderPoster } from './api-keys';
import { getGenres,textSlicer } from './utils';
export const cards = document.querySelector('.card-list');

export function renderTrendCollection(movie) {
  const markup = movie.results
    .map(movie => {
      const {
        id,
        title,
        poster_path,
        genre_ids,
        vote_average,
        release_date,
      } = movie;
      let realeaseYear = '';
      let imgUrl = renderPoster + poster_path;
      if (typeof release_date !== 'undefined') {
        realeaseYear = release_date.slice(0, 4);
      };
const slicedTitle = textSlicer(title, 30);
      const movieGenresList = getGenres(genre_ids).join(', ');
      if (poster_path === null) {
      imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
      };
      return `
      <li class="card-item" tabindex="0">
       <img  class="card-item__img" src="${imgUrl}"
        alt="${title}" loading="lazy" data-id="${id}"
       
        
   "/><div class="movie-meta">
         <h2 class="card-item__title"  data-id="${id}">${slicedTitle}</h2>
          <p class="card-item__desc"> ${movieGenresList} | ${realeaseYear} </p>
      </div></li>
      `;
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
    let imgUrl = renderPoster + poster_path;
    if (poster_path === null) {
      imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
      };
     return `<div class="backdrop">
<div class="modal-window__film">
  <div class="modal-window__image">
    <img src="${imgUrl}" 
   alt="${title}" loading="lazy" data-id="${id}" >

  </div>
  <div class="modal-window__content">
  <h2 class="modal-window__film--title" data-id="${id}">${title}</h2>
  <div class="modal-window__info">
    <ul class="modal-window__info--list">
      <li class="modal-window__info--content">
        <p class="modal-window__review--text">Vote / Votes</p>
        <p class="modal-window__info--vote-votes"><span class="modal-window__data--vote">${vote_average.toFixed(1)}</span> / <span class="modal-window__data--votes">${vote_count}</span></p>
      </li>
      <li class="modal-window__info--content">
        <p class="modal-window__review--text">Popularity</p>
        <p class="modal-window__data--popul">${popularity
        .toString()
        .slice(0, -4)}</p>
      </li>
      <li class="modal-window__info--content">
        <p class="modal-window__review--text">Original Title</p>
        <p class="modal-window__data--title">${original_title}</p>
      </li>
      <li class="modal-window__info--content">
        <p class="modal-window__review--text">Genre</p>
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