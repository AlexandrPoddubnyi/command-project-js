import { genres } from './genres.json';
import { cards } from './render-trends';


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
