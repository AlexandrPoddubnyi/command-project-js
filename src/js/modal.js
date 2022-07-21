import { fetchByID } from './api-fetch';
import { cards, renderOneFilm } from './render-trends';
import { localToQueue, localToWatch } from './localStorage';

let movieId;

cards.addEventListener('click', oneCardRender)

function changeLsButtonsText(btn, text, bool) {
    btn.innerHTML = bool
      ? `REMOVE FROM ${text}`
      : `ADD TO ${text}`;  
}

function watchListener(watchedBtn,data,movieId) {
    changeLsButtonsText(watchedBtn, "WATCH", localToWatch.check(Number(movieId)))
    watchedBtn.addEventListener('click', () => {
      localToWatch.set(data);
      changeLsButtonsText(watchedBtn, "WATCH", localToWatch.check(Number(movieId)))
    }); 
}

function queueListener(queueBtn,data,movieId) {
    changeLsButtonsText(queueBtn, "QUEUE", localToQueue.check(Number(movieId)))
    queueBtn.addEventListener('click', () => {
      localToQueue.set(data)
      changeLsButtonsText(queueBtn, "QUEUE", localToQueue.check(Number(movieId)))
    });  
}

function fetchData(movieId) {
  fetchByID(movieId).then(data => {
    renderOneFilm(data);
    const watchedBtn = document.querySelector('[add-to-watch]');
    const queueBtn = document.querySelector('[add-to-queue]')

    watchListener(watchedBtn,data,movieId)
    queueListener(queueBtn,data,movieId)
  });  
}

function checkClassContains(event) {
  if (
    !event.target.classList.contains('card-item__img') &&
    !event.target.classList.contains('card-item__title')
  ) {
    return;
  }  
}

function oneCardRender(event) {
  checkClassContains(event) 
  event.preventDefault();
  movieId = event.target.dataset.id;
  fetchData(movieId)
};