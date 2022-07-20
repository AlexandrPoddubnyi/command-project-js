import { LsWatched } from './localstorage';
import { fetchByID } from './api-fetch';
import { cards, renderOneFilm } from './render-trends';
const addBtn = document.querySelector('.addButton');
let movieId;
let movieData;
cards.addEventListener('click', oneCardRender)


function oneCardRender(event) {
  if (
    !event.target.classList.contains('card-item__img') &&
    !event.target.classList.contains('card-item__tittle')
  ) {
    return;
  }
  
  event.preventDefault();
  movieId = event.target.dataset.id;
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
};



//  fetchByID(movieId).then(data => {
//     renderOneFilm(data);
//     // console.log('byID', data);
//  });
  // addBtn.addEventListener('click', saveAddInStorage);




// function saveAddInStorage() {
//   fetchByID(movieId).then(data => {
//     movieData = JSON.stringify(data)
//     localStorage.setItem(Data, movieData.results);
//   })
// }