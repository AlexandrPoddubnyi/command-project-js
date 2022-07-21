import {LsWatched} from './localstorage'
import { fetchByID, fetchByIDUa } from './api-fetch';
import { cards, renderOneFilm } from './render-trends';
import { body } from './utils';
const addBtn = document.querySelector('.addButton');
let movieId;
let movieData;
cards.addEventListener('click', oneCardRender)


function oneCardRender(event) {
  if (
    !event.target.classList.contains('card-item__img') &&
    !event.target.classList.contains('card-item__title')
  ) {
    return;
  }
  
  event.preventDefault();
  movieId = event.target.dataset.id;
  if (body.classList.contains('UA')) { 
  makeModalUA()
  } else {
    makeModalEn();
}
  // fetchByIDUa(movieId).then(data => {
  //   renderOneFilm(data);
  //   const watchedBtn = document.querySelector('.modal-window__btn--watched');
  //   // + оновити класи для watchedBtn
  //   watchedBtn.innerHTML = LsWatched.isIncluded(Number(movieId))
  //     ? 'REMOVE FROM WATCHED'
  //     : 'ADD TO WATCHED';
  //   // + оновити класи для watchedBtn
  //   watchedBtn.addEventListener('click', () => {
  //     if (!LsWatched.isIncluded(Number(movieId))) {
  //       LsWatched.addItem(data);
  //       watchedBtn.innerHTML = 'REMOVE FROM WATCHED';
  //       // + оновити класи для watchedBtn
  //     } else {
  //       LsWatched.deleteItem(Number(movieId));
  //       watchedBtn.innerHTML = 'ADD TO WATCHED';
  //       // + оновити класи для watchedBtn
  //     }
  //   });
  // });

};

function makeModalUA() {
  fetchByIDUa(movieId).then(data => {
    renderOneFilm(data);
    const watchedBtn = document.querySelector('.modal-window__btn--watched');
    // + оновити класи для watchedBtn
    watchedBtn.innerHTML = LsWatched.isIncluded(Number(movieId))
      ? 'REMOVE FROM WATCHED'
      : 'ADD TO WATCHED';
    // + оновити класи для watchedBtn
    watchedBtn.addEventListener('click', () => {
      if (!LsWatched.isIncluded(Number(movieId))) {
        LsWatched.addItem(data);
        watchedBtn.innerHTML = 'REMOVE FROM WATCHED';
        // + оновити класи для watchedBtn
      } else {
        LsWatched.deleteItem(Number(movieId));
        watchedBtn.innerHTML = 'ADD TO WATCHED';
        // + оновити класи для watchedBtn
      }
    });
  });
}

function makeModalEn() {
  fetchByID(movieId).then(data => {
    renderOneFilm(data);
    const watchedBtn = document.querySelector('.modal-window__btn--watched');
    // + оновити класи для watchedBtn
    watchedBtn.innerHTML = LsWatched.isIncluded(Number(movieId))
      ? 'REMOVE FROM WATCHED'
      : 'ADD TO WATCHED';
    // + оновити класи для watchedBtn
    watchedBtn.addEventListener('click', () => {
      if (!LsWatched.isIncluded(Number(movieId))) {
        LsWatched.addItem(data);
        watchedBtn.innerHTML = 'REMOVE FROM WATCHED';
        // + оновити класи для watchedBtn
      } else {
        LsWatched.deleteItem(Number(movieId));
        watchedBtn.innerHTML = 'ADD TO WATCHED';
        // + оновити класи для watchedBtn
      }
    });
  });
}

