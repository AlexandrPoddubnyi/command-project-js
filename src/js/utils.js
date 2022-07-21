import { genres } from './genres.json';


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
  lastSpace = text.lastIndexOf(' ');
  if (lastSpace > 0) {
    text = text.substr(0, lastSpace);
  }
  return text + '...';
}

export { getGenres, textSlicer };


