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
     return `<ul class="card-list--byId">
      <li class="card-item--byId">
       <img  class="card-item__img--byId" src="${renderPoster}${poster_path}" 
  onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'" alt="${title}" loading="lazy" data-id="${id} "/>
         <h2 class="card-item__tittle--byId"  data-id="${id}">${title}</h2>
         <div class="card-info__wrapper>
         <p class="card-info__text>Vote / Votes <span class="card-info__avarge">${vote_average} / </span><span class="card-info__count">${vote_count}</span></p>
           <p class="card-info__text">Popularity <span class="pop-text">${popularity
             .toString()
             .slice(0, -4)}</p>
             <p class="card-info__text>Original Title <span class="orig-title">${original_title}</span></p>
               <p class="card-info__text">Genres: <span class="genres-details">${genres.map(gen => gen.name)}</span></p>
          <p class="card-info__desc">About
          <span class="about-text">${overview}</span></p>
      </li>
      <div class="buttonBox">
      <button type="button" class="addButton">ADD TO WATCH</button>
      <button type="button" class="queueButton">ADD TO QUEUE</button></div>
      </ul>
      `;
    })
    .join('');

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


