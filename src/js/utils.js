import { genres } from './genres.json';
import { renderMainPageEN, renderMainPageUA } from './api-fetch';
import { cards } from './render-trends';
const homeBtn = document.querySelector('.header__link ');
const libaryBtn = document.querySelector('.header__link-libary');
const logoText = document.querySelector('.header__logo-text');
const inputPlaceholder = document.getElementById('.ControlID-1');
export const body = document.querySelector('body');
const btnUa = document.querySelector('.locale-to-ua');
const btnEn = document.querySelector('.locale-to-en');
btnEn.addEventListener('click', localeEN);
btnUa.addEventListener('click', localeUA);
function localeUA() {
  body.classList.add('UA');
  cards.innerHTML = ''
  homeBtn.innerHTML = 'Головна'
  libaryBtn.innerHTML = 'Бібліотека'
  logoText.innerHTML = 'Фільмотека'
  renderMainPageUA();
}

function localeEN() {
  body.classList.add('EN');
  cards.innerHTML = '';
  homeBtn.innerHTML = 'Home';
  libaryBtn.innerHTML = 'My Libary';
  logoText.innerHTML = 'Filmoteca';
renderMainPageEN();
}

function getGenres(genresId) {
  let movieGenres = genres.reduce((acc, { id, name }) => {
    if (genresId.includes(id)) {
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

function textSlicer(text, limit) {
  text = text.trim();
  if (text.length <= limit) return text;
  text = text.slice(0, limit);
  return text + '...';
}
// 'https://dummyimage.com/500x750/d1cad1/1c1c1c.jpg&text=Poster+not+found+:('";
//   lastSpace = text.lastIndexOf(' ');
//   if (lastSpace > 0) {
//     text = text.substr(0, lastSpace);
//   }
export { getGenres, textSlicer };
